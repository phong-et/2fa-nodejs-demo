const speakeasy = require('speakeasy');
const QRCode = require('qrcode')
var secret = speakeasy.generateSecret({
    name : 'phillip'
});
console.log(secret)
QRCode.toDataURL(secret.otpauth_url, function (err, data_url) {
    console.log(data_url);
});
