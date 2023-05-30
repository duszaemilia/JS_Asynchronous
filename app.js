const boxRef = document.querySelector('.box');


let isFinished = false;

//calbackhell
setTimeout(() => {
    boxRef.style.left = '500px';
    setTimeout(() => {
        boxRef.style.top = '500px';
        setTimeout(() => {
            boxRef.style.left = '0px';
            setTimeout(() => {
                boxRef.style.top = '0px';
                isFinished = true;
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);


setTimeout(() => {

    if (isFinished) {
        console.log('run-again');
    }
}, 15000);


const receipt = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('kebab maj friend');
    }, 3001);
    setTimeout(() => {
        reject('no kebab, łonna fajt?')
    }, 3000);
});

console.log(receipt);
receipt
    .then((msg) => {
        console.log(msg)
    })
    .catch((msg) => {
        console.log(msg)
    });