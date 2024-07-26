
import ItemList from "./ItemList";

const RestaurentCategory = ({data, listItems, setListItems}) => {
   
    const displayItems = () => {
        if(listItems) {
          setListItems(null);
            console.log(listItems);
        } else {
            setListItems()
            console.log(listItems);
        }
    }
    
  return (
    <div className="w-6/12 p-4 mx-auto my-6 bg-gray-100 shadow-lg cursor-pointer " onClick={displayItems}>
        <div className="flex justify-between">
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
        </div>
      {listItems && <ItemList items={data.itemCards}/>}
    </div>
  );
};

export default RestaurentCategory;
