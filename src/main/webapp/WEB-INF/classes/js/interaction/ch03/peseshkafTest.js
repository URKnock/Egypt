const peseshkaf = document.querySelector(".peseshkaf"); //peseshkaf 클래스의 객체 중 가장 첫번째 것을 리턴
	
let spotCount = 0; //눈, 얼굴, 입을 클릭했을 때의 카운트
peseshkaf.isHeld = false; //페세슈카프를 들고 있는지 여부. 맨처음에는 false 

$('.peseshkaf').click(function(e) { //클릭하면 이미지를 교체하고 마우스를 따라다닌다. (런타임)
	document.getElementById('peseshkaf').setAttribute('src', "../resources/object/ch04/4_3_1.png");
	document.addEventListener("mousemove", (e) => { //(익명함수) 마우스를 따라다니는 이벤트
				const mouseX = e.clientX;
	    		const mouseY = e.clientY;
	            
	            peseshkaf.style.left = mouseX + 'px';
	            peseshkaf.style.top = mouseY + 'px';
	            
	            peseshkaf.isHeld = true; //클릭하면 true ==> 페세슈카프를 들고 있음
	        });
});

$('html').click(function(e) {
	if(peseshkaf.isHeld){ //페세슈카프를 든 상태에서
		if(!$(e.target).hasClass("circle")) { //클릭해야할 영역 밖을 누른다면
			console.log("영역 밖입니다."); 
			//*문제* 여기서 페세슈카프를 내려놓도록 하고싶었는데... 이벤트 리스너 제거가 안 됩니다.
			//다만 내려놓지 못하더라도 전개에 지장이 없으니 이 부분은 보류해두었습니다.
			//$(".peseshkaf").off("mousemove");
			//peseshkaf.isHeld = false;
		} 
	}	
});

eyeSpot.onmousedown = function(event) {
	//페세슈카프를 들고 있는 상태에서 클릭하면 반응, 아니면 반응 X
	if(peseshkaf.isHeld){
		console.log("사자의 눈을 클릭하였음")
		document.getElementById('eyeSpot').className += ' fade-out-circle'; //페이드아웃 애니메이션 재생
		spotCount = spotCount + 1;
		spotCheck();
	}
	else {
		console.log("페세슈카프를 들고 있지 않음")
	}
}

faceSpot.onmousedown = function(event) {
	//페세슈카프를 들고 있는 상태에서 클릭하면 반응, 아니면 반응 X
	if(peseshkaf.isHeld){
		console.log("사자의 얼굴을 클릭하였음")
		document.getElementById('faceSpot').className += ' fade-out-circle'; //페이드아웃 애니메이션 재생
		spotCount = spotCount + 1;
		spotCheck();
	}
	else {
		console.log("페세슈카프를 들고 있지 않음")
	}
}

mouthSpot.onmousedown = function(event) {
	//페세슈카프를 들고 있는 상태에서 클릭하면 반응, 아니면 반응 X
	if(peseshkaf.isHeld){
		console.log("사자의 입을 클릭하였음")
		document.getElementById('mouthSpot').className += ' fade-out-circle'; //페이드아웃 애니메이션 재생
		spotCount = spotCount + 1;
		spotCheck();
	}
	else {
		console.log("페세슈카프를 들고 있지 않음")
	}
}

function spotCheck() {
	if(spotCount == 3){
		$("form").submit();
		$(".peseshkaf").off("mousemove"); //*문제* 여기서 딱 제거되면 좋을텐데, 역시나 안 됩니다...
	}
}