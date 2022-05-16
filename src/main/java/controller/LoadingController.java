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
    	
    	if(chapter == 8) {
    		return "redirect:/chapter08";
    	} else if(chapter == 9) {
    		return "redirect:/chapter09";
    	}
    	
		List<String> image = new ArrayList<String>();
		List<String> webp = new ArrayList<String>();
		List<String> wav = new ArrayList<String>();
		List<String> css = new ArrayList<String>();
		List<String> js = new ArrayList<String>();
		String ch = String.format("ch%02d", chapter);
		String[] dirs = { "/resources/background/" + ch, "/resources/character/" + ch, "/resources/object/" + ch, "/resources/bgm/" + ch, "/resources/js/interaction/" + ch, "/resources/css/interaction", ch };
		for(String dirname : dirs) {
			File dir = new File(request.getRealPath(dirname));
			File[] files = dir.listFiles();
			if(files != null) {
				for(File file : files) {
					String filename = dirname + "/" + file.getName();
					if(filename.endsWith("webp")) {
						webp.add(filename);
					} else if(filename.endsWith("wav")) {
						wav.add(filename);
					} else if(filename.endsWith("css")) {
						css.add(filename);
					} else if(filename.endsWith("js")) {
						js.add(filename);
					} else {
						image.add(filename);
					}
				}
			}
		}
		
		request.setAttribute("chapter", chapter);
		request.setAttribute("image", image);
		request.setAttribute("webp", webp);
		request.setAttribute("wav", wav);
		request.setAttribute("css", css);
		request.setAttribute("js", js);
    	return url;
    }

}
