import { GetStaticProps } from "next";
import Head from "next/head";
import { loadPosts, StrapiPostAndSettings } from "../api/load-posts";
import { unformattedData } from "../shared-types/unformatted-data";
import { PostsTemplate } from "../templates/PostsTemplate";
import { mapData } from "../utils/map-data";

export default function Index({ setting, posts }: StrapiPostAndSettings) {
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
  let data: unformattedData | null = null;
  let formattedData: StrapiPostAndSettings;

  try {
    data = await loadPosts();
    formattedData = mapData(data);
  } catch {
    data = null;
  }

  if (!data || !data.posts || !data.posts.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: formattedData.setting,
      posts: formattedData.posts,
    },
    revalidate: 24 * 60 * 60,
  };
};
