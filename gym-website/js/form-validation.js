document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate Name
            const name = document.getElementById('userName');
            const nameError = document.getElementById('nameError');
            if (name.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }

            // Validate Phone (Basic 10 digit check)
            const phone = document.getElementById('userPhone');
            const phoneError = document.getElementById('phoneError');
            const phoneRegex = /^\d{10}$/; // Adjust regex for specific formats if needed
            // Cleaning phone input for digits only check
            const cleanPhone = phone.value.replace(/\D/g, '');
            
            if (!phoneRegex.test(cleanPhone)) {
                phoneError.style.display = 'block';
                isValid = false;
            } else {
                phoneError.style.display = 'none';
            }

            // Validate Email (optional but if provided, should be valid)
            const email = document.getElementById('userEmail');
            if (email && email.value.trim() !== '') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    // Create error element if it doesn't exist
                    let emailError = document.getElementById('emailError');
                    if (!emailError) {
                        emailError = document.createElement('span');
                        emailError.id = 'emailError';
                        emailError.className = 'error-msg';
                        emailError.textContent = 'Please enter a valid email address.';
                        email.parentNode.appendChild(emailError);
                    }
                    emailError.style.display = 'block';
                    isValid = false;
                } else {
                    const emailError = document.getElementById('emailError');
                    if (emailError) {
                        emailError.style.display = 'none';
                    }
                }
            }

            // Validate Address
            const address = document.getElementById('userAddress');
            const addressError = document.getElementById('addressError');
            if (address.value.trim() === '') {
                addressError.style.display = 'block';
                isValid = false;
            } else {
                addressError.style.display = 'none';
            }

            if (isValid) {
                document.getElementById('formSuccess').style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    document.getElementById('formSuccess').style.display = 'none';
                }, 5000);
            }
        });
    }
});