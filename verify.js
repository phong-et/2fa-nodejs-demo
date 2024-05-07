const speakeasy = require('speakeasy')

var verify = speakeasy.totp.verify({
    secret: '[kQ3AorO>$$Za3A!3BMeLCWAVd7>KrvX',
    encoding: 'ascii',
    token:'344217'
})
console.log(verify);