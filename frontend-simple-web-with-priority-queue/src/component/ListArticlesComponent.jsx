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
        this.updateArticleClicked = this.updateArticleClicked.bind(this)
        this.addArticleClicked = this.addArticleClicked.bind(this)
        this.refreshArticles = this.refreshArticles.bind(this)
    }

    componentDidMount(){
        this.refreshArticles();
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

    addArticleClicked(){
        this.props.history.push(`/admin/articles/-1`)
    }

    updateArticleClicked(id){
        console.log('update ' + id)
        this.props.history.push(`/admin/articles/${id}`)
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
                        <button className="btn btn-secondary"
                            onClick={this.addArticleClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListArticlesComponent