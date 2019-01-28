// DateCalculator modular method to calculate and return date
const DateCalculator = () => {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  if (month.toString().length === 1) {
    month = `0${month + 1}`;
  } else if (month.toString().length === 2) {
    month = month + 1;
  }
  let day = d.getDate();
  return { year, month, day };
};

// TempConversion converts kelvin to fahrenheit
const TempConversion = tempK => {
  let tempF = ((tempK - 273.15) * 9) / 5 + 32;
  return Math.ceil(tempF);
};

// WindConversion converts wind degree to cardinal direction
const WindConversion = deg => {
  let dir;
  if (deg > 330) {
    dir = "N";
  } else if (deg <= 330 && deg > 290) {
    dir = "NW";
  } else if (deg <= 290 && deg > 250) {
    dir = "W";
  } else if (deg <= 250 && deg > 210) {
    dir = "SW";
  } else if (deg <= 210 && deg > 140) {
    dir = "S";
  } else if (deg <= 140 && deg > 120) {
    dir = "SE";
  } else if (deg <= 120 && deg > 80) {
    dir = "E";
  } else if (deg <= 80 && deg > 30) {
    dir = "NE";
  } else {
    dir = "N";
  }
  return dir;
};

// PhoneFormat handles the phoen input to clean for POST call to DB
const PhoneFormat = (phone) => {
  for (let i = 0; i < phone.length; i++) {
    if (phone[i] === "-") {
      phone = phone.slice(0, i) + phone.slice(i + 1);
    }
    else if (phone[i] === " ") {
      phone = phone.slice(0, i) + phone.slice(i + 1);
    }
  }
  return phone;
}

// Convert military to standard time
const MilToStrdTime = (militaryTime) => {
  let tmp = +(militaryTime.split(":")[0])
  let minutes = militaryTime.split(":")[1]

  if (tmp >= 12) {
    if (tmp === 13) {
      tmp = 1;
    } else if (tmp === 14) {
      tmp = 2;
    } else if (tmp === 15) {
      tmp = 3;
    } else if (tmp === 16) {
      tmp = 4;
    } else if (tmp === 17) {
      tmp = 5;
    } else if (tmp === 18) {
      tmp = 6;
    } else if (tmp === 19) {
      tmp = 7;
    } else if (tmp === 20) {
      tmp = 8;
    } else if (tmp === 21) {
      tmp = 9;
    } else if (tmp === 22) {
      tmp = 10;
    } else if (tmp === 23) {
      tmp = 11;
    }
    return `${tmp}:${minutes}PM`

  }
  else if (tmp === 24) {
    return `12:${minutes}AM`
  } else {
    return `${tmp}:${minutes}AM`
  }
}

// FormatDate returns a US style date `day/month/year` from a timestamp
const FormatDate = createdAt => {
  let date = "";
  date = `${createdAt.split(":")[0].split("-")[1]}/${
    createdAt
      .split(":")[0]
      .split("-")[2]
      .split("T")[0]
  }/${createdAt.split(":")[0].split("-")[0]}`;
  return date;
};

const FormatDateApi = createdAt => {
  // 19-01-28 04:48
  let tmp = createdAt.split(" ")[0]
  let time = MilToStrdTime(createdAt.split(" ")[1])
  let date = `${tmp.split("-")[1]}/${tmp.split("-")[2]} ${time}`;
  return date
}


module.exports = {
  WindConversion, TempConversion, DateCalculator, PhoneFormat, MilToStrdTime, FormatDate,
  FormatDateApi
}