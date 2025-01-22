function pair(x,y) {
    return {
        head: x,
        tail: y
    }
}

function head(p) {
    return p.head;
}

function tail(p) {
   return p.tail;
}

function isNull(items) {
    return items === null;
}

function isPair(x) {
    return hasHead(x) && hasTail(x);
}

function hasHead(x) {
    return Object.hasOwn(x,'head');
}

function hasTail(x) {
    return Object.hasOwn(x,'tail')
}

function countLeaves(x) {
    return isNull(x) ?
            0 : !isPair(x) ?
                1 : countLeaves(head(x)) + countLeaves(tail(x));
}

function map(fun,x) {
    return isNull(x) ?
        null : !isPair(x) ?
            fun(x) : pair(map(fun,head(x)),map(fun,tail(x)));
}

function isOdd(x) {
   return x % 2 !== 0;
}

function squares(x) {
    return x**2;
}

function sumOddSquares(x) {
    return isNull(x) ?
        null : !isPair(x) ?
            isOdd(x) ? squares(x) : 0
            : sumOddSquares(head(x)) + sumOddSquares(tail(x));
}

const x = pair(pair(1,2),pair(3,4))
console.log(countLeaves(x));
console.log(map(x=>x*2,x));
console.log(sumOddSquares(x))
