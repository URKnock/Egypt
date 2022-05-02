const html = document.querySelector("html");
const target = document.querySelector("#userArm");
let center = {
    x : target.getBoundingClientRect().left + (target.clientWidth/2),
    y : target.getBoundingClientRect().top + (target.clientHeight/2)
}

window.addEventListener('resize', ()=>{
    center = {
        x : target.getBoundingClientRect().left + (target.clientWidth/2),
        y : target.getBoundingClientRect().top + (target.clientHeight/2)
    }
})

html.addEventListener('mousemove', (e)=>{
	    if(e.clientX > 600) {
		    const x = center.x - e.clientX;
		    const y = center.y - e.clientY;
		    
		    const radian = Math.atan2(y, x);
		    const degree = (radian * 180 / Math.PI).toFixed(0);
		
		    target.style.transform = 'translate(-50%, -50%) rotate(' + degree + 'deg)';
		}
	})
