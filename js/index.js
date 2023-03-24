const buyBtns=document.querySelector('.btn')
		const modal = document.querySelector('.modal')
		const close = document.querySelector('.modal-close')
		const payBtn = document.querySelector('.buy-tickets')
		function showBuyTickets(){
			modal.classList.add('open')
		}
		
		function clearBuyTickets(){
			modal.classList.remove('open')
		}

		for(const buyBtn of buyBtns){
			buyBtn.addEventListener('click',showBuyTickets);
		}
		close.addEventListener('click',clearBuyTickets)
		payBtn.addEventListener('click',clearBuyTickets)