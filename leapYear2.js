function bissextile(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return (`L'année ${year} est bissextile`);
    } else { return (`L année ${year} n'est pas bissextile`) }
}
console.log(bissextile(2016))
