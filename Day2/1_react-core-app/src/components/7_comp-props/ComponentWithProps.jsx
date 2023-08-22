import React, { Component } from 'react';

class ComponentWithProps extends Component {
    constructor(props) {
        super(props);

        // this.props = { name: "Manish" };             // Props cannot be initialized
        // this.props.name = "Abhijeet";                // Error - Props are readonly

        // Reference Copy
        // this.state = this.props;
        // this.state.name = "Abhijeet";

        // Shallow Copy
        // this.state = Object.assign({}, this.props);
        // this.state = { ...this.props };
        // this.state.name = "Abhijeet";
        // this.state.address.state = "MP";

        // Deep Copy
        this.state = JSON.parse(JSON.stringify(this.props));
        this.state.name = "Abhijeet";
        this.state.address.state = "MP";

        // Immutable JS or Immer JS (Recommended)

        console.log("Ctor, State: ", this.state);
        console.log("Ctor, Props: ", this.props);
    }

    render() {
        console.log("Render, State: ", this.state);
        console.log("Render, Props: ", this.props);

        return (
            <div>
                <h2 className="text-primary">Component with Props</h2>
            </div>
        );
    }
}

export default ComponentWithProps;