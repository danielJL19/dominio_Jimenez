function download() {
    const downloadInstancia=document.createElement('a');
    downloadInstancia.href='https://danieljimenezl.netlify.app/cv_dj2025.pdf'
    downloadInstancia.target='_blank';
    downloadInstancia.download='CV DanielJimenez'
    document.body.appendChild(downloadInstancia)
    downloadInstancia.click()
    document.body.removeChild(downloadInstancia)
}
AOS.init({
    easing: 'fade-up',
    duration:1200
})
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });