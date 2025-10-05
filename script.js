document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggle-theme');

    btn.addEventListener( 'click', () => {
        document.body.classList.toggle('dark');
    
        //muda o icone do botao 
        if ( document.body.classList.contains( 'dark')) {
            btn.textContent = "☀️";
        } else {
            btn.textContent = "🌙";
        }

});
});