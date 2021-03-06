import React, { Component } from "react";
import ArticleDataService from "../service/ArticleDataService";
import { Badge, Button } from "react-bootstrap";

const AUTHOR = 'zzBBc'
//dateTime={article.time}
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
                <Button variant="secondary" className="new-article"
                    onClick={() => this.props.history.push('/admin/article/')}>New Article</Button>{' '}
                    
                {
                    this.state.articles.slice(0, 9).map(
                        article => 
                        <article id={article.id} className="article" key={article.id}>
                            <header className="entry-header">
                                <h4 className="entry-title">
                                    <a href={`http://localhost:3000/articles/${article.id}`}>{article.title}</a>
                                </h4>
                                <div className="entry-info">
                                    <span className="sep">Posted on </span>
                                    <time className="entry-date" pubdate>{article.time}</time>
                                    <span className="by-author"> by {AUTHOR}</span>
                                </div>
                                <div className="entry-description">
                                    <p>{article.description} <a 
                                        href={`http://localhost:3000/articles/${article.id}`}><Badge variant="secondary">Read more...</Badge></a></p>
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