const {dataDay2}=require('./data');

//check if total red, blue, and green in the game less than 
//12 red, 13 green, 14 blue
//if yes, then add up id
var sum=0;
var array=[]
for(let i=0; i<dataDay2.length; i++){
    let multiply=0;
    var id=Number(dataDay2[i].split(':')[0].split(' ')[1]);
    var gameDetail=dataDay2[i].split(':')[1].split(';'); //gamedetail array
    var noRed=[];
    var noBlue=[];
    var noGreen=[];
    gameDetail.forEach(turn=>{

        var amountColorArray=turn.split(', ');

        amountColorArray.forEach(numColor=>{
            if(numColor.includes("red")) noRed.push(Number(numColor.split('red')[0]));
            else if(numColor.includes("green")) noGreen.push(Number(numColor.split('green')[0]));
            else if(numColor.includes("blue")) noBlue.push(Number(numColor.split('blue')[0]));
            
        })
        
    })
    multiply=Math.max(...noRed)*Math.max(...noBlue)*Math.max(...noGreen)
    sum=sum+multiply;
}
console.log(sum);