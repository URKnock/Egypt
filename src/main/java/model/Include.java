package model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Include implements Serializable {
	private Map<Integer, Map<Integer, String>> data;
	
	public Include() {
		data = new HashMap<>();
	}
	
	public Map<Integer, Map<Integer, String>> getData() {
		return data;
	}
	public void setData(Map<Integer, Map<Integer, String>> data) {
		this.data = data;
	}

	public Map<Integer, String> get(int scene) {
		return data.get(scene);
	}
	
	public void put(int scene, Map<Integer, String> map) {
		if(data.get(scene) == null) {
			data.put(scene, map);
		} else {
			data.replace(scene, map);
		}
	}
	
	public void replace(int index,  Map<Integer, String> map) {
		data.replace(index, map);
	}
	
	public String get(int scene, int flag) {
		if(data.get(scene) == null) return null;
		return data.get(scene).get(flag);
	}
	
	public void put(int scene, int flag, String page) {
		Map<Integer, String> map = data.get(scene);
		if(map == null) {
			map = new HashMap<>();
			map.put(flag, page);
			data.put(scene, map);
		} else {
			if(map.get(flag) == null) {
				map.put(flag, page);
			} else {
				map.replace(flag, page);
			}
			data.replace(scene, map);
		}
	}
}
