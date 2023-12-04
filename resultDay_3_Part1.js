
//2D array with i represent for row, j represent for column DONE
/* adjacent are stick with a number: i and j is known //DONE
    if i=0 -> i-1 may be not viable and no need to check
    if i=array.length -> i+1 may be not viable and no need to check
    if j=0 -> j-1 may be not viable and no need to check
    if j=array.length -> j+1 may be not viable and no need to check

    otherwise: check i, j+1;----
                check j, i+1;----
                check i, j-1;
                check j, i-1;---
                check i+1, j+1;
                check i-1, j-1;
                check i+1, j-1;
                check i-1, j+1;

    if find a number in adjacent => i is fix;
        continous check if j-1 and j+1 position is a number, if not then end loop.
        during check, create an array to store value, if j-1 is a number -> .unshift()
        if j+1 is a number -> .push()
*/


const {dataDay3}=require('./data')
var twoDArray=[];
var sum=0;
twoDArray.push([]);
var numberArray= new Set([])
for(let i=0; i<dataDay3.length;i++){
    twoDArray.push(dataDay3[i].replace(/[-@#$%&*+=/]/g,"*").split(''));
}
twoDArray.push([])
for(let i=0; i<twoDArray.length; i++){
    for (let j=0; j<twoDArray[i].length; j++){

        
        if(twoDArray[i][j]==="*") {
            //determine if adjacent position is number:
            if(Number(twoDArray[i][j+1])||Number(twoDArray[i][j+1])===0) { numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i], j+1), [i,findStartIndexJ(twoDArray[i], j+1)]]))}
            if(Number(twoDArray[i+1][j])||Number(twoDArray[i+1][j])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i+1], j), [i+1,findStartIndexJ(twoDArray[i+1], j)]]))}
            if(Number(twoDArray[i][j-1])||Number(twoDArray[i][j-1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i], j-1), [i,findStartIndexJ(twoDArray[i], j-1)]]))}
            if(Number(twoDArray[i-1][j])||Number(twoDArray[i-1][j])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i-1], j), [i-1,findStartIndexJ(twoDArray[i-1], j)]]))}
            if(Number(twoDArray[i+1][j+1])||Number(twoDArray[i+1][j+1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i+1], j+1), [i+1,findStartIndexJ(twoDArray[i+1], j+1)]]))}
            if(Number(twoDArray[i-1][j-1])||Number(twoDArray[i-1][j-1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i-1], j-1), [i-1,findStartIndexJ(twoDArray[i-1], j-1)]]))}
            if(Number(twoDArray[i+1][j-1])||Number(twoDArray[i+1][j-1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i+1], j-1), [i+1,findStartIndexJ(twoDArray[i+1], j-1)]]))}
            if(Number(twoDArray[i-1][j+1])||Number(twoDArray[i-1][j+1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i-1], j+1), [i-1,findStartIndexJ(twoDArray[i-1], j+1)]]))}
            
        }
    }
}
const numberArray2= [...numberArray]
for(let i=0; i<numberArray2.length; i++){
   let amount=Number(numberArray2[i].replace(/[\[\]]/g, "").split(",")[0]);
   sum=sum+amount;
}
function adjacentNumber(...params){
    var number=[]
    var array=params[0];
    var position=params[1];
    number.push(array[position]);
    var ford=position+1;
    var prev=position-1;
    while (!isNaN(array[ford])){
        number.push(array[ford]);
        ford=ford+1;
    }
    while (!isNaN(array[prev])){
        number.unshift(array[prev]);
        prev=prev-1;
    }
    return Number(number.join(''));
}
function findStartIndexJ(array, jIndex){
    while(!isNaN(array[jIndex])){
        jIndex=jIndex-1;
    }
    return jIndex+1;
}
console.log(sum);
