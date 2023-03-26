const buyBtns = document.querySelectorAll('.js-sbtn')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal-close')
const payBtn = document.querySelector('.confirm-search')

function showBuyTickets() {
    modal.classList.add('open')
}

function clearBuyTickets() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}
close.addEventListener('click', clearBuyTickets)
payBtn.addEventListener('click', clearBuyTickets)

const gcBtn = document.querySelector('.js-send-info')
const modal_ctc = document.querySelector('.modal-contact')
const submitBtn = document.querySelector('.js-close-btn-contact')

function showModalContact() {
    modal_ctc.classList.add('open')
}

function clearModalContact() {
    modal_ctc.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}
gcBtn.addEventListener('click', showModalContact)
submitBtn.addEventListener('click', clearModalContact)