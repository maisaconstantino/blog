// Lógica de Filtragem dos Artigos na Home Page
function filtrar(categoria) {
    const posts = document.querySelectorAll('.card');
    const botoes = document.querySelectorAll('.filter-btn');

    if (!posts.length || !botoes.length) return;

    // Atualiza o estado visual do botão ativo
    botoes.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(categoria)) {
            btn.classList.add('active');
        }
    });

    // Exibe ou oculta os posts
    posts.forEach(post => {
        const postCategoria = post.getAttribute('data-category');
        
        if (categoria === 'todos' || postCategoria === categoria) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}
