import axios from "axios";
import { IPost } from "src/types/post";
import { getToken } from "src/utils/localStorage";
import { API_URL } from "./API_URL";

export const createPost = async ({
  title,
  description,
  park,
  image,
}: IPost) => {
  const url = `${API_URL}/post/posts/`;
  const access_token = getToken();

  console.log({ title, description, park, image });

  const formData = new FormData();
  formData.append("title", title);
  description && formData.append("description", description);
  park && formData.append("park", park.toString());
  image && formData.append("image", image);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        Authorization: `Token ${access_token}`,
      },
    });

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
