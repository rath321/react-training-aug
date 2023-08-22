var file1;

(function (ns) {
    function hello() {
        console.log('Hello from File One');
    }

    ns.hello = hello;
})(file1 = file1 || {});