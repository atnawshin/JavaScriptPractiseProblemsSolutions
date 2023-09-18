function foo() {
    const foo = 'foo';
    console.log(foo);
    bar();
}
foo();

function bar() {
    const bar = 'bar';
    console.log(bar);
}
bar();