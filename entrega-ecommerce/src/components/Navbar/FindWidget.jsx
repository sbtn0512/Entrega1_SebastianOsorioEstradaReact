import { Icon } from '@iconify/react';

function CartWidget() {
    return (
        <div className=",r-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <Icon
                        icon="mdi:car-search"
                        width="28"
                    />
                </div>
            </div>
        </div>
    )
}

export default CartWidget