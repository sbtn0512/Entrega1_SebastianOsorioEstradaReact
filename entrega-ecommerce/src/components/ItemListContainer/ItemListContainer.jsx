import useFetch from "../../hooks/useFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {

    const url = "https://api.npoint.io/8c64f09c8f37b56dff71";
    const { data } = useFetch(url);
    const { categoryId } = useParams();
    const filtrados = categoryId ? data.vehicles?.filter((vehicle) => vehicle.categoryId === categoryId) : data.vehicles
    
    return (
        <div className="min-h-300 overflow-y-auto pr-2">
            <ItemList vehicles={filtrados} />
        </div>
    )
}

export default ItemListContainer