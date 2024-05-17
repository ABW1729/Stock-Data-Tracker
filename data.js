var axios = require('axios');
var data = JSON.stringify({
    "mode": "FULL",
    "exchangeTokens": {
        "NSE": ["3045"]
    }
});

var config = {
  method: 'post',
  url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/market/v1/quote/',
  headers: { 
    'X-PrivateKey' : 'GAjC9gI1', 
    'Accept': '*/*', 
   
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkE5MzQ1OTEiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwidG9rZW4iOiJleUpoYkdjaU9pSklVelV4TWlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUpCT1RNME5Ua3hJaXdpWlhod0lqb3hOekV5TnpneU1qYzFMQ0pwWVhRaU9qRTNNVEkyT0RNek9URXNJbXAwYVNJNkltTmhOREZpWkRCakxUTmhPR1l0TkdSbU5TMDVOek5oTFdGaFlUSTBOVGN6WVRnMk55SXNJbTl0Ym1WdFlXNWhaMlZ5YVdRaU9qWXNJbk52ZFhKalpXbGtJam9pTXlJc0luVnpaWEpmZEhsd1pTSTZJbU5zYVdWdWRDSXNJblJ2YTJWdVgzUjVjR1VpT2lKMGNtRmtaVjloWTJObGMzTmZkRzlyWlc0aUxDSm5iVjlwWkNJNk5pd2ljMjkxY21ObElqb2lNeUlzSW1SbGRtbGpaVjlwWkNJNkltWTVNREU0TWpneExUTTVPRGN0TXpWa01TMDVaRE0yTFRZellUWTRZMlZrTnpSbU1DSXNJbUZqZENJNmUzMTkuLU5mOEluSnEwQ0dIaTI0aWtCdTg1amRGNXNNRk9MNmZia3ROYXdEdDRyTGVPa1N5T1lFTDhBODVuTUtoaGRyckxqUjdMekFlWWFXdV8yVm14OTY1RnciLCJBUEktS0VZIjoiR0FqQzlnSTEiLCJpYXQiOjE3MTI2ODM0NTEsImV4cCI6MTcxMjc4MjI3NX0.9Pnu0-Uhfl9RatKeQbSoTik8lC0GITiDKABF2i7OrNCH4h13usPSZCuKkI1Q0-E92W_aHJOROYmpeywfNC-MZw', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
