// Script that goes with level-003.html

// Vocabulary as dictionary
const nouns = [
    {
        id: "rēx", // For lookup
        gloss: "king",
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "rēx",
            plural: "rēgēs",
        },
        genitive: {
            singular: "rēgis",
            plural: "rēgum",
        },
        dative: {
            singular: "rēgī",
            plural: "rēgibus",
        },
        accusative: {
            singular: "rēgem",
            plural: "rēgēs",
        },
        ablative: {
            singular: "rēge",
            plural: "rēgibus",
        },
        vocative: {
            singular: "rēx",
            plural: "rēgēs",
        },
    },
];

// Populate wordlist
populate_wordlist(nouns);

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
