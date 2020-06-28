var sayNode = function () {
    console.log('Node')
};

var es = 'ES';

var oldObject = {
    sayJS: function () {
        console.log('JS')
    },
    sayNode: sayNode,
};

oldObject[es + 5] = 'Fantastic';

console.log(oldObject);