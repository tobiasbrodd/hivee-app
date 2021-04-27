import { createAction } from '@reduxjs/toolkit';
import { MqttClient, connect } from 'mqtt';
import { Middleware, MiddlewareAPI } from 'redux';

const options = {
    host: "localhost",
    port: 8083,
    protocol: "wss",
    clientId: "hivee-app",
};

const topics: { [action: string]: string } = {
    "SET_CLIMATE": "hivee/climate",
};

const actions: { [topic: string]: string } = {
    "hivee/climate": "SET_CLIMATE",
};

export const mqttConnect = createAction("MQTT_CONNECT");
export const mqttPublish = createAction<string, string>("MQTT_PUBLISH");

class ReduxMQTT {
    client: MqttClient;

    constructor() {
        this.client = connect(options);
    }

    connect(store: MiddlewareAPI) {
        this.client.on("connect", () => {
            console.log("MQTT - Connected");

            Object.keys(topics).forEach(action => {
                const topic = topics[action];
                this.client.subscribe(topic);
            });
        });

        this.client.on("error", (err) => {
            console.log("MQTT - Error: " + err);
        });

        this.client.on("reconnect", () => {
            console.log("MQTT - Reconnecting");
        });

        this.client.on("message", (topic, message) => {
            console.log("Topic: " + topic);
            console.log("MQTT - Message: " + message.toString());

            store.dispatch({
                type: actions[topic],
                payload: message.toString()
            });
        });
    }
}

export default function createMiddleware(): Middleware {
    const reduxMQTT = new ReduxMQTT();

    return store => next => action => {
        switch (action.type) {
            case "MQTT_CONNECT":
                reduxMQTT.connect(store);
                break;
            case "MQTT_PUBLISH":
                const payload = action.payload;
                const topic = payload.topic;
                const message = payload.message;
                reduxMQTT.client.publish(
                    topic,
                    JSON.stringify(message)
                );
                break;
            default:
                return next(action);
        }
    }
}