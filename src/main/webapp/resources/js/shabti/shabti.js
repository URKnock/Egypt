/**
 * 
 */
/*캐러셀*/
$(document).ready(function(){
  $('#owl-UI').owlCarousel();
});
$('#owl-UI').owlCarousel({
	nav:true, 
	loop: true, 
	dots: true, 
	autoplay:true, 
	rewind: true, 
	autoplayTimeout: 2000, 
	margin:10, 
	responsiveClass:true, 
	responsive:{ 
		0:{ items:2, nav:true }, 
		600:{ items:3, nav:false }, 
		1000:{ items:6, nav:true, loop:false }
	}

	});
/*데이터*/
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
	infoContent[1].innerHTML = info[num].content;
}
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
	infoContent[1].innerHTML = info[num].content;
}

/*창닫기 */
function hide_dic(){
	window.close();
}