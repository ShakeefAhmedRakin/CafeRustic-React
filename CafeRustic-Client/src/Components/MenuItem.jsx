import { IoMdAdd } from "react-icons/io";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "sonner";
import useFoodCart from "../hooks/useFoodCart";

const MenuItem = ({ item, showButton }) => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useFoodCart();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        foodId: item._id,
        email: user.email,
      };

      AxiosSecure.post("/foodcart", cartItem).then((res) => {
        if (res.data.insertedId) {
          toast.success("Item added!");
          refetch();
        }
      });
    } else {
      toast.error("Please login to order!");
    }
  };
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-2">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="aspect-square rounded-full rounded-tl-none"
        />
      </div>
      <div className="col-span-2 lg:col-span-4 flex flex-col h-full justify-between">
        <div className="flex justify-between gap-6 items-center">
          <h1 className="font-Cinzel text-xs md:text-base lg:text-xl font-medium">
            {item.name}
          </h1>
          <p className="text-primary text-sm lg:text-xl font-Inter">
            ${item.price}
          </p>
        </div>
        <hr className="border-primary" />
        <p className="font-Inter text-xs lg:text-base mt-1 text-gray-500">
          {item.recipe}
        </p>
        <div className="flex justify-end items-end">
          {/* item.showOnHome */}
          {showButton ? (
            user ? (
              <button
                className="btn btn-xs bg-primary hover:bg-primary text-white"
                onClick={handleAddToCart}
              >
                <IoMdAdd></IoMdAdd>
              </button>
            ) : (
              ""
            )
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
  showButton: PropTypes.bool,
};
export default MenuItem;
