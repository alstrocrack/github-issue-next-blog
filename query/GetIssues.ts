import { gql } from "@apollo/client";

const GetIssues = gql`
  query getIssues {
    search(query: "repo:YutoUrushima/github-issue-next-blog is:issue", type: ISSUE, first: 100) {
      issueCount
      nodes {
        ... on Issue {
          number
          title
          author {
            login
          }
          bodyHTML
          createdAt
          labels(first: 100) {
            totalCount
            nodes {
              id
              color
              name
            }
          }
        }
      }
    }
  }
`;

export default GetIssues;
