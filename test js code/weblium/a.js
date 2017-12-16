/*async function asyncFunc(arg1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('async');
        }, 500);
    });
};

async function waiter(params) {
    const a = await asyncFunc();
    console.log('next', a);
};

asyncFunc();
console.log('next');
*/

const Landing = require('./landing.selector');
console.log(Landing.about);