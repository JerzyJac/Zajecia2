function isOdd(x){
    return (x % 2 != 0);
    /*
    if(x % 2 == 0) {
        return true;
    } else {
        return false;
    }
    */
}

const isEven = x => (x % 2) == 0;

console.log(isOdd(3));
console.log(isEven(3));