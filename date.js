// js hint ESversion:6
function getDate(){
    const today= new Date();
    const options= {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day= today.toLocaleDateString("en-US", options)
    return day
}
function getDay(){
    const today= new Date();
    const options= {
        weekday: "long",
    };

    let day= today.toLocaleDateString("en-US", options)
    return day
}
module.exports = {
    getDate: getDate(),
    getDay:getDay()
}