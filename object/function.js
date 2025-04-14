const myArray = [100,200,300,0,25555,]

function getMYArray(anyArray){
    return anyArray[2] + anyArray[4] + anyArray[0] + anyArray[1] + anyArray[3];
}
console.log(getMYArray(myArray));


function getMYArray(anyArray) {
    return anyArray.reduce((acc, curr) => acc + curr, 0);
}

const myArray1 = [100, 200, 300, 0, 25555];
console.log(getMYArray(myArray1));