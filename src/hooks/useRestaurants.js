import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, SetResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async () => {
    SetResults({
      date: null,
      loading: true,
      error: null,
    });
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 15,
          term: "Dessert",
          location: "Toronto",
        },
      });

      SetResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      });
    } catch (error) {
      SetResults({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };
  return [results, searchRestaurants()];
};
