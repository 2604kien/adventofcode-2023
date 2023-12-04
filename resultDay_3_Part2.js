const {dataDay3}=require('./data')
var twoDArray=[];
var sum=0;
twoDArray.push([]);
var numberArray= new Set([])
for(let i=0; i<dataDay3.length;i++){
    twoDArray.push(dataDay3[i].replaceAll("*","|").split(''));
}
twoDArray.push([])
for(let i=0; i<twoDArray.length; i++){
    for (let j=0; j<twoDArray[i].length; j++){

        
        if(twoDArray[i][j]==="|") {
            //determine if adjacent position is number:
            if(Number(twoDArray[i][j+1])||Number(twoDArray[i][j+1])===0) { numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i], j+1), [i,findStartIndexJ(twoDArray[i], j+1)],[i,j]]))}
            if(Number(twoDArray[i+1][j])||Number(twoDArray[i+1][j])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i+1], j), [i+1,findStartIndexJ(twoDArray[i+1], j)],[i,j]]))}
            if(Number(twoDArray[i][j-1])||Number(twoDArray[i][j-1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i], j-1), [i,findStartIndexJ(twoDArray[i], j-1)],[i,j]]))}
            if(Number(twoDArray[i-1][j])||Number(twoDArray[i-1][j])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i-1], j), [i-1,findStartIndexJ(twoDArray[i-1], j)],[i,j]]))}
            if(Number(twoDArray[i+1][j+1])||Number(twoDArray[i+1][j+1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i+1], j+1), [i+1,findStartIndexJ(twoDArray[i+1], j+1)],[i,j]]))}
            if(Number(twoDArray[i-1][j-1])||Number(twoDArray[i-1][j-1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i-1], j-1), [i-1,findStartIndexJ(twoDArray[i-1], j-1)],[i,j]]))}
            if(Number(twoDArray[i+1][j-1])||Number(twoDArray[i+1][j-1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i+1], j-1), [i+1,findStartIndexJ(twoDArray[i+1], j-1)],[i,j]]))}
            if(Number(twoDArray[i-1][j+1])||Number(twoDArray[i-1][j+1])===0) {numberArray.add(JSON.stringify([adjacentNumber(twoDArray[i-1], j+1), [i-1,findStartIndexJ(twoDArray[i-1], j+1)],[i,j]]))}
            
        }
    }
}
const numberArray2= [...numberArray]

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
//counter and eliminate duplicate result
for(let i=0; i< numberArray2.length-1; i++){
    
    let counter=0;
    let firstValue=0;
    let secondValue=0;
    let fragment=numberArray2[i].substring(1, numberArray2[i].length-1).replaceAll(/[\[\]]/g, "|").split(',|');
    fragment=fragment.map(el=>{
        el=el.replaceAll("|","");
        return el;
    });
    for(let j=i+1; j< numberArray2.length;j++){
        let fragment2=numberArray2[j].substring(1, numberArray2[j].length-1).replaceAll(/[\[\]]/g, "|").split(',|');
        fragment2=fragment2.map(el=>{
            el=el.replaceAll("|","");
            return el;
        });
        if(fragment[2]===fragment2[2]) {
            counter=counter+1;
            firstValue=Number(fragment[0]);
            secondValue=Number(fragment2[0]);
        }
      
    }

    if (counter===1) sum=sum+firstValue*secondValue;
    
}
console.log(sum);