function bisextile(année){
    if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0)
        return true
    else 
        return false 
}
const année = 2024;
console.log(bisextile(année))