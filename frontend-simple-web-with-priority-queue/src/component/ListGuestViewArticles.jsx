import React, { Component } from "react";
import ArticleDataService from "../service/ArticleDataService";
import { Badge } from "react-bootstrap";

const AUTHOR = 'zzBBc'

class ListGuestViewArticles extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            message: null
        }
    }

    componentDidMount(){
        this.refreshArticles();
    }

    refreshArticles(){
        ArticleDataService.retrieveAllGuestArticles(AUTHOR)
            .then(response => {
                this.setState({articles: response.data})
            })
    }

    render(){
        console.log('render')

        return (
            <div className="container">
                <h3>All Articles</h3>
                {
                    this.state.articles.slice(0, 9).map(
                        article => 
                        <article id={article.id} className="article" key={article.id}>
                            <header className="entry-header">
                                <div className="entry-info">
                                    <span className="sep">Posted on </span>
                                    <time className="entry-date" dateTime={article.time} pubdate>{article.time}</time>
                                    <span className="by-author"> by {AUTHOR}</span>
                               </div>
                                <h1 className="entry-title">
                                    <a href={article.link}>{article.title}</a>
                                </h1>
                               <div className="entry-description">
                                   <p>{article.description} <a href={article.link}><Badge variant="secondary">Read more...</Badge></a></p>

                               </div>
                            </header>
                        </article>
                    )
                }
            </div>
        )
    }
}

export default ListGuestViewArticles