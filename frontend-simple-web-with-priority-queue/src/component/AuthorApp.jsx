import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArticleComponent from './ArticleComponent';
import ListGuestViewArticles from './ListGuestViewArticlesComponent';
import GuestViewArticle from './GuestViewArticleComponent';
import AdminArticle from './AdminArticle';
import CreateArticle from './CreateArticle';

// Defined routing
class AuthorApp extends Component{
    render(){
        return(
            <Router>
                <>
                <Switch>
                    <Route path="/" exact component={ListGuestViewArticles}/>
                    <Route path="/articles" exact component={ListGuestViewArticles}/>
                    <Route path="/articles/:id" component={GuestViewArticle}/>
                    <Route path="/admin" exact component={AdminArticle}/>
                    <Route path="/admin/articles" exact component={ArticleComponent}/>
                    <Route path="/admin/article/" exact component={CreateArticle}/>
                </Switch>
                </>
            </Router>
        )
    }
}

export default AuthorApp