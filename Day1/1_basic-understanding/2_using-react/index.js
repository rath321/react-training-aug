// const appElement = document.getElementById('app');

// const hOneElement = document.createElement('h1');
// hOneElement.className = 'orange';
// hOneElement.innerText = 'Hello World!';

// appElement.appendChild(hOneElement);

// ---------------------------------------

// const myReactElement = React.createElement('h1', {className: 'orange'}, 'Hello World!');
// ReactDOM.render(myReactElement, document.getElementById('app'));

// ---------------------------------------

const myReactElement = (name = 'Everyone') => {
    return React.createElement('h1', {className: 'orange'}, `Hello ${name}!`);
}

ReactDOM.render(myReactElement('Manish'), document.getElementById('app'));
ReactDOM.render(myReactElement('Shubham'), document.getElementById('app1'));
