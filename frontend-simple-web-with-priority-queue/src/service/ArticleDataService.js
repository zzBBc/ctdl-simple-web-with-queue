import axios from 'axios'

const AUTHOR = 'zzBBc'
const ARTICLE_API_URL = 'http://localhost:8080'
const AUTHOR_API_URL = `${ARTICLE_API_URL}/authors/${AUTHOR}`

// axios to make the backend rest api calls (spring boot) localhost: 8080
class ArticleDataService{
    // get guest view articles
    retrieveAllGuestArticles(name){
        return axios.get(`${AUTHOR_API_URL}/guest_articles/`)
    }

    retrieveGuestArticle(name, id){
        return axios.get(`${AUTHOR_API_URL}/guest_articles/${id}`)
    }

    retrieveArticle(name){
        return axios.get(`${AUTHOR_API_URL}/articles/`);
    }
    
    deleteArticle(name){
        return axios.delete(`${AUTHOR_API_URL}/articles/`);
    }
 
    editArticle(name, article){
        return axios.put(`${AUTHOR_API_URL}/articles/`, article);
    }

    createArticle(name, article){
        return axios.post(`${AUTHOR_API_URL}/article/`, article);
    }

    createGuestArticle(name, article){
        return axios.post(`${AUTHOR_API_URL}/guest_articles/`, article)
    }
}

export default new ArticleDataService()