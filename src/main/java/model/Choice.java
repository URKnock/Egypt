package model;

import java.io.Serializable;

public class Choice implements Serializable {
	private String id;
	private String content;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public Choice() {
		
	}
	public Choice(String id, String content) {
		this.id = id;
		this.content = content;
	}
}
