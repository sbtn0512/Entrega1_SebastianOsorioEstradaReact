import useFetch from "../../hooks/useFetch";
import { Routes, Route } from "react-router-dom";
import FilterSection from "./FilterSection";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

function CategoriesSection() {

    const url = "https://api.npoint.io/523ffb6a415689238fae";
    const { data } = useFetch(url);
    return (
        <>
            <section className="max-w-screen-2xl mx-auto px-10 py-10">
                <FilterSection categories={data.collections} />
                <Routes>
                    <Route
                        path="/"
                        element={<ItemListContainer />}>
                    </Route>
                    <Route
                        path="/:categoryId"
                        element={<ItemListContainer />}>
                    </Route>
                </Routes>
            </section>
        </>
    )
}

export default CategoriesSection