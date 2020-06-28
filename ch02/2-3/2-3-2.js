const sayNode = function () {
    console.log('Node')
};

const es = 'ES';

const newObject = {
    sayJS() {
        console.log('JS')
    },
    sayNode,
    [es + 6]: 'Fantastic'
};

console.log(newObject);

newObject.sayJS();
newObject.sayNode();
console.log(newObject.ES6);