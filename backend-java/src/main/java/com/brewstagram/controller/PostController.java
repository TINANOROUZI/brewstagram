package com.brewstagram.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brewstagram.model.Post;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final List<Post> posts = new ArrayList<>();
    private final AtomicLong idGen = new AtomicLong(1);

    public PostController() {
        // sample posts
        posts.add(new Post(idGen.getAndIncrement(), "alice", "/pictures/sample1.jpg", "Great brew!"));
        posts.add(new Post(idGen.getAndIncrement(), "bob", "/pictures/sample2.jpg", "Tasty."));
    }

    @GetMapping
    public List<Post> all() {
        return posts;
    }

    @PostMapping
    public Post create(@RequestBody Post p) {
        p.setId(idGen.getAndIncrement());
        posts.add(p);
        return p;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        posts.removeIf(p -> p.getId().equals(id));
    }
}
