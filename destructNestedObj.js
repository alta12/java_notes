const local_forecast = {
    today: {min: 72, max:80},
    tomorrow: {min: 70, max:84}
}; 

function getMaxOfTmw(forecast) {
     const { tomorrow : {max : maxOfTomorrow }} = forecast;
    // look at this carefully to understand 
    return maxOfTomorrow;
}
console.log(getMaxOfTmw(local_forecast));