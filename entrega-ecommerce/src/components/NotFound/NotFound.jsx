import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function NotFound() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-2xl text-center">
                {/* Icono */}
                <div className="flex justify-center mb-8">
                    <div className="
                        w-32
                        h-32
                        rounded-full
                        bg-base-200
                        border
                        border-base-300
                        flex
                        items-center
                        justify-center
                    ">
                        <Icon
                            icon="mdi:car-off"
                            width="72"
                        />
                    </div>

                </div>
                {/* 404 */}
                <p className="
                    text-primary
                    font-bold
                    text-8xl
                    leading-none
                ">
                    404
                </p>
                {/* Título */}
                <h1 className="
                    text-5xl
                    font-bold
                    mt-6
                ">
                    Vehículo no encontrado
                </h1>
                {/* Descripción */}
                <p className="
                    text-lg
                    text-base-content/70
                    mt-6
                    leading-relaxed
                ">
                    Parece que el modelo que buscas no se encuentra en
                    nuestra colección o la ruta que intentas visitar
                    no existe.
                </p>
                {/* Botones */}
                <div className="
                    flex
                    justify-center
                    gap-4
                    mt-10
                ">
                    <Link
                        to="/"
                        className="
                            btn
                            btn-primary
                            btn-lg
                            rounded-full
                            px-8
                        "
                    >
                        Volver al garaje
                    </Link>
                    <Link
                        to="/categories"
                        className="
                            btn
                            btn-outline
                            btn-lg
                            rounded-full
                            px-8
                        "
                    >
                        Explorar colección
                    </Link>
                </div>
                {/* Decoración */}
                <div className="
                    flex
                    justify-center
                    gap-6
                    mt-16
                    opacity-30
                ">
                    <Icon icon="mdi:car-sports" width="32" />
                    <Icon icon="mdi:car-estate" width="32" />
                    <Icon icon="mdi:truck" width="32" />
                    <Icon icon="mdi:car-electric" width="32" />
                </div>
            </div>
        </section>
    );
}

export default NotFound;