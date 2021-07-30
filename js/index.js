const RNG = document.getElementById('rng');
const randomNum = Math.round(Math.random() * 1000);
RNG.innerHTML = "Your Random Number Of The Day is: " + randomNum;