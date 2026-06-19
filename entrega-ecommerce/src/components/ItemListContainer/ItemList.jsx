import Item from "./Item"

function ItemList({ vehicles }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6">
            {
                vehicles?.map((vehicle) => (
                    <Item key={vehicle.id} {...vehicle}/>
                ))
            }
        </div>
    )
}

export default ItemList
