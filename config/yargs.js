const option = {

    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'

    },
    completado: {

        default: true,
        alias: 'c',
        desc: 'Marca como completado la tarea'
    }


}

const argv = require('yargs')
    .command('crear', 'Crear un archivo', option)
    .command('actualizar', 'Actualiza un registro', option)
    .command('borrar', 'Borrar un registro', option)
    .help()
    .argv;

module.exports = {
    argv
}