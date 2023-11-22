function test<T>(tests:T):T{
    return tests;
}

const ttt = test<string>("test");
 console.log(ttt)

const mmm = test<number>(123);
console.log(mmm)