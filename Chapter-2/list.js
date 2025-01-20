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

// need to implement
// function list(...elements) {

// }

function linkRef(items,n) {
    return n === 0? head(items) : linkRef(tail(items),n-1);
}

function isNull(items) {
    return items === null;
}

function lenght(items) {
    return isNull(items) ? 0 : 1+lenght(tail(items));
}

function append(item1,item2) {
    return isNull(item1) ? item2 : pair(head(item1)
                                        ,append(tail(item1),item2));
}

function lastPair(items) {
    return isNull(tail(items)) ? head(items) : lastPair(tail(items));
}

function reverse(items,value) {
    return isNull(tail(items)) ? pair(head(items),value) : reverse(tail(items),pair(head(items),value))
}

function map(fun, items) {
    return isNull(items) ? null : pair(fun(head(items)),map(fun,tail(items)));
}


// Testing
const squares = pair(1,
                    pair(4,
                        pair(9,
                            pair(16,
                                pair(25,null)
                            )
                        )
                    ));

console.log(linkRef(squares,3));

const odd =pair(1,
                pair(3,
                    pair(5,
                        pair(7,null)
                    )
                )
            )

console.log(lenght(odd));

console.log(append(squares,odd));

console.log(lastPair(squares));

console.log(odd);
console.log(reverse(odd,null));

console.log(map(x=>x*2,odd));
