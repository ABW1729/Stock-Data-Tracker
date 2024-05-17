
from kafka import KafkaProducer
from kafka import KafkaConsumer
from time import sleep
from json import dumps,loads
import json
import websocket




def on_message(ws, message):
    # Initialize Kafka producer

    producer = KafkaProducer(bootstrap_servers=['3.94.214.107:9092'], #change ip here
                         value_serializer=lambda x:
                         dumps(x).encode('utf-8'))
    # Send message to Kafka topic
    producer.send('demo_testing2', message)
    producer.flush() 
    

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    ws.send('{"type":"subscribe","symbol":"AAPL"}')
    ws.send('{"type":"subscribe","symbol":"BINANCE:BTCUSDT"}')
    ws.send('{"type":"subscribe","symbol":"TSLA"}')
    ws.send('{"type":"subscribe","symbol":"MSFT"}')
    ws.send('{"type":"subscribe","symbol":"AMZN"}')
    ws.send('{"type":"subscribe","symbol":"GOOGL"}')
    ws.send('{"type":"subscribe","symbol":"NVDA"}')
    ws.send('{"type":"subscribe","symbol":"NFLX"}')
    ws.send('{"type":"subscribe","symbol":"PYPL"}')
    
    
    
    


if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("wss://ws.finnhub.io?token=coapdihr01qro9kpff70coapdihr01qro9kpff7g",
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    ws.run_forever()


