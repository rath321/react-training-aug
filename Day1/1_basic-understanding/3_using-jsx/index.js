// const myReactElement = (name) => {
//     return React.createElement('h1', {className: 'orange'}, `Hello ${name}!`);
// }

// ReactDOM.render(myReactElement('Manish'), document.getElementById('app'));
// ReactDOM.render(myReactElement('Shubham'), document.getElementById('app1'));

const MyReactElement = () => {
    return (
        <h1 className="orange">
            Hello World!
        </h1>
    );
}

ReactDOM.render(<MyReactElement />, document.getElementById('app'));