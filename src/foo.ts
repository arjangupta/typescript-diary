type Maybe<T> = T | null;
async function foo (x: string): Promise<Maybe<string>> {
    if ( "Arjan" === x ) {
        return null;
    }
    return "foo";
}

console.log(foo("bar"));