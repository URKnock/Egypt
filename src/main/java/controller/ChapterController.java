package controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Dialogue;
import model.Scene;
import util.JsonManager;

public class ChapterController implements Controller {
    private String url;

    public ChapterController(String url) {
        if (url == null) {
            throw new NullPointerException("forwardUrl is null. 이동할 URL을 입력하세요.");
        }
        this.url = url;
    }

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	int scene, index;
    	Scene json = null;
    	HttpSession session = request.getSession(true);
    	
    	if(session.getAttribute("data") == null) {
    		JsonManager jsonManager = new JsonManager();
    		String data = jsonManager.ReadJson("script.json");
    		json = jsonManager.ParseJson(data);
    		session.setAttribute("data", json);
    	} else {
    		json = (Scene) session.getAttribute("data");
    	}
    	
    	if(request.getParameter("scene") == null) {
    		scene = 0;
    		index = 0;
    	} else {
    		scene = Integer.parseInt(request.getParameter("scene"));
    		index = Integer.parseInt(request.getParameter("index"));
    	}

    	List<Dialogue> list = json.get(scene);
    	Dialogue dialogue = list.get(index);
    	
    	index += 1;
    	if(list.size() == index) {
    		index = 0;
    		scene += 1;
    	}

    	request.setAttribute("scene", scene);
    	request.setAttribute("index", index);
    	session.setAttribute("list", list);
    	session.setAttribute("dialogue", dialogue);
    	
    	return url;
    }
}
