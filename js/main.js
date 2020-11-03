// JQUERY DOCUMENT READY
$(document).ready(function() {
    // JS SNACK 1 
    // let bicicles = [
    //     {nome: 'bici1', peso: 20, colore: 'red'},
    //     {nome: 'bici2', peso: 25, colore: 'green'},
    //     {nome: 'bici3', peso: 30, colore: 'blue'},
    // ];

    // let biciLeggera = null;
    // bicicles.forEach(element => {
    //     if (biciLeggera === null || biciLeggera.peso > element.peso) {
    //         biciLeggera = element;
    //     } 
    // });

    // const {nome, peso} = biciLeggera;
    //     $('.content').html(
    //         `<div>
    //             <h3>Nome della bici più leggera: ${nome}</h3>
    //             <h4>Peso della bici più leggera: ${peso}</h4>
    //         </div>
    //         `
    //     );

    // JS SNACK 2
    // const myNames = ['Matteo', 'Fabio', 'Paolo', 'Lorenzo'];

    //     let totale = myNames.length - 1;
    //     let min = parseInt(prompt('inserisci un numero da 0 a 4').trim());
    //     let max = parseInt(prompt('inserisci un numero da 0 a 4').trim());
    //     let newList = [];

    //     newList = myNames.filter((element, index) => {   
    //             return  min <= index && max >= index;
    //     })

    //     console.log(newList);

    // JS SNACK 3
    // const myObjectsArray = [
    //     {
    //         name: 'a',
    //         colore: 'giallo',
    //         altezza: 180,
    //     },
    //     {
    //         name: 'b',      
    //         colore:  'blu',
    //         altezza: 150,
    //     },
    //     {
    //         name: 'c',
    //         colore:  'rosso',
    //         altezza: 130,
    //     },
    //     {
    //         name: 'd',
    //         colore:  'nero',
    //         altezza: 120,
    //     },
    //     {
    //         name: 'e',
    //         colore:  'arancione',
    //         altezza: 100,
    //     },
    //     ];
    
    //     // COPIA DI UN ARRAY
    //     const newArrayObj = [...myObjectsArray].map(person => {
    //         return {
    //             ...person, 
    //              position: genRandomPosition(),
    //         }
    //     });

    //     console.table(myObjectsArray);
    //     console.table(newArrayObj);
    
    //     // GEN RANDOM POSTION 
    //     function genRandomPosition() {
    //         var letters = 'abcdefghijklmnopqrstuvwxyz'
    
    //         var letter = letters[genRandomNumbers(0, letters.length - 1)];
    
    //         return letter; 
    //     }
    
    //     // GEN RANDOM NUMBERS
    //     function genRandomNumbers(min, max) {
    //         return Math.floor( Math.random() * (max - min + 1) + min);
    //     }
});



