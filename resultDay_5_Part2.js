// reverse tracking from the lowest location to find the sêd
//ì the founded seed is in range of seed to plan then return location.
const {dataDay5}=require("./data")
var arrayData=dataDay5.split("\n \n");

var seedArrayToPlant=arrayData[0].split(':')[1].trim().split(' ');
for(let m=0; m< seedArrayToPlant.length;m++){

    var locationArray=[];
    var humidityArray=[];
    for(let i=1; i< arrayData.length; i++){
        let category=arrayData[i].split(':')[0].trim().split('-');
        var almanac=arrayData[i].split(':')[1].replaceAll("\n", "").trim().split(" ");
        category[2]=category[2].replace(" map", "");
        let lowestNumber=0;
        if (category[0]==="humidity"){
            for(let k=0; k< almanac.length; k=k+3){
                
                locationArray.push({
                    start: Number(almanac[k]),
                    end: Number(almanac[k])+Number(almanac[k+2])
                })

                humidityArray.push({
                    start: Number(almanac[k+1]),
                    end: Number(almanac[k+1])+Number(almanac[k+2])
                })
            }
        }
        if (category[0]==="temperature"){
            
        }

    }
if(m===0) console.log(locationArray, humidityArray);
}