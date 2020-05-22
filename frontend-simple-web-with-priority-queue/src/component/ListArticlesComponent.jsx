import React, { Component } from "react";
import ArticleDataService from "../service/ArticleDataService";

const AUTHOR = 'zzBBc'

class ListArticlesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            message: null
        }

        this.deleteArticleClicked = this.deleteArticleClicked.bind(this)
        this.updateArticleClicked = this.updateArticleClicked.bind(this)
        this.updateArticleClicked = this.updateArticleClicked.bind(this)
        this.refreshArticles = this.refreshArticles.bind(this)
    }

    refreshArticles(){
        ArticleDataService.retrieveAllArticles(AUTHOR)
            .then(response => {
                this.setState({articles: response.data})
            })
    }

    deleteArticleClicked(id){
        ArticleDataService.deleteArticle(AUTHOR, id)
            .then(response => {
                this.setState({message: `Delete of article ${id} successful`})
                this.refreshArticles()
            })
    }

    updateArticleClicked(id){
        console.log('update ' + id)
        this.props.history.push(`/articles/${id}`)
    }

    addArticleClicked(){
        this.props.history.push(`/articles/-1`)
    }

    render(){
        console.log('render')

        return (
            <div className="container">
                <h3>All Articles</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Content</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.articles.map(
                                    article =>
                                    <tr key={article.id}>
                                        <td>{article.id}</td>
                                        <td>{article.content}</td>
                                        <td><button className="btn btn-success" 
                                            onClick={() => this.updateArticleClicked(article.id)}>Update</button>
                                        </td>
                                        <td><button className="btn btn-warning" 
                                            onClick={() => this.deleteArticleClicked(article.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success"
                            onClick={this.addArticleClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListArticlesComponent