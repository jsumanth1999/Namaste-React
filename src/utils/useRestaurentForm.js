import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";


const useRestaurentForm = (id) => {
    const [resInfo, setResInfo] = useState(null);
    const [resName, setResName] = useState("");
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(MENU_URL + id);
        const json = await data.json();
        setResInfo(
            json?.data || []
          );
          setResName(json?.data.cards[2].card.card.info);
    }

    return [resInfo, resName];
};

export default useRestaurentForm;
