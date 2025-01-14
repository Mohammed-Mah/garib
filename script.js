// Initialize AOS (Animate On Scroll) library
AOS.init();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('response-message').textContent = "تم إرسال رسالتك بنجاح!";
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('response-message').textContent = "يرجى ملء جميع الحقول.";
    }
});
