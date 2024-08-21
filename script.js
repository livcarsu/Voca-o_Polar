document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const cursorBall = document.getElementById('cursorBall');
    const cursorMargin = 50; // Margem para ativar o cursor grande

    body.addEventListener('mousemove', (event) => {
        const { clientX} = event;
        const { innerWidth} = window;

        cursorBall.style.left = `${clientX}px`;
   

        if (clientX < cursorMargin || clientX > innerWidth - cursorMargin) {
            body.classList.add('large-circular-cursor');
        } else {
            body.classList.remove('large-circular-cursor');
        }
    });
});

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

