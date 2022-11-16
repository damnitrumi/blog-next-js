import * as Styled from "./styles";
import { DiscussionEmbed } from "disqus-react";

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;

  return (
    <Styled.Container>
      <DiscussionEmbed
        shortname="blog-do-guilherme-soares"
        config={{
          url: `https://blog-next-js-damnitrumi.vercel.app/post/${slug}`,
          identifier: id,
          title: title,
          language: "pt_BR",
        }}
      />
    </Styled.Container>
  );
};
