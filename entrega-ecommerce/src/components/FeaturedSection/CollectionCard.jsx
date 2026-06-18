function CollectionCard({ title, vehicles, image }) {
  return (
    <div className="relative h-96 rounded-3xl overflow-hidden cursor-pointer group">

      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 p-8 z-10">

        <p className="text-sm text-primary font-semibold mb-2">
          {vehicles} Vehiculos
        </p>

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

      </div>

    </div>
  );
}

export default CollectionCard;