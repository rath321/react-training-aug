// import React, { Component } from 'react';

// class PropTypesComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h2 className="text-primary">Hello, {this.props.name.toUpperCase()}</h2>
//                 <h2 className="text-primary">Age is, {this.props.age}</h2>
//             </>
//         );
//     }

//     static get defaultProps() {
//         return {
//             name: "Indiamart",
//             age: 0
//         };
//     }
// }

// class PropTypesRoot extends Component {
//     render() {
//         return (
//             <>
//                 <PropTypesComponent />
//                 <hr />
//                 <PropTypesComponent name={"manish"} />
//                 <hr />
//                 <PropTypesComponent name={"manish"} age={20} />
//             </>
//         );
//     }
// }

// export default PropTypesRoot;

// ---------------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropTypesComponent extends Component {
    render() {
        return (
            <>
                <h2 className="text-primary">Hello, {this.props.name.toUpperCase()}</h2>
                <h2 className="text-primary">Age is, {this.props.age}</h2>
            </>
        );
    }

    // static get propTypes() {
    //     return {
    //         name: PropTypes.string.isRequired,
    //         // age: PropTypes.number
    //         age: function(props, propName, componentName) {
    //             if (props[propName] < 20) {
    //                 throw new Error("Age must be greater than 20 in - " + componentName);
    //             }
    //         }
    //     };
    // }
}

PropTypesComponent.propTypes = {
    name: PropTypes.string.isRequired,
    // age: PropTypes.number
    age: function (props, propName, componentName) {
        if (props[propName] < 20) {
            throw new Error("Age must be greater than 20 in - " + componentName);
        }
    },
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired
}

class PropTypesRoot extends Component {
    render() {
        return (
            <>
                {/* <PropTypesComponent /> */}
                {/* <hr />
                <PropTypesComponent name={"manish"} />
                <hr />
                <PropTypesComponent name={"manish"} age={"20"} />
                <hr /> */}
                <PropTypesComponent name={"manish"} age={20} products={[{id:1, name:"Item One", description:"Widget", price:20}]}/>
            </>
        );
    }
}

export default PropTypesRoot;