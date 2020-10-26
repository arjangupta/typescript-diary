// "start" is a function that takes another function
// as its argument (callback). Then, the callback function
// is run in the body.
// Pre-condition: Callback must be a single string-param function
type StringCallbackFunction = (s: string) => void;
const MESSAGE_DELAY: number = 1000; 
const start = (callback: StringCallbackFunction) => {
    setTimeout(_ => {
        callback('Hello');
        setTimeout(_ => {
            callback('My name is');
            setTimeout(_ => {
                callback('Arjan Gupta');
            }, MESSAGE_DELAY);
        }, MESSAGE_DELAY);
    }, MESSAGE_DELAY);
}

// Pass start a function that takes a string arg
start((message: string) => { console.log( message ); });