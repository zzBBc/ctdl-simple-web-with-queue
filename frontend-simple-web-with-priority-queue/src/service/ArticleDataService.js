import axios from 'axios'

const AUTHOR = 'zzBBc'
const ARTICLE_API_URL = 'http://localhost:8080'
const AUTHOR_API_URL = `${ARTICLE_API_URL}/authors/${AUTHOR}`

// axios request to spring boot localhost: 8080
class ArticleDataService{
    retrieveAllArticles(name){
        return axios.get(`${AUTHOR_API_URL}/courses/`);
    }

    createArticle(name, article){
        return axios.post(`${AUTHOR_API_URL}/authors/`, article);
    }
 
    updateArticle(name, id, article){
        return axios.put(`${AUTHOR_API_URL}/authors/${id}`, article);
    }

    retrieveArticle(name, id){
        return axios.get(`${AUTHOR_API_URL}/courses/${id}`);
    }
    
    deleteArticle(name, id){
        return axios.delete(`${AUTHOR_API_URL}/courses/${id}`);
    }
}

export default new ArticleDataService()