const fs = require('fs');
var colors = require('colors');

const listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`tabla de ${base}`.yellow);
    console.log('================'.green)

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

};

const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un número');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al${limite}.txt`);
            }
        });
    })

};

module.exports = {
    crearArchivo,
    listarTabla
}