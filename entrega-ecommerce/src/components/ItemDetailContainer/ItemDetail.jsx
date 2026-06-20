import { Icon } from "@iconify/react";
import ItemCount from "./ItemCount";

function ItemDetail({ vehicle }) {
    return (
        <section className="max-w-7xl mx-auto px-8 py-16">
            <div className="breadcrumbs text-sm mb-10">
                <ul>
                    <li>Inicio</li>
                    <li>Vehículos</li>
                    <li>{vehicle?.title}</li>
                </ul>
            </div>
            {/* Principal */}
            <div className="grid grid-cols-2 gap-16">
                {/* Imagen */}
                <div className="bg-base-200 rounded-3xl overflow-hidden border border-base-300">
                    <img
                        src={`${vehicle?.image}?w=1200&q=90`}
                        loading="lazy"
                        alt={vehicle?.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Información */}
                <div>
                    <div className="badge badge-primary mb-4">
                        {vehicle?.featured ? "Destacado" : "Colección"}
                    </div>
                    <p className="uppercase tracking-wider text-primary font-semibold">
                        {vehicle?.brand}
                    </p>
                    <h1 className="text-5xl font-bold mt-2">
                        {vehicle?.model}
                    </h1>
                    <p className="text-xl text-base-content/70 mt-2">
                        {vehicle?.year}
                    </p>
                    <div className="divider"></div>
                    <p className="text-4xl font-bold text-primary">
                        ${vehicle?.price.toLocaleString()}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="stat bg-base-200 rounded-2xl">
                            <div className="stat-title">
                                Escala
                            </div>
                            <div className="stat-value text-2xl">
                                {vehicle?.scale}
                            </div>
                        </div>
                        <div className="stat bg-base-200 rounded-2xl">
                            <div className="stat-title">
                                Color
                            </div>
                            <div className="stat-value text-2xl">
                                {vehicle?.color}
                            </div>
                        </div>
                        <div className="stat bg-base-200 rounded-2xl">
                            <div className="stat-title">
                                Transmisión
                            </div>
                            <div className="stat-value text-lg">
                                {vehicle?.transmission}
                            </div>
                        </div>
                        <div className="stat bg-base-200 rounded-2xl">
                            <div className="stat-title">
                                Stock
                            </div>
                            <div className="stat-value text-2xl">
                                {vehicle?.stock}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <ItemCount stock={vehicle?.stock} />
                    </div>

                    <button
                        className="btn btn-primary btn-lg w-full mt-8"
                    >
                        <Icon
                            icon="mdi:cart"
                            width="22"
                        />
                        Agregar al carrito
                    </button>
                </div>
            </div>
            {/* Descripción */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-6">
                    Descripción
                </h2>
                <div className="bg-base-200 rounded-3xl p-8">
                    <p className="leading-relaxed text-lg">
                        {vehicle?.description}
                    </p>
                </div>
            </div>
            {/* Especificaciones */}
            <div className="mt-10">
                <h2 className="text-3xl font-bold mb-6">
                    Especificaciones
                </h2>
                <div className="overflow-x-auto">
                    <table className="table bg-base-200 rounded-3xl">
                        <tbody>
                            <tr>
                                <th>Motor</th>
                                <td>{vehicle?.engine}</td>
                            </tr>
                            <tr>
                                <th>Marca</th>
                                <td>{vehicle?.brand}</td>
                            </tr>
                            <tr>
                                <th>Modelo</th>
                                <td>{vehicle?.model}</td>
                            </tr>
                            <tr>
                                <th>Año</th>
                                <td>{vehicle?.year}</td>
                            </tr>
                            <tr>
                                <th>Escala</th>
                                <td>{vehicle?.scale}</td>
                            </tr>
                            <tr>
                                <th>Color</th>
                                <td>{vehicle?.color}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail
