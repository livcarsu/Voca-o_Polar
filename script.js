

function showNextModal(modalId) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
    
    const nextModal = document.getElementById(modalId);
    if (nextModal) {
        nextModal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Exibe a primeira modal ao clicar no botão "INICIAR TESTE"
document.querySelector('.btnIniciar').addEventListener('click', function() {
    showNextModal('modal1');
});

