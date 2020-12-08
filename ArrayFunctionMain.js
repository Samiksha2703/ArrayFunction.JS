let ArrayFunctionBussinesLogic = require('./ArrayFunctionBussinesLogic.js');
let readline = require('readline-sync');
let arrayf = new ArrayFunctionBussinesLogic();
let array = new Array (85, 2366, 96, 58888, 36, 74, 96, 144, 45, 74, 5);
let flag = true;
function choice(){
    while (flag == true){
        console.log("Enter \n1   : Filter  \n2   : Reduce  \n3   : IdexOf \n4   : Joint \n5   : Map \n6   : Splice \n7   : Shift \n8   : Sort  \n9   : Unshift \n10  : forEach  \n11  : Slice \n12  : Reverse");
            let input = readline.question("Enter your choice from above : ");
    
    switch (input) {
    case "1":
        arrayf.filterFunction(array);
    break;

    case "2":
        arrayf.reduceFunction(array);
    break;
                
    case "3":
        arrayf.indexOfFunction(array);
    break;

    case "4":
        arrayf.joinFunction(array);
    break;

    case "5":
        arrayf.mapFunction(array);
    break;

    case "6":
        arrayf.spliceFunction(array);
    break;

    case "7":
        arrayf.shiftFunction(array);
    break;

    case "8":
        arrayf.sortFunction(array);
    break;

    case "9":
        arrayf.unshiftFunction(array);
    break;

    case "10":
        arrayf.forEachFunction(array);
    break;
            
    case "11":
        arrayf.sliceFunction(array);
    break;

    case "12":
        arrayf.reverseFunction(array);
    break;

    default:
        flag = false;
    console.log("Exit"); 
}    
}
}
choice();