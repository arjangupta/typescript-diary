type Maybe<T> = T | null;
async function foo (x: string): Promise<Maybe<string>> {
    if ( "Arjan" === x ) {
        return null;
    }
    return "foo";
}

// Entry-point for program, which is the common practice
async function mainFoo() {
    // Wait for the promise to be resolved
    const result = await foo("Arjan");
    console.log(result);

    // Variables should be named with camel-case.
    // Classes start with upper case letter (upper camel case)
    // Types are also upper camel case
    // Function names are lower camel case
    // (exception: in React, components are upper camel case)
    const anotherResult = await foo("blah");
    console.log(anotherResult);
}

mainFoo()