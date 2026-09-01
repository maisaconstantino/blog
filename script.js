function filtrar(categoria) {
    const posts = document.querySelectorAll('.card');
    const botoes = document.querySelectorAll('.filter-btn');

    // Atualiza a classe ativa do botão
    botoes.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(categoria)) {
            btn.classList.add('active');
        }
    });

    // Exibe ou oculta os cards de posts de acordo com a categoria
    posts.forEach(post => {
        const postCategoria = post.getAttribute('data-category');
        
        if (categoria === 'todos' || postCategoria === categoria) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
