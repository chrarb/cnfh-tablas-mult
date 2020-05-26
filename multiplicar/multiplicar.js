const fs = require('fs');
const colors = require('colors');


// let listarTabla = (base, limite) => {
//   return new Promise((resolve, reject) => { 
    
//     if(!Number(base)||!Number(limite)){
//         reject('La base o el limite no es/son numeros');
//         return;
//     }
    
//     let output = '';
//     for(let i = 1; i <= limite; i++){
//         output += `${i} * ${base} = ${i * base}\n`;
//     }
//     output += '-----------------------------';
//     resolve(output);
//   });
// };



let listarTabla = (base, limite = 10) => {  
      console.log(`-------------------------------------------------------------`.blue);
      console.log(`-- Tabla de Multiplicar - base = ${base} - limite = ${limite}`.blue);
      console.log(`-------------------------------------------------------------`.blue);

      for(let i = 1; i <= limite; i++){
           console.log(`${i} * ${base} = ${i * base}`);
      }
  };

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject)=>{
      
      if(!Number(base)){
          reject('La base no es un número');
          return;
      }
    
      let data = '';
      for(let i = 1 ; i <= limite ; i++ ){
          data += `${ base } * ${ i } = ${ base * i }\n`;
      }
      let name = `tabla-${base}-al-${limite}.txt`;
      let filename = `tablas-mult/${name}`;
      fs.writeFile(filename, data, (err)=>{
        //if(err) throw err;
        if(err) {
            reject(err);
        } else {
            resolve(name);
        }
        //console.log(`El archivo tabla-${base}.txt ha sido creado`);
      });
  });
};

//exportamos nuestra función para que se pueda usar globalmente
module.exports = {
    crearArchivo,
    listarTabla
};


/**
 * También podriamos exportar asi nuestra función
 * 
 * 
 * module.exports.crearArchivo = (base) => { //code };
 * 
 * 
 */
