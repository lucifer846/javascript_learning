// let prom = new Promise((resolve, reject) => {
//     console.log("this is promise")
// })



function get_data(data_id, getnextdata) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
        console.log("this is the data", data_id);
        if (getnextdata) {
            getnextdata();}
        resolve("success")
    }, (4000));
}
)}

// }
// //callback hell
// get_data(1, ()=>{
//     get_data(2, ()=>{
//         get_data(3)
//     });
// })