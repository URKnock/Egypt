package controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Dialogue;
import model.Include;
import model.Scene;
import util.JsonManager;

public class CourtController implements Controller {
    private String url;
    private int chapter;

    public CourtController(String url) {
        if (url == null) {
            throw new NullPointerException("forwardUrl is null. 이동할 URL을 입력하세요.");
        }
        this.url = url;
        this.chapter = 7;
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
			session.setAttribute("chapter", chapter - 1);
			return "/chapter02.jsp";
		}
		String choice = "-1";
		Dialogue dialogue = null;
		List<Dialogue> list = null;
    	if(request.getParameter("choice") != null && !request.getParameter("choice").equals("-1")) {
    		choice = request.getParameter("choice");
    		if(s == 3) {
    			// questN 설정
    			int qn = i+1;
    			request.setAttribute("questN", qn);
    			
    			// answer 체크
    			ArrayList<String> ans = (ArrayList) session.getAttribute("answer");
	  			if(ans == null) ans = new ArrayList<>();
	  			if(ans.size() >= qn) ans.remove(qn-1);
				ans.add(qn-1, choice);
				
				session.setAttribute("answer", ans);
				System.out.println(ans);
				
    			list = json.get(scene);
    		}
    		else if(s == 4 || s == 5 || (s == 6 && i == 0))
    			list = json.get(scene);
    		else if(choice.equals("0")) {
    			list = json.get(scene);
    		} else {
    			scene = String.valueOf(--s);
    			list = json.get(scene, choice);
    		}
    	} else {	
	    	list = json.get(scene);
    	}
	    dialogue = list.get(i);
	    
	    int flag = Integer.parseInt(dialogue.getFlag());
	    page = include.get(s, flag);
	    
	    i += 1;
	    if(list.size() <= i) {
	    	i = 0;
	    	s += 1;
	    }
	    
    	request.setAttribute("scene", s);
    	request.setAttribute("index", i);
	    request.setAttribute("flag", flag);
    	request.setAttribute("page", page);
	    request.setAttribute("choice", choice);
    	session.setAttribute("dialogue", dialogue);
    	
    	return url;
    }
}