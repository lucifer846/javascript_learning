// let prom = new Promise((resolve, reject) => {
//     console.log("this is promise")
// })


(async function(){
    await get_data(1)
    await get_data(2)
    await get_data(3)
    await get_data(4)
    await get_data(5)
})();


function get_data(data_id) {
    return new Promise((resolve,reject)=> {
        console.log(`fetching data ...${data_id}`)
        setTimeout(() => {

        console.log("data", data_id);
        resolve("this shit is resolved")
    }, (2000));
}
)}


//  // promice chaining
// get_data(1).then((res) => {
//         return get_data(2);
//     })
//     .then((res)=>{
//         console.log(res)
//     })
// }
// //callback hell
// get_data(1, ()=>{
//     get_data(2, ()=>{
//         get_data(3)
//     });
// })


