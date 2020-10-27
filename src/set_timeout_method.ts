// Description: Use callbacks and setTimeout() to delay displaying messages

// "start" is a function that takes another function
// as its argument (callback). Then, the callback function
// is run multiple times in the body with different strings.
// Pre-condition: Callback must be a single string-param function
function start (callback: StringCallbackFunction) {
    setTimeout(() => {
        callback('Hello');
        setTimeout(() => {
            callback('My name is');
            setTimeout(() => {
                callback('Arjan Gupta');
            }, MESSAGE_DELAY);
        }, MESSAGE_DELAY);
    }, MESSAGE_DELAY);
}

// Pass start a function that takes a string arg
start((message: string) => { console.log( message ); });