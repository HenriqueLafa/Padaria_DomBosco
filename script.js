//hamburgerButton
//Aqui adicionamos um evento de escutar o click dou mouse sobre o icone de hamburguer
hamburgerButton.addEventListener("click", function() {
mobileMenu.classList.add("flex");
//criamos uma função que a ouvir o click dou mouse, ele adiciona uma class (flex), que está fazendo nossa caixa (div) visivel, ou seja, ficará totalmente visivel para todos.

});
//Criamos uma função que a ouvir o click do mouse, ele REMOVE uma class, que está fazendo nossa caixa (div) desaparecer, ou seja, ficará invisivel.
closeButton.addEventListener("click", function() {
         mobileMenu.classList.remove("flex");

});