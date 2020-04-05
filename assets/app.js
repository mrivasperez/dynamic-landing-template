// DOM ELEMENTS
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
    bodyStyle = document.body.style;

// Function to show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting based on time
function bcgGreet() {
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12) {
        // morning
        greeting.innerText = 'Good morning,'
        bodyStyle.backgroundImage = "url('assets/img/morning.jpg')"
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat'
    } else if(hour < 17) {
        // afternoon
        greeting.innerText = 'Good afternoon,'
        bodyStyle.backgroundImage = "url('assets/img/afternoon.jpg')"
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat'

    } else {
        // evening
        greeting.innerText = 'Good evening,'
        bodyStyle.background = "url('assets/img/evening.jpg')";
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat'
        bodyStyle.color = 'white';
    }
}

// Get Name
function getName() {
    
}

//Run
showTime();
bcgGreet();