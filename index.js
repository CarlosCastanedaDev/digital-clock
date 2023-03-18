setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let day = time.getDay();
  let month = time.getMonth();
  let date = time.getDate();
  let year = time.getFullYear();
  am_pm = 'AM';

  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM';
  }

  if (hour == 12) {
    hr = 12;
    am_pm = 'PM';
  }
  if (hour == 0) {
    hr = 12;
    am_pm = 'AM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  let currentTime = hour + ':' + min + am_pm;

  switch (day) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
  }

  switch (month) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      monthy = 'July';
  }

  document.getElementById('hours').innerHTML = hour;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
  document.getElementById('AM').innerHTML = am_pm;
  document.getElementById('fullDate').innerHTML =
    day + ' ' + month + ' ' + date + ', ' + year;
  //   document.getElementById('day').innerHTML = day;
  //   document.getElementById('month').innerHTML = month;
  //   document.getElementById('date').innerHTML = date + ' , ';
  //   document.getElementById('year').innerHTML = ' ' + year;
}

showTime();
