//setup end date for countdown//get time in milliseconds
let launchDate = new Date("May 28,2021 12:00:00").getTime();

//set timer to tick every 1 second
let timer = setInterval(tick ,1000);

function tick() {
    //get current time
    let now = new Date().getTime();

    //get the difference in time to get time left untill reaches 0
    let t = launchDate - now;

    //check if time is above 0
    if(t>0){
        //setup days ,hours,seconds and minutes
        //algorithm to calculate days..
        let days = Math.floor(t/(1000 * 60 * 60 * 24));
        //prefix any number below 10 with a "0" e.g. 1= 01
        if(days<10){days = "0" + days;}
        //algorihtm to calculate hours
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(hours < 10) { hours = "0" + hours;}
        //algorithm to calculate minutes
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if(mins < 10) { mins = "0" + mins;}
        //algorihtm to calculate seconds
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if(secs < 10) { secs = "0" + secs;}

        //create time string
        let time  = `${days} : ${hours} : ${mins} : ${secs}`;

        //set time on document
        document.querySelector('.countdown').innerHTML = time;
    }
}