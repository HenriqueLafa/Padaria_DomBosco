window.revelar = ScrollReveal({reset:true});

revelar.reveal(' .efeito-img-topo', { //estou chamando a classe a qual eu quero atribuir o efeito do scroolReveal.
    duration: 2000,
    distance:'90px'


});

revelar.reveal('.clientes-efeito', {
duration:2000,
distance:'120px',
origin: 'right'  

}) 

revelar.reveal ('.principais-produtos',   {
duration:2000,
distance:'120px',
origin:'left'



});











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