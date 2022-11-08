import { StrapiPostAndSettings } from "../api/load-posts";
import { PostTag } from "../shared-types/tag";
import { Category } from "../shared-types/category";
import { dataPattern, unformattedData } from "../shared-types/unformatted-data";

export const mapData = (data: unformattedData): StrapiPostAndSettings => {
  //Setting

  const { setting, posts } = data;

  const { id: settingId, attributes: settingAttributes } = setting.data;

  const { blogName, blogDescription, logo, menuLink, text } = settingAttributes;

  const { id: logoId, attributes: logoAttributes } = logo.data;

  const { alternativeText: logoAltText, url: logoUrl } = logoAttributes;

  //Posts

  const postsFormated = posts.data.map((post) => {
    const { id: postId, attributes: postAttributes } = post;

    const {
      title: postTitle,
      slug: postSlug,
      excerpt,
      content,
      createdAt,
      allowComments,
      cover,
      author,
      categories,
      tags,
    } = postAttributes;

    const { id: coverId, attributes: coverAttributes } = cover.data;
    const { alternativeText: coverAltText, url: coverUrl } = coverAttributes;

    const { id: authorId, attributes: authorAttributes } = author.data;
    const { displayName: authorDisplayName, slug: authorSlug } =
      authorAttributes;

    //PostsCategories

    const categoriesFormated = formatCategories(categories.data);

    //PostsTags

    const tagsFormated = formatTags(tags.data);

    //PostsMapReturn

    return {
      id: postId,
      title: postTitle,
      slug: postSlug,
      excerpt,
      content,
      createdAt,
      allowComments,
      cover: {
        id: coverId,
        alternativeText: coverAltText,
        url: coverUrl,
      },
      author: {
        id: authorId,
        displayName: authorDisplayName,
        slug: authorSlug,
      },
      categories: categoriesFormated,
      tags: tagsFormated,
    };
  });

  //FinalReturn

  return {
    setting: {
      id: settingId,
      blogName,
      blogDescription,
      logo: {
        id: logoId,
        alternativeText: logoAltText,
        url: logoUrl,
      },
      menuLink,
      text,
    },
    posts: postsFormated,
  };
};

const formatCategories = (categories: dataPattern[]): Category[] => {
  const formatedCategories = categories.map((category) => {
    const { id: categoryId, attributes: categoryAttributes } = category;
    const { displayName: categoryDisplayName, slug: categorySlug } =
      categoryAttributes;

    return {
      id: categoryId,
      displayName: categoryDisplayName,
      slug: categorySlug,
    };
  });

  return formatedCategories;
};

const formatTags = (tags: dataPattern[]): PostTag[] => {
  const formatedTags = tags.map((tag) => {
    const { id: tagId, attributes: tagAttributes } = tag;
    const { displayName: tagDisplayName, slug: tagSlug } = tagAttributes;

    return {
      id: tagId,
      displayName: tagDisplayName,
      slug: tagSlug,
    };
  });

  return formatedTags;
};
