function get_data(data_id, getnextdata) {
    setTimeout(() => {
        console.log("this is the data", data_id);
        if (getnextdata) {
            getnextdata();}
    }, (2000));

}
//callback hell
get_data(1, ()=>{
    get_data(2, ()=>{
        get_data(3)
    });
})