import { Component } from "react";
import "./styles.css";
import { PostsTypes } from "../../types/postTypes";
import { PostsTwo } from "../../components/PostsT";
import { loadPosts } from "../../utils/load-post";
import { Button } from "../../components/Button";

interface AppState {
  posts: PostsTypes[];
  allPosts: PostsTypes[];
}

class Home extends Component<unknown, AppState> {
  state: AppState = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePost = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, searchValue, allPosts } = this.state;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title
            .toLocaleLowerCase()
            .includes(searchValue.toLowerCase());
        })
      : posts;
    return (
      <>
        {!!searchValue && <h1>Search value : {searchValue}</h1>}

        <input onChange={this.handleChange} type="search" value={searchValue} />

        {filteredPosts.length > 0 ? (
          <PostsTwo posts={filteredPosts} />
        ) : (
          <p>Nada a mostrar</p>
        )}

        {!searchValue && (
          <Button
            chorume="Sagato foi clicado pra proxima pagina"
            quandoClica={this.loadMorePost}
          />
        )}
      </>
    );
  }
}

export default Home;
