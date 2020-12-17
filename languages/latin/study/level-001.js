// Script that goes with level-001.html

// Vocabulary as dictionary
const nouns = [
    {
        id: "tabella", // For lookup
        gloss: {
            singular: "tablet",
            plural: "tablets",
        },
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
        gloss: {
            singular: "gate",
            plural: "gates",
        },
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
        gloss: {
            singular: "girl",
            plural: "girls"
        },
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
        gloss: {
            singular: "fork",
            plural: "forks",
        },
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
        gloss: {
            singular: "helmet",
            plural: "helmets",
        },
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
    {
        id: "terra", // For lookup
        gloss: {
            singular: "earth",
            plural: "lands",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "terra",
            plural: "terræ",
        },
        genitive: {
            singular: "terræ",
            plural: "terrārum",
        },
        dative: {
            singular: "terræ",
            plural: "terrīs",
        },
        accusative: {
            singular: "terram",
            plural: "terrās",
        },
        ablative: {
            singular: "terrā",
            plural: "terrīs",
        },
        vocative: {
            singular: "terra",
            plural: "terræ",
        },
    },
    {
        id: "lacrima", // For lookup
        gloss: {
            singular: "tear",
            plural: "tears",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "lacrima",
            plural: "lacrimæ",
        },
        genitive: {
            singular: "lacrimæ",
            plural: "lacrimārum",
        },
        dative: {
            singular: "lacrimæ",
            plural: "lacrimīs",
        },
        accusative: {
            singular: "lacrimam",
            plural: "lacrimās",
        },
        ablative: {
            singular: "lacrimā",
            plural: "lacrimīs",
        },
        vocative: {
            singular: "lacrima",
            plural: "lacrimæ",
        },
    },
    {
        id: "aqua", // For lookup
        gloss: {
            singular: "water",
            plural: "waters",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "aqua",
            plural: "aquæ",
        },
        genitive: {
            singular: "aquæ",
            plural: "aquārum",
        },
        dative: {
            singular: "aquæ",
            plural: "aquīs",
        },
        accusative: {
            singular: "aquam",
            plural: "aquās",
        },
        ablative: {
            singular: "aquā",
            plural: "aquīs",
        },
        vocative: {
            singular: "aqua",
            plural: "aquæ",
        },
    },
    {
        id: "cēna", // For lookup
        gloss: {
            singular: "dinner",
            plural: "dinners",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "cēna",
            plural: "cēnæ",
        },
        genitive: {
            singular: "cēnæ",
            plural: "cēnārum",
        },
        dative: {
            singular: "cēnæ",
            plural: "cēnīs",
        },
        accusative: {
            singular: "cēnam",
            plural: "cēnās",
        },
        ablative: {
            singular: "cēnā",
            plural: "cēnīs",
        },
        vocative: {
            singular: "cēna",
            plural: "cēnæ",
        },
    },
    {
        id: "culpa", // For lookup
        gloss: {
            singular: "fault",
            plural: "faults",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "culpa",
            plural: "culpæ",
        },
        genitive: {
            singular: "culpæ",
            plural: "culpārum",
        },
        dative: {
            singular: "culpæ",
            plural: "culpīs",
        },
        accusative: {
            singular: "culpam",
            plural: "culpās",
        },
        ablative: {
            singular: "culpā",
            plural: "culpīs",
        },
        vocative: {
            singular: "culpa",
            plural: "culpæ",
        },
    },
    {
        id: "doctrīna", // For lookup
        gloss: {
            singular: "teaching",
            plural: "teachings",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "doctrīna",
            plural: "doctrīnæ",
        },
        genitive: {
            singular: "doctrīnæ",
            plural: "doctrīnārum",
        },
        dative: {
            singular: "doctrīnæ",
            plural: "doctrīnīs",
        },
        accusative: {
            singular: "doctrīnam",
            plural: "doctrīnās",
        },
        ablative: {
            singular: "doctrīnā",
            plural: "doctrīnīs",
        },
        vocative: {
            singular: "doctrīna",
            plural: "doctrīnæ",
        },
    },
    {
        id: "ecclēsia", // For lookup
        gloss: {
            singular: "church",
            plural: "churches",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "ecclēsia",
            plural: "ecclēsiæ",
        },
        genitive: {
            singular: "ecclēsiæ",
            plural: "ecclēsiārum",
        },
        dative: {
            singular: "ecclēsinæ",
            plural: "ecclēsiīs",
        },
        accusative: {
            singular: "ecclēsiam",
            plural: "ecclēsiās",
        },
        ablative: {
            singular: "ecclēsiā",
            plural: "ecclēsiīs",
        },
        vocative: {
            singular: "ecclēsia",
            plural: "ecclēsiæ",
        },
    },
    {
        id: "familia", // For lookup
        gloss: {
            singular: "family",
            plural: "families",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "familia",
            plural: "familiæ",
        },
        genitive: {
            singular: "familiæ",
            plural: "familiārum",
        },
        dative: {
            singular: "familiæ",
            plural: "familiīs",
        },
        accusative: {
            singular: "familiam",
            plural: "familiās",
        },
        ablative: {
            singular: "familiā",
            plural: "familiīs",
        },
        vocative: {
            singular: "familia",
            plural: "familiæ",
        },
    },
    {
        id: "ancilla", // For lookup
        gloss: {
            singular: "maid",
            plural: "maids",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "first",
        nominative: {
            singular: "ancilla",
            plural: "ancillæ",
        },
        genitive: {
            singular: "ancillæ",
            plural: "ancillārum",
        },
        dative: {
            singular: "ancillæ",
            plural: "ancillīs",
        },
        accusative: {
            singular: "ancillam",
            plural: "ancillās",
        },
        ablative: {
            singular: "ancillā",
            plural: "ancillīs",
        },
        vocative: {
            singular: "ancilla",
            plural: "ancillæ",
        },
    },
];

// Populate wordlist
populate_wordlist(nouns);

// Click handlers
const nounButtonNext = document.getElementById("table-button-next");
const nounButtonRandom = document.getElementById("table-button-random");
nounButtonNext.onclick = () => {
    draw_next_word(nouns);
};
nounButtonRandom.onclick = () => {
    draw_random_word(nouns);
};

// Initialize table with the first noun
noun_table(nounTable, nouns[0]);
update_sentences(nouns[0]);