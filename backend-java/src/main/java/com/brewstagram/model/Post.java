package com.brewstagram.model;

public class Post {
    private Long id;
    private String author;
    private String imageUrl;
    private String caption;

    public Post() {}

    public Post(Long id, String author, String imageUrl, String caption) {
        this.id = id;
        this.author = author;
        this.imageUrl = imageUrl;
        this.caption = caption;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public String getCaption() { return caption; }
    public void setCaption(String caption) { this.caption = caption; }
}
