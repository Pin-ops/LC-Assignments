const myFavBooks = [
    "leo_tolstoy_anna_karenina",
    "gustave_flaubert_madame_bovary",
    "fleo_tolstoy_war_and_peace",
    "f_scott_fitzgerald_the_great_gatsby",
    "mark_twain_the_adventures_of_huckleberry_finn",
    "anton_chekhov_the_stories_of_anton_chekhov",
    "william_shakespeare_hamlet",
    "herman_marville_moby_dick",
    "james_joyce_ulysses",
    "antoine_de_saint_exupéry_le_petit_prince"
];

const infoContain = {
    leo_tolstoy_anna_karenina: {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        language: "English"
    },
    gustave_flaubert_madame_bovary: {
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        language: "English"
    },
    fleo_tolstoy_war_and_peace: {
        title: "War and Peace",
        author: "Leo Tolstoy",
        language: "English"
    },
    f_scott_fitzgerald_the_great_gatsby: {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald ",
        language: "English"
    },
    mark_twain_the_adventures_of_huckleberry_finn: {
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        language: "English"
    },
    anton_chekhov_the_stories_of_anton_chekhov: {
        title: "The Stories of Anton Chekhov",
        author: "Anton Chekhov",
        language: "English"
    },
    william_shakespeare_hamlet: {
        title: "Hamlet",
        author: "William Shakespeare",
        language: "English"
    },
    herman_marville_moby_dick: {
        title: "Moby Dick",
        author: "Herman Melville",
        language: "English"
    },
    james_joyce_ulysses: {
        title: "Ulysses",
        author: "James Joyce",
        language: "English"
    },
    antoine_de_saint_exupéry_le_petit_prince: {
        title: "Le Petit Prince",
        author: "Antoine de Saint-Exupéry",
        language: "French"
    }
};

const covers = {

    leo_tolstoy_anna_karenina: "./img/anne.jpg",

    gustave_flaubert_madame_bovary: "./img/madam.jpg",

    fleo_tolstoy_war_and_peace: "./img/war.jpg",

    f_scott_fitzgerald_the_great_gatsby: "./img/great.jpg",

    mark_twain_the_adventures_of_huckleberry_finn: "./img/finn.jpg",

    anton_chekhov_the_stories_of_anton_chekhov: "./img/story.jpg",

    william_shakespeare_hamlet: "./img/hamlet.jpg",

    herman_marville_moby_dick: "./img/moby.png",

    james_joyce_ulysses: "./img/uly.jpg",

    antoine_de_saint_exupéry_le_petit_prince: "./img/petit.jpg"

};

function htmlSite() {

    let myHead = document.createElement("header");
    myHead.textContent = 'A Book A Day Takes Reality Away'
    document.body.appendChild(myHead);


    let div = document.getElementById("bookList");

    for (let i = 0; i < myFavBooks.length; i++) {
        let id = myFavBooks[i];

        const ul = document.createElement("ul");
        div.appendChild(ul);

        const h1 = document.createElement("h1");
        let bookTitle = infoContain[id].title;
        h1.innerHTML = bookTitle;
        ul.appendChild(h1);

        const img = document.createElement("img");
        img.setAttribute("src", covers[id]);
        ul.appendChild(img);

        const li1 = document.createElement("li");
        let bookAuthor = infoContain[id].author;
        li1.innerHTML = bookAuthor;
        ul.appendChild(li1);

        const li2 = document.createElement("li");
        let bookLanguage = infoContain[id].language;
        li2.innerHTML = bookLanguage;
        ul.appendChild(li2);
    }
}

htmlSite();