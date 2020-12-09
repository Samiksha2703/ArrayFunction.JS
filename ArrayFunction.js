let readline = require('readline-sync');
let array = new Array ();
let flag = true;

function addIntoArray(){
    let size = readline.question("Enter the size of arry ");

//function to crate array
    while (size > 0 ){
   let element = readline.question("Ente the element in array : ");
   array.push(element);
   size -= 1;
}
return array;
}

//function to take user input to perform different function on array
function choice(newArray){
    while (flag == true){
        console.log("\n1   : Filter  \n2   : Reduce  \n3   : IdexOf \n4   : Joint \n5   : Map \n6   : Splice \n7   : Shift \n8   : Sort  \n9   : Unshift \n10  : forEach  \n11  : Slice \n12  : Reverse");
            let input = readline.question("\nEnter your choice from above : ");
    
    switch (input) {

    //filter method to filter element as per condition given    
    case "1":
        console.log("\nYou choose Filter");
                function checkFilter(element) {
                    return element > 25;
                }
                console.log(newArray.filter(checkFilter));
    break;

    //Reduce method to reduce array at one value
    case "2":
        console.log("\nYou choose Reduce");
                function findTotal(total, num) {
                    return total + num;
                }
                console.log(newArray.reduce(findTotal));
    break;
                
    //indexOf method to find the index of given user input
    case "3":
        console.log("\nYou choose indexOfFunction");
                let value = 5;
                let index = newArray.indexOf("5");
                console.log("Index of element " + value + "is " + index);
    break;

    //join method to create a string from arry
    case "4":
        console.log("\nYou choose Join");
                console.log(newArray.join());
    break;

    //map method to call to call given function 
    case "5":
        console.log("\nYou choose Map");
                console.log(newArray.map(Math.sqrt));
    break;

    //splice method to add and remove elements
    case "6":
        console.log("\nYou choose Splice");
                console.log(newArray);
                newArray.splice(2, 2, 12, 28);
                console.log(newArray);
    break;

    //shift method to removes first element of array
    case "7":
        console.log("\nYou choose Shift");
                console.log("You removed element : "+newArray.shift());
    break;

    //sort method sort elements of an array
    case "8":
        console.log("\nYou choose Sort");
                console.log(newArray.sort());
    break;

    //Unshift mathod adds element at the begining of the array
    case "9":
        console.log("\nYou choose Unshift");
                console.log(newArray.unshift());
    break;

    //forEach method calls a function once for each element in an array
    case "10":
        console.log("\nYou choose forEach");
                function myForEachFunction(item, index) {
                    index + " : " + item
                }
                console.log(newArray.forEach(myForEachFunction));
    break;
    
    //slice method extract elements as per the input
    case "11":
        console.log("\nYou choose Slice");
                console.log(newArray.slice(1));
    break;

    //reverse method reverse the array
    case "12":
        console.log("\nYou choose Reverse");
                console.log(newArray.reverse());
    break;

    default:
        flag = false;
    console.log("Exit"); 
}    
}
}
let newArray = addIntoArray();
choice(newArray);