import React from "react";
import PageTemplate from "components/common/PageTemplate";
import PostContainer from "containers/post/PostContainer";
import AskRemoveModal from "components/modal/AskRemoveModal";

const PostPage = ({ match }) => {
    const { id } = match.params;
    return (
        <PageTemplate>
            <PostContainer id={id} />
            <AskRemoveModal />
        </PageTemplate>
    );
};

export default PostPage;
