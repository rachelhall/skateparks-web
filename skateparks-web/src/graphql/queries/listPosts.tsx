import { gql, useQuery } from "@apollo/client";

interface PostQuery {
  post: {
    id: string;
    title: string;
    description: string;
    created_at: string;
  };
}

const PostQueryDocument = gql`
  query Posts {
    listPosts {
      success
      errors
      posts {
        id
        title
        description
        created_at
      }
    }
  }
`;

export const Posts = () => {
  const { data } = useQuery<PostQuery>(PostQueryDocument);
};
