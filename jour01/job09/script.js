function tri(nombres, order) {
    if (order === 'asc') {
        return nombres.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return nombres.sort((a, b) => b - a);
    } else {
        console.error("Le paramètre 'order' doit être 'asc' ou 'desc'");
        return nombres
    }
}

let arr = [4, 10, 6, 2, 8];
console.log("Tableau non trié:", arr);
console.log("Tri ascendant:", tri(arr.slice(), 'asc'))
console.log("Tri descendant:", tri(arr.slice(), 'desc'))
