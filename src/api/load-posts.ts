import { request } from "graphql-request";
import { SettingsStrapi } from "../shared-types/settings-strapi";
import config from "../config";
import { GRAPHQL_QUERY } from "../graphql/queries";
import { PostStrapi } from "../shared-types/post-strapi";
import { unformattedData } from "../shared-types/unformatted-data";

// export type LoadPostsVariables = {
//   categorySlug?: string;
//   postSlug?: string;
//   postSearch?: string;
//   authorSlug?: string;
//   tagSlug?: string;
//   sort?: string;
//   start?: number;
//   limit?: number;
// };

export type LoadPostsVariables = {
  categorySlug?: {
    eq: string;
  };
  postSlug?: {
    eq: string;
  };
  postSearch?: {
    eq: string;
  };
  authorSlug?: {
    eq: string;
  };
  tagSlug?: {
    eq: string;
  };
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<unformattedData> => {
  const defaultVariables: LoadPostsVariables = {
    sort: "createdAt:desc",
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  return data;
};
