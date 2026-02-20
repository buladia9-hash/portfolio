import { databases, ID } from './appwrite.js';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        const submitBtn = form.querySelector('button');
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            await databases.createDocument(
                '69984d14000bd907427e',
                'contacts',
                ID.unique(),
                {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString()
                }
            );
            
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again or email me directly.');
        } finally {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }
    });
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
});
