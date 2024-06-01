function getNumber(currency){
    return new Promise((resolve,reject)=>{
        if(typeof currency !="number"){
            reject(new Error('currency is not a number'))
        }else{
            resolve(currency)
        }
    })
}

getNumber(10005).then((val)=>{
    console.log('val',val)
})


// getNumber("ccc").then((val)=>{ 
//     console.log('val', val)
// })        

 