package controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoadingController implements Controller {
    private String url;

    public LoadingController(String url) {
        if (url == null) {
            throw new NullPointerException("forwardUrl is null. 이동할 URL을 입력하세요.");
        }
        this.url = url;
    }

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	HttpSession session = request.getSession(true);
    	int chapter = 3;
    	if(request.getParameter("chapter") != null) {
    		chapter = Integer.parseInt(request.getParameter("chapter"));
    	}
    	
		List<String> paths = new ArrayList<String>();
		List<String> webps = new ArrayList<String>();
		List<String> wavs = new ArrayList<String>();
		String ch = String.format("ch%02d", chapter);
		String[] dirs = { "/resources/background/" + ch, "/resources/character/" + ch, "/resources/object/" + ch, "/resources/bgm/" + ch };
		for(String dirname : dirs) {
			File dir = new File(request.getRealPath(dirname));
			File[] files = dir.listFiles();
			if(files != null) {
				for(File file : files) {
					String filename = dirname + "/" + file.getName();
					if(filename.endsWith("webp")) {
						webps.add(filename);
					} else if(filename.endsWith("wav")) {
						wavs.add(filename);
					} else {
						paths.add(filename);
					}
				}
			}
		}
		request.setAttribute("chapter", chapter);
		request.setAttribute("names", paths);
		request.setAttribute("webps", webps);
		request.setAttribute("wavs", wavs);
    	return url;
    }
}
