import axios from "axios";
import { useEffect, useState } from "react";
import { getToken } from "src/utils/localStorage";
import { API_URL } from "./API_URL";

export const useGetParks = () => {
  const [parks, setParks] = useState([]);

  const localServer_URL = `http://127.0.0.1:8000/api`;

  const access_token = getToken();

  useEffect(() => {
    axios
      .get(`${API_URL}/park/parks`, {
        headers: {
          Authorization: `Token ${access_token}`,
        },
      })
      .then((res) => setParks(res.data));
  }, []);

  return parks;
};
