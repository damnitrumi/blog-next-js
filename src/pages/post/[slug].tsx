import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { loadPosts, StrapiPostAndSettings } from "../../api/load-posts";
import { unformattedData } from "../../shared-types/unformatted-data";
import { PostTemplate } from "../../templates/PostTemplate";
import { mapData } from "../../utils/map-data";

export default function PostPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const post = posts[0];
  return (
    <>
      <Head>
        <title>
          {post.title} - {setting.blogName}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate post={post} settings={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: unformattedData | null = null;
  let formattedData: StrapiPostAndSettings;
  let paths = [];

  try {
    data = await loadPosts();
    formattedData = mapData(data);
    paths = formattedData.posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    });
  } catch {
    data = null;
  }

  if (!data || !data.posts || !data.posts.data.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx,
) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: { eq: ctx.params.slug as string } });
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
