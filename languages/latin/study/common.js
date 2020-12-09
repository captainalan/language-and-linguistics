// Functions common to many pages

// Populate word list
// Requires a ul with id `word_list` 
const populate_wordlist = function(nouns) {
    const word_list = document.getElementById("word_list");
    nouns.forEach(noun => {
        let text = `<b>${noun.nominative.singular}</b> (gen sg. <b>${noun.genitive.singular}</b>) (${noun.gender}) "${noun.gloss}"`;
        let node = document.createElement("li");
        node.innerHTML = text;
        word_list.appendChild(node);
    });
};

// Creates a table in a div
// @element is an HTML element (e.g. a <div>) to draw the table in
// @noun    is the noun to render
const noun_table = function(element, noun) {
    const gender = function full_gender_from_abbreviation(gender_abbreviation){
        switch(gender_abbreviation) {
           case 'm':
            return "masculine";
            break;
           case 'f':
            return "feminine";
            break;
           case 'n':
            return "neuter";
            break;
           default:
            return "non-declining";
        }
    };
    const table_string = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">Case</th>
      <th scope="col">Singular</th>
      <th scope="col">Plural</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nominative</th>
      <td>${noun.nominative.singular}</td>
      <td>${noun.nominative.plural}</td>
    </tr>
    <tr>
      <th scope="row">Genitive</th>
      <td>${noun.genitive.singular}</td>
      <td>${noun.genitive.plural}</td>
    </tr>
    <tr>
      <th scope="row">Dative</th>
      <td>${noun.dative.singular}</td>
      <td>${noun.dative.plural}</td>
    </tr>
    <tr>
      <th scope="row">Accusative</th>
      <td>${noun.accusative.singular}</td>
      <td>${noun.accusative.plural}</td>
    </tr>
    <tr>
      <th scope="row">Ablative</th>
      <td>${noun.ablative.singular}</td>
      <td>${noun.ablative.plural}</td>
    </tr>
    <tr>
      <th scope="row">Vocative</th>
      <td>${noun.vocative.singular}</td>
      <td>${noun.vocative.plural}</td>
    </tr>
  </tbody>
  <caption>
    Declension for <b>${noun.nominative.singular}</b> (gen sg. <b>${noun.genitive.singular}</b>),
    a ${gender(noun.gender)} noun of the ${noun.declension} declension.
  </caption>
</table>
`;
    element.innerHTML = table_string;
};
const update_sentences = function(noun) {

    const nominative_sg = document.getElementById("nominative_singular_example");
    nominative_sg.innerText = noun.nominative.singular
        .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    const nominative_pl = document.getElementById("nominative_plural_example");
    nominative_pl.innerText = noun.nominative.plural
        .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    const genitive_sg = document.getElementById("genitive_singular_example");
    genitive_sg.innerText = noun.genitive.singular;

    const genitive_pl = document.getElementById("genitive_plural_example");
    genitive_pl.innerText = noun.genitive.plural;

    const accusative_sg = document.getElementById("accusative_singular_example");
    accusative_sg.innerText = noun.accusative.singular
        .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    const accusative_pl = document.getElementById("accusative_plural_example");
    accusative_pl.innerText = noun.accusative.plural;

    const dative_sg = document.getElementById("dative_singular_example");
    dative_sg.innerText = noun.dative.singular;
    const dative_pl = document.getElementById("dative_plural_example");
    dative_pl.innerText = noun.dative.plural;

    const ablative_sg = document.getElementById("ablative_singular_example");
    ablative_sg.innerText = noun.ablative.singular;

    const ablative_pl = document.getElementById("ablative_plural_example");
    ablative_pl.innerText = noun.ablative.plural;
    
    const vocative_sg = document.getElementById("vocative_singular_example");
    vocative_sg.innerText = noun.vocative.singular
        .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    const vocative_pl = document.getElementById("vocative_plural_example");
    vocative_pl.innerText = noun.vocative.plural
        .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    const glosses = document.getElementsByClassName("inline_gloss");
    for (let i = 0; i < glosses.length; i++) {
        glosses.item(i).innerText =  noun.gloss;
    }
}

// Functions to produce sentences
// Assumes the library above loaded successfully
const nounButton = document.getElementById("table-button");
const nounTable = document.getElementById("table-area");
