import { StrapiImage } from "../../shared-types/strapi-image";
import { ArticleMeta, ArticleMetaProps } from "../ArticleMeta";
import { Heading } from "../Heading";
import * as Styled from "./styles";

export type ArticleHeaderProps = {
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
}: ArticleHeaderProps) => {
  return (
    <Styled.Container>
      <Heading size="huge">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.url} alt={title} />
      <ArticleMeta
        createdAt={createdAt}
        author={author}
        categories={categories}
      />
    </Styled.Container>
  );
};
