const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const colors_safe = require('colors/safe');

console.log(argv);
//{ _: [ 'crear', 'listar', 'borrar', 'consultar' ], '$0': 'app' }

let comando = argv._[0];

switch (comando) {
  case 'listar':
    console.log('cmd listar');
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    console.log('cmd crear');
    crearArchivo(argv.base, argv.limite)
      //.then(archivo => console.log(`${archivo} creado exitosamente`))
      .then( archivo => {
        console.log('archivo: ', `${archivo}`.green, ' creado exitosamente');
        //o también
        console.log(`creado: ${colors_safe.green(archivo)} `);
      })
      .catch(e => console.log(e));
    break;
  default:
    console.log('No se reconoce el comando');
    break;
}








