import useFetch from "../../hooks/useFetch";
import CollectionCard from "./CollectionCard";
import { Routes, Route } from "react-router-dom";


function FeaturedSection() {

    const url = "https://api.npoint.io/523ffb6a415689238fae";
    const { data } = useFetch(url);
    console.log(data);

    return (
        <section className="max-w-screen-2xl mx-auto px-5 py-4">
            <div className="mb-12">
                <p className="text-primary font-semibold uppercase tracking-wider">
                    Colecciones
                </p>
                <h2 className="text-5xl font-bold mt-2">
                    Colecciones destacadas
                </h2>
                <p className="text-base-content/70 mt-4 max-w-2xl">
                    Explora colecciones seleccionadas que presentan los vehículos más icónicos jamás creados.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {
                    data.collections?.map((collection) => (
                        <CollectionCard
                            key={collection.id}
                            title={collection.title}
                            vehicles={collection.vehicles}
                            image={collection.image}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default FeaturedSection;