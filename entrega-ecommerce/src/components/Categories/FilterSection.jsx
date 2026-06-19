import { NavLink } from "react-router-dom";

function FilterSection({ categories }) {
    return (
        <div>
            {/* Header */}
            <div className="mb-10">
                <p className="text-primary font-semibold uppercase tracking-wider">
                    Catálogo
                </p>
                <h2 className="text-5xl font-bold mt-2">
                    Vehículos Coleccionables
                </h2>
                <p className="text-base-content/70 mt-4 max-w-2xl">
                    Explora nuestra colección de miniaturas premium.
                </p>
            </div>
            {/* Filters */}
            <div className="flex gap-4 flex-wrap mb-12">
                <NavLink
                    to={`/categories/`}
                    className={({ isActive }) =>
                        `btn btn-outline rounded-full capitalize ${isActive ? "btn-primary" : "btn-ghost"} `}
                >
                    Todos
                </NavLink>
                {
                    categories?.map((cat) => (
                        <div key={cat.id}>
                            <NavLink
                                to={`/categories/${cat.id}`}
                                className={({ isActive }) =>
                                    `btn btn-outline rounded-full capitalize ${isActive ? "btn-primary" : "btn-ghost"} `}
                            >
                                {cat.slug}
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterSection
