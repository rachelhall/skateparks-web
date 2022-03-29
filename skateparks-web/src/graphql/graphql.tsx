import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: PostResult;
  deletePost: PostResult;
  updatePost: PostResult;
};

export type MutationCreatePostArgs = {
  created_at?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  title: Scalars["String"];
};

export type MutationDeletePostArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type MutationUpdatePostArgs = {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
};

export type Post = {
  __typename?: "Post";
  created_at: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type PostResult = {
  __typename?: "PostResult";
  errors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  post?: Maybe<Post>;
  success: Scalars["Boolean"];
};

export type PostsResult = {
  __typename?: "PostsResult";
  errors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
  success: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  getPost: PostResult;
  listPosts: PostsResult;
};

export type QueryGetPostArgs = {
  id: Scalars["ID"];
};

export type GetAllParksQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllParksQuery = {
  __typename?: "Query";
  listPosts: {
    __typename?: "PostsResult";
    success: boolean;
    errors?: Array<string | null> | null;
    posts?: Array<{
      __typename?: "Post";
      id: string;
      title: string;
      description: string;
      created_at: string;
    } | null> | null;
  };
};

export type GetParkQueryVariables = Exact<{
  getPostId: Scalars["ID"];
}>;

export type GetParkQuery = {
  __typename?: "Query";
  getPost: {
    __typename?: "PostResult";
    success: boolean;
    errors?: Array<string | null> | null;
    post?: {
      __typename?: "Post";
      id: string;
      title: string;
      description: string;
      created_at: string;
    } | null;
  };
};

export const GetAllParksDocument = gql`
  query getAllParks {
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

/**
 * __useGetAllParksQuery__
 *
 * To run a query within a React component, call `useGetAllParksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllParksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllParksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllParksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllParksQuery,
    GetAllParksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllParksQuery, GetAllParksQueryVariables>(
    GetAllParksDocument,
    options
  );
}
export function useGetAllParksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllParksQuery,
    GetAllParksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllParksQuery, GetAllParksQueryVariables>(
    GetAllParksDocument,
    options
  );
}
export type GetAllParksQueryHookResult = ReturnType<typeof useGetAllParksQuery>;
export type GetAllParksLazyQueryHookResult = ReturnType<
  typeof useGetAllParksLazyQuery
>;
export type GetAllParksQueryResult = Apollo.QueryResult<
  GetAllParksQuery,
  GetAllParksQueryVariables
>;
export const GetParkDocument = gql`
  query getPark($getPostId: ID!) {
    getPost(id: $getPostId) {
      success
      errors
      post {
        id
        title
        description
        created_at
      }
    }
  }
`;

/**
 * __useGetParkQuery__
 *
 * To run a query within a React component, call `useGetParkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParkQuery({
 *   variables: {
 *      getPostId: // value for 'getPostId'
 *   },
 * });
 */
export function useGetParkQuery(
  baseOptions: Apollo.QueryHookOptions<GetParkQuery, GetParkQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetParkQuery, GetParkQueryVariables>(
    GetParkDocument,
    options
  );
}
export function useGetParkLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetParkQuery, GetParkQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetParkQuery, GetParkQueryVariables>(
    GetParkDocument,
    options
  );
}
export type GetParkQueryHookResult = ReturnType<typeof useGetParkQuery>;
export type GetParkLazyQueryHookResult = ReturnType<typeof useGetParkLazyQuery>;
export type GetParkQueryResult = Apollo.QueryResult<
  GetParkQuery,
  GetParkQueryVariables
>;
