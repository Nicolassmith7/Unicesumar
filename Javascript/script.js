
document.getElementById('learnMoreBtn')?.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if(form){
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if(name.length < 3){
            formMessage.textContent = 'Por favor, insira um nome válido (mínimo 3 caracteres).';
            formMessage.style.color = 'red';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            formMessage.textContent = 'Por favor, insira um email válido.';
            formMessage.style.color = 'red';
            return;
        }

        if(message.length < 10){
            formMessage.textContent = 'Mensagem deve conter pelo menos 10 caracteres.';
            formMessage.style.color = 'red';
            return;
        }

        formMessage.textContent = 'Mensagem enviada com sucesso! Obrigado.';
        formMessage.style.color = 'green';

        form.reset();
    });
}

