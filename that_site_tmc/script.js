// Gallery tab filtering
(function(){
	const tabs = document.querySelectorAll('.tab-btn');
	const items = document.querySelectorAll('.gallery-item');

	function setActive(tab){
		tabs.forEach(t=>{t.classList.toggle('active', t===tab); t.setAttribute('aria-selected', t===tab)});
		const key = tab.dataset.tab;
		items.forEach(it=>{
			const svc = it.dataset.service;
			it.style.display = (key === 'all' || svc === key) ? '' : 'none';
		});
	}

	tabs.forEach(t=>t.addEventListener('click', ()=>setActive(t)));
})();

// Contact form basic handler
(function(){
	const form = document.getElementById('quote-form');
	const status = document.getElementById('form-status');
	if(!form) return;
	form.addEventListener('submit', function(e){
		e.preventDefault();
		const name = form.name.value.trim();
		const email = form.email.value.trim();
		if(!name || !email){
			status.textContent = 'Please provide your name and email.';
			return;
		}
		status.textContent = 'Thanks — your request has been received. We will contact you shortly.';
		form.reset();
	});
})();
