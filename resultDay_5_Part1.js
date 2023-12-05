const {dataDay5}=require("./data")
var arrayData=dataDay5.split("\n \n");
var array=[];
var seedArrayToPlant=arrayData[0].split(':')[1].trim().split(' ');
for(let m=0; m< seedArrayToPlant.length;m++){
    let currentSeed=Number(seedArrayToPlant[m]);
    let currentItem=0;
    
    for(let i=1; i< arrayData.length; i++){
        let category=arrayData[i].split(':')[0].trim().split('-');
        var almanac=arrayData[i].split(':')[1].replaceAll("\n", "").trim().split(" ");
        category[2]=category[2].replace(" map", "");

        if (category[0]==="seed"){
            for(let k=0;k<almanac.length;k=k+3){
            let currentTemp=0;
            let numStart1=Number(almanac[1+k]);
            let numEnd1=Number(almanac[1+k])+Number(almanac[2+k])-1;
            let numStart2=Number(almanac[0+k]);


            if (currentSeed>=numStart1 && currentSeed<=numEnd1) {
                currentTemp=currentSeed-numStart1+numStart2;
                currentItem=currentTemp; 
                break;
            }
            else currentTemp=Number(currentSeed);
            currentItem=currentTemp;  
            }
            
        }
        if (category[0]==="soil"){
            for(let k=0;k<almanac.length;k=k+3){
                let currentTemp=0;
                let numStart1=Number(almanac[1+k]);
                let numEnd1=Number(almanac[1+k])+Number(almanac[2+k])-1;
                let numStart2=Number(almanac[0+k]);;
    
    
                if (currentItem>=numStart1 && currentItem<=numEnd1) {
                    currentTemp=currentItem-numStart1+numStart2
                    currentItem=currentTemp; 
                    break;
                } 
                else currentTemp=Number(currentItem);
                currentItem=currentTemp;  
            }
            
        }
        if (category[0]==="fertilizer"){
            currentItem=findLocation(almanac, currentItem);
        }
        if (category[0]==="water"){
            currentItem=findLocation(almanac, currentItem);
        }
        if (category[0]==="light"){
            currentItem=findLocation(almanac, currentItem);
        }
        if (category[0]==="temperature"){
            currentItem=findLocation(almanac, currentItem);
        }
        if (category[0]==="humidity"){
            currentItem=findLocation(almanac, currentItem);
        }   
    }
    array.push(currentItem);
}
console.log(Math.min(...array));
function findLocation(almanac, currentItem){
for(let k=0;k<almanac.length;k=k+3){
    let currentTemp=0;
    let numStart1=Number(almanac[1+k]);
    let numEnd1=Number(almanac[1+k])+Number(almanac[2+k])-1;
    let numStart2=Number(almanac[0+k]);
    

    if (currentItem>=numStart1 && currentItem<=numEnd1) {
        currentTemp=currentItem-numStart1+numStart2
        currentItem=currentTemp; 
        break;
    } 
    else currentTemp=Number(currentItem);
    currentItem=currentTemp; 
    }
    
    return currentItem;
}