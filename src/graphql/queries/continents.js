import { gql } from "@apollo/client";

export const CONTINENTS_QUERY = gql`
  query getContinents {
    continents {
      name
      code
    }
  }
`;