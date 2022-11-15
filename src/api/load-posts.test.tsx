import request from "graphql-request";
import config from "../config";
import { defaultLoadPostsVariables, loadPosts } from "./load-posts";

jest.mock("graphql-request");

jest.mock("../graphql/queries", () => {
  return {
    GRAPHQL_QUERY: "A_QUERY",
  };
});

describe("load-posts", () => {
  it("should call request with default variables", async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      "A_QUERY",
      defaultLoadPostsVariables,
    );
  });

  it("should call request with custom variables", async () => {
    await loadPosts({
      authorSlug: { eq: "OK" },
      tagSlug: { eq: "TAG" },
      categorySlug: { eq: "CAT" },
      limit: 100,
      postSearch: { containsi: "SEARCH" },
      postSlug: { eq: "SLUG" },
      sort: "SORT",
      start: 1,
    });

    expect(request).toHaveBeenCalledWith(config.graphqlURL, "A_QUERY", {
      ...defaultLoadPostsVariables,
      authorSlug: { eq: "OK" },
      tagSlug: { eq: "TAG" },
      categorySlug: { eq: "CAT" },
      limit: 100,
      postSearch: { containsi: "SEARCH" },
      postSlug: { eq: "SLUG" },
      sort: "SORT",
      start: 1,
    });
  });
});
