console.log('dom website project about books');

var bookListTOShow = ['animal-farm ', 'pinocchio', 'the-great-gatsby', 'to-kill-a-mockingbird', 'little-prince', '1984', 'the-hobbit', 'fahrenheit-451', 'pride-and-prejudice', 'brave-new-world'];
console.log(bookListTOShow)

//img
const division = document.createElement('div')
document.body.appendChild(division);

const picture = document.createElement('img');
division.appendChild(picture);
picture.src = "./img/read-book1.jpg";

//title
const titles = document.createElement('h1');
division.appendChild(titles);
titles.innerHTML = 'A Book A Day Keeps Reality Away';


const prg = document.createElement('p');
titles.appendChild(prg);
prg.id = 'entranceprg'

prg.innerHTML = ' Are you searching for the books to read on bad times. Here is a list to take you away from bad times.'


//list items
const division2 = document.createElement('div')
document.body.appendChild(division2)

division2.id = 'bestList'
var bookList = ['Animal Farm ', 'Pinocchio', 'The Great Gatsby', 'To Kill A Mockingbird', ' Little Prince', '1984', 'The Hobbit', 'Fahrenheit 451', 'Pride And Prejudice', 'Brave New World'];
for (let i = 0; i < bookList.length; i++) {
    var book = bookList[i];
    var ul = document.getElementById('bestList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(book));
    ul.appendChild(li);
}



const division3 = document.createElement('div')
document.body.appendChild(division3)

const bookInfos = {
    george_orwell_animal_farm: {
        title: "Animal Farm",
        author: "George Orwell",
        language: "eng"
    },

    carlo_collodi_pinoccio: {
        title: "Pinoccio",
        author: "Carlo Collodi",
        language: "it"
    },

    f_scott_fitzgerald_the_great_gatsby: {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        language: "en"
    },

    harper_lee_to_kill_a_mockingbird: {
        title: "To Kill a Mockingbird",
        author: " Harper Lee",
        language: "en"
    },

    antoine_de_saint_exupéry_little_prince: {
        title: " Little Prince",
        author: "Antoine de Saint-Exupéry",
        language: "fr"
    },

    george_orwell_1984: {
        title: "1984",
        author: "George Orwell",
        language: "eng"
    },

    j_r_r_tolkien_the_hobbit: {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        language: "eng"
    },

    ray_bradbury_fahrenheit_451: {
        title: "Pinoccio",
        author: "Ray Bradbury",
        language: "eng"
    },

    jane_austen_pride_and_prejudice: {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        language: "eng"
    },

    aldous_huxley_brave_new_world: {
        title: "Brave New World",
        author: "Aldous Huxley",
        language: "eng"
    },

};

var books = {
    fullBook: function() {
        for (let x = i; x < bookInfos.length; x++) {}
        return bookInfos;
    }
}