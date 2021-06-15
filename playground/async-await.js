//An async function always return a promise

/*
const doWork = async () =>{

}
console.log(doWork())
//--> Promise { undefined } 
*/


/*
const doWork = async () =>{
    throw new Error('Something wen wrong')
    return 'Pritam'
}

doWork().then((result)=>{
    console.log("Result : " + result)
}).catch((e)=>{
    console.log('Error : ' + e)
})
*/

const add = (a, b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {

            if(a<0 || b<0){
                return reject("Number must be non-negative")
            }
            resolve(a + b)
        }, 2000);
    })
}

const doWork = async () =>{
    const sum = await add(5,4)
    // console.log(sum)

    const sum2 = await add(sum, 5)
    // console.log(sum2)
    
    const sum3 = await add(sum2, 10)
    return sum3
}

doWork().then((result)=>{
    console.log("Result : " + result)
}).catch((e)=>{
    console.log('Error : ' + e)
})