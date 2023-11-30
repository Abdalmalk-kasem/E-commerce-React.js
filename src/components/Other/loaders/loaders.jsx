import { json } from "react-router-dom";

const fetchDataLoader = async ({ url }) => {
  try {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  } catch (error) {
    throw json(
      { message: "Could not fetch products" },
      {
        status: 500,
      }
    );
  }
};

export { fetchDataLoader };
