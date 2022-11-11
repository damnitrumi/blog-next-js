import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from "../../api/load-posts";
import { PostsTemplate } from "../../templates/PostsTemplate";
import { mapData } from "../../utils/map-data";

export default function SearchPage({
  setting,
  posts,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  StrapiPostAndSettings
> = async (ctx) => {
  let data = null;

  const query = ctx.query.q || "";

  if (!query) {
    return {
      notFound: true,
    };
  }
  const variables = { postSearch: { containsi: query as string } };

  try {
    data = await loadPosts(variables);
    data = mapData(data);
  } catch {
    data = null;
  }

  if (!data || !data.posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: data.setting,
      posts: data.posts,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
  };
};
