

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
        window.location.href = 'pagina-de-jogo.html'; // Substitua 'pagina-de-jogo.html' pelo caminho da sua página de jogo
    }
}
