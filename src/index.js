var MESSAGE_DELAY = 1000;
var start = function (callback) {
    setTimeout(function (_) {
        callback('Hello');
        setTimeout(function (_) {
            callback('My name is');
            setTimeout(function (_) {
                callback('Arjan Gupta');
            }, MESSAGE_DELAY);
        }, MESSAGE_DELAY);
    }, MESSAGE_DELAY);
};
// Pass start a function that takes a string arg
start(function (message) { console.log(message); });
