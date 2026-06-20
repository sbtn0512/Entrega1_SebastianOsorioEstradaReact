import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


function Item({ id, image, title, featured, available, brand, model, year, scale, price }) {
    return (
        <article className="h-107.5 group bg-base-200 rounded-3xl overflow-hidden border border-base-300 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
            {/* Imagen */}
            <div className="relative overflow-hidden">
                <div className="h-56 w-full">
                    <img
                        src={`${image}?w=600&q=80`}
                        loading="lazy"
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>
                {/* Featured */}
                {featured && (
                    <div className="absolute top-4 left-4 badge badge-primary">
                        Destacado
                    </div>
                )}
                {/* Disponible */}
                <div
                    className={`absolute top-4 right-4 badge ${available
                        ? "badge-success"
                        : "badge-error"
                        }`}
                >
                    {available ? "Disponible" : "Agotado"}
                </div>
            </div>
            {/* Información */}
            <div className="p-5">
                {/* Marca */}
                <p className="text-sm uppercase tracking-wider text-primary font-semibold">
                    {brand}
                </p>
                {/* Modelo */}
                <h3 className="text-xl font-bold mt-1 h-7 overflow-hidden">
                    {model}
                </h3>
                {/* Año y escala */}
                <div className="flex items-center gap-4 mt-3 text-sm text-base-content/70">
                    <span className="flex items-center gap-1">
                        <Icon
                            icon="mdi:calendar"
                            width="16"
                        />
                        {year}
                    </span>
                    <span className="flex items-center gap-1">
                        <Icon
                            icon="mdi:ruler"
                            width="16"
                        />
                        {scale}
                    </span>
                </div>
                {/* Precio + botón */}
                <div className="flex justify-between items-center mt-6">
                    <div>
                        <p className="text-2xl font-bold text-primary min-w-30">
                            ${price.toLocaleString()}
                        </p>
                    </div>
                    <Link to={`/items/${id}`} className="btn btn-primary btn-sm rounded-full w-30">
                     Ver detalle
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Item
