import React from 'react'
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

function Selection(props) {
    return(
        //selection
        <div key={props.itemHash} className="feature__item">
            <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={slugify(props.feature)}
                checked={props.item.name === props.selected[props.feature].name}
                onChange={e => props.updateFeature(props.feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
                {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
            </label>
        </div>
    )
}

export default Selection