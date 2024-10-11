import { gql } from "@apollo/client";

export const QUERY_ALL_TEXTES = gql`
  query Textes {
    items: textes {
      id
      subtitle
      title
      content {
        document
      }
    }
  }
`;
