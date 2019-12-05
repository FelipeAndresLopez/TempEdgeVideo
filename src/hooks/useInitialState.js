import { useState, useEffect } from "react";

const useInitialState = API => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });

  async function fetchData(setData) {
    const response = await fetch(API);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData(setVideos);
  }, []);

  return videos;
};

export default useInitialState;
