// coercion: conversion (explicita o implicita) de un tipo de valores dado a otro

const numero1 = 20;
const numero2 = "30";

console.log(numero1 + numero2); // * coercion implicita -> lo convierte todo a string

console.log(Number(numero2)); // * coercion explicita -> nosotros lo convertimos a numero
console.log(numero1.toString()); // * coercion explicita -> nosotros lo convertimos a string
