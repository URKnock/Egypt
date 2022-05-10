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

    	mappings.put("/load", new LoadingController("/loading.jsp"));
    	mappings.put("/test", new ForwardController("/interaction/Dooribeon.jsp"));
    	mappings.put("/testd", new InfoController("/interaction/chapter05/DuatInfo.jsp", 5));
    	mappings.put("/duatg1", new ForwardController("/interaction/chapter05/Duat_g1.jsp"));
    	mappings.put("/duatg3", new ForwardController("/interaction/chapter05/duatg3.jsp"));
    	mappings.put("/chapter02", new HomeController("/chapter02.jsp"));
    	mappings.put("/chapter03", new ChapterController("/chapter03.jsp", 3));
    	mappings.put("/chapter04", new ChapterController("/chapter04.jsp", 4));
    	mappings.put("/chapter05_last", new ChoiceController("/interaction/chapter05/Duat_last.jsp"));
		mappings.put("/chapter05", new ChoiceController());
		mappings.put("/duatgamestart", new ForwardController("/interaction/chapter05/DuatGameStart.jsp"));
		mappings.put("/chapter09", new InfoController("/chapter09.jsp", 9));
		mappings.put("/chapter09_2", new InfoController("/interaction/chapter09/ch09_2.jsp", 9));
		mappings.put("/chapter09_3", new InfoController("/interaction/chapter09/ch09_3.jsp", 9));
		mappings.put("/chapter09_4", new InfoController("/interaction/chapter09/ch09_4.jsp", 9));
		mappings.put("/chapter09_5", new InfoController("/interaction/chapter09/ch09_5.jsp", 9));
		mappings.put("/chapter09_6", new ChapterController("/interaction/chapter09/ch09_6.jsp", 9));		
		mappings.put("/chapter06", new ChapterController("/chapter06.jsp", 6));
		mappings.put("/chapter07", new CourtController("/chapter07.jsp"));
		mappings.put("/chapter08", new ChapterController("/chapter08.jsp", 8));
		mappings.put("/chapter11", new ChapterController("/chapter11.jsp", 11));
		mappings.put("/chapter11part2", new ChapterController("/interaction/chapter11/chapter11_2.jsp", 11));
		mappings.put("/chapter11part3", new ChapterController("/interaction/chapter11/chapter11_3.jsp", 11));
    }


    public Controller findController(String uri) {
    	// if(mappings.get(uri) == null) { return new ForwardController(uri); }
        return mappings.get(uri);
    }
}
