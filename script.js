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