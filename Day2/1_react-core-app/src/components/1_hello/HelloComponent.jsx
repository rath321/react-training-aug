// import React from "react";

// class HelloComponent extends React.Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }

// export default HelloComponent;

// ---------------------------------------

// import React, { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }

// export default HelloComponent;

// ---------------------------------------

// import React, { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </div>
//         );
//     }
// }

// export default HelloComponent;

// // ---------------------------------------
// // import React, { Component } from "react";
// // import React, { Component, Fragment } from "react";
// import React, { Component } from "react";

// class HelloComponent extends Component {
//     render() {
//         return (
//             // <React.Fragment>
//             //     <h1>Hello World!</h1>
//             //     <h1>Hello World Again!</h1>
//             // </React.Fragment>
//             // <Fragment>
//             //     <h1>Hello World!</h1>
//             //     <h1>Hello World Again!</h1>
//             // </Fragment>
//             <>
//                 <h1>Hello World!</h1>
//                 <h1>Hello World Again!</h1>
//             </>
//         );
//     }
// }

// export default HelloComponent;

// ---------------------------------------
// function HelloComponent() {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Hello World - Fn Declaration!</h1>
//         </>
//     );
// }

// const HelloComponent = function () {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Hello World - Fn Expression!</h1>
//         </>
//     );
// }

// const HelloComponent = () => {
//     return (
//         <>
//             <h1>Hello World!</h1>
//             <h1>Hello World - Multiline Arrow Fn !</h1>
//         </>
//     );
// }

// const HelloComponent = () => (
//     <>
//         <h1>Hello World!</h1>
//         <h1>Hello World - Singleline Arrow Fn !</h1>
//     </>
// );

// export default HelloComponent;

// export const HelloComponent = () => (
//     <>
//         <h1>Hello World!</h1>
//         <h1>Hello World - Singleline Arrow Fn !</h1>
//     </>
// );

// --------------------------------------- Using Global CSS

export const HelloComponent = () => (
    <div className="container-fluid">
        <h1 className="red">Hello World!</h1>
        <h1 className="text-primary">Hello World - Singleline Arrow Fn !</h1>
        <h1 className="text-success">
            Activity Icon
            <span className="bi bi-activity"></span>
            <span className="bi bi-arrow-up-square-fill"></span>
        </h1>
    </div>
);
