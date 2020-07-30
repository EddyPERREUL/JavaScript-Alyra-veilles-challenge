/*const dateNow = moment();
dateNow.locale("fr");

const h1 = document.querySelector("h1");

const p1 = document.createElement("p");

p1.textContent = `Nous sommes le ${dateNow.format("dddd DD/MM/YYYY")}`;

h1.after(p1); */

const dateNow = moment();

dateNow.locale("fr");

const datePos = document.getElementById("date-du-jour");

datePos.prepend(dateNow.format("DD/MM/YYYY"));
