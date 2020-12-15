// Script that goes with level-003.html

// Vocabulary as dictionary
const nouns = [
    {
        id: "frūctus", // For lookup
        gloss: {
            singular: "fruit",
            plural: "fruits",
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "frūctus",
            plural: "frūctūs",
        },
        genitive: {
            singular: "frūctūs",
            plural: "frūctuum",
        },
        dative: {
            singular: "frūctuī",
            plural: "frūctibus",
        },
        accusative: {
            singular: "frūctum",
            plural: "frūctūs",
        },
        ablative: {
            singular: "frūctū",
            plural: "frūctibus",
        },
        vocative: {
            singular: "frūctus",
            plural: "frūctūs",
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
