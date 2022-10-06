import {gql} from "@apollo/client";

export const getTopics = gql`
    query($name: String!) {
         topic(name: $name) {
            name
            viewerHasStarred
            stargazerCount
            relatedTopics(first: 10) {
              name
              id
              stargazerCount
            }
          }
    }
`;