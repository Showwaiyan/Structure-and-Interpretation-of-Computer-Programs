function findExpt(n,e) {
    return e===0
        ? 1 : is_even(e) ?
            square(findExpt(n,e/2)) : n * findExpt(n,e-1);
}

function is_even(n) {
    return n % 2 === 0;
}

function square(n) {
    return n * n;
}

console.log(findExpt(2,7));
