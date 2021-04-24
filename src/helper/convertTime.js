function convertIntoTime (timeInSeconds){

    let minutes = 0;
    let seconds = 0;

    if (timeInSeconds > 60) {
        timeInSeconds /= 60;

        minutes = parseInt(timeInSeconds);
        seconds = timeInSeconds - minutes;

        if (seconds !== 0) {
            seconds *= 100;
            seconds = parseInt(seconds);
        }


    } else {
        seconds = timeInSeconds;
    }

    

    return {
        min: minutes,
        sec: seconds
    };
}


function convertSecondsToTimeFormat(time) {
    let timeFormat = "";
    
    if (time > 60) {
        time /= 60;
        timeFormat += time + "m ";

        let minutes = parseInt(time);
        let seconds = time - minutes;

        if (seconds !== 0) {
            seconds *= 100;
            seconds = parseInt(seconds);
            timeFormat += seconds + "s";
        } 
    } else {
        timeFormat = `${time}s`
    }

    

    return timeFormat;
}

export {convertIntoTime, convertSecondsToTimeFormat};