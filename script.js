

function showNextModal(modalId) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
    
    const nextModal = document.getElementById(modalId);
    if (nextModal) {
        nextModal.style.display = 'flex';
    }
}

// Exibe a primeira modal ao clicar no botão "INICIAR TESTE"
document.querySelector('.btnIniciar').addEventListener('click', function() {
    showNextModal('modal1');
});

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";

    // Redireciona para a página de jogo após o fechamento do modal
    if (modalId === 'modal3') {
        window.location.href = 'quest1.html'; // Substitua 'pagina-de-jogo.html' pelo caminho da sua página de jogo
    }
}

//controla card com resultados 2° pag.
function showContent(contentId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    document.getElementById(contentId).style.display = 'block';

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    document.querySelector(`.nav-link[href="#${contentId}"]`).classList.add('active');
}
