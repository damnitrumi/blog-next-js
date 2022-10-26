import { HtmlContent } from "../HtmlContent";
import * as Styled from "./styles";

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlContent html={footerHtml} />
    </Styled.Container>
  );
};

export type FooterProps = {
  footerHtml: string;
};
