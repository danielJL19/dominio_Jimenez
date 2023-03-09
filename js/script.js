function download() {
    const downloadInstancia=document.createElement('a');
    downloadInstancia.href='https://danieljimenezl.netlify.app/sodapdf-converted.pdf'
    downloadInstancia.target='_blank';
    downloadInstancia.download='CV DanielJimenez'
    document.body.appendChild(downloadInstancia)
    downloadInstancia.click()
    document.body.removeChild(downloadInstancia)
}