var file2;

(function (ns) {
    function hello() {
        console.log('Hello from File Two');
    }

    ns.hello = hello;
})(file2 = file2 || {});