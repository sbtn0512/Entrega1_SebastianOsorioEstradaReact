import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const { id } = useParams();
    const url = "https://api.npoint.io/8c64f09c8f37b56dff71";
    const { data } = useFetch(url);

    const vehicle = data.vehicles?.find(prod => prod.id === id)
    return (
        <div className="p-4">
            <ItemDetail vehicle={vehicle} />
        </div>
    )
}

export default ItemDetailContainer
