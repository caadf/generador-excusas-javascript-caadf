
let who = ['el gato', 'mi abuela', 'mi perro', 'el canario'];
let action = ['comio', 'ensucio', 'rompio', 'aplasto'];
let what =  ['mi tarea', 'mis llaves', 'el auto'];
let when =  ['mientras estudiaba', 'antes de clases', 'mientras almorzaba', 'al llegar' ]; 



function excuseGenerator(quien, accion, que, cuando){
    numQuien = Math.floor(Math.random() * quien.length);
    numAccion = Math.floor(Math.random() * accion.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);
    return quien[numQuien] + " " +accion[numaccion] + "" + que[numQue] + " " +  " " + cuando[numCuando];
}
