// Script that goes with level-002.js

// Vocabulary as dictionary
const nouns = [
    {
        id: "mūrus", // For lookup
        gloss: "wall",
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "mūrus",
            plural: "mūrī",
        },
        genitive: {
            singular: "mūrī",
            plural: "mūrōrum",
        },
        dative: {
            singular: "mūrō",
            plural: "mūrīs",
        },
        accusative: {
            singular: "mūrum",
            plural: "mūrōs",
        },
        ablative: {
            singular: "mūrō",
            plural: "mūrīs",
        },
        vocative: {
            singular: "mūre",
            plural: "mūrī",
        },
    },
    {
        id: "puer", // For lookup
        gloss: "boy",
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "puer",
            plural: "puerī",
        },
        genitive: {
            singular: "puerī",
            plural: "puerōrum",
        },
        dative: {
            singular: "puerō",
            plural: "puerīs",
        },
        accusative: {
            singular: "puerum",
            plural: "puerōs",
        },
        ablative: {
            singular: "puerō",
            plural: "puerīs",
        },
        vocative: {
            singular: "puer",
            plural: "puerī",
        },
    },
    {
        id: "magister", // For lookup
        gloss: "teacher",
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "magister",
            plural: "magistrī",
        },
        genitive: {
            singular: "magistrī",
            plural: "magistrōrum",
        },
        dative: {
            singular: "magistrō",
            plural: "magistrīs",
        },
        accusative: {
            singular: "magistrum",
            plural: "magistrōs",
        },
        ablative: {
            singular: "magistrō",
            plural: "magistrīs",
        },
        vocative: {
            singular: "magister",
            plural: "magistrī",
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
