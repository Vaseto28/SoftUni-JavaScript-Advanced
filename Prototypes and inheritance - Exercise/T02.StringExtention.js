(function solve() {
/*  
    ensureStart(str) – if the current string doesn't start with the str parameter, return a new string in which str parameter appended to the beginning of the current string, otherwise returns the original string
    ensureEnd(str) – if the current string doesn't end with str parameter, return a new string in which str parameter appended to the end of the current string, otherwise returns the original string
    isEmpty() - return true if the string is empty and false otherwise
    truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis (three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n. If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.
    format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods are attached to the String object instead of its prototype. See the examples for more info.
*/


    String.prototype.ensureStart = function(str){
        let indexOfStr = this.indexOf(str);

        if(indexOfStr === 0){
            return this.toString();
        }
        else{
            return (str + this.toString()).toString();
        }
    }

    String.prototype.ensureEnd = function(str){
        if(this.endsWith(str)){
            return this.toString();
        }
        else{
            return this.toString() + str;
        }
    }

    String.prototype.isEmpty = function(){
        if(this.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

    String.prototype.truncate = function(n){
        if(this.length < n){
            return this.toString();
        }
        else{
            let words = this.split(' ');

            while (true){
                words.pop();
    
                let newStr = '';
                for (let word of words){
                    newStr += word;
                }
    
                newStr += '...';
    
                if(newStr.length <= n){
                    return newStr.toString();
                }
                else{
                    if(newStr === '...'){
                        if(n === 2){
                            return '..';
                        }
                        else if(n === 1){
                            return '.';
                        }
                    }
                    else{
                        continue;
                    }
                }
            }
        }
    }

    String.prototype.format = function(str, ...params){

    }
})()