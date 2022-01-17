package util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import model.Choice;
import model.Dialogue;
import model.Scene;

public class JsonManager {
	public String ReadJson(String filename) {
		String result = "";
		String path = this.getClass().getResource("/").getPath();
		
		try {
			File file = new File(path + "../../resources/json/" + filename);
			BufferedReader bufReader = new BufferedReader(new InputStreamReader(new FileInputStream(file),"UTF-8"));
			
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
	
	public Scene ParseJson(String json) {
		JSONArray data = new JSONArray(json);
		Scene scene = new Scene();
		for(int i = 0; i < data.length(); i++) {
			JSONObject j = data.getJSONObject(i);
			
			List<Dialogue> list;
			if(scene.get(j.getInt("scene")) == null) {
				list = new ArrayList<>();
			} else {
				list = scene.get(j.getInt("scene"));
			}
			
			Dialogue dialogue = new Dialogue();
			dialogue.setName(j.getString("name"));
	    	dialogue.setNickname(j.getString("nickname"));
	    	dialogue.setContent(j.getString("content"));
	    	dialogue.setImage("/resources/" + j.getString("image"));
	    	dialogue.setFlag(j.getInt("flag"));
	    	dialogue.setScene(j.getInt("scene"));
	    	
	    	if(!j.get("choice").toString().equals("없음")) {
	    		List<Choice> choices = new ArrayList<>();
	    		JSONObject c = j.getJSONObject("choice");
	    		dialogue.setPlayer("/resources/" + c.getString("image"));
	    		for(int k = 0; k < c.length() - 1; k++) {
	    			Choice choice = new Choice();
	    			choice.setId(String.valueOf(k));
	    			choice.setContent(c.getString(String.valueOf(k)));
	    			choices.add(choice);
	    		}
	    		dialogue.setChoice(choices);
	    	} else {
	    		dialogue.setChoice(null);
	    	}
	    	
	    	list.add(dialogue);
			if(scene.get(j.getInt("scene")) == null) {
				scene.put(j.getInt("scene"), list);
			} else {
				scene.replace(j.getInt("scene"), list);
			}
		}
		
		return scene;
	}
}
