// function greeting() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("Hola"))
//         }, 1000)

//     })
// }

// async function main() {
//     await greeting();
//     console.log("Mundo");
// }

// main();

function greeting() {
    setTimeout(() => {
        console.log("Hola")
    }, 1000)

}

function main() {
    greeting();
    console.log("Mundo");
}

main();