package ctdl.simplewebwithpriorityqueue.crud;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
// Beans returned are converted to/from JSON/XML
@RestController
// REST API
public class ArticleResource {
    // Retrieve details from business service
    @Autowired
    private ArticleHardcodedService articleManagementService;

    // guest view
    @GetMapping("/authors/{username}/guest_articles")
    public List<Article> getGuestViewArticles(@PathVariable String username){
	return articleManagementService.findGuestViewArticles();
    }

    @GetMapping("/authors/{username}/guest_articles/{id}")
    public Article getGuestViewArticle(@PathVariable String username, @PathVariable long id) {
	return articleManagementService.findGuestViewById(id);
    }

    // admin view
    @GetMapping("/authors/{username}/articles/")
    public Article getArticle(@PathVariable String username) {
	return articleManagementService.getFirstArticle();
    }

    // edit admin articles
    @PutMapping("/authors/{username}/articles/")
    public ResponseEntity<Article> updateArticle(@PathVariable String username, @RequestBody Article article){
	Article articleUpdated = articleManagementService.editArticle(article);

	return new ResponseEntity<>(article, HttpStatus.OK);
    }

    // create admin articles
    @PostMapping("/authors/{username}/article/")
    public void createArticle(@PathVariable String username, @RequestBody Article article) {
	Article createdArticle = articleManagementService.createArticle(article);
    }

    // create guest articles
    @PostMapping("/authors/{username}/guest_articles/")
    public ResponseEntity<Void> createGuestArticle(@PathVariable String username, @RequestBody Article article){
	Article createdArticle = articleManagementService.createGuest(article);

	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdArticle.getId()).toUri();

	return ResponseEntity.created(uri).build();
    }

    // delete admin article
    @DeleteMapping("/authors/{username}/articles/")
    public Article deleteArticle(@PathVariable String username) {
	Article article = articleManagementService.deleteFirstArticle();
	if(article != null) {
	    ResponseEntity.noContent().build();
	    return article;
	}

	ResponseEntity.notFound().build();
	return null;
    }
}
