// Iterators and Generators
// Arrays, Strings, Maps, NodeLists - built-in iterators
// (Object) => Iterators => Generator

let log = console.log;
let c = ['finn', 'poe', 'rey', 'kylo', 'luke'];

function* genny(){
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
    return;
}

let iter = genny();
log(iter);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

