// let prom = new Promise((resolve, reject) => {
//     console.log("this is promise")
// })



function get_data(data_id, getnextdata) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
        console.log("this is the data", data_id);
        if (getnextdata) {
            getnextdata();}
        resolve("this is the data")
    }, (2000));
}
)}
console.log("fetching data 1...")
let prom1 = get_data(123)
prom1.then((res)=>{
    console.log("fetching data 2...")
    let prom2 = get_data(535)
    prom2.then(res)

})

// }
// //callback hell
// get_data(1, ()=>{
//     get_data(2, ()=>{
//         get_data(3)
//     });
// })