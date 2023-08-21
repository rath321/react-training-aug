const appElement = document.getElementById('app');

const hOneElement = document.createElement('h1');
hOneElement.className = 'orange';
hOneElement.innerText = 'Hello World!';

appElement.appendChild(hOneElement);