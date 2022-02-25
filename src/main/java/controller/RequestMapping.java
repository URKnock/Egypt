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
    	mappings.put("/chapter04", new ChapterController("/chapter04.jsp", 4));
		mappings.put("/chapter05", new ChoiceController());
		mappings.put("/chapter06", new ChapterController("/chapter06.jsp", 6));
    }

    public Controller findController(String uri) {
    	// if(mappings.get(uri) == null) { return new ForwardController(uri); }
        return mappings.get(uri);
    }
}
