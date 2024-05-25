// const coba = new Promise(resolve => {
//     setTimeout (() => {
//         resolve('coba');
//     }, 2000)
// });
// coba.then(() => console.log(coba));

// function promise() {
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             resolve('Ini adalah Promise');
//         }, 2000);
//     });
// };

// async function newPromise (){
//     const coba = await promise();
//     console.log(coba);
// };

// newPromise();


// function promise(){
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             resolve('Selamat');
//         }, 2000);
//     });
// };

// async function newPromise() {
//     const coba = await promise();
//     console.log(coba)
// };

// newPromise();

// function promise() {
//     return new Promise((resolve,reject) => {
//         const waktu = 4000;
//         if (waktu < 3000) {
//             setTimeout (() => {
//                 resolve("Berhasil");
//             }, waktu);
//         } else {
//             setTimeout (() => {
//                 reject('Gagal');
//             }, waktu);
//         }
//     });
// };

// const coba = promise();
// coba
//     .then(()=> console.log(coba))
//     .catch(()=> console.log(coba));


function promise(){
    return new Promise((resolve, reject) => {
        const waktu = 4000;
        if ( waktu < 3000 ) {
            setTimeout(() => {
                resolve('Berhasil');
            }, waktu);
        } else {
            setTimeout(() => {
                reject('Gagal');
            }, waktu)
        };
    });
};

async function newPromise () {
    try {
        const coba = await promise();
        console.log(coba);
    } catch (e) {
        console.error(e)
    }
}

newPromise();
