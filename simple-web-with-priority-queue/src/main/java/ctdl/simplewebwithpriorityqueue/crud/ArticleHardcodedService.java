package ctdl.simplewebwithpriorityqueue.crud;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

// Method to invoke from Rest
@Service
public class ArticleHardcodedService {

    // Use priority queue
    private static List<Article> articles = new ArrayList<>();
    private static List<Article> guestViewArticles = new ArrayList<>();
    private static long idCounter = 0;

    // Add static articles
    static {
	articles.add(new Article(++idCounter, "zzBBc", "1. The first article", "1. The first article", "1. The first article"));
	articles.add(new Article(++idCounter, "zzBBc", "2. The second article", "2. The second article", "2. The second article"));
	articles.add(new Article(++idCounter, "zzBBc", "3. The third article", "3. The third article", "3. The third article"));
	articles.add(new Article(++idCounter, "zzBBc", "4. The forth article", "4. The forth article", "4. The forth article"));
	articles.add(new Article(++idCounter, "zzBBc", "5. The fifth article", "5. The fifth article", "5. The fifth article"));
	articles.add(new Article(++idCounter, "zzBBc", "6. The sixth article", "6. The sixth article", "6. The sixth article"));

	guestViewArticles.add(new Article(++idCounter, "zzBBc", "This Story Has No Twists",
		"Today, you will wake up. You’ll lay in bed for a few minutes.",
		"Today, you will wake up. You’ll lay in bed for a few minutes. Maybe those minutes will turn to hours. Maybe hours will happen in minutes.\r\n" +
			"\r\n" +
			"Eventually you’ll get out of bed; you’ll turn on the coffee maker, take a piss, mindlessly scroll through your phone. Get dressed in the usual. Kiss the wife goodbye— or maybe shut the dog up in his crate. Head out.\r\n" +
			"\r\n" +
			"Traffic’s not especially different today. It seems construction on the highway is moving along nicely.\r\n" +
			"\r\n" +
			"You will park the car, tap away mindlessly at your desk, try to sneak a few moments of swiping away mindlessly at your phone.\r\n" +
			"\r\n" +
			"There’s that homeless guy on the way home again. Avoid eye contact.\r\n" +
			"\r\n" +
			"Leftovers for dinner again. Funny how there’s always leftovers when there’s nothing ever new.\r\n" +
			"\r\n" +
			"Rest, watch some TV, maybe squeeze in a workout if you’re feeling especially motivated today. Shower. Shit, did you leave your phone charger in the car? Get in bed. Might need melatonin to sleep tonight.\r\n" +
			"\r\n" +
			"You dream of something almost fantastical, where undulations of hope and wonder greet some remnant of joy that, somehow, still lives inside of you.\r\n" +
			"\r\n" +
			"... But it’s just a dream. It’s not some profound interpretation or divine clairvoyance. Because this story has no twists.\r\n" +
			"\r\n" +
		"Tomorrow, you will wake up."));
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

    // For guest view

    public List<Article> findGuestViewArticles() {
	return guestViewArticles;
    }

    public Article findGuestViewById(long id) {
	for(Article article: guestViewArticles)
	    if(article.getId() == id)
		return article;

	return null;
    }
}
