// Script that goes with level-001.js

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
    const ablative_sg = document.getElementById("ablative_singular_example");
    ablative_sg.innerText = noun.ablative.singular;

    const ablative_pl = document.getElementById("ablative_plural_example");
    ablative_pl.innerText = noun.ablative.plural;
    
    const glosses = document.getElementsByClassName("inline_gloss");
    for (let i = 0; i < glosses.length; i++) {
        glosses.item(i).innerText =  noun.gloss;
    }
}

// Functions to produce sentences
// Assumes the library above loaded successfully
const nounButton = document.getElementById("table-button");
const nounTable = document.getElementById("table-area");
// Vocabulary as dictionary
const nouns = [
    {
        id: "tabella", // For lookup
        gloss: "tablet",
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "tabella",
            plural: "tabellæ",
        },
        genitive: {
            singular: "tabellæ",
            plural: "tabellārum",
        },
        dative: {
            singular: "tabellæ",
            plural: "tabellīs",
        },
        accusative: {
            singular: "tabellam",
            plural: "tabellās",
        },
        ablative: {
            singular: "tabellā",
            plural: "tabellīs",
        },
        vocative: {
            singular: "tabella",
            plural: "tabellæ",
        },
    },
    {
        id: "", // For lookup
        gloss: "gate",
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "porta",
            plural: "portæ",
        },
        genitive: {
            singular: "portæ",
            plural: "portārum",
        },
        dative: {
            singular: "portæ",
            plural: "portīs",
        },
        accusative: {
            singular: "portam",
            plural: "portās",
        },
        ablative: {
            singular: "portā",
            plural: "portīs",
        },
        vocative: {
            singular: "porta",
            plural: "portæ",
        },
    }
];

// Clicking button draws new noun table
nounButton.onclick = function() {
    let choice = Math.floor(Math.random() * nouns.length);
    noun_table(nounTable, nouns[choice]);
    
    // Update the example sentences
    update_sentences(nouns[choice]);

};

// Initialize table with the first noun
noun_table(nounTable, nouns[0]);
update_sentences(nouns[0]);
