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

export enum IEElement {
  Bowl = "BOWL",
  Full = "FULL",
  Ledge = "LEDGE",
  Mini = "MINI",
  Pool = "POOL",
  Quarter = "QUARTER",
  Rail = "RAIL",
  Vert = "VERT",
}

export enum IERails {
  Down = "DOWN",
  Rainbow = "RAINBOW",
  Round = "ROUND",
  Square = "SQUARE",
}

export enum IERegion {
  MidWest = "MID_WEST",
  NorthEast = "NORTH_EAST",
  PacificNorthWest = "PACIFIC_NORTH_WEST",
  RockyMountains = "ROCKY_MOUNTAINS",
  SouthEast = "SOUTH_EAST",
  WestCoast = "WEST_COAST",
}

export type IMutation = {
  __typename?: "Mutation";
  createPark: IParkResult;
  deletePark: IParkResult;
  updatePark: IParkResult;
  uploadImage: IImageResult;
};

export type IMutationCreateParkArgs = {
  city: Scalars["String"];
  country?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  elements?: InputMaybe<Array<InputMaybe<IEElement>>>;
  imageUrl?: InputMaybe<Scalars["String"]>;
  state: Scalars["String"];
  streetName?: InputMaybe<Scalars["String"]>;
  streetNumber?: InputMaybe<Scalars["Int"]>;
  title: Scalars["String"];
};

export type IMutationDeleteParkArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type IMutationUpdateParkArgs = {
  city: Scalars["String"];
  country?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  elements?: InputMaybe<Array<InputMaybe<IEElement>>>;
  id: Scalars["ID"];
  imageUrl?: InputMaybe<Scalars["String"]>;
  state: Scalars["String"];
  streetName: Scalars["String"];
  streetNumber: Scalars["Int"];
  title?: InputMaybe<Scalars["String"]>;
};

export type IMutationUploadImageArgs = {
  imageUrl?: InputMaybe<Scalars["String"]>;
};

export type IPark = {
  __typename?: "Park";
  city: Scalars["String"];
  country?: Maybe<Scalars["String"]>;
  created_at: Scalars["String"];
  description: Scalars["String"];
  elements?: Maybe<Array<Maybe<IEElement>>>;
  id: Scalars["ID"];
  imageUrl?: Maybe<Scalars["String"]>;
  state: Scalars["String"];
  streetName: Scalars["String"];
  streetNumber: Scalars["Int"];
  title: Scalars["String"];
};

export type IParkResult = {
  __typename?: "ParkResult";
  errors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  park?: Maybe<IPark>;
  success: Scalars["Boolean"];
};

export type IParksResult = {
  __typename?: "ParksResult";
  errors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  parks?: Maybe<Array<Maybe<IPark>>>;
  success: Scalars["Boolean"];
};

export type IQuery = {
  __typename?: "Query";
  getPark: IParkResult;
  listParks: IParksResult;
};

export type IQueryGetParkArgs = {
  id: Scalars["ID"];
};

export type IImageResult = {
  __typename?: "imageResult";
  errors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  imageUrl?: Maybe<IUploadResponse>;
  success: Scalars["Boolean"];
};

export type IUploadResponse = {
  __typename?: "uploadResponse";
  bytes?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["String"]>;
  format?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  public_id?: Maybe<Scalars["String"]>;
  resource_type?: Maybe<Scalars["String"]>;
  secure_url?: Maybe<Scalars["String"]>;
  signature?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ICreateParkMutationVariables = Exact<{
  title: Scalars["String"];
  description: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  streetNumber?: InputMaybe<Scalars["Int"]>;
  streetName?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  elements?: InputMaybe<Array<InputMaybe<IEElement>> | InputMaybe<IEElement>>;
}>;

export type ICreateParkMutation = {
  __typename?: "Mutation";
  createPark: {
    __typename?: "ParkResult";
    park?: { __typename?: "Park"; id: string; title: string } | null;
  };
};

export type IParksQueryVariables = Exact<{ [key: string]: never }>;

export type IParksQuery = {
  __typename?: "Query";
  listParks: {
    __typename?: "ParksResult";
    success: boolean;
    errors?: Array<string | null> | null;
    parks?: Array<{
      __typename?: "Park";
      id: string;
      title: string;
      description: string;
      streetNumber: number;
      streetName: string;
      city: string;
      state: string;
      country?: string | null;
      imageUrl?: string | null;
      created_at: string;
    } | null> | null;
  };
};

export const CreateParkDocument = gql`
  mutation createPark(
    $title: String!
    $description: String!
    $city: String!
    $state: String!
    $streetNumber: Int
    $streetName: String
    $country: String
    $elements: [EElement]
  ) {
    createPark(
      title: $title
      description: $description
      city: $city
      state: $state
      streetNumber: $streetNumber
      streetName: $streetName
      country: $country
      elements: $elements
    ) {
      park {
        id
        title
      }
    }
  }
`;
export type ICreateParkMutationFn = Apollo.MutationFunction<
  ICreateParkMutation,
  ICreateParkMutationVariables
>;

/**
 * __useCreateParkMutation__
 *
 * To run a mutation, you first call `useCreateParkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateParkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createParkMutation, { data, loading, error }] = useCreateParkMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      city: // value for 'city'
 *      state: // value for 'state'
 *      streetNumber: // value for 'streetNumber'
 *      streetName: // value for 'streetName'
 *      country: // value for 'country'
 *      elements: // value for 'elements'
 *   },
 * });
 */
export function useCreateParkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ICreateParkMutation,
    ICreateParkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ICreateParkMutation, ICreateParkMutationVariables>(
    CreateParkDocument,
    options
  );
}
export type CreateParkMutationHookResult = ReturnType<
  typeof useCreateParkMutation
>;
export type CreateParkMutationResult =
  Apollo.MutationResult<ICreateParkMutation>;
export type CreateParkMutationOptions = Apollo.BaseMutationOptions<
  ICreateParkMutation,
  ICreateParkMutationVariables
>;
export const ParksDocument = gql`
  query Parks {
    listParks {
      parks {
        id
        title
        description
        streetNumber
        streetName
        city
        state
        country
        imageUrl
        created_at
      }
      success
      errors
    }
  }
`;

/**
 * __useParksQuery__
 *
 * To run a query within a React component, call `useParksQuery` and pass it any options that fit your needs.
 * When your component renders, `useParksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParksQuery({
 *   variables: {
 *   },
 * });
 */
export function useParksQuery(
  baseOptions?: Apollo.QueryHookOptions<IParksQuery, IParksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IParksQuery, IParksQueryVariables>(
    ParksDocument,
    options
  );
}
export function useParksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IParksQuery, IParksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IParksQuery, IParksQueryVariables>(
    ParksDocument,
    options
  );
}
export type ParksQueryHookResult = ReturnType<typeof useParksQuery>;
export type ParksLazyQueryHookResult = ReturnType<typeof useParksLazyQuery>;
export type ParksQueryResult = Apollo.QueryResult<
  IParksQuery,
  IParksQueryVariables
>;
