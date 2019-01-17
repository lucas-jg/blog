import React, { Component } from "react";
import PostInfo from "components/post/PostInfo";
import PostBody from "components/post/PostBody";
import * as postActions from "store/modules/post";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class PostContainer extends Component {
	initalize = async () => {
		const { PostActions, id } = this.props;
		try {
			await PostActions.getPost(id);
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount = () => {
		this.initalize();
	};

	render() {
		const { loading, post } = this.props;
		if (loading) return null;

		const { title, body, publishedDate, tags } = post.toJS();
		return (
			<div>
				<PostInfo title={title} publishedDate={publishedDate} tags={tags} />
				<PostBody body={body} />
			</div>
		);
	}
}

export default connect(
	state => ({
		post: state.post.get("post"),
		loading: state.pender.pending["post/GET_POST"]
	}),
	dispatch => ({
		PostActions: bindActionCreators(postActions, dispatch)
	})
)(PostContainer);
