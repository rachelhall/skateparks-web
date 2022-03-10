// import { gql, useQuery } from "@apollo/client";

// interface PostQuery {
//   getPost(id: string): {
//     id: string;
//     title: string;
//     description: string;
//     created_at: string;
//   };
// }

// const getPostDocument = gql`
//   query Post($getPostId: ID!) {
//     getPost(id: $getPostId) {
//       success
//       errors
//       post {
//         id
//         title
//         description
//         created_at
//       }
//     }
//   }
// `;

// export const Post = () => {
//   const { data } = useQuery<PostQuery>(getPostDocument);
// };
