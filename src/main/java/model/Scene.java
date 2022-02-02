package model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Scene implements Serializable {
	private Map<Integer, List<Dialogue>> data;
	private Map<Integer, Map<Integer, List<Dialogue>>> flag;

	public Scene() {
		data = new HashMap<>();
		flag = new HashMap<>();
	}
	
	public Map<Integer, List<Dialogue>> getData() {
		return data;
	}

	public void setData(Map<Integer, List<Dialogue>> data) {
		this.data = data;
	}
	
	public List<Dialogue> get(int index) {
		return data.get(index);
	}
	
	public void put(int index, List<Dialogue> list) {
		if(data.get(index) == null) {
			data.put(index, list);
		} else {
			data.replace(index, list);
		}
	}
	
	public void replace(int index, List<Dialogue> list) {
		data.replace(index, list);
	}
	
	public Map<Integer, Map<Integer, List<Dialogue>>> getFlag() {
		return flag;
	}

	public void setFlag(Map<Integer, Map<Integer, List<Dialogue>>> flag) {
		this.flag = flag;
	}

	public List<Dialogue> get(int scene, int index) {
		System.out.println(scene);
		return flag.get(scene).get(index);
	}
	
	public void put(int scene, int index, List<Dialogue> list) {
		Map<Integer, List<Dialogue>> map = flag.get(scene);
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
