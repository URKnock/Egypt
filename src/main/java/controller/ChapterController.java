package controller;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Dialogue;
import model.Include;
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
    	Include include = null;
    	HttpSession session = request.getSession(true);
    	
    	String data = "data_" + chapter;
    	String page = "include_" + chapter;
    	if(session.getAttribute(data) == null) {
    		JsonManager jsonManager = new JsonManager();
    		String read = jsonManager.ReadJson("script.json");
    		json = jsonManager.ParseScene(read, chapter);
    		session.setAttribute(data, json);
    		
    		read = jsonManager.ReadJson("include.json");
    		include = jsonManager.ParseInclude(read, chapter);
    		session.setAttribute(page, include);
    	} else {
    		json = (Scene) session.getAttribute(data);
    		include = (Include) session.getAttribute(page);
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
    	
	    int flag = dialogue.getFlag();
	    page = include.get(scene, flag);
	    
	    System.out.println("page: " + page);
	    
    	request.setAttribute("scene", scene);
    	request.setAttribute("index", index);
    	request.setAttribute("page", page);
    	session.setAttribute("dialogue", dialogue);
    	
    	return url;
    }
}
