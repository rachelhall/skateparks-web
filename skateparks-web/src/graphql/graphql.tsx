import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
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

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = {
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

export type QueryQueryVariables = Exact<{ [key: string]: never }>;

export type QueryQuery = {
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

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
  __typename?: "Query";
  listPosts: {
    __typename?: "PostsResult";
    success: boolean;
    posts?: Array<{ __typename?: "Post"; id: string } | null> | null;
  };
};

export const PostsDocument = gql`
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

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
export const QueryDocument = gql`
  query Query {
    listPosts {
      posts {
        id
        title
        description
        created_at
      }
      success
      errors
    }
  }
`;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<QueryQuery, QueryQueryVariables>(
    QueryDocument,
    options
  );
}
export function useQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(
    QueryDocument,
    options
  );
}
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<
  QueryQuery,
  QueryQueryVariables
>;
export const Document = gql`
  {
    listPosts {
      success
      posts {
        id
      }
    }
  }
`;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
