import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { loadPosts, StrapiPostAndSettings } from "../../api/load-posts";
import { PostsTemplate } from "../../templates/PostsTemplate";
import { mapData } from "../../utils/map-data";

export default function PostPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>
          Author: {posts[0].author.displayName} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx,
) => {
  let data = null;

  try {
    data = await loadPosts({ authorSlug: { eq: ctx.params.slug as string } });
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
    revalidate: 24 * 60 * 60,
  };
};
