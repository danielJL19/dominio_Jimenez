function download() {
    const downloadInstancia=document.createElement('a');
    downloadInstancia.href='http://127.0.0.1:5502/sodapdf-converted.pdf'
    downloadInstancia.target='_blank';
    downloadInstancia.download='CV DanielJimenez'
    document.body.appendChild(downloadInstancia)
    downloadInstancia.click()
    document.body.removeChild(downloadInstancia)
}