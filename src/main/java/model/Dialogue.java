package model;

import java.io.Serializable;
import java.util.List;

public class Dialogue implements Serializable {
	private String name, nickname, content;
	private String image, player;
	private String scene, flag;
	private List<Choice> choice;
	
	public Dialogue() {
		
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getPlayer() {
		return player;
	}
	public void setPlayer(String player) {
		this.player = player;
	}
	public List<Choice> getChoice() {
		return choice;
	}
	public void setChoice(List<Choice> choice) {
		this.choice = choice;
	}

	public String getScene() {
		return scene;
	}

	public void setScene(String scene) {
		this.scene = scene;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}
}
