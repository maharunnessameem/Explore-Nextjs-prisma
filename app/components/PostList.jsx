import Post from "./Post";


const PostList = ({ posts }) => {
    return (

        <ul>
            {
                posts.map(post => (
                    <Post key={post.id} post={post}></Post>
                ))
            }
        </ul>

    );
};

export default PostList;