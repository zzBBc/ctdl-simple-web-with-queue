import React, { Component } from "react";
import ArticleDataService from '../service/ArticleDataService'
import {Formik, Form, Field, ErrorMessage} from 'formik';

const AUTHOR = 'zzBBc'
class CreateArticle extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
            content: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    componentDidMount(){
        return
    }

    validate(values){
        console.log('validate ' + this.state)
        let errors = {}
        if(!values.content){
            errors.content = 'Enter a Content'
        }
        else if (values.content.length < 5){
            errors.content = 'Enter at least 5 characters in Content'
        }
        if(!values.title){
            errors.content = 'Enter a Title'
        }
        if(!values.description){
            errors.content = 'Enter a Description'
        }

        return errors
    }

    onSubmit(values){
        console.log('onSubmit ' + values)
        let username = AUTHOR

        let article = {
            id: values.id,
            title: values.title,
            description: values.description,
            content: values.content
        }

        // ArticleDataService.createArticle(username, article)
        ArticleDataService.createArticle(username, article)
            .then(() => {
                return this.props.history.push('/')
            })

        console.log(values);
    }

    render(){
        let {id, title, description, content} = this.state

        return (
            <div>
                <h3>Article</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, title, description, content}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="content" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Title</label>
                                        <Field className="form-control" type="text" name="title" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Content</label>
                                        <Field className="form-control" type="text" name="content" />
                                    </fieldset>
                                    <button className="btn btn-secondary" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default CreateArticle