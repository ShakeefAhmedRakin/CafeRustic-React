import { IoMdAdd } from "react-icons/io";
import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  return (
    <div className="flex flex-col h-full md:flex-row justify-between gap-x-8 gap-y-2">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full max-w-[120px] min-w-[60px] aspect-square rounded-full rounded-tl-none"
        />
      </div>
      <div>
        <div className="flex justify-between gap-6 items-center">
          <h1 className="font-Cinzel text-xl font-medium">{item.name}</h1>
          <p className="text-primary text-xl font-Inter">${item.price}</p>
        </div>
        <hr className="border-primary" />
        <p className="font-Inter mt-1 text-gray-500">{item.recipe}</p>
        <div className="flex justify-end items-end">
          {item?.showOnHome ? (
            <button className="btn btn-xs bg-primary hover:bg-primary text-white">
              <IoMdAdd></IoMdAdd>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};
export default MenuItem;
