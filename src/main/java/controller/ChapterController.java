package controller;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Dialogue;
import model.Scene;
import util.JsonManager;

public class ChapterController implements Controller {
    private String url;
    private int chapter;

    public ChapterController(String url, int chapter) {
        if (url == null) {
            throw new NullPointerException("forwardUrl is null. 이동할 URL을 입력하세요.");
        }
        this.url = url;
        this.chapter = chapter;
    }

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	int scene, index;
    	Scene json = null;
    	HttpSession session = request.getSession(true);
    	
    	String name = "data_" + chapter;
    	if(session.getAttribute(name) == null) {
    		JsonManager jsonManager = new JsonManager();
    		String data = jsonManager.ReadJson("script.json");
    		json = jsonManager.ParseJson(data, chapter);
    		session.setAttribute(name, json);
    	} else {
    		json = (Scene) session.getAttribute(name);
    	}
    	
    	if(request.getParameter("scene") == null) {
    		scene = 0;
    		index = 0;
    	} else {
    		scene = Integer.parseInt(request.getParameter("scene"));
    		index = Integer.parseInt(request.getParameter("index"));
    	}

		if(json.getData().size() == scene) {
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println("<script> alert('끝!'); </script>");
			out.flush();
			return url;
		}
    	
		Dialogue dialogue = null;
		List<Dialogue> list = null;
    	if(request.getParameter("choice") != null) {
    		int choice = Integer.parseInt(request.getParameter("choice"));
    		if(choice == 0) {
    			list = json.get(scene);
    		} else {
    			scene--;
    			list = json.getFlag().get(scene).get(choice);
    		}
    	} else {	
	    	list = json.get(scene);
    	}
	    dialogue = list.get(index);
	    
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
