import { GetStaticProps } from "next";
import Head from "next/head";
import { loadPosts, StrapiPostAndSettings } from "../api/load-posts";
import { PostsTemplate } from "../templates/PostsTemplate";
import { mapData } from "../utils/map-data";

export default function Index({ setting, posts }: StrapiPostAndSettings) {
  console.log(setting);
  console.log(posts);
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} />
    </>
  );
}

export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  let data = null;

  try {
    data = await loadPosts();
    data = mapData(data);
  } catch {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: data.setting,
      posts: data.posts,
    },
  };
};
