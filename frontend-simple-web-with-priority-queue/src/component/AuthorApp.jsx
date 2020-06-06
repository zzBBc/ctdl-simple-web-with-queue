import React, {Component} from 'react';
import ListArticlesComponent from './ListArticlesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArticleComponent from './ArticleComponent';
import ListGuestViewArticles from './ListGuestViewArticles';
import GuestViewArticle from './GuestViewArticle';

// Defined routing
class AuthorApp extends Component{
    render(){
        return(
            <Router>
                <>
                <h1>Author Application</h1>
                <Switch>
                    <Route path="/" exact component={ListGuestViewArticles}/>
                    <Route path="/articles" exact component={ListGuestViewArticles}/>
                    <Route path="/articles/:id" component={GuestViewArticle}/>
                    <Route path="/admin" exact component={ListArticlesComponent}/>
                    <Route path="/admin/articles" exact component ={ListArticlesComponent}/>
                    <Route path="/admin/articles/:id" component={ArticleComponent}/>
                </Switch>
                </>
            </Router>
        )
    }
}

export default AuthorApp