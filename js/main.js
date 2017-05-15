function agregaPosteo(){
//1.rescatar contenedor-posteos, el nombre y comentario del usuario
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;

//2.creamos el nodo elemento donde ira nuestro post
var nuevoPost = document.createElement("div");

//3.creamos elemento donde guardaremos los valores
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");

//4.creamos elemento para corazón 
var parrafCorazon = document.createElement("p");
var i = document.createElement("i");

//5.asignamos padre a icono de corazon
parrafCorazon.appendChild(i);

//6.atributos corazon
parrafCorazon.setAttribute("class", "corazon");
	i.setAttribute("class", "fa fa-heart");
	i.setAttribute("arial-hidden", "true");

//7.trasnformar el nombre a nodo
var nodoNombre = document.createTextNode(nombreFF + " escribió:");
var nodoPosteo = document.createTextNode(contenidoFF);

//8.asignaremos padres a nodos creados
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//asignar padre a nombre y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(nodoPosteo);

//asignar padres a nombre y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);


//9.crear funcion para click del corazon y asignar color en clase rojo de css
i.addEventListener("click", function(){
	i.classList.toggle('rojo');
});
//atributos al post y agragar contenedor-posteos
nuevoPost.setAttribute("class","posteo");
containerPosteos.appendChild(nuevoPost);
//resetear campos
document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";
};
