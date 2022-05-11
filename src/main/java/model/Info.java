package model;

import java.io.Serializable;
import java.util.List;

public class Info implements Serializable {
	private String name, kind;
	private String content, detail, img;
	private int chapter;
	
	public Info() {
		
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getKind() {
		return kind;
	}

	public void setKind(String kind) {
		this.kind = kind;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public int getChapter() {
		return chapter;
	}

	public void setChapter(int chapter) {
		this.chapter = chapter;
	}
	
	


}
