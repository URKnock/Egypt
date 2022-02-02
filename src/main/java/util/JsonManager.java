package util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

import model.Choice;
import model.Dialogue;
import model.Include;
import model.Scene;
import model.Info;

public class JsonManager { 
	public String ReadJson(String filename) { 
		String result = "";
		String path = this.getClass().getResource("/").getPath();
		
		try {
			File file = new File(path + "../../resources/json/" + filename);
			BufferedReader bufReader = new BufferedReader(new InputStreamReader(new FileInputStream(file),"UTF-8"));
			System.out.println(path + "../../resources/json/" + filename);
			String line = "";
			while((line = bufReader.readLine()) != null){
				result += line;
            }
			bufReader.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		}
		
		return result;
	}
	
	public Include ParseInclude(String json, int chapter) {
		return null;
	}
	
	public List<Info> ParseInfo(String json, int chapter) {
		JSONArray data = new JSONArray(json);
		List<Info> infos = new ArrayList<>();
		
	for(int i = 0; i < data.length(); i++) {
		JSONObject j = data.getJSONObject(i);
		//다넣음
		int ch = j.getInt("chapter"); //j에서 챕터꺼내서
		
		Info info = new Info(); 
		
		info.setName(j.getString("name"));
		info.setContent(j.getString("content"));
		info.setDetail(j.getString("detail"));
		info.setImg("/resources/" + j.getString("image"));
		info.setKind(j.getString("kind"));
		info.setChapter(ch);	
		infos.add(info);
		}
		
		return infos; 
	}
	
	public Scene ParseScene(String json, int chapter) {
		JSONArray data = new JSONArray(json);
		Scene scene = new Scene(); 
		
		for(int i = 0; i < data.length(); i++) {
			JSONObject j = data.getJSONObject(i);
			
			int sc = j.getInt("scene");
			int flag = j.getInt("flag");
			int ch = j.getInt("chapter");
			
			if(ch < chapter) continue;
			else if(ch > chapter) break;
			
			Dialogue dialogue = new Dialogue();
			dialogue.setName(j.getString("name"));
	    	dialogue.setNickname(j.getString("nickname"));
	    	dialogue.setContent(j.getString("content"));
	    	dialogue.setImage("/resources/" + j.getString("image"));
	    	dialogue.setFlag(flag);
	    	dialogue.setScene(sc);
	    	
	    	if(!j.get("choice").toString().equals("없음")) {
	    		List<Choice> choices = new ArrayList<>();
	    		JSONObject c = j.getJSONObject("choice");
	    		dialogue.setPlayer("/resources/" + c.getString("image"));
	    		for(int k = 0; k  < c.length() - 1; k++) {
	    			Choice choice = new Choice();
	    			choice.setId(String.valueOf(k));
	    			choice.setContent(c.getString(String.valueOf(k)));
	    			choices.add(choice);
	    		}
	    		dialogue.setChoice(choices);
	    	} else {
	    		dialogue.setChoice(null);
	    	}
			
			if(flag == 0) {
				List<Dialogue> list = scene.get(sc);
				if(list == null) list = new ArrayList<>();
		    	list.add(dialogue);
		    	scene.put(sc, list);
			} else {
				List<Dialogue> list = null;
				Map<Integer, List<Dialogue>> m = scene.getFlag().get(sc);
				if(m != null) list = m.get(m.keySet().toArray()[0]);
				if(list == null) list = new ArrayList<>();
				list.add(dialogue);
				scene.put(sc, flag, list);
			}
		}
		return scene;
	}
}
