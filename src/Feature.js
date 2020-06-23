import React from 'react';
import slugify from 'slugify';
import Selection from './Selection'



function Feature(props) {
    const featureHash = props.feature + '-' + props.idx;
    const options = props.features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <Selection selected={props.selected} feature={props.feature} item={item} itemHash={itemHash} updateFeature={props.updateFeature} />
        );
    });

    return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{props.feature}</h3>
            </legend>
            {options}
        </fieldset>
    );
}

export default Feature