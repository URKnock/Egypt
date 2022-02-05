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

getJsonData('../../resources/json/info.json');

function show_info(num) {
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

function hide_info() {
	const window = document.querySelector("#window");
	window.style.display = "none";
}