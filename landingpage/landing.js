document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const answer = button.nextElementSibling;

            // Toggle the visibility of the answer
            answer.classList.toggle('hidden');
        });
    });
});