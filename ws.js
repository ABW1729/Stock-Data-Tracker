const WebSocket = require('ws');


const wsUrl = 'wss://smartapisocket.angelone.in/smart-stream'; 
const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkE5MzQ1OTEiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwidG9rZW4iOiJleUpoYkdjaU9pSklVelV4TWlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUpCT1RNME5Ua3hJaXdpWlhod0lqb3hOekV5TnpneU1qYzFMQ0pwWVhRaU9qRTNNVEkyT0RNek9URXNJbXAwYVNJNkltTmhOREZpWkRCakxUTmhPR1l0TkdSbU5TMDVOek5oTFdGaFlUSTBOVGN6WVRnMk55SXNJbTl0Ym1WdFlXNWhaMlZ5YVdRaU9qWXNJbk52ZFhKalpXbGtJam9pTXlJc0luVnpaWEpmZEhsd1pTSTZJbU5zYVdWdWRDSXNJblJ2YTJWdVgzUjVjR1VpT2lKMGNtRmtaVjloWTJObGMzTmZkRzlyWlc0aUxDSm5iVjlwWkNJNk5pd2ljMjkxY21ObElqb2lNeUlzSW1SbGRtbGpaVjlwWkNJNkltWTVNREU0TWpneExUTTVPRGN0TXpWa01TMDVaRE0yTFRZellUWTRZMlZrTnpSbU1DSXNJbUZqZENJNmUzMTkuLU5mOEluSnEwQ0dIaTI0aWtCdTg1amRGNXNNRk9MNmZia3ROYXdEdDRyTGVPa1N5T1lFTDhBODVuTUtoaGRyckxqUjdMekFlWWFXdV8yVm14OTY1RnciLCJBUEktS0VZIjoiR0FqQzlnSTEiLCJpYXQiOjE3MTI2ODM0NTEsImV4cCI6MTcxMjc4MjI3NX0.9Pnu0-Uhfl9RatKeQbSoTik8lC0GITiDKABF2i7OrNCH4h13usPSZCuKkI1Q0-E92W_aHJOROYmpeywfNC-MZw', 
    'x-api-key':'GAjC9gI1',
    'x-client-code':'A934591',
    'x-feed-token':'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkE5MzQ1OTEiLCJpYXQiOjE3MTI2ODM0NTEsImV4cCI6MTcxMjc2OTg1MX0.UYvyMvS6hfrGA-7eiNqGyOQYaJJziGXlzrunwsovUdY8UQfhVAkXAuJEZyOAWOJBFD16tdshSanEM_6FGXP0hA'
};


const ws = new WebSocket(wsUrl, { headers });


ws.on('open', function open() {
    console.log('Connected to WebSocket server');
    

    const requestContract = {
      "correlationID": "abcde12345",
     "action": 1,
     "params": {
          "mode": 1,
          "tokenList": [
               {
                    "exchangeType": 1,
                    "tokens": [
                         "10626",
                         "5290"
                    ]
               },
               {
                    "exchangeType": 5,
                    "tokens": [
                         "234230",
                         "234235",
                         "234219"
                    ]
               }
          ]
     }
        };
   
    ws.send(JSON.stringify(requestContract));
});


ws.on('message', function incoming(data) {
  
    if (data instanceof Buffer) {
    // If the received data is a Buffer
   const hexString = data.toString('hex'); // Convert Buffer to hexadecimal string
    console.log('Received binary data:', hexString);
    // Process the binary data here
  }
  
   
});


ws.on('close', function close() {
    console.log('Disconnected from WebSocket server');
});

