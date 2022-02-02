package model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Scene implements Serializable {
	private Map<String, List<Dialogue>> data;
	private Map<String, Map<String, List<Dialogue>>> flag;

	public Scene() {
		data = new HashMap<>();
		flag = new HashMap<>();
	}
	
	public Map<String, List<Dialogue>> getData() {
		return data;
	}

	public void setData(Map<String, List<Dialogue>> data) {
		this.data = data;
	}
	
	public List<Dialogue> get(String sc) {
		return data.get(sc);
	}
	
	public void put(String index, List<Dialogue> list) {
		if(data.get(index) == null) {
			data.put(index, list);
		} else {
			data.replace(index, list);
		}
	}
	
	public Map<String, Map<String, List<Dialogue>>> getFlag() {
		return flag;
	}

	public void setFlag(Map<String, Map<String, List<Dialogue>>> flag) {
		this.flag = flag;
	}


	public List<Dialogue> get(String scene, String index) {
		System.out.println(flag.get(scene).size());
		System.out.println(flag.get(scene).keySet());
		System.out.println("get: " + scene + ", " + index);
		Map<String, List<Dialogue>> map = flag.get(scene);
		return map.get(index);
	}
	
	public void put(String scene, String index, List<Dialogue> list) {
		Map<String, List<Dialogue>> map = flag.get(scene);
		if(map == null) {
			map = new HashMap<>();
			map.put(index, list);
			flag.put(scene, map);
		} else {
			if(map.get(index) == null) {
				map.put(index, list);
			} else {
				map.replace(index, list);
			}
			flag.replace(scene, map);
		}
	}
}
