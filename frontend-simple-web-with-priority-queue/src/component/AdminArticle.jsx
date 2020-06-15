import React, { Component } from "react";
import ArticleDataService from "../service/ArticleDataService";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";

const AUTHOR = 'zzBBc'

// Delete, update, delete admin articles
class AdminArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            content: '',
            message: null
        }

        this.editArticleClicked = this.editArticleClicked.bind(this)
        this.updateArticleClicked = this.updateArticleClicked.bind(this)
        this.deleteArticleClicked = this.deleteArticleClicked.bind(this)
    }

    componentDidMount(){
        this.refreshArticles()
    }

    refreshArticles(){
        ArticleDataService.retrieveArticle(AUTHOR)
            .then(response => this.setState({
                title: response.data.title,
                description: response.data.description,
                content: response.data.content,
            }))
    }

    editArticleClicked(){
        console.log('edit ')
        this.props.history.push(`/admin/articles/`)
    }

    updateArticleClicked(){
        ArticleDataService.deleteArticle(AUTHOR)
            .then(response => {
                ArticleDataService.createGuestArticle(AUTHOR, response.data)
                    .then(response => {
                        this.setState({message: `Delete and post article to guest view successful`})
                        this.refreshArticles()
                    })
            })
    }

    deleteArticleClicked(){
        ArticleDataService.deleteArticle(AUTHOR)
            .then(response => {
                this.setState({message: `Delete article successful`})
                this.refreshArticles()
            })
    }

    render(){
        let {title, content} = this.state

        return(
            <div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <h3>{title}</h3>
                <div className="container">
                    <p>{content}</p>
                </div>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="secondary"
                            onClick={() => this.editArticleClicked()}>Edit</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button variant="secondary"
                            onClick={() => this.updateArticleClicked()}>Update</Button>
                        <Button variant="warning"
                            onClick={() => this.deleteArticleClicked()}>Delete</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        )
    }
} 

export default AdminArticle