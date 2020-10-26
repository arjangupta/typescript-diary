var start = function (callback) {
    setTimeout(function (_) {
        callback('Hello');
        setTimeout(function (_) {
            callback('My name is');
            setTimeout(function (_) {
                callback('Arjan Gupta');
            }, 100);
        }, 1000);
    }, 1000);
};
// Pass start a function that takes a string arg 
start(function (message) { console.log(message); });
