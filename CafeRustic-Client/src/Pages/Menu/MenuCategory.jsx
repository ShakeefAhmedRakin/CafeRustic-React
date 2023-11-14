import MenuItem from "../../Components/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem item={item} key={item._id} showButton={true}></MenuItem>
        ))}
      </div>
    </>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
};

export default MenuCategory;
