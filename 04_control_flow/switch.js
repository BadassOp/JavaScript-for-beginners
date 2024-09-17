//  +++++++++++++++++++++++++++++++  Syntax  ++++++++++++++++++++++++++++++++++++
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4

// key is the value which we have to check
// if a condition is matched and there is no break used in the case, then the remaining code will be executed without checking the other cases execpt default
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        
        break;
}

//++++++++++++++++++++++++++++++  string example  ++++++++++++++++++++++++++++++++++

/*
const month = "jan"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;

    default:
        console.log("default case match");
        
        break;
}
*/