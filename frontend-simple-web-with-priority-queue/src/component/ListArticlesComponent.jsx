import React, { Component } from "react";
import ArticleDataService from "../service/ArticleDataService";

const AUTHOR = 'zzBBc'

// Listing all the articles for an author
class ListArticlesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            message: null
        }

        this.deleteArticleClicked = this.deleteArticleClicked.bind(this)
        this.editArticleClicked = this.editArticleClicked.bind(this)
        this.refreshArticles = this.refreshArticles.bind(this)
        this.updateArticleClicked = this.updateArticleClicked.bind(this)
    }

    componentDidMount(){
        this.refreshArticles();
    }

    refreshArticles(){
        ArticleDataService.retrieveAllArticles(AUTHOR)
            .then(response => {
                // sort articles
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

    editArticleClicked(id){
        console.log('edit ' + id)
        this.props.history.push(`/admin/articles/${id}`)
    }

    // Need to complete
    updateArticleClicked(id){
        ArticleDataService.deleteArticle(AUTHOR, id)
            .then(response => {
                ArticleDataService.createGuestArticle(AUTHOR, response.data)
                    .then(response => {
                        this.setState({message: `Delete and post to guest view of article ${id} successful`})
                        this.refreshArticles()
                    })
            })
    }
    render(){
        console.log('render')

        return (
            <div className="container">
                <h3>Administrator</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Content</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.articles.map(
                                    article =>
                                    <tr key={article.id}>
                                        <th scope="row">{article.id}</th>
                                        <td>{article.content}</td>
                                        <td><button className="btn btn-secondary" 
                                            onClick={() => this.editArticleClicked(article.id)}>Edit</button>
                                        </td>
                                        <td><button className="btn btn-secondary" 
                                            onClick={() => this.updateArticleClicked(article.id)}>Update</button>
                                        </td>
                                        <td><button className="btn btn-warning" 
                                            onClick={() => this.deleteArticleClicked(article.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListArticlesComponent