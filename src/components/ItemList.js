import { useDispatch } from "react-redux";
import { RES_IMAGE_URL } from "../utils/constants.js";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 border-black border-b-2 text-left flex"
        >
          <div className="text-center w-3/12">
            <div className="absolute">
              <button className=" m-auto rounded-md shadow-lg bg-white text-green-600 border border-black" onClick={() => handleAddItem(item)}>
                
                ADD +
              </button>
            </div>
            <img
              className="w-full"
              src={RES_IMAGE_URL + item.card.info.imageId}
            />
          </div>
          <div className="py-2 px-2 w-9/12">
            <span className="text-xl">{item.card.info.name} -</span>
            <span>
              Rs:{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <div>
              {<span className="text-xs">{item.card.info.description}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
