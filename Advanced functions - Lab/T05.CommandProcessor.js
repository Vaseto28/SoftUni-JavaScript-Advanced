function solution(){
    initialStr = '';
    return {
        append: (str) => initialStr += str,
        removeStart: (start) => initialStr = initialStr.substring(start),
        removeEnd: (end) => initialStr = initialStr.substring(0, initialStr.length - end),
        print: () => console.log(initialStr)
    };
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();