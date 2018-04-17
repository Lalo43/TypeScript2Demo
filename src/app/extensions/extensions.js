Date.prototype.addDaystoCurrentDay = function (days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
Date.prototype.format = function () {
    let date = new Date(this.valueOf());
    return date.toLocaleDateString();
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaystoCurrentDay(5));
    console.log(currentDay.format());
};
