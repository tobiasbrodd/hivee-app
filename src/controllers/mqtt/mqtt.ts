import MQTT from 'async-mqtt';

var options = {
    host: "localhost",
    port: 8083,
    protocol: "wss",
    clientId: "hivee-app",
};

const topic = "topic/hivee";
const zigbee = "zigbee2mqtt/bridge/state";
const client = MQTT.connect(options);

client.on("connect", () => {
    console.log("Connected");
});

client.on("error", (err) => {
    console.log("Error: " + err);
});

client.on("reconnect", () => {
    console.log("Reconnecting");
});

client.subscribe(topic).catch(error => {
    if (error) {
        console.log("Subscribe to topics error", error);
    }
});

client.subscribe(zigbee).catch(error => {
    if (error) {
        console.log("Subscribe to topics error", error);
    }
});

client.on("message", (topic, message) => {
    const payload = { topic, message: message.toString() };
    console.log("Topic: " + payload.topic);
    console.log("Message: " + payload.message);
});

export default client;