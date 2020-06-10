import React, { Component } from "react";
import ArticleDataService from "../service/ArticleDataService"

const AUTHOR = 'zzBBc'

class GuestViewArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: ''
        }
    }

    componentDidMount(){
        console.log(this.state.id)

        ArticleDataService.retrieveGuestArticle(AUTHOR, this.state.id)
            .then(response => this.setState({
                content: response.data.content,
                title: response.data.title
            }))
    }

    render(){
        let {title, content} = this.state

        return(
            <div>
                <h3>{title}</h3>
                <div className="container">
                    <h4>Post on {} by zzBBc</h4>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}

export default GuestViewArticle