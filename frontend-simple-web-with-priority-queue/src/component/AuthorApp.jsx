import React, {Component} from 'react';
import ListArticlesComponent from './ListArticlesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArticleComponent from './ArticleComponent';

class AuthorApp extends Component{
    render(){
        return(
            <Router>
                <>
                <h1>Instructor Application</h1>
                <Switch>
                    <Route path="/" exact component={ListArticlesComponent}/>
                    <Route path="/articles" exact component ={ListArticlesComponent}/>
                    <Route path="/articles/:id" component={ArticleComponent}/>
                </Switch>
                </>
            </Router>
        )
    }
}

export default AuthorApp