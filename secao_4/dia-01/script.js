const students39 = {
    studentsInfo: [
        {
            picture:"secao_4/dia-01/imgs/cadu.jpeg",
            trybe: "CH39",
            studentName: "Cadu",
            projectLessonsLearned: 2,
            projectPirilampo:30,
            projectPixelsArt: 20,
        },
    ]
}

// CAPUTRANDO OS ELEMENTOS DA PAGINA
const elementNome = document.getElementById('name');
const elementLessonsLearned = document.getElementById('gradeLessonsLearned');
const elementPirilampo = document.getElementById('gradePirilampo');
const elementPixelsArt = document.getElementById('gradePixelsArt');
const picture = document.getElementById('picture');
const results = document.getElementById('results');
// Para capturar um elemento pelo id uso Byid

// const titles = document.getElementsByClassName('title');
// console.log(titles);
// for (let title of titles){
//     title.style.color = "green"
// }

// querySelector e um seletor que e flexivel, pode ser utilizado no contexto de um Id de uma tag ou de uma classe.

// já se temos um array podemos usar o querySlectorAll. porem devo informar o que estou chamando (classe .)(id #)