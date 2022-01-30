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

public class ChoiceController implements Controller {
    private String url;
    private int chapter;

    public ChoiceController() {
        this.url = "/chapter03.jsp";
        this.chapter = 5;
    }

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String scene, index;
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
    		scene = "0";
    		index = "0";
    	} else {
    		scene = request.getParameter("scene");
    		index = request.getParameter("index");
    	}
    	
	    int s = Integer.parseInt(scene);
	    int i = Integer.parseInt(index);

		if(json.getData().size() == s) {
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println("<script> alert('끝!'); </script>");
			out.flush();
			return url;
		}
		
		Dialogue dialogue = null;
		List<Dialogue> list = null;
		
		int score = session.getAttribute("score") == null ? 0 : (int) session.getAttribute("score");
		String choice = request.getParameter("choice") == null ? "null" : request.getParameter("choice");
    	if(!choice.equals("null")) {
    		if(choice.equals("0")) {
    			list = json.get(scene);
    		} else {
    			list = json.get(scene, choice);
    			i = 0;
    		}
    		s += 1;
    	} else {	
	    	list = json.get(scene);
    	}
    	dialogue = list.get(i);
    	
    	switch(scene) {
	    	case "11":
	    		if(choice.equals("0")) score += 1;
	    		break;
	    	case "12":
	    	case "13":
	    		if(choice.equals("1")) score += 1;
	    		break;
	    	case "14":
	    		String result = String.valueOf(3 - score);
	    		list = json.get(scene, result);
	    		dialogue = list.get(i);
	    		score = 0;
	    	default:
		    	i += 1;
			    if(list.size() >= i) {
			    	i = 0;
			    	s += 1;
			    }
			    break;
    	}
    	
	    int flag = Integer.parseInt(dialogue.getFlag());
	    page = include.get(s, flag);
	    
    	request.setAttribute("scene", s);
    	request.setAttribute("index", i);
    	request.setAttribute("page", page);
    	session.setAttribute("score", score);
    	session.setAttribute("dialogue", dialogue);
    	
    	return url;
    }
}
