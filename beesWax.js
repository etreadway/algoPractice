function beesWax(str){
    let arr = [];
    // puts each char in an array
    for (let i = 0; i < str.length; i++){
        arr.push(str[i]);
    }
    // changes all balanced brackets to 'balanced'
    for (let i = 0; i < arr.length; i++){
        // check for open brackets
        if (arr[i] == '}'){
            for (let j = i-1; j >= 0; j--){
                if (arr[j] == '{'){
                    arr[j] = 'balanced'
                    arr[i] = 'balanced'
                    break
                }
            }
        }
    }
    // checks for any remaining brackets
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == '{' || arr[i] == '}'){
            console.log(i)
            break;
        }else if (i == arr.length-1){
            console.log(-1)
        }
    }
}

beesWax('hello world')
beesWax('{}')
beesWax('{{{foo();}}}{}')
beesWax('{{}{}}')
beesWax('{{{}')
beesWax('}')
beesWax('{}{foo{}')

