package model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Scene implements Serializable {
	private Map<Integer, List<Dialogue>> data;

	public Scene() {
		data = new HashMap<>();
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
		data.put(index, list);
	}
	
	public void replace(int index, List<Dialogue> list) {
		data.replace(index, list);
	}
}
