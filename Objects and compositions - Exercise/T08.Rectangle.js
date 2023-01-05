function rectangle(a, b, color){
    let rect = {
        width: a,
        height: b,
        color: color,
        calcArea: function(){
            return this.width * this.height;
        }
    }

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());