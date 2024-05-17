# Stock Data Tracker

## Overview

The Stock Data Tracker is a real-time application that tracks stock prices using the Finnhub WebSocket API. It leverages a Kafka server hosted on AWS to route data, and the backend and frontend communicate through WebSockets. The application is fully dockerized for ease of deployment.

## Features

- **Real-Time Stock Tracking**: Fetches and displays real-time stock prices.
- **Finnhub WebSocket API**: Utilizes the Finnhub API for real-time data.
- **Kafka Integration**: Routes stock data through a Kafka server on AWS.
- **WebSocket Communication**: Ensures real-time updates between backend and frontend.
- **Dockerized**: Simple deployment with Docker and Docker Compose.

## Prerequisites

- Docker and Docker Compose installed on your machine.
- An API key from Finnhub.
- AWS account configured with a Kafka server.

## Getting Started

### 1. Clone the Repository
git clone https://github.com/yourusername/stock-data-tracker.git
cd stock-data-tracker

### 2. Create .env file and add following
FINNHUB_API_KEY=your_finnhub_api_key
KAFKA_BROKER_URL=your_kafka_broker_url
KAFKA_TOPIC=your_kafka_topic

### 3. Run the App
docker-compose up -d

## The app will be available at http://localhost:8080/ws2.html
