import Item from "./Item"
import { useState } from "react";


function ItemList({ vehicles }) {

    const [visibleVehicles, setVisibleVehicles] = useState(9);
    const displayedVehicles = vehicles?.slice(0, visibleVehicles);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6">
                {
                    displayedVehicles?.map((vehicle) => (
                        <Item key={vehicle.id} {...vehicle} />
                    ))
                }
            </div>
            {
                visibleVehicles < vehicles?.length && (
                    <div className="flex justify-center mt-8 overflow-hidden">
                        <button
                            className="btn btn-outline btn-primary rounded-full px-12 text-lg hover:scale-105 transition-all"
                            onClick={() => setVisibleVehicles(prev => prev + 9)}
                        >
                            Explorar más modelos
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default ItemList
