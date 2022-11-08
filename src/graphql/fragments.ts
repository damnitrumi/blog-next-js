import { gql } from "graphql-request";

export const GRAPHQL_FRAGMENTS = gql`
  fragment settings on SettingEntity {
    id
    attributes {
      blogName
      blogDescription
      logo {
        data {
          id
          attributes {
            alternativeText
            url
          }
        }
      }
      menuLink {
        id
        link
        text
        newTab
      }
      text
    }
  }

  fragment posts on PostEntity {
    id
    attributes {
      title
      slug
      excerpt
      content
      createdAt
      allowComments
      cover {
        data {
          id
          attributes {
            alternativeText
            url
          }
        }
      }
      categories {
        data {
          id
          attributes {
            displayName
            slug
          }
        }
      }
      tags {
        data {
          id
          attributes {
            displayName
            slug
          }
        }
      }
      author {
        data {
          id
          attributes {
            displayName
            slug
          }
        }
      }
    }
  }
`;
