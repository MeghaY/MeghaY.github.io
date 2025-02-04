'use strict';

const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    console.log(hours);
    const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    console.log(hoursDegrees);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    secondHand.style.transition = secondsDegrees === 90 ? 'all 0s' : 'all 0.05s';
    minutesHand.style.transition = minsDegrees === 90 ? 'all 0s' : 'all 0.01s';

}

setInterval(setDate, 1000);
setDate();