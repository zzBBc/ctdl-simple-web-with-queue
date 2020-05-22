package ctdl.simplewebwithpriorityqueue.crud;

import java.util.ArrayList;
import java.util.List;

public class ArticleHardcodedService {

    // Use priority queue
    private static List<Article> articles = new ArrayList<>();
    private static long idCounter = 0;

    // Add static articles
    static {

    }

    public List<Article> findAll() {
	return articles;
    }

    // Create and update
    public Article save(Article article) {
	if(article.getId() == -1 || article.getId() == 0) {
	    article.setId(++idCounter);
	    articles.add(article);
	}
	else {
	    deleteById(article.getId());
	    articles.add(article);
	}
	return article;
    }

    public Article deleteById(long id) {
	Article article = findById(id);

	if(article == null)
	    return null;

	if(articles.remove(article))
	    return article;

	return null;
    }

    public Article findById(long id) {
	for(Article article: articles)
	    if(article.getId() == id)
		return article;

	return null;
    }

}
