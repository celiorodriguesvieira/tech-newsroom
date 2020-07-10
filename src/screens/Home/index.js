import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Post from "../../components/Post";
import { fetchAuthors } from "../../redux/modules/authors";
import { fetchPosts, setFilter, setOrder } from "../../redux/modules/posts";
import {
  getAuthors,
  getPostsFilteredOrdered,
  isPostsLoading,
  isPostsError,
} from "../../redux/modules/selects";
import Filter from "./Filter";
import Typography from "../../components/Typography";

function Home() {
  const dispatch = useDispatch();
  const authors = useSelector(getAuthors);
  const isLoading = useSelector(isPostsLoading);
  const isError = useSelector(isPostsError);
  const posts = useSelector(getPostsFilteredOrdered);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchAuthors());
      dispatch(fetchPosts());
    }

    fetchData();
  }, []);

  const handleChangeFilter = (event) => {
    dispatch(setFilter({ author: event.target.value }));
  };

  const handleChangeOrder = (event) => {
    dispatch(setOrder({ date: event.target.value }));
  };

  return (
    <div data-testid="home-screen" className="home">
      <Filter
        data={authors}
        onChangeFilter={handleChangeFilter}
        onChangeOrder={handleChangeOrder}
      />
      {isLoading && (
        <div className={clsx("mt-5", "mb-5")}>
          <Loading />
        </div>
      )}
      {isError && (
        <Typography component="p" variant="h5">
          Erro ao carregar os posts. Recarregue a página.
        </Typography>
      )}
      {Array.isArray(posts) &&
        posts.map(({ author, title, publishedAt, body }) => (
          <Post
            author={author?.name}
            body={body}
            key={title}
            publishedAt={publishedAt}
            title={title}
          />
        ))}
    </div>
  );
}

export default Home;
