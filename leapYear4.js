const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? true : false;
console.log(isLeapYear(2004))