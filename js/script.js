function download() {
    const downloadInstancia=document.createElement('a');
    downloadInstancia.href='https://danieljimenezl.netlify.app/cv2024.pdf'
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