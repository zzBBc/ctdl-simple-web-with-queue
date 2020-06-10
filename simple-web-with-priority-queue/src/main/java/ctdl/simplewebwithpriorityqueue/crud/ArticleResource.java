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

    @GetMapping("/authors/{username}/articles")
    public List<Article> getAllArticles(@PathVariable String username){
	return articleManagementService.findAll();
    }

    @GetMapping("/authors/{username}/articles/{id}")
    public Article getArticle(@PathVariable String username, @PathVariable long id) {
	return articleManagementService.findById(id);
    }

    @DeleteMapping("/authors/{username}/articles/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable String username, @PathVariable long id){
	Article article = articleManagementService.deleteById(id);

	if(article != null)
	    return ResponseEntity.noContent().build();

	return ResponseEntity.notFound().build();
    }

    @PutMapping("/authors/{username}/articles/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable String username, @PathVariable long id, @RequestBody Article article){
	Article articleUpdated = articleManagementService.save(article);

	return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @PostMapping("/authors/{username}/articles/")
    public ResponseEntity<Void> createArticle(@PathVariable String username, @RequestBody Article article){
	Article createdArticle = articleManagementService.save(article);

	// Location
	// Get current resource uri + {id}
	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdArticle.getId()).toUri();

	return ResponseEntity.created(uri).build();
    }

    @PostMapping("/authors/{username}/guest_articles/")
    public ResponseEntity<Void> createGuestArticle(@PathVariable String username, @RequestBody Article article){
	Article createdArticle = articleManagementService.createGuest(article);

	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdArticle.getId()).toUri();

	return ResponseEntity.created(uri).build();
    }
}
