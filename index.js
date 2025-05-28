 function updateClock(){
   
    const today = new Date();
    let getHours = today.getHours().toString().padStart(2,0);
    let meridian = getHours > 12 ? 'pm': 'am'
    const getMinutes = today.getMinutes().toString().padStart(2,0);
    const getSeconds = today.getSeconds().toString().padStart(2,0);
    const timeString = `${getHours} : ${getMinutes} : ${getSeconds} ${meridian} `;
    const getdave = document.getElementById('clock');
    getdave.textContent = timeString


   
 }
 updateClock();
 setInterval(updateClock, 1000);