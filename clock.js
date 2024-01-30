function updateClock(){

    const now =new Date();
    const hours = now.getHours();
    const minutes =now.getMinutes();
    const seconds = now.getSeconds();
    // const timeString = `${hours} :${minutes} :${seconds}`;

    // document.getElementById("clock").textContent=timeString;
    document.getElementById("clock").textContent=`${hours} :${minutes} :${seconds}`

}

updateClock();
setInterval(updateClock,1000);