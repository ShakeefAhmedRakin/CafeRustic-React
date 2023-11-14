import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const AxiosSecure = useAxiosSecure();

  useEffect(() => {
    AxiosSecure.get("/menuitems").then((res) => {
      setMenu(res.data);
      setLoading(false);
    });
  }, [AxiosSecure]);

  return [menu, loading];
};

export default useMenu;
