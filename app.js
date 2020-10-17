const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(console.warn);
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('Comando no conocido');
        break;
}