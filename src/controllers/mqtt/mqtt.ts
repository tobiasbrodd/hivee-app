import { createAction } from '@reduxjs/toolkit';
import { MqttClient, connect } from 'mqtt';
import { Middleware, MiddlewareAPI } from 'redux';

const topics: { [action: string]: string } = {
    "SET_TEMPERATURE": "hivee/temperature",
    "SET_HUMIDITY": "hivee/humidity",
    "SET_PRESSURE": "hivee/pressure",
};

const actions: { [topic: string]: string } = {
    "hivee/temperature": "SET_TEMPERATURE",
    "hivee/humidity": "SET_HUMIDITY",
    "hivee/pressure": "SET_PRESSURE",
};

export const mqttConnect = createAction("MQTT_CONNECT");
export const mqttPublish = createAction<string, string>("MQTT_PUBLISH");

class ReduxMQTT {
    client: MqttClient;

    constructor(host: string, port: number) {
        const url = `wss://${host}:${port}`;
        
        this.client = connect(url, {clientId: "hivee-app"});
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

export default function createMiddleware(host: string, port: number): Middleware {
    const reduxMQTT = new ReduxMQTT(host, port);

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