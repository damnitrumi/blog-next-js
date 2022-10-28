import { ArticleHeaderProps } from ".";
import { data } from "../../api/dados.json";

const { title, excerpt, cover, author, categories, createdAt } =
  data.posts.data[0].attributes;

const { id: coverId, attributes: coverAttributes } = cover.data;
const { alternativeText: coverAlternativeText, url: coverUrl } =
  coverAttributes;

const { id: authorId, attributes: authorAttibutes } = author.data;
const { displayName: authorDisplayName, slug: authorSlug } = authorAttibutes;

const { id: categoryId, attributes: categoriesAttibutes } = categories.data[0];
const { displayName: categoryDisplayName, slug: categorySlug } =
  categoriesAttibutes;

export default {
  createdAt,
  title,
  excerpt,
  cover: {
    id: coverId,
    alternativeText: coverAlternativeText,
    url: coverUrl,
  },
  author: {
    id: authorId,
    displayName: authorDisplayName,
    slug: authorSlug,
  },
  categories: [
    {
      id: categoryId,
      displayName: categoryDisplayName,
      slug: categorySlug,
    },
  ],
} as ArticleHeaderProps;

// excerpt,
//   cover,
//   author,
//   categories,
//   createdAt,
