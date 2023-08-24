const url = process.env.REACT_APP_POST_API_URL;

const postApiClient = {
    getAllPosts: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(err => {
                    reject("JSON Parsing Error...");
                });
            }).catch(err => {
                reject("Communication Error...");
            });
        });
    }
};

export default postApiClient;

// const postApiClient = {
//     getAllPostsUsingCB: function (successCB, errorCB) {
//         fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//             response.json().then(data => {
//                 successCB(data);
//             }).catch(err => {
//                 errorCB("JSON Parsing Error...");
//             });
//         }).catch(err => {
//             errorCB("Communication Error...");
//         });
//     },

//     getAllPosts: function () {
//         return new Promise((resolve, reject) => {
//             fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//                 response.json().then(data => {
//                     resolve(data);
//                 }).catch(err => {
//                     reject("JSON Parsing Error...");
//                 });
//             }).catch(err => {
//                 reject("Communication Error...");
//             });
//         });
//     }
// };

// export default postApiClient;


// var a = 10;

// var f = function () {
//     console.log("Hello");
// }

// console.log(a);
// console.log(typeof a);

// console.log(f);
// console.log(typeof f);

// Can we create a variable of type number?
// If yes, than you should be able to create a vraiable of type function also.

// Can we create a variable of type number inside a function?
// If yes, than you should be able to create a variable of type function inside a function also. (Nested Functions)

// function A() {
//     function B() {

//     }
// }

// Can we return a variable of type number from a function?
// If yes, than you should be able to return a variable of type function from a function also. (Closures, HOF, Fn Currying)

// function greetings(message, name) {
//     console.log(`${message}, ${name}`);
// }

// greetings("Hello", "Foo");
// greetings("Hello", "Bar");
// greetings("Hello", "Bam");


// function Converter(toUnit, factor, offset, input) {
//     return [((offset + input) * factor).toFixed(2), toUnit].join(" ");
// }

// console.log(Converter("INR", 82, 0, 100));
// console.log(Converter("INR", 82, 0, 250));
// console.log(Converter("INR", 82, 0, 799));
// console.log(Converter("INR", 82, 0, 999));


// function greetings(message) {
//     return function(name) {
//         console.log(`${message}, ${name}`);
//     }
// }

// var hello = greetings("Hello");

// hello("Foo");
// hello("Bar");
// hello("Bam");

// function Converter(toUnit, factor, offset) {
//     return function(input) {
//         return [((offset + input) * factor).toFixed(2), toUnit].join(" ");
//     }
// }

// const INRConverter = Converter("INR", 82, 0);

// console.log(INRConverter(100));
// console.log(INRConverter(250));
// console.log(INRConverter(799));
// console.log(INRConverter(999));

// const KMConverter = Converter("KM", 1.60934, 0);

// console.log(KMConverter(100));
// console.log(KMConverter(250));
// console.log(KMConverter(799));
// console.log(KMConverter(999));

// Can we pass a variable of type number to a function?
// If yes, than you should be able to pass a variable of type function to a function also. (Callbacks)