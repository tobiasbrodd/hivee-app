# hivee-app

Dashboard for Hivee

## Guide

To start **hivee-app**, you can either run it directly using **npm**, run it in **Docker** or use **Docker Compose**.

### npm

```
npm start
```

### Docker

Local development:
```
docker build -t hivee-app:dev .
docker run -it --rm -p <3000>:3000 hivee-app:dev
```

Production deployment:
```
docker build -f Dockerfile.prod -t hivee-app:prod .
docker run -it --rm -p <1337>:<80 or 443> hivee-app:prod
```

### Docker Compose

Local development:
```
docker-compose up -d --build
```

Production deployment:
```
docker-compose -f docker-compose.prod.yml up -d --build
```

### hivee-core

In order for **hivee-app** to receive smart home data you need to start **hivee-core** (follow the instructions [here](https://github.com/tobiasbrodd/hivee-core)).

### Config

**hivee-app** needs to connect to an MQTT broker to display sensor data and have an OpenWeather API key to show weather data. You will therefore need to reate a config file under `src` with the following content:
```
{
    "mqtt": {
        "host": "localhost",
        "port": 8083
    },
    "openWeather": {
        "apiKey": <key>
    }
}
```
