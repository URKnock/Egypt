package controller;

import java.util.HashMap;
import java.util.Map;

import model.Info;

public class RequestMapping {  
    private Map<String, Controller> mappings = new HashMap<String, Controller>();

    public void initMapping() {
    	// 각 uri에 대응되는 controller 객체를 생성 및 저장
    	mappings.put("/", new ForwardController("index.jsp"));
    	mappings.put("/intro", new ForwardController("/intro.jsp"));
    	mappings.put("/chapter00", new InfoController("/chapter00.jsp", 0));
    	mappings.put("/chapter01", new ForwardController("/chapter01.jsp"));
    	mappings.put("/load", new LoadingController("/loading.jsp"));
    	mappings.put("/test", new ForwardController("/interaction/Dooribeon.jsp"));
    	mappings.put("/testd", new InfoController("/interaction/chapter05/DuatInfo.jsp", 5));
    	mappings.put("/duatg1", new ForwardController("/interaction/chapter05/Duat_g1.jsp"));
    	mappings.put("/duatg3", new ForwardController("/interaction/chapter05/duatg3.jsp"));
    	mappings.put("/chapter02", new HomeController("/chapter02.jsp"));
    	mappings.put("/chapter02_2", new HomeController("/interaction/chapter02/chapter02_2.jsp"));
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
		mappings.put("/chapter07", new CourtController("/chapter07.jsp", 7));
		mappings.put("/chapter08", new ChapterController("/chapter08.jsp", 8));
		mappings.put("/chapter10", new CourtController("/chapter14.jsp", 10));
		
		mappings.put("/chapter11", new ChapterController("/chapter11.jsp", 11));
		mappings.put("/chapter11part2", new ChapterController("/chapter11.jsp", 11));
		mappings.put("/chapter11part3", new ChapterController("/chapter11.jsp", 11));
		
		mappings.put("/chapter12", new ChapterController("/chapter12.jsp", 12));
		mappings.put("/chapter12part2", new ChapterController("/chapter12.jsp", 12));
		mappings.put("/chapter12part3", new ChapterController("/chapter12.jsp", 12));
		
		mappings.put("/chapter13", new ChapterController("/chapter13.jsp", 13));
		mappings.put("/chapter13part2", new ChapterController("/chapter13.jsp", 13));
		mappings.put("/chapter13part3", new ChapterController("/chapter13.jsp", 13));
		
		mappings.put("/shabti_main", new ForwardController("/shabti/shabti_main.jsp"));
		mappings.put("/shabti_nav", new ForwardController("/shabti/shabti_nav.jsp"));
		//mappings.put("/shabti_all", new InfoController("/shabti/shabti_all.jsp", ));->전체 정보 파일은 어떻게 해야할지 몰라서 일단 두기
		mappings.put("/shabti_prepare", new InfoController("/shabti/shabti_prepare.jsp", 3));
		mappings.put("/shabti_conscious", new InfoController("/shabti/shabti_conscious.jsp", 4));
		mappings.put("/shabti_duat", new InfoController("/shabti/shabti_duat.jsp", 5));
		mappings.put("/shabti_law", new InfoController("/shabti/shabti_law.jsp", 6));
		mappings.put("/shabti_heaven", new InfoController("/shabti/shabti_heaven.jsp", 9));
		mappings.put("/shabti_hell", new InfoController("/shabti/shabti_hell.jsp", 11));
		
		
    }


    public Controller findController(String uri) {
    	// if(mappings.get(uri) == null) { return new ForwardController(uri); }
        return mappings.get(uri);
    }
}
