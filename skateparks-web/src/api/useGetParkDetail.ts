import axios from "axios";
import { useEffect, useState } from "react";
import { getToken } from "src/utils/localStorage";
import { API_URL } from "./API_URL";

interface IProps {
  id: string;
}

export const useGetParkDetail = ({ id }: IProps) => {
  const access_token = getToken();

  //   useEffect(() => {
  //     axios.get(`${API_URL}/park/parks/${id}`, {
  //       headers: {
  //         Authorization: `Token ${access_token}`,
  //       },
  //     });
  //       .then((res) => setParks(res.data));
  //   }, []);
};
