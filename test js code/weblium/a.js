/*

function sum(arg1, arg2) {
return arg1 + arg2;
};

console.log(sum(1, 2));
*/

/*const arr = new Array(200).join('1 ').split(' ');

function summ(arg1, arg2) {
    return arr;
};

console.log(summ());
*/

const user = {
    name: "Ivan",
    secondname: "Grozhyi",
    print: function(){
        return "HELLO";
    },
    greeting: function() {
        console.log(
            "My name is: ",
            this.name,
            "My secondname is: ",
            this.secondname,
            "My age is: ",
            this.age
        );
    },
    age: 54
};
user.greeting();