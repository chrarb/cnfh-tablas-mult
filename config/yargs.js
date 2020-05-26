const options = {
    base: {
      demand: true,
      alias: 'b'
    },
    limite: {
      alias: 'l',
      default: 10
    }
  };

const argv = require('yargs')
.command(
  'listar',
  'Imprime en consola la tabla de multiplicar',
  options
).command(
  'crear',
  'crea un archivo de acuerdo a la base y limite',
  options
)
.help()
.argv;

module.exports = {
  argv
};