const {dataDay2}=require('./data');

//check if total red, blue, and green in the game less than 
//12 red, 13 green, 14 blue
//if yes, then add up id
var sum=0;
var array=[]
for(let i=0; i<dataDay2.length; i++){
    
    var id=Number(dataDay2[i].split(':')[0].split(' ')[1]);
    var gameDetail=dataDay2[i].split(':')[1].split(';'); //gamedetail array
    let bool=false;
    for(let j=0; j< gameDetail.length; j++){
        let boolTurn=false
        let eachColor=gameDetail[j].split(', ')
        for(let k=0; k<eachColor.length; k++){
            let noRed=0;
            let noBlue=0;
            let noGreen=0;
            if(eachColor[k].includes('red')) noRed=Number(eachColor[k].split(' red')[0]);
            if(eachColor[k].includes('green')) noGreen=Number(eachColor[k].split(' green')[0]);
            if(eachColor[k].includes(' blue')) noBlue=Number(eachColor[k].split(' blue')[0]);
            if(noRed<=12 && noGreen<=13 && noBlue<=14) boolTurn=true;
            else {
                boolTurn=false;
                break;
            }
        }
        if(boolTurn){
           bool=true;
        }
        else {
            bool=false;
            break;
        }
    }
    if(bool){
        sum=sum+id;
        array.push(id);
    }
    
}
console.log(sum)