import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import axios from "axios";
import MenuItem from "../../Components/MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      setMenu(res.data.filter((item) => item.category === "popular"));
    });
  }, []);

  return (
    <>
      <SectionTitle
        mainText={"OUR MENU"}
        subText={"Check it out"}
      ></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <button className="btn bg-transparent border-0 border-b-2 border-black hover:border-black text-xl font-medium">
          View Full Menu
        </button>
      </div>
    </>
  );
};

export default Menu;
