var info;

function getJsonData(path)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                fileStr = rawFile.responseText;
                info = JSON.parse(fileStr);
            }
        }
    }
    rawFile.send(null);
}

getJsonData('resources/json/info.json');

function show_info(index) {
	if(typeof chapter != 'undefined') {
		var i = 0;
		while(info[i].chapter != chapter) i++;
		index += i;	
	}
	
	var num = index;
	
	const bg = document.querySelector(".info_back"); 
	bg.style.display = "block"; 
	bg.style.opacity = "1";
	const window = document.querySelector("#window");
	window.style.display = "block";
	
	infoContent = window.children;
	 
	var Imagelink = info[num].image;
	if(Imagelink != "link") {
		infoContent[0].style.backgroundImage = "url('"+ info[num].image +"')";
	}
	
	infoContent = infoContent[1].children;
	
	infoContent[0].innerHTML = info[num].name;
	infoContent[1].innerHTML = info[num].detail;
}
function prev_click(index){
	var num = index;
	const window = document.querySelector("#window");
	window.style.display = "block";
	
	infoContent = window.children;
	const target = document.getElementById('prev_btn');
	if(num == 0){
		target.disabled = true;
	} 
	var Imagelink = info[num-1].image;
	if(Imagelink != "link") {
		infoContent[0].style.backgroundImage = "url('"+ info[num-1].image +"')";
	}
	
	infoContent = infoContent[1].children;
	
	infoContent[0].innerHTML = info[num-1].name;
	infoContent[1].innerHTML = info[num-1].detail;
}
function next_click(index){
	const target = document.getElementById('next_btn');
	//index값 마지막일때 수정해야함(버튼 값 disabled로 다음으로 안넘어가게)
	if(num == 0){
		target.disabled = true;
	} 
	var Imagelink = info[num-1].image;
	if(Imagelink != "link") {
		infoContent[0].style.backgroundImage = "url('"+ info[num+1].image +"')";
	}
	
	infoContent = infoContent[1].children;
	
	infoContent[0].innerHTML = info[num+1].name;
	infoContent[1].innerHTML = info[num+1].detail;
}