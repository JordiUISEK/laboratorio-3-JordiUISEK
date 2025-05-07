document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle').forEach(header => {
        header.onclick = () => {
        header.nextElementSibling.classList.toggle('open');
        };
    });

    const btn = document.getElementById('scrollToTop');
    window.onscroll = () => {
        btn.classList.toggle('visible', window.scrollY > 100);
    };
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});