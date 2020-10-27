// Description: Use async-await and setTimeout() to delay displaying messages

import * as CommonDeclarations from './common_declarations'

// This function returns a promise that is resolved in the given amount of time
function wait (delay_in_milliseconds: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, delay_in_milliseconds)); // reject is unused
}

// Takes a callback function and runs it with different arguments and a fixed delay
async function startAsync (callback: CommonDeclarations.StringCallbackFunction) {
    await wait(CommonDeclarations.MESSAGE_DELAY);
}