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
	
	public InfoController(String url) {
		if (url == null) {
			throw new NullPointerException("forwardUrl is null. 이동할 URL을 입력하세요.");
		}
		this.url = url;
        
	}

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		List<Info> json = new ArrayList<>(); 
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
    		json =  (List)session.getAttribute(data);	
    	}

		return this.url;
	}

}
