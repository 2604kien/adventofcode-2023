let start = Date.now();
const {dataDay4}=require('./data');
var sum=0;
var numberOfDuplicate=[];
for(let i=0; i<dataDay4.length;i++){
    numberOfDuplicate.push(1);
}
for(let i=0; i< numberOfDuplicate.length; i++){
    while(numberOfDuplicate[i]>0){

        let cardDetail=dataDay4[i].split(':')[1];
        let winningNumbers=cardDetail.split('|')[0].replaceAll(/\B\s/g,"").substring(0, cardDetail.split('|')[0].replace(/\B\s/g,"").length-1).split(' ');//array1
        let numbersOnCard=cardDetail.split('|')[1].replaceAll(/\B\s/g,"").split(' ');//array2
        let countWin=0;

        for(let j=0; j<winningNumbers.length; j++){
           //determine how many win in a card
            for(let k=0; k<numbersOnCard.length; k++){
                if(Number(winningNumbers[j])===Number(numbersOnCard[k])){
                    numbersOnCard[k]="";
                    countWin++;
                } 
            }
        }
        //add number of coppy card to the number of coppy card array
        if(countWin>0){
            for(let a=1; a<=countWin; a++){
                if((i+a)<dataDay4.length) numberOfDuplicate[i+a]=numberOfDuplicate[i+a]+numberOfDuplicate[i];
            }
        }
        sum=sum+numberOfDuplicate[i];
        numberOfDuplicate[i]=0;
    }
}

let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
console.log(sum);