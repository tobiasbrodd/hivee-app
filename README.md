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
docker-compose -f docker-compaose.prod.yml up -d --build
```

### hivee-core

In order for **hivee-app** to receive smart home data you need to start **hivee-core** (follow the instructions [here](https://github.com/tobiasbrodd/hivee-core)).

**hivee-app** listens to MQTT on `localhost:8083` by default. To change this, edit the `src/controllers/mqtt/mqtt.ts` file.
