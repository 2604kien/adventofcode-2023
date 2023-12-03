const {dataDay1}=require('./data');
var firstDigit=0;
var secondDigit=0;
var sum=0;
let numArray=["one", "two", "three", "four", "five", "six", "seven", "eight", "nine","1","2","3","4","5","6","7","8","9"];
for(let i=0; i<dataDay1.length; i++){
    var array=[];
    
    numArray.map(el=>{
        let newdata=dataDay1[i];
        while(newdata.search(el)!==-1){
            if(newdata.length===dataDay1[i].length) array.push(newdata.search(el));
            if(newdata.length!==dataDay1[i].length) array.push(newdata.search(el)+dataDay1[i].length-newdata.length);
            newdata=newdata.substring(newdata.search(el)+1);
        } //problem here
        return el;
    })
    if(Number(dataDay1[i].charAt(Math.min(...array)))) firstDigit=Number(Number(dataDay1[i].charAt(Math.min(...array))));
    else {
        
        for(let k=0; k< 10; k++){
            if(numArray[k].substring(0,2)===dataDay1[i].substring(Math.min(...array), Math.min(...array)+2)) 
            {
            firstDigit=k+1;
            break;
            }
        }
    }

    if(Number(dataDay1[i].charAt(Math.max(...array)))) secondDigit=Number(dataDay1[i].charAt(Math.max(...array)));
    else {
        for(let k=0; k< 10; k++){
            if(numArray[k].substring(0,2)===dataDay1[i].substring(Math.max(...array), Math.max(...array)+2)) 
            {
                secondDigit=k+1;
                break;
            }
        }
    }

    sum=sum+firstDigit*10+secondDigit;

}
console.log(sum);