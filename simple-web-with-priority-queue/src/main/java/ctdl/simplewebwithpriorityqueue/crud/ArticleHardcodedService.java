package ctdl.simplewebwithpriorityqueue.crud;

import java.util.List;

import org.springframework.stereotype.Service;

// Method to invoke from Rest
@Service
public class ArticleHardcodedService {

    // Use priority queue
    //    private static List<Article> articles = new ArrayList<>();
    private static QueueArticle articles = new QueueArticle();
    private static QueueArticle guestViewArticles = new QueueArticle();
    private static long idCounter = 0;
    private static long idGuestCounter = 0;
    private static final String AUTHOR = "zzBBc";

    // Add static articles
    static {
	// Add initial articles
	Article article1 = new Article(AUTHOR, "1. The first article", "1. The first article", "1. The first article");
	articles.addLast(article1);

	Article article2 = new Article(AUTHOR, "2. The second article", "2. The second article", "2. The second article");
	articles.addLast(article2);

	Article article3 = new Article(AUTHOR, "3. The third article", "3. The third article", "3. The third article");
	articles.addLast(article3);

	Article article4 = new Article(AUTHOR, "4. The forth article", "4. The forth article", "4. The forth article");
	articles.addLast(article4);

	Article article5 = new Article(AUTHOR, "5. The fifth article", "5. The fifth article", "5. The fifth article");
	articles.addLast(article5);

	Article article6 = new Article(AUTHOR, "6. The sixth article", "6. The sixth article", "6. The sixth article");
	articles.addLast(article6);

	Article article7 = new Article(AUTHOR, "7. The seventh article", "7. The seventh article", "7. The seventh article");
	articles.addLast(article7);

	// Add initial guest articles
	Article articleGuest1 = new Article(++idGuestCounter, AUTHOR, "This Story Has No Twists",
		"Today, you will wake up. You’ll lay in bed for a few minutes. Maybe those minutes will turn to hours. Maybe hours will happen in minutes.",
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
		"Tomorrow, you will wake up.");
	articleGuest1.setTime(0);
	guestViewArticles.addFirst(articleGuest1);

	Article articleGuest2 = new Article(++idGuestCounter, AUTHOR,
		"My experience traveling as an Asian-American in Europe last week",
		"I saw that someone was asking about what it might be like to travel Europe as an Asian or Asian-American post-COVID. I can share my personal experience for those who are interested.",
		"I saw that someone was asking about what it might be like to travel Europe as an Asian or Asian-American post-COVID. I can share my personal experience for those who are interested.\r\n" +
			"\r\n" +
			"I live in Switzerland, where the first wave of COVID has passed and the country has more or less opened back up with some extra measures. I monitored the numbers and assessed the situation and determined that it was safe to travel again domestically, so last week I traveled by train from Geneva (located on the French-Swiss border) to Lucerne in German-speaking Switzerland.\r\n" +
			"\r\n" +
			"The train was quite empty and there were only about 3 or 4 people per compartment. The ticket inspectors wore masks and they also distributed free disinfectant wipes to us in small packets.\r\n" +
			"\r\n" +
			"When I arrived at my hotel, I saw that there were plexiglass barriers installed to protect the front desk clerks. They were very polite and welcoming. I don't speak much German so I started the conversation with \"Gruezi, entschuldigung, sprechen sie Englisch?\" (Hello, sorry, do you speak English?) and they were happy to accommodate.\r\n" +
			"\r\n" +
			"They also gave me a free room upgrade, I assume because the hotel was fairly deserted.\r\n" +
			"\r\n" +
			"In order to eat meals at the hotel restaurant, I had to tell them ahead of time what time I planned to arrive, so that they could space out the tables. The hotel had previously offered a very nice breakfast buffet pre-pandemic, but due to sanitation concerns they now only served one single option for breakfast, which was croissants, ham and cheese. As soon as guests left a table, the servers would disinfect and spray their table and chairs.\r\n" +
			"\r\n" +
			"All of the tourist destinations were deserted, with the exception of the famous Chapel Bridge, which is utilized by locals. With the exception of two retired couples I saw at the hotel, I did not see anyone else who was visibly a tourist. I only saw maybe 5 Asian people total and they were locals. There were very few POC to begin with.\r\n" +
			"\r\n" +
			"I did feel uncomfortable at times. I was wearing a mask and taking photos with my camera because I enjoy photography, and I noticed that people were constantly staring at me. There was one instance where an old man walked past me and turned around to look at me three times, with a very intense stare. I ultimately decided to remove my mask and put away my camera, so that I would look more like a local. I don't think it worked completely, as some people would still look at me with genuine surprise. Perhaps they were questioning how this \"Asian tourist\" was able to get into their country. The Swiss are known for being very polite and reserved, so it would be quite unusual for someone to actually shout racist things at me in the street, I think.\r\n" +
			"\r\n" +
		"So that was an objective recounting of my trip. I am always going to be worried and on edge about racist treatment, but I think the fact that I have an American accent and a US passport gives me a lot of privilege when I am traveling, to be honest. I may try to travel to Austria, Germany or France this summer, after freedom of movement resumes on June 15, and perhaps the experience will be very different.");
	articleGuest2.setTime(10);
	guestViewArticles.addFirst(articleGuest2);

	Article articleGuest3 = new Article(++idGuestCounter, AUTHOR,
		"6,500 Languages",
		"I should have wished to be rich, but felt it was too self-serving.",
		"I should have wished to be rich, but felt it was too self-serving.\r\n" +
			"\r\n" +
			"I should have wished for fame, but felt I'd lose privacy.\r\n" +
			"\r\n" +
			"I should have wished for world peace, but felt one country's peace could be another country's poverty.\r\n" +
			"\r\n" +
			"I curse the day I met the Wishmaster, and even more so for the \"perfect\" wish I thought I'd come up with.\r\n" +
			"\r\n" +
			"\"I would like to become a master of language.\"\r\n" +
			"\r\n" +
			"The Wishmaster hesitated and asked, Of every language?\r\n" +
			"\r\n" +
			"I nodded. The wish was educational in nature so it couldn't have been purely vanity pushing me to become an expert linguist. The wish could not possibly affect anyone adversely, for it truly only affected me. The sole purpose of the wish was to further communication and perhaps close the global gap just a bit by having someone act as a language liaison.\r\n" +
			"\r\n" +
			"How long does it take for somebody to become a master at something?\r\n" +
			"\r\n" +
			"Confused, I responded with, \"I guess... I mean... 10,000 hours of deliberate, focused practice is the rumor.\"\r\n" +
			"\r\n" +
			"The Wishmaster went silent. Then, 10,000 hours of deliberate, focused practice, and you'd be a master at language?\r\n" +
			"\r\n" +
			"\"I suppose so.\"\r\n" +
			"\r\n" +
			"But that's only considering one language at 10,000 hours, right?\r\n" +
			"\r\n" +
			"I shrugged but agreed. I was unsure where this was headed until I noticed the wind slowing to a stop. A stillness. The ambient white noise of the city was now deafening silence and suddenly, I was whisked from being face-to-face with the Wishmaster and into my own study, armed with a pen, pad of paper, English dictionary with the doors shuttering locked.\r\n" +
			"\r\n" +
			"Again confused, I asked aloud to no one in particular, \"What's going on? Why am I in my house and why do I have a dictionary in front of me?\"\r\n" +
			"\r\n" +
			"A disembodied voice responded, This is to give you the deliberate, focused practice you need. I figure English will be the easiest since you already speak it.\r\n" +
			"\r\n" +
			"\"I'm sorry, I don't understand what's going on! I wanted to be a master at every language! What does this have to do with anything?\"\r\n" +
			"\r\n" +
			"The voice ignored. From there, we can move language by language in alphabetical order. I hope you're looking forward to Afrikaans after this first 10,000 hours!\r\n" +
			"\r\n" +
			"And the Wishmaster has been silent ever since. I should have wished to be rich, for fame, for world peace.\r\n" +
			"\r\n" +
			"Instead, I'm frozen in time, studying until the Wishmaster deems me an expert. If the metric is 10,000 hours, that's a little over a year for each language.\r\n" +
			"\r\n" +
		"This may be fine. I mean, how many world languages can there really be?");
	articleGuest3.setTime(20);
	guestViewArticles.addFirst(articleGuest3);
    }

    public QueueArticle findAll() {
	return articles;
    }

    // Create and update
    public Article createArticle(Article article) {
	article.setId(++idCounter);
	articles.addLast(article);

	return article;
    }

    public Article editArticle(Article article) {
	articles.removeFirst();
	article.setId(++idCounter);
	articles.addFirst(article);

	return article;
    }

    public Article createGuest(Article article) {
	article.setId(++idGuestCounter);
	guestViewArticles.addFirst(article);

	return article;
    }

    public Article deleteFirstArticle() {
	if(articles.getFirst() == null)
	    return null;

	return articles.removeFirst();
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

    public Article getFirstArticle() {
	if(articles.getFirst() != null)
	    return articles.getFirst();
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
