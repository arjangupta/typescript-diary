// Description: Use callbacks and setTimeout() to delay displaying messages
var MESSAGE_DELAY = 1000;
function start(callback) {
    setTimeout(function () {
        callback('Hello');
        setTimeout(function () {
            callback('My name is');
            setTimeout(function () {
                callback('Arjan Gupta');
            }, MESSAGE_DELAY);
        }, MESSAGE_DELAY);
    }, MESSAGE_DELAY);
}
// Pass start a function that takes a string arg
start(function (message) { console.log(message); });
start = "ks";
