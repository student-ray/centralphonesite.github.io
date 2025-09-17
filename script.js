// Seleciona o elemento com a classe 'header'
const header = document.querySelector('.header h1');

// Adiciona um ouvinte de evento para a rolagem da página
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Pega a posição de rolagem vertical
    const fadePoint = 150; // Define o ponto em que o header deve começar a desaparecer

    // Calcula a opacidade e altura com base na posição de rolagem
    if (scrollY < fadePoint) {
        const progress = scrollY / fadePoint; // Progresso da rolagem (0 a 1)
        header.style.opacity = 1 - progress; // Diminui a opacidade
        header.style.height = `${100 - 20 * progress}px`; // Reduz a altura de 100px para 20px
        header.style.lineHeight = `${100 - 20 * progress}px`; // Mantém o texto centralizado
    } else {
        header.style.opacity = 0; // Fixa a opacidade em 0 após o fadePoint
        header.style.height = '20px'; // Altura mínima
        header.style.lineHeight = '20px'; // Ajusta a linha
    }
});