function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}


const myObserver = new IntersectionObserver((animation) => {
    animation.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('team-categoryShow')
        } else{
            entry.target.classList.remove('team-categoryShow')
        }
    })
})

const equipeS = document.querySelectorAll('.team-category')

equipeS.forEach((element) => myObserver.observe(element))


//Cards
const tuObserver = new IntersectionObserver((animationTu) => {
    animationTu.forEach( (entry1) => {
        if(entry1.isIntersecting){
            entry1.target.classList.add('show')
        } else{
            entry1.target.classList.remove('show')
        }
    })
})

const equipeS1 = document.querySelectorAll('.hidden')

equipeS1.forEach((element) => tuObserver.observe(element))


//Cards Movimento
document.querySelectorAll('.CardL').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // 👉 O certo é manter o rotateX positivo pra baixo, negativo pra cima
        const rotateX = ((y - centerY) / centerY) * 10; 
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});




// Seleciona todas as imagens com a classe .moeda-alvo
const alvos = document.querySelectorAll('.moeda-alvo');

alvos.forEach(alvo => {
    alvo.addEventListener('click', (e) => {
    const moeda = document.createElement('div');
    moeda.classList.add('moeda');

    const rect = alvo.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + window.scrollY;

    moeda.style.left = `${x - 20}px`;
    moeda.style.top = `${y - 20}px`;

    document.body.appendChild(moeda);

    setTimeout(() => {
        moeda.remove();
    }, 1000);
    });
});
