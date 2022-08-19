import axios from "axios";
import { IPark } from "src/types/park";
import { getToken } from "src/utils/localStorage";
import { API_URL } from "./API_URL";

export const createPark = async ({
  name,
  street_number,
  street_name,
  city,
  state,
  postal_code,
  country,
  description,
  image,
}: IPark) => {
  const url = `${API_URL}/park/parks/`;
  const access_token = getToken();

  try {
    const response = await axios.post(
      url,
      {
        name,
        street_number,
        street_name,
        city,
        state,
        postal_code,
        country,
        description,
        image,
      },
      {
        headers: {
          Authorization: `Token ${access_token}`,
        },
      }
    );

    let postSuccess;

    const { data } = response;

    if (data) {
      postSuccess = true;
    }
    return postSuccess;
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};
