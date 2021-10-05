let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

if (hours > 12) {
hours -= 12;
}

let secondsStart = 360 / 60 * seconds,
    minutesStart = 360 / 60 * minutes + 6 / 60 * seconds,
    hoursStart = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;

let style = document.createElement('style');

style.type = 'text/css';
style.innerHTML = '\
                    @keyframes clock-hand-rotate--hour {\
                        from {transform: rotate(' + hoursStart + 'deg)}\
                        to {transform: rotate(' + (hoursStart + 360) + 'deg)}\
                    }\
                    @keyframes clock-hand-rotate--minute {\
                        from {transform: rotate(' + minutesStart + 'deg)}\
                        to {transform: rotate(' + (minutesStart + 360) + 'deg)}\
                    }\
                    @keyframes clock-hand-rotate--second {\
                        from {transform: rotate(' + secondsStart + 'deg)}\
                        to {transform: rotate(' + (secondsStart + 360) + 'deg)}\
                    }\
                    .clock__hour {\
                        animation: clock-hand-rotate--hour 43200s linear infinite;\
                    }\
                    .clock__min {\
                        animation: clock-hand-rotate--minute 3600s linear infinite;\
                    }\
                    .clock__sec {\
                        animation: clock-hand-rotate--second 60s linear infinite;\
                    }';
                  
document.getElementsByTagName('head')[0].appendChild(style);