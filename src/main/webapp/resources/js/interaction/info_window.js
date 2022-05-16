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
	infoContent[1].children[0].src = "resources/" + info[num].image;
	
	
	infoContent = infoContent[2].children;
	
	infoContent[0].children[0].innerHTML = info[num].name;
	infoContent[0].children[1].children[1].innerHTML = info[num].kind;
	infoContent[1].innerHTML = info[num].content;
	
	if(info[num].kind.length > 5) {
		document.querySelector(".tag").style.width = "13vh";
		document.querySelector(".tag img").style.width = "13vh";
	}
	else {
		document.querySelector("#window .tag").style.width = "9.39vh";
		document.querySelector("#window .tag img").style.width = "auto";
	}
}

function hide_info() {
	const window = document.querySelector("#window");
	window.style.display = "none";
	const bg = document.querySelector(".info_back");
	bg.style.display = "none";
}