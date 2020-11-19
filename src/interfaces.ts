// Description: Practicing the usage of interfaces

function interfacesMain() {
    interface Interface1 {
        first: string;
        second?: number;
    }

    const thing1 = "hello";
    const thing2 = undefined;

    const object1 : Interface1 = {
        first: thing1
    }

    console.log({object1})
}

interfacesMain();