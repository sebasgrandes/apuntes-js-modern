// ! acceder a elementos del html con document

let elemento;
elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].className; // lo trae como string
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;

elemento = document.scripts;

console.log(elemento);
