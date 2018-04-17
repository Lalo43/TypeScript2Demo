interface Date {
    addDaystoCurrentDay(days: number):Date;
    format(): String;
}

Date.prototype.addDaystoCurrentDay = function(days: number): Date{
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;    
}

Date.prototype.format = function(): String{
    let date = new Date(this.valueOf());
    return date.toLocaleDateString();
}
window.onload = function(){
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaystoCurrentDay(5));
    console.log(currentDay.format());
}

//dd/MM/YYYY{String}