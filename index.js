
let who = ['el gato', 'mi abuela', 'mi perro', 'el canario'];
let action = ['comio', 'ensucio', 'rompio', 'aplasto'];
let what =  ['mi tarea', 'mis llaves', 'el auto'];
let when =  ['mientras estudiaba', 'antes de clases', 'mientras almorzaba', 'al llegar' ]; 



function excuse(who, action, what, when){
    let quien = Math.floor(Math.random() * who.length);
    let accion = Math.floor(Math.random() * action.length);
    let que = Math.floor(Math.random() * what.length);
    let cuando = Math.floor(Math.random() * when.length);
    return who[quien] + " " +action[accion] + "" + what[que] + " " + when[cuando];
}

document.querySelector('#excuse').innerHTML = excuse(who, action, what, when)