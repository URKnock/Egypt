package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

public class HomeController implements Controller {
    private String url;
    private String chapter;

    public HomeController(String url) {
        if (url == null) {
            throw new NullPointerException("forwardUrl is null. 이동할 URL을 입력하세요.");
        }
        this.url = url;
        //this.chapter = chapter;
    }

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	//HttpSession session = request.getSession(true); //세션 정보를 가져온다. ==> 필요할 때만 사용...
    	
    	if(request.getParameter("chapter") == null) { //요청에 chapter 정보가 없다면 초기화 ==> request에서 가져올까 session에서 가져올까? ==> 일단은 request
    		chapter = "1";
    	} else { //있다면 그대로 가져와서 활용한다. 
    		chapter = request.getParameter("chapter");
    	}
    	
    	/*
    	if(json.getData().size() == s) {
			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println("<script> alert('끝!'); </script>");
			out.flush();
			return url;
		}*/ //==> 각 챕터를 마칠 때마다 request에 다음에 가야할 챕터 번호를 넣어주는 건? (submit())
    	
    	int c = Integer.parseInt(chapter);

    	request.setAttribute("chapter", c); //이 번호에 따라 스테이지를 해금시켜야 함 //chapter 번호는 가장 최근에 클리어한 것이 들어가야 함
    	//session.setAttribute("dialogue", dialogue);
    	
    	return url;
    }