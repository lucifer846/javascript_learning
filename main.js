// let prom = new Promise((resolve, reject) => {
//     console.log("this is promise")
// })



function api(){
    return new Promise((resolve, reject)=>{
       setTimeout(() => {
        console.log("weather data");
        resolve(200)
       }, (2000));

    })
}

async function get_weather_data(){
    await api()
    await api()
}

get_weather_data()
// function get_data(data_id) {
//     return new Promise((resolve,reject)=> {
//         console.log(`fetching data ...${data_id}`)
//         setTimeout(() => {

//         console.log("this is the data", data_id);
//         resolve("this shit is resolved")
//     }, (2000));
// }
// )}
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


