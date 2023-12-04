let array=[1,2,3,4,5,2,2,3]

let arrayClone=[...array];
for(let i=0; i< array.length; i++){
let counter=0;

while(arrayClone.length>0){
    let j=0;
    if(array[i]===arrayClone[j]) {
        arrayClone.splice(1,arrayClone.indexOf(arrayClone[j]))
        counter++;
        j=j-1;
    };
    j++;
}
console.log(array[i]+":"+ counter);
}
