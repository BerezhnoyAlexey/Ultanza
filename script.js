function openModal(id) {
    document.getElementsByClassName(`modal-${id}`)[0].classList.add('active');
    document.getElementsByClassName("body")[0].classList.add('open__window');
}
function closeModal(id) {
    document.getElementsByClassName(`modal-${id}`)[0].classList.remove('active');
    document.getElementsByClassName("body")[0].classList.remove('open__window');
}