import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "src/types/post";

import { getToken } from "src/utils/localStorage";
import { API_URL } from "./API_URL";

export const useGetPosts = () => {
  const [posts, setPosts] = useState<IPost[]>();

  const access_token = getToken();

  useEffect(() => {
    axios
      .get(`${API_URL}/post/posts`, {
        headers: {
          Authorization: `Token ${access_token}`,
        },
      })
      .then((res) => setPosts(res.data));
  }, []);

  return posts;
};
