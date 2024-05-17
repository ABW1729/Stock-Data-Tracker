var axios = require('axios');
var data = JSON.stringify({
    "clientcode":"A934591",
    "password":"1563",
	"totp":"462846"
});

var config = {
  method: 'post',
  url: 'https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword',

  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-UserType': 'USER',
    'X-SourceID': 'WEB',
    'X-ClientLocalIP': '192.168.2.206', 
    'X-ClientPublicIP': '14.139.125.73', 
    'X-MACAddress': '3c:95:09:ba:64:c9', 
    'X-PrivateKey' : 'GAjC9gI1',
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
