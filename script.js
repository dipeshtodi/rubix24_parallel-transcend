document.getElementById('approvalForm').addEventListener('submit', function(event) {
            
    event.preventDefault();

});

function removeFileInput(fileInputId) {
    document.getElementById(fileInputId).value = null;
}

document.getElementById('removePhoto').addEventListener('click', function() {
    removeFileInput('photo');
});

document.getElementById('removeMedicalCertificate').addEventListener('click', function() {
    removeFileInput('medicalCertificate');
});

document.getElementById('removeBirthCertificate').addEventListener('click', function() {
    removeFileInput('birthCertificate');
});

//landing page
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
