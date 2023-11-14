import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const specials = menu.filter((item) => item.is_special === true);
  const soups = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");

  return (
    <>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <PageTitle
        image={"/src/assets/menu/title.jpg"}
        title={"OUR MENU"}
      ></PageTitle>

      {/* SPECIALS OF TODAY */}
      <div className="container mx-auto max-w-screen-2xl px-5 my-10">
        <SectionTitle
          mainText={"Today's Specials"}
          subText={"Try these out"}
        ></SectionTitle>
        <MenuCategory items={specials}></MenuCategory>
      </div>

      {/* SOUP */}
      <div>
        <PageTitle
          image={"/src/assets/menu/soup.jpg"}
          title={"SOUP"}
        ></PageTitle>
        <div className="container mx-auto max-w-screen-2xl px-5 my-10">
          <MenuCategory items={soups}></MenuCategory>
        </div>
      </div>

      {/* SOUP */}
      <div>
        <PageTitle
          image={"/src/assets/menu/pizza.jpg"}
          title={"PIZZA"}
        ></PageTitle>
        <div className="container mx-auto max-w-screen-2xl px-5 my-10">
          <MenuCategory items={pizza}></MenuCategory>
        </div>
      </div>

      {/* DESSERT */}
      <div>
        <PageTitle
          image={"/src/assets/menu/dessert.jpg"}
          title={"DESSERT"}
        ></PageTitle>
        <div className="container mx-auto max-w-screen-2xl px-5 my-10">
          <MenuCategory items={dessert}></MenuCategory>
        </div>
      </div>
    </>
  );
};

export default Menu;
