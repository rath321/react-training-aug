/* eslint-disable */
import React from 'react';

// import ComponentOne from '../2_multi-components/ComponentOne';
// import ComponentTwo from '../2_multi-components/ComponentTwo';

// import ComponentOne from '../3_inline-style/ComponentOne';
// import ComponentTwo from '../3_inline-style/ComponentTwo';

// import ComponentOne from '../4_external-css/comp-one/ComponentOne';
// import ComponentTwo from '../4_external-css/comp-two/ComponentTwo';

import ComponentOne from '../5_css-modules/comp-one/ComponentOne';
import ComponentTwo from '../5_css-modules/comp-two/ComponentTwo';
import ComponentWithState from '../6_comp-state/ComponentWithState';
import ComponentWithProps from '../7_comp-props/ComponentWithProps';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <ComponentOne />
            <ComponentTwo /> */}

            {/* <ComponentWithState /> */}
            <ComponentWithProps id={1} name={"Manish"} address={{ state: "MH" }} display={() => { console.log("Hello from Root"); }} />
        </div>
    );
};

export default RootComponent;