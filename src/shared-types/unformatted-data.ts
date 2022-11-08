import { MenuPropsLinks } from "../components/Menu";

export type unformattedData = {
  setting: {
    data: {
      id: string;
      attributes: {
        blogName: string;
        blogDescription: string;
        logo: {
          data: {
            id: string;
            attributes: {
              alternativeText: string;
              url: string;
            };
          };
        };
        menuLink: MenuPropsLinks[];
        text: string;
      };
    };
  };
  posts: {
    data: {
      id: string;
      attributes: {
        title: string;
        slug: string;
        excerpt: string;
        content: string;
        createdAt: string;
        allowComments: boolean;
        cover: {
          data: {
            id: string;
            attributes: {
              alternativeText: string;
              url: string;
            };
          };
        };
        categories: {
          data: dataPattern[];
        };
        tags: {
          data: dataPattern[];
        };
        author: {
          data: dataPattern;
        };
      };
    }[];
  };
};

export type dataPattern = {
  id: string;
  attributes: {
    displayName: string;
    slug: string;
  };
};
