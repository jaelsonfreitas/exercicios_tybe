const students39 = {
    studentsInfo: [
        {
            picture:"imgs/cadu.jpeg",
            trybe: "CH39",
            studentName: "Cadu",
            projectLessonsLearned: 2,
            projectPirilampo:30,
            projectPixelsArt: 20,
        },
        {
            picture:"imgs/will.jpeg",
            trybe: "CH39",
            studentName: "Will",
            projectLessonsLearned: 5,
            projectPirilampo:50,
            projectPixelsArt: 31,
        },
        {
            picture:"imgs/rods.jpeg",
            trybe: "CH39",
            studentName: "Rods",
            projectLessonsLearned: 4,
            projectPirilampo:50,
            projectPixelsArt: 31,
        },
        {
            picture:"imgs/nat.jpeg",
            trybe: "CH39",
            studentName: "Nat",
            projectLessonsLearned: 5,
            projectPirilampo:55,
            projectPixelsArt: 40,
        },
        {
            picture:"imgs/vic.jpeg",
            trybe: "CH39",
            studentName: "Vic",
            projectLessonsLearned: 4,
            projectPirilampo:45,
            projectPixelsArt: 31,
        },
        {
            picture:"imgs/will.jpeg",
            trybe: "CH39",
            studentName: "Luquinha",
            projectLessonsLearned: 4,
            projectPirilampo:30,
            projectPixelsArt: 40,
        },
        {
            picture:"imgs/jael.jpeg",
            trybe: "CH39",
            studentName: "Jaelson",
            projectLessonsLearned: 5,
            projectPirilampo:45,
            projectPixelsArt: 45,
        },
    ]
}

const randomNumber = (numero) => {
    return Math.floor(Math.random() * numero);
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

const addStudentsInfo = () => {
    const array = students39.studentsInfo;

    const numero = randomNumber (array.length);

    elementNome.innerText = array[numero].studentName;
   elementLessonsLearned.innerText = array[numero].projectLessonsLearned;
   elementPirilampo.innerText = array[numero].projectPirilampo;
   elementPixelsArt.innerText = array[numero].projectPixelsArt;
   // para colocar um imagem devo colocar .src
   picture.src = array[numero].picture;
   results.innerText = verificaResultado();

}

const verificaResultado = () => {
    const sum = parseInt(elementLessonsLearned.innerText) + parseInt(elementPirilampo.innerText) + parseInt(elementPixelsArt.innerText);


   if (sum >= 85) {
    results.className = 'green';
    return `Parabéns a sua nota e de: 
    ${sum}.
     Você foi APROVADO !!`
   } else {
    results.className = 'red'
    return `Sua nota foi de: 
    ${sum}. 
    E infelizmente você foi reprovado. Bora tentar de NOVO..`;
   };

}
addStudentsInfo();