// Description: Practicing the usage of interfaces

function interfacesMain() {
    interface Interface1 {
        first: string;
        second?: number;
    };

    const thing1 = "hello";
    const thing2 = undefined;

    const object1 : Interface1 = {
        first: thing1
    };

    console.log({object1}); // outputs: { object1: { first: 'hello' } }

    object1.second = thing2;

    console.log({object1}); // outputs: { object1: { first: 'hello', second: undefined } }

    const object2 : Interface1 = {
        first: thing1,
        second: thing2
    };

    console.log({object2}); // outputs: { object2: { first: 'hello', second: undefined } }
}

interfacesMain();