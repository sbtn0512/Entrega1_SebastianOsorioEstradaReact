import { Icon } from '@iconify/react';

function CartWidget() {
    return (
        <div className=",r-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <Icon
                        icon="uil:cart"
                        width="28"
                    />
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
            </div>
        </div>
    )
}

export default CartWidget