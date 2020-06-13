package ctdl.simplewebwithpriorityqueue.crud;

// POJO (Plain Old Java Object)
public class Article {
    private Long id;
    private String description;
    private String link;
    private String title;
    private String content;
    private int countViewer;
    private String username;
    //private Time time;

    public Article() {

    }


    //    public Time getTime() {
    //	return time;
    //    }
    //
    //
    //    public void setTime(Time time) {
    //	this.time = time;
    //    }


    public Article(Long id, String username, String title, String description, String content) {
	this.id = id;
	this.content = content;
	this.description = description;
	this.title = title;
	this.username = username;
	setLink();
    }

    public String getUsername() {
	return username;
    }


    public void setUsername(String username) {
	this.username = username;
    }


    public Long getId() {
	return id;
    }
    public void setId(Long id) {
	this.id = id;
	setLink();
    }

    public String getContent() {
	return content;
    }
    public void setContent(String content) {
	this.content = content;
    }


    public String getDescription() {
	return description;
    }


    public void setDescription(String description) {
	this.description = description;
    }


    public String getLink() {
	return link;
    }


    public void setLink() {
	link = "http://localhost:3000/articles/" + id;
    }


    public String getTitle() {
	return title;
    }


    public void setTitle(String title) {
	this.title = title;
    }


    public int getCountViewer() {
	return countViewer;
    }


    public void setCountViewer(int countViewer) {
	this.countViewer = countViewer;
    }
}
