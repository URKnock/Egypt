package controller;

import java.util.HashMap;
import java.util.Map;

public class RequestMapping {  
    private Map<String, Controller> mappings = new HashMap<String, Controller>();

    public void initMapping() {
    	// 각 uri에 대응되는 controller 객체를 생성 및 저장
    	mappings.put("/", new ForwardController("index.jsp"));
    	mappings.put("/chapter00", new ForwardController("/chapter00.jsp"));
    	mappings.put("/chapter01", new ForwardController("/chapter01.jsp"));
    	mappings.put("/chapter02", new ForwardController("/chapter02.jsp"));
    	mappings.put("/chapter03", new ChapterController("/chapter03.jsp", 3));
    	mappings.put("/chapter05", new ChapterController("/chapter05.jsp", 5));
    }

    public Controller findController(String uri) {
    	// if(mappings.get(uri) == null) { return new ForwardController(uri); }
        return mappings.get(uri);
    }
}
