window.addEventListener("load", (evt)=>{
	if(window.IntersectionObserver){
		let observer = new IntersectionObserver((entries, observer) => { 
			entries.forEach(entry => {
				if(entry.isIntersecting){
					loadImage(entry.target);
				}
			});
		},
		{
			rootMargin: '0px 0px 0px 0px'
		});
		document.querySelectorAll('.lazy-loading').forEach(img => { observer.observe(img) });
	}else{
		document.querySelectorAll('.lazy-loading').forEach(entry => {
			loadImage(entry);
		});
	}
});

const loadImage = (node)=>{
	node.classList.add("lazy-loaded");
	node.classList.remove("lazy-loading");
}
