import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Components/MenuItem";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const showOnHome = menu.filter((item) => item.show_on_home === true);

  return (
    <>
      <SectionTitle
        mainText={"OUR MENU"}
        subText={"Check it out"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {showOnHome.map((item) => (
          <MenuItem item={item} showButton={false} key={item._id}></MenuItem>
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
