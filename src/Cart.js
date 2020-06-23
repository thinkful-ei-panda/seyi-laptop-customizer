import React from 'react'
import Items from './Items'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function Cart(props) {
    const summary = Object.keys(props.selected).map((feature, idx) =>
        <Items feature={feature} idx={idx} selected={props.selected} />
    );

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        </section>
    )
}

export default Cart