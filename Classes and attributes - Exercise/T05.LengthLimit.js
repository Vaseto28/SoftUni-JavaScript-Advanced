class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase = (length) => {
        this.innerLength += length;
    }

    decrease = (length) => {
        this.innerLength -= length;

        if (this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString = () => {
        let currStr = '';

        for(let i = 0; i < this.innerLength; i++){
            if (this.innerString[i] !== undefined){
                currStr += this.innerString[i];
            }
        }

        if (currStr.length < this.innerString.length){
            currStr += '...';
        }

        if (currStr === ''){
            currStr = '...';
        }

        return currStr;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test