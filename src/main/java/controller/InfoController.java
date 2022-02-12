package controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import util.JsonManager;
import model.Include;
import model.Info;

public class InfoController implements Controller{
	private int chapter;
	private String url;
	
	public InfoController(String url, int chapter) {
		if (url == null) {
			throw new NullPointerException("forwardUrl is null. 이동할 URL을 입력하세요.");
		}
		this.url = url;
		this.chapter = chapter;
        
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		List<Info> json = new ArrayList<>(); 
		List<Info> saved = new ArrayList<>();
		HttpSession session = request.getSession(true);
		
		String data = "info_" + chapter;
		
		if(session.getAttribute(data) == null) {
    		JsonManager jsonManager = new JsonManager();
    		String read = jsonManager.ReadJson("info.json");
    		//파싱함
    		json = jsonManager.ParseInfo(read);  
    		session.setAttribute(data, json);
    		
    		//session.setAttribute(page, include);

    	} else {
    		json =  (List<Info>)session.getAttribute(data);	
    	}

		System.out.println(chapter); //챕터 몇인지 그냥 확인용...
		session.setAttribute("info", json.get(18)); 
		session.setAttribute("info2", json.get(19));
		saved.add(json.get(18));
		saved.add(json.get(19));
		return this.url;
	}

}
