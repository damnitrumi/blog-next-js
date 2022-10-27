import * as Styled from "./styles";
import { LogoLink } from "../LogoLink";
import { Heading } from "../Heading";

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  showText?: boolean;
  logo: string;
};

export const Header = ({
  blogName,
  blogDescription,
  showText = true,
  logo,
}: HeaderProps) => {
  return (
    <Styled.Container>
      <LogoLink
        text={`${blogName} - ${blogDescription}`}
        srcImg={logo}
        link="/"
      />
      {showText && (
        <Styled.BlogInfo>
          <Heading size="small" as="h2">
            {blogName}
          </Heading>{" "}
          <p>{blogDescription}</p>
        </Styled.BlogInfo>
      )}
    </Styled.Container>
  );
};
