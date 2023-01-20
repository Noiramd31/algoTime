const year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`L'année ${year} est bissextile`);
} else { console.log(`L année ${year} n'est pas bissextile.`) }