function Hero() {
    return (
        <section className="min-h-[90vh] bg-linear-to-br from-base-100 via-base-200 to-base-300 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-10 h-[90vh] grid grid-cols-2 items-center">
                <div className="space-y-8">
                    <div className="badge badge-primary badge-outline p-4">
                        EDICIONES DE COLECCIÓN LIMITADAS
                    </div>
                    <h1 className="text-7xl font-black leading-tight">
                        CONTRUYE TU
                        <span className="block text-primary">
                            Garage soñado
                        </span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                        Descubre réplicas en miniatura de alta calidad inspiradas en los vehículos más legendarios jamás creados. Desde iconos del JDM hasta hipercoches y leyendas de la Fórmula 1.
                    </p>
                    <div className="flex items-center gap-5">
                        <button className="btn btn-primary px-8 rounded-full">
                            Explorar colección
                        </button>
                        <button className="btn btn-outline px-8 rounded-full">
                            Ediciones Limitadas
                        </button>
                    </div>
                    <div className="flex items-center gap-12 pt-8">
                        <div>
                            <h3 className="text-3xl font-bold text-primary">
                                500+
                            </h3>
                            <p className="text-gray-400">
                                Vehiculos
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-primary">
                                120
                            </h3>
                            <p className="text-gray-400">
                                Colecciones
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-primary">
                                Ediciones
                            </h3>
                            <p className="text-gray-400">
                                Limitadas
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-125 h-125 bg-primary/50 rounded-full blur-3xl"></div>
                    <img
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
                        alt="Vehicle"
                        className="relative z-10 w-187.5 object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute bottom-10 left-0 z-20">
                        <div className="bg-base-200/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl">
                            <p className="text-sm text-gray-400 mb-2">
                                EDICIÓN LEGENDARIA
                            </p>
                            <h3 className="text-2xl font-bold">
                                Nissan Skyline R34
                            </h3>
                            <p className="text-primary font-semibold mt-2">
                                #001 / 500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero