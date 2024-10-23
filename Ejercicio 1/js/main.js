let userName = "david"
let userSurname = "rodriguez"

function getMessage(age) {
    let message
    if (age >= 18) {
         message = "Saludos" + userName + "" + userSurname;
    } else {
         message = "lo sentimos," + userName + "" + userSurname + ", debes ser mayor de edad.";
    }
    console.log(message);
}


