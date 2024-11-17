// let prom = new Promise((resolve, reject) => {
//     console.log("this is promise")
// })



function get_data(data_id) {
    return new Promise((resolve,reject)=> {
        console.log(`fetching data ...${data_id}`)
        setTimeout(() => {

        console.log("this is the data", data_id);
        resolve()
    }, (2000));
}
)}

get_data(1).then((res)=>{
    get_data(2).then(res)

})

// }
// //callback hell
// get_data(1, ()=>{
//     get_data(2, ()=>{
//         get_data(3)
//     });
// })