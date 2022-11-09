import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { loadPosts, StrapiPostAndSettings } from "../../api/load-posts";
import { PostsTemplate } from "../../templates/PostsTemplate";
import { mapData } from "../../utils/map-data";

export default function TagPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const tagName = posts[0].tags.filter(
    (tag) => tag.slug === router.query.slug,
  )[0].displayName;

  return (
    <>
      <Head>
        <title>
          Tag: {tagName} - {setting.blogName}
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
    data = await loadPosts({ tagSlug: { eq: ctx.params.slug as string } });
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
