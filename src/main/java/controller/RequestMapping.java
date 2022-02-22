package controller;

import java.util.HashMap;
import java.util.Map;

import model.Info;

public class RequestMapping {  
    private Map<String, Controller> mappings = new HashMap<String, Controller>();

    public void initMapping() {
    	// 각 uri에 대응되는 controller 객체를 생성 및 저장
    	mappings.put("/", new ForwardController("index.jsp"));
    	mappings.put("/chapter00", new InfoController("/chapter00.jsp", 0));
    	mappings.put("/chapter01", new ForwardController("/chapter01.jsp"));

    	mappings.put("/test", new ForwardController("/interaction/Dooribeon.jsp"));
    	mappings.put("/testd", new InfoController("/interaction/chapter05/DuatInfo.jsp", 5));
    	mappings.put("/duatg1", new ForwardController("/interaction/chapter05/Duat_g1.jsp"));
    	mappings.put("/chapter02", new HomeController("/chapter02.jsp"));

    	mappings.put("/chapter03", new ChapterController("/chapter03.jsp", 3));
    	mappings.put("/chapter04", new ChapterController("/chapter04.jsp", 4));
    	mappings.put("/chapter05_last", new ChoiceController("/interaction/chapter05/Duat_last.jsp"));
		mappings.put("/chapter05", new ChoiceController());
		mappings.put("/infot", new ForwardController("/interation/chapter05/info.jsp"));
    }

    public Controller findController(String uri) {
    	// if(mappings.get(uri) == null) { return new ForwardController(uri); }
        return mappings.get(uri);
    }
}
