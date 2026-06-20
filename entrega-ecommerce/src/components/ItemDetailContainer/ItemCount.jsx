import { useState } from 'react'

function ItemCount({ stock }) {

    const [count, setCount] = useState(1);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if (count <= 1) return;
        setCount(count - 1)
    }
    return (
        <div className="space-y">

            <label className="font-semibold">
                Cantidad
            </label>

            <div className="flex items-center bg-base-200 border border-base-300 rounded-2xl overflow-hidden w-fit">

                <button
                    onClick={decrement}
                    disabled={count === 1}
                    className="btn btn-ghost rounded-none px-5"
                >
                    −
                </button>

                <div className="px-8 font-bold text-xl min-w-20 text-center">
                    {count}
                </div>

                <button
                    onClick={increment}
                    disabled={count >= stock}
                    className="btn btn-ghost rounded-none px-5"
                >
                    +
                </button>

            </div>
        </div>
    )
}

export default ItemCount
