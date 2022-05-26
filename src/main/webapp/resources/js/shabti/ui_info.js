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

getJsonData('../json/info.json');

function show_info(index) {
	if(typeof chapter != 'undefined') {
		var i = 0;
		while(info[i].chapter != chapter) i++;
		index += i;	
	}
	
	var num = index;
	
	const window = document.querySelector("#info_window");
	window.style.display = "block";
	
	infoContent = window.children;
	
	var Imagelink = info[num].image;
	if(Imagelink != "link") {
		infoContent[0].style.backgroundImage = "url('"+ info[num].image +"')";
	}
	
	infoContent = infoContent[1].children;
	
	infoContent[0].innerHTML = info[num].name;
	infoContent[1].innerHTML = info[num].name;
	infoContent[2].innerHTML = info[num].detail;
}

function hide_info() {
	const window = document.querySelector("#window");
	window.style.display = "none";
}