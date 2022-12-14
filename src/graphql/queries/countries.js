import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
  query getCountries($continentCode: ID!) {
    continent(code: $continentCode) {
      name
      countries {
        code
        name
        emoji
        languages {
          name
        }
      }
    }
  }
`;