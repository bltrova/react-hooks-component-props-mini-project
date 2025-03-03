import Article from "./Article"

const ArticleList = ({posts}) => {
    return(
        <main>
            {posts && posts.map((post) => 
                <Article 
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
            )}
        </main>
    );
};
export default ArticleList;