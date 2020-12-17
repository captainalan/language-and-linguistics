// Script that goes with level-002.js

// Vocabulary as dictionary
const nouns = [
    {
        id: "mūrus", // For lookup
        gloss: {
            singular: "wall",
            plural: "walls",
        },
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
        gloss: {
            singular: "boy",
            plural: "boys",
        },
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
        gloss: {
            singular: "teacher",
            plural: "teachers",
        },
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
    {
        id: "locus", // For lookup
        gloss: {
            singular: "places",
            plural: "places",
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "locus",
            plural: "locī",
        },
        genitive: {
            singular: "locī",
            plural: "locōrum",
        },
        dative: {
            singular: "locō",
            plural: "locīs",
        },
        accusative: {
            singular: "locum",
            plural: "locōs",
        },
        ablative: {
            singular: "locō",
            plural: "locīs",
        },
        vocative: {
            singular: "loce",
            plural: "locī",
        },
    },
    {
        id: "caelus", // For lookup
        gloss: {
            singular: "sky",
            plural: "skies",
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "cælus",
            plural: "caælī",
        },
        genitive: {
            singular: "cælī",
            plural: "cælōrum",
        },
        dative: {
            singular: "cælō",
            plural: "cælīs",
        },
        accusative: {
            singular: "cælum",
            plural: "cælōs",
        },
        ablative: {
            singular: "cælō",
            plural: "cælīs",
        },
        vocative: {
            singular: "cæle",
            plural: "cælī",
        },
    },
    {
        id: "cētus", // For lookup
        gloss: {
            singular: "sea monster",
            plural: "sea monsters",
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "cētus",
            plural: "cētī",
        },
        genitive: {
            singular: "cētī",
            plural: "cētōrum",
        },
        dative: {
            singular: "cētō",
            plural: "cētīs",
        },
        accusative: {
            singular: "cētum",
            plural: "cētōs",
        },
        ablative: {
            singular: "cētō",
            plural: "cētīs",
        },
        vocative: {
            singular: "cēte",
            plural: "cētī",
        },
    },
    {
        id: "servus",
        gloss: {
            singular: "servant",
            plural: "servants",
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "second",
        nominative: {
            singular: "servus",
            plural: "servī",
        },
        genitive: {
            singular: "servī",
            plural: "servōrum",
        },
        dative: {
            singular: "servō",
            plural: "servīs",
        },
        accusative: {
            singular: "servum",
            plural: "servōs",
        },
        ablative: {
            singular: "servō",
            plural: "servīs",
        },
        vocative: {
            singular: "serve",
            plural: "servī",
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