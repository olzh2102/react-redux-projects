import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	//checks all parent components for router property. Only use context when working with router.
	//this context gives access to react.router.
	static contextTypes = {
			router: PropTypes.object
		};

	//props argument here are the form properties.
	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				//blogpost has been created, navigate the user to the index.
				//navigate by calling this.context.router.push with the new path to navigate to.
				this.context.router.push('/');
			});
	}

	render() {
		// const handleSubmit = this.props.handleSubmit //legacy style
		//ES6 Syntax: handleSubmit available as props injected by reduxForm at bottom.
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		// const fields = this.props.fields.title //legacy ES5
		//each of the 3 properties title, categories, content, contain bunch of properties that handle the form by redux-form.
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<input type="text" className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);	
	}
}

//function to validate the form. also need to add it to redux-form below.
function validate(values) {
	const errors = {};
	if(!values.title) {
		errors.title = 'Enter a username';
	}
	if(!values.categories) {
		errors.categories = 'Enter categories';
	}
	if(!values.content) {
		errors.content = 'Enter some content';
	}
	return errors;
}

//Define form fields. By defining 3 fields below, the properties are injected into our component.
//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is MapDispatchToProps.
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);