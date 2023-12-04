let array=[1,2,3,2,5,2,2,3,4]

let arrayClone=[...array];
for(let i=0; i< array.length; i++){
let counter=1;
    for(let j=i+1; j< arrayClone.length; j++){
        if(array[i]===arrayClone[j]) {
            counter++;
            arrayClone[j]="";
        }
    }

    if(arrayClone[i]!=="")console.log(array[i]+":"+ counter);
}

