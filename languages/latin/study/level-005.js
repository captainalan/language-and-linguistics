// Script that goes with level-003.html

// Vocabulary as dictionary
const nouns = [
    {
        id: "diēs", // For lookup
        gloss: {
            singular: "day",
            plural: "days",
        },
        gender: "m", // should be 'm', 'f', or 'n'
        declension: "fifth",
        nominative: {
            singular: "diēs",
            plural: "diēs",
        },
        genitive: {
            singular: "diēī",
            plural: "diērum",
        },
        dative: {
            singular: "diēī",
            plural: "diēbus",
        },
        accusative: {
            singular: "diem",
            plural: "diēs",
        },
        ablative: {
            singular: "diē",
            plural: "diēbus",
        },
        vocative: {
            singular: "diēs",
            plural: "diēs",
        },
    },
    {
        id: "rēs", // For lookup
        gloss: {
            singular: "thing",
            plural: "things",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "fifth",
        nominative: {
            singular: "rēs",
            plural: "rēs",
        },
        genitive: {
            singular: "reī",
            plural: "rērum",
        },
        dative: {
            singular: "reī",
            plural: "rēbus",
        },
        accusative: {
            singular: "rem",
            plural: "rēs",
        },
        ablative: {
            singular: "rē",
            plural: "rēbus",
        },
        vocative: {
            singular: "rēs",
            plural: "rēs",
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