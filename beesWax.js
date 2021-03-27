var str = 'He{l}}{{{{lo W}}or}ld!';
var openBrackets = [];
var flag = true;

while (flag === true){
    // iterate through string
    for (let i = 0; i<str.length; i++){
        if (str[i] === '{'){
            //adds open bracket to the array
            openBrackets.push('open');
        }else if (str[i] === '}' ){
            for (let j = openBrackets.length-1;j>=0; j--){
                // finds open bracket to match with close bracket
                if (openBrackets[j] === 'open') {
                    openBrackets[j] = 'closed';
                    break;
                // check for closing bracket with no match 
                }else if (j === 0){
                    // this is the same as the current bracket index
                    console.log(openBrackets.length)
                    // kills the while loop
                    flag = false;
                }
                
            }
        }
    }
    console.log('done')
    flag = false;
}


// for (let i = 0; i<str.length; i++){
//     if (str[i] === '{'){
//         openBrackets.push('open');
//     }else if (str[i] === '}' ){
//         for (let j = openBrackets.length-1;j>=0; j--){
//             if (openBrackets[j] === 'open') {
//                 openBrackets[j] = 'closed';
//                 break;
//             }else if (j === 0){
//                 noExtraCloseBrackets = false;
//             }
            
//         }
//     }
// }

console.log(openBrackets)
