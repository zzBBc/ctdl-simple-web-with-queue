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
                content: response.data.content
            }))
    }

    editArticleClicked(id){
        console.log('edit ' + id)
        this.props.history.push(`/admin/articles/`)
    }

    updateArticleClicked(id){
        ArticleDataService.deleteArticle(AUTHOR)
            .then(response => {
                ArticleDataService.createGuestArticle(AUTHOR, response.data)
                    .then(response => {
                        this.setState({message: `Delete and post to guest view of article ${id} successful`})
                        this.refreshArticles()
                    })
            })
    }

    deleteArticleClicked(){
        ArticleDataService.deleteArticle(AUTHOR)
            .then(response => {
                this.setState({message: `Delete of article successful`})
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
                    <h5>Post on {} by zzBBc</h5>
                    <p>{content}</p>
                </div>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="secondary"
                            onClick={() => this.editArticleClicked(this.state.id)}>Edit</Button>
                    </ButtonGroup>
                    <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button variant="secondary"
                            onClick={() => this.updateArticleClicked(this.state.id)}>Update</Button>
                        <Button variant="warning"
                            onClick={() => this.deleteArticleClicked()}>Delete</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        )
    }
} 

export default AdminArticle