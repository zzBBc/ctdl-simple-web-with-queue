import React, { Component } from "react";
import ArticleDataService from '../service/ArticleDataService'
import {Formik, Form, Field, ErrorMessage} from 'formik';

const AUTHOR = 'zzBBc'
class ArticleComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            content: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(){
        console.log(this.state.id)

        if(this.state.id === -1){
            return
        }

        ArticleDataService.retrieveArticle(AUTHOR, this.state.id)
            .then(response => this.setState({
                content: response.data.content
            }))
    }

    onSubmit(values){
        let username = AUTHOR

        let article = {
            id: this.state.id,
            content: values.content
        }

        if(this.state.id === -1){
            ArticleDataService.createArticle(username, article)
                .then(() => this.props.history.push('/articles'))
        }
        else {
            ArticleDataService.updateArticle(username, this.state.id, article)
                .then(()=> this.props.history.push('/articles'))
        }

        console.log(values);
    }

    validate(values){
        let errors = {}
        if(!values.content){
            errors.content = 'Enter a Content'
        }
        else if (values.content.length < 5){
            errors.content = 'Enter at least 5 characters in Content'
        }

        return errors
    }

    render(){
        let {content, id} = this.state

        return (
            <div>
                 <h3>Article</h3>
            <div className="container">
                <Formik
                    intitialVales={{id, content}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        props => (
                            <Form>
                                <ErrorMessage name="content" component="div"
                                    className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Content</label>
                                    <Field className="form-control" type="text" name="content" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>  
        )
    }
}

export default ArticleComponent