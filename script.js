// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-grid img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            const closeModal = document.querySelector('.modal .close');
            closeModal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });
});
