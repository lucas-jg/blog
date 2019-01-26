import React from "react";
import PageTemplate from "components/common/PageTemplate";
import PostContainer from "containers/post/PostContainer";
import AskRemoveModalContainer from "containers/modal/AskRemoveModalContainer";

const PostPage = ({ match }) => {
    const { id } = match.params;
    return (
        <PageTemplate>
            <PostContainer id={id} />
            <AskRemoveModalContainer />
        </PageTemplate>
    );
};

export default PostPage;
