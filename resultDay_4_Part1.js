const {dataDay4}=require('./data');
var sum=0;
for(let i=0; i<dataDay4.length; i++){
    //get card detail
    let cardId=dataDay4[i].split(':')[0];
    let cardDetail=dataDay4[i].split(':')[1];
    let winningNumbers=cardDetail.split('|')[0].replaceAll(/\B\s/g,"").substring(0, cardDetail.split('|')[0].replace(/\B\s/g,"").length-1).split(' ');//array1
    let numbersOnCard=cardDetail.split('|')[1].replaceAll(/\B\s/g,"").split(' ');//array2
    let count=0;
    for(let j=0; j<winningNumbers.length; j++){
       
        for(let k=0; k<numbersOnCard.length; k++){
            if(Number(winningNumbers[j])===Number(numbersOnCard[k])){
                numbersOnCard[k]="";
                count++;
            } 
        }
    }
    
    if(count>1) sum=sum+1*Math.pow(2,count-1);
    else if(count===1) sum=sum+1;
}
console.log(sum);