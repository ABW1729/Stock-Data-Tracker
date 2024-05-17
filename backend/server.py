


import asyncio
import websockets
from json import dumps,loads
from kafka import KafkaConsumer

# Kafka consumer configuration
bootstrap_servers = '3.94.214.107:9092'
topic_name = 'demo_testing2'

async def kafka_consumer_to_websocket(websocket, path):
    consumer = KafkaConsumer(topic_name, bootstrap_servers=[bootstrap_servers],
                             value_deserializer=lambda x: loads(x.decode('utf-8')))

    for message in consumer:
        data = message.value
        await websocket.send(data)

start_server = websockets.serve(kafka_consumer_to_websocket, "0.0.0.0", 5000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

