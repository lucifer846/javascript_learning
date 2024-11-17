const url = "https://cat-fact.herokuapp.com/facts"
const facePara = document.querySelector("#catfact")
const btncatfact = document.querySelector("#tellcatfact")


// const getfacts = async () => {
//     let response = await fetch(url);
//     //console.log(response); //JSON format
//     let js_obj = await response.json();
//     facePara.innerHTML = js_obj[0].text
    
// }

function getfacts(){
    fetch(url).then((res)=> {
        return res.json()
    }).then((data)=>{
        facePara.innerHTML = data[0].text
    })
}

btncatfact.addEventListener("click", getfacts)