// "start" is a function that takes another function
// as its argument (callback). Then, the callback function
// is run in the body.
// Pre-condition: Callback must be a single string-param function
type StringCallbackFunction = (s: string) => void;
const start = (callback: StringCallbackFunction) => {
    setTimeout(_ => {
        callback('Hello');
        setTimeout(_ => {
            callback('My name is');
            setTimeout(_ => {
                callback('Arjan Gupta');
            }, 100);
        }, 1000);
    }, 1000);
}

// Pass start a function that takes a string arg 
start((message: string) => { console.log( message ); });