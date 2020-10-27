// Description: Use async-await and setTimeout() to delay displaying messages

// This function returns a promise that is resolved in the
// given amount of time
function wait (delay_in_milliseconds: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, delay_in_milliseconds));
}

// Callback function type (appended with B in order to not conflict with the type from the other file)
type StringCallbackFunctionB = (s: string) => void;

// Constant time duration
const MESSAGE_DELAY_MS: number = 1000;

// Takes a callback function and runs it with different
// arguments and a fixed delay
async function startAsync (callback : StringCallbackFunctionB) {
    await wait(MESSAGE_DELAY_MS);
}