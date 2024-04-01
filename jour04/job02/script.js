function jsonValueKey(json, key){
    const data = JSON.parse(json);

    if (key in data) {
        return(data[key]);
    }
    else {
        return("Clé invalide");
    }
}

const jsonData = '{"name": "LaPlateforme", "address": "8 rue d\'Hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
const value = jsonValueKey(jsonData, "city");
console.log(value);