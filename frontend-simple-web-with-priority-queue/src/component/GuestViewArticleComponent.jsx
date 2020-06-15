import React, { Component } from "react";
import ArticleDataService from "../service/ArticleDataService"

const AUTHOR = 'zzBBc'

class GuestViewArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: '',
            time: ''
        }
    }

    componentDidMount(){
        console.log(this.state.id)

        ArticleDataService.retrieveGuestArticle(AUTHOR, this.state.id)
            .then(response => this.setState({
                content: response.data.content,
                title: response.data.title,
                time: response.data.time
            }))
    }

    render(){
        let {title, content, time} = this.state

        return(
            <div>
                <h3>{title}</h3>
                <div className="container">
                    <div className="entry-info">    Post on {time} by zzBBc</div>
                    <br></br>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
}

export default GuestViewArticle