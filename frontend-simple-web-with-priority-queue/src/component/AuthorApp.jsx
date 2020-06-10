import React, {Component} from 'react';
import ListArticlesComponent from './ListArticlesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArticleComponent from './ArticleComponent';
import ListGuestViewArticles from './ListGuestViewArticlesComponent';
import GuestViewArticle from './GuestViewArticleComponent';

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
                    <Route path="/admin" exact component={ListArticlesComponent}/>
                    <Route path="/admin/articles" exact component={ListArticlesComponent}/>
                    <Route path="/admin/articles/:id" component={ArticleComponent}/>
                </Switch>
                </>
            </Router>
        )
    }
}

export default AuthorApp