const values =[45,56,45,"hello",true];
// Using for loop

// for(let i=0; i<values.length; i++){
//     console.log(values[i]);
// }


// Using ForEach

// values.forEach( (item)=>{
//     console.log("using forEach",item);
// })

// Using For Of

// for(let v of values){
//     console.log("Using For OF",v);
// }

//Using For In

// values.push("False")
// for(let v of values){
//     console.log(v);
// }


// Regular Expession\
let newValues = values.filter((item)=>{
    return /[0-9]+(\.[0-9]+)?/.test(item);
})

newValues.forEach((item)=>{
    console.log(item);
})