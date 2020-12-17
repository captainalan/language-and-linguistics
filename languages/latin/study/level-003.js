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
        declension: "third",
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
        declension: "third",
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
    {
        id: "corpus", // For lookup
        gloss: {
            singular: "body",
            plural: "bodies"
        },
        gender: "n", // should be 'm', 'f', or 'n'
        declension: "third",
        nominative: {
            singular: "corpus",
            plural: "corpora",
        },
        genitive: {
            singular: "corporis",
            plural: "corporum",
        },
        dative: {
            singular: "corporī",
            plural: "corporibus",
        },
        accusative: {
            singular: "corpus",
            plural: "corpora",
        },
        ablative: {
            singular: "corpore",
            plural: "corporibus",
        },
        vocative: {
            singular: "corpus",
            plural: "corpora",
        },
    },
    {
        id: "genus", // For lookup
        gloss: {
            singular: "type",
            plural: "types"
        },
        gender: "n", // should be 'm', 'f', or 'n'
        declension: "third",
        nominative: {
            singular: "genus",
            plural: "genera",
        },
        genitive: {
            singular: "generis",
            plural: "generum",
        },
        dative: {
            singular: "generī",
            plural: "generibus",
        },
        accusative: {
            singular: "genus",
            plural: "genera",
        },
        ablative: {
            singular: "genere",
            plural: "generibus",
        },
        vocative: {
            singular: "genus",
            plural: "genera",
        },
    },
    {
        id: "lūmen", // For lookup
        gloss: {
            singular: "light",
            plural: "lights"
        },
        gender: "n", // should be 'm', 'f', or 'n'
        declension: "third",
        nominative: {
            singular: "lūmen",
            plural: "lūmina",
        },
        genitive: {
            singular: "lūminis",
            plural: "lūminum",
        },
        dative: {
            singular: "lūminī",
            plural: "lūminibus",
        },
        accusative: {
            singular: "lūmen",
            plural: "lūmina",
        },
        ablative: {
            singular: "lūmine",
            plural: "lūminibus",
        },
        vocative: {
            singular: "lūmen",
            plural: "lūmina",
        },
    },
    {
        id: "cantor",
        gloss: {
            singular: "singer",
            plural: "singers"
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "third",
        nominative: {
            singular: "cantor",
            plural: "cantōrēs",
        },
        genitive: {
            singular: "cantōris",
            plural: "cantōrum",
        },
        dative: {
            singular: "cantōrī",
            plural: "cantōribus",
        },
        accusative: {
            singular: "cantōrem",
            plural: "cantōrēs",
        },
        ablative: {
            singular: "cantōre",
            plural: "cantōribus",
        },
        vocative: {
            singular: "cantor",
            plural: "cantōrēs",
        },
    },
    {
        id: "lēctor",
        gloss: {
            singular: "reader",
            plural: "readers"
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "third",
        nominative: {
            singular: "lēctor",
            plural: "lēctōrēs",
        },
        genitive: {
            singular: "lēctōris",
            plural: "lēctōrum",
        },
        dative: {
            singular: "lēctōrī",
            plural: "lēctōribus",
        },
        accusative: {
            singular: "lēctōrem",
            plural: "lēctōrēs",
        },
        ablative: {
            singular: "lēctōre",
            plural: "lēctōribus",
        },
        vocative: {
            singular: "lēctor",
            plural: "lēctōrēs",
        },
    },
    {
        id: "pānis",
        gloss: {
            singular: "loaf of bread",
            plural: "loaves of bread"
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "third",
        nominative: {
            singular: "pānis",
            plural: "pānēs",
        },
        genitive: {
            singular: "pānis",
            plural: "pānum",
        },
        dative: {
            singular: "pānī",
            plural: "pānibus",
        },
        accusative: {
            singular: "pānem",
            plural: "pānēs",
        },
        ablative: {
            singular: "pāne",
            plural: "pānibus",
        },
        vocative: {
            singular: "pānis",
            plural: "pānēs",
        },
    },
    {
        id: "postis",
        gloss: {
            singular: "doorpost",
            plural: "doorposts"
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "third",
        nominative: {
            singular: "postis",
            plural: "postēs",
        },
        genitive: {
            singular: "postis",
            plural: "postium",
        },
        dative: {
            singular: "postī",
            plural: "postibus",
        },
        accusative: {
            singular: "postem",
            plural: "postēs",
        },
        ablative: {
            singular: "poste",
            plural: "postibus",
        },
        vocative: {
            singular: "postis",
            plural: "postēs",
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