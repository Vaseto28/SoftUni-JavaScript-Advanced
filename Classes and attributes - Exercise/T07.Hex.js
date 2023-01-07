class Hex {
    #num;
    
    constructor(num){
      this.#num = num;
    }
    
    convert(num){
      if(typeof(num) === 'object'){
        return num.valueOf();
      }
      else
      {
        return num;
      }
    }
    
    valueOf(){
      return this.#num;
    }
    
    toString(){
      return `0x${Math.abs(this.#num).toString(16).toUpperCase()}`;
    }
    
    plus(num){
      return new Hex(this.#num + this.convert(num));
    }
    
    minus(num){
      return new Hex(this.#num - this.convert(num));
    }
    
    parse(num) {
      num = `0x${num}`; 
      return Number(num).toString(10);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));