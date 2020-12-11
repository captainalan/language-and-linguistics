// Script that goes with level-003.html

// Vocabulary as dictionary
const nouns = [
    {
        id: "rēx", // For lookup
        gloss: {
            singular: "king",
            plural: "kings",
        },
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
    {
        id: "homō", // For lookup
        gloss: {
            singular: "man",
            plural: "men"
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "homō",
            plural: "hominēs",
        },
        genitive: {
            singular: "hominis",
            plural: "hominum",
        },
        dative: {
            singular: "hominī",
            plural: "hominibus",
        },
        accusative: {
            singular: "hominem",
            plural: "hominēs",
        },
        ablative: {
            singular: "homine",
            plural: "hominibus",
        },
        vocative: {
            singular: "homō",
            plural: "hominēs",
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
