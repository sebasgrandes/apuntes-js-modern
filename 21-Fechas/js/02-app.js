const diaHoy = new Date();

moment.locale("es"); // paso las fechas a español

console.log(moment().format("LLLL", diaHoy)); // formato LLLL
console.log(moment().format("MMMM Do YYYY, h:mm:ss a", diaHoy)); // formato LLLL
console.log(moment().add(3, "days").calendar());
