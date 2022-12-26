`use strict`

function getTheTimeToUniversity(steps, footprint, speed){
    let distance = steps * footprint;
    let time = distance / speed * 3.6;
    let restsCount = parseInt(distance / 500);
    time += restsCount * 60;

    let timeInHours = parseInt(time / 3600)
    let timeInMinutes = parseInt(time / 60);
    let timeInSeconds = Math.ceil(time - (timeInMinutes * 60), 0);

    let formatedTimeInHours = timeInHours < 10 ? `0${timeInHours}` : `${timeInHours}`;
    let formatedTimeInMinutes = timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`;
    let formatedTimeInSeconds = timeInSeconds.toFixed(0) < 10 ? `0${timeInSeconds}` : `${timeInSeconds}`;

    console.log(`${formatedTimeInHours}:${formatedTimeInMinutes}:${formatedTimeInSeconds}`);
}
