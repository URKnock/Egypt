package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import util.JsonManager;
import model.Info;

public class InfoController implements Controller{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		HttpSession session = request.getSession(true);
		int ch = Integer.parseInt(request.getParameter("chapter"));
		
		session.setAttribute("chapter", ch);
		

		return null;
	}

}
