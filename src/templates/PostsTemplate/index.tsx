import * as Styled from "./styles";
import { PostGrid } from "../../components/PostGrid";
import { PostStrapi } from "../../shared-types/post-strapi";
import { SettingsStrapi } from "../../shared-types/settings-strapi";
import { BaseTemplate } from "../Base";
import { useEffect, useState } from "react";
import { loadPosts, LoadPostsVariables } from "../../api/load-posts";
import { mapData } from "../../utils/map-data";

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
    setNoMorePosts(false);
    setButtonDisabled(false);
    setStateVariables(variables);
  }, [posts, variables]);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);

    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePostsRaw = await loadPosts(newVariables);

    if (
      !morePostsRaw ||
      !morePostsRaw.posts ||
      !morePostsRaw.posts.data.length
    ) {
      setNoMorePosts(true);
      return;
    }

    const morePosts = mapData(morePostsRaw);

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={statePosts} />

      {statePosts && statePosts.length ? (
        <Styled.ButtonContainer>
          <Styled.Button
            onClick={handleLoadMorePosts}
            disabled={buttonDisabled}
          >
            {noMorePosts ? "Sem mais posts" : "Carregar mais"}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </BaseTemplate>
  );
};
