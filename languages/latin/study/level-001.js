// Script that goes with level-001.html

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
        id: "porta", // For lookup
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
    },
    {
        id: "puella", // For lookup
        gloss: "girl",
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "puella",
            plural: "puellæ",
        },
        genitive: {
            singular: "puellæ",
            plural: "puellārum",
        },
        dative: {
            singular: "puellæ",
            plural: "puellīs",
        },
        accusative: {
            singular: "puellam",
            plural: "puellās",
        },
        ablative: {
            singular: "puellā",
            plural: "puellīs",
        },
        vocative: {
            singular: "puella",
            plural: "puellæ",
        },
    },
    {
        id: "furca", // For lookup
        gloss: "fork",
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "furca",
            plural: "furcæ",
        },
        genitive: {
            singular: "furcæ",
            plural: "furcārum",
        },
        dative: {
            singular: "furcæ",
            plural: "furcīs",
        },
        accusative: {
            singular: "furcam",
            plural: "furcās",
        },
        ablative: {
            singular: "furcā",
            plural: "furcīs",
        },
        vocative: {
            singular: "furca",
            plural: "furcæ",
        },
    },
    {
        id: "galea", // For lookup
        gloss: "helmet",
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "galea",
            plural: "galeæ",
        },
        genitive: {
            singular: "galeæ",
            plural: "galeārum",
        },
        dative: {
            singular: "galeæ",
            plural: "galeīs",
        },
        accusative: {
            singular: "galeam",
            plural: "galeās",
        },
        ablative: {
            singular: "galeā",
            plural: "galeīs",
        },
        vocative: {
            singular: "galea",
            plural: "galeæ",
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
