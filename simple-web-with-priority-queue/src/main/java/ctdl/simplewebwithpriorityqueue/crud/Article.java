package ctdl.simplewebwithpriorityqueue.crud;

import java.time.Instant;

// POJO (Plain Old Java Object)
public class Article {
    private Long id;
    private String description;
    private String title;
    private String content;
    private int countViewer;
    private String username;
    private Instant time;

    public Article() {

    }

    public Article(String username, String title, String description, String content) {
	this.content = content;
	this.description = description;
	this.title = title;
	this.username = username;
    }

    public Article(Long id, String username, String title, String description, String content) {
	this.id = id;
	this.content = content;
	this.description = description;
	this.title = title;
	this.username = username;
	setTime(0);
    }

    public Instant getTime() {
	return time;
    }

    public void setTime(long secondsToAdd) {
	time = Instant.now();
	time = time.plusSeconds(secondsToAdd);
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
