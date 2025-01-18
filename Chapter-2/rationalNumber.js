function pairs(x,y) {
    const g = gcd(x,y)
    return { head: x/g, tail: y/g};
}

function makeRat(n,d) {
    return pairs(n,d);
}

function gcd(x,y) {

    if (x < y) {
        [x,y] = [y,x];
    }

    if (y === 0) return x;
    return gcd(y, x%y);
}

function numer(x) {
    const g = gcd(x.head, x.tail);
    return x.head / g;
}

function denom(x) {
    const g = gcd(x.head, x.tail);
    return x.tail/g;
}

function printRat(x) {
    console.log(numer(x)+"/"+denom(x));
}

function ratAdd(x,y) {
    return makeRat(
        numer(x)*denom(y) + numer(y)*denom(x),
        denom(x)*denom(y)
    )
}

function ratSub(x,y) {
    return makeRat(
        numer(x)*denom(y) - numer(y)*denom(x),
        denom(x)*denom(y)
    )
}

function mulRat(x,y) {
    return makeRat(
        numer(x) * numer(y),
        denom(x) * denom(y)
    )
}

function divRat(x,y) {
    return makeRat(
        numer(x) * denom(y),
        denom(x) * numer(y)
    )
}

function isEqualRat(x,y) {
    return (numer(x)*denom(y)) === (denom(x) * numer(y));
}

const oneHalf = makeRat(1,2);
const oneThird = makeRat(1,3);
printRat(ratAdd(oneThird,oneThird));
