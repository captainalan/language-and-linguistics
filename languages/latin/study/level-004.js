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
    {
        id: "manus", // For lookup
        gloss: {
            singular: "hand",
            plural: "hands",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "manus",
            plural: "manūs",
        },
        genitive: {
            singular: "manūs",
            plural: "manuum",
        },
        dative: {
            singular: "manuī",
            plural: "manibus",
        },
        accusative: {
            singular: "manum",
            plural: "manūs",
        },
        ablative: {
            singular: "manū",
            plural: "manibus",
        },
        vocative: {
            singular: "manus",
            plural: "manūs",
        },
    },
    {
        id: "genū", // For lookup
        gloss: {
            singular: "knee",
            plural: "knees",
        },
        gender: "n", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "genū",
            plural: "genua",
        },
        genitive: {
            singular: "genūs",
            plural: "genuum",
        },
        dative: {
            singular: "genū",
            plural: "genibus",
        },
        accusative: {
            singular: "genū",
            plural: "genua",
        },
        ablative: {
            singular: "genū",
            plural: "genibus",
        },
        vocative: {
            singular: "genū",
            plural: "genua",
        },
    },
    {
        id: "acus", // For lookup
        gloss: {
            singular: "needle",
            plural: "needles",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "acus",
            plural: "acūs",
        },
        genitive: {
            singular: "acūs",
            plural: "acuum",
        },
        dative: {
            singular: "acuī",
            plural: "acibus",
        },
        accusative: {
            singular: "acum",
            plural: "acūs",
        },
        ablative: {
            singular: "acū",
            plural: "acibus",
        },
        vocative: {
            singular: "acus",
            plural: "acūs",
        },
    },
    {
        id: "domus", // For lookup
        gloss: {
            singular: "house",
            plural: "houses",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "domus",
            plural: "domūs",
        },
        genitive: {
            singular: "domūs",
            plural: "domuum",
        },
        dative: {
            singular: "domū",
            plural: "domibus",
        },
        accusative: {
            singular: "domum",
            plural: "domūs",
        },
        ablative: {
            singular: "domū",
            plural: "domibus",
        },
        vocative: {
            singular: "domus",
            plural: "domūs",
        },
    },
    {
        id: "tribus", // For lookup
        gloss: {
            singular: "tribe",
            plural: "tribes",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "tribus",
            plural: "tribūs",
        },
        genitive: {
            singular: "tribūs",
            plural: "tribmuum",
        },
        dative: {
            singular: "tribuī",
            plural: "tribibus",
        },
        accusative: {
            singular: "tribum",
            plural: "tribūs",
        },
        ablative: {
            singular: "tribū",
            plural: "tribibus",
        },
        vocative: {
            singular: "tribus",
            plural: "tribūs",
        },
    },
    {
        id: "quercus", // For lookup
        gloss: {
            singular: "oak tree",
            plural: "oak trees",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "quercus",
            plural: "quercūs",
        },
        genitive: {
            singular: "quercūs",
            plural: "quercuum",
        },
        dative: {
            singular: "quercuī",
            plural: "quercubus",
        },
        accusative: {
            singular: "quercum",
            plural: "quercūs",
        },
        ablative: {
            singular: "quercū",
            plural: "quercubus",
        },
        vocative: {
            singular: "quercus",
            plural: "quercūs",
        },
    },
    {
        id: "pins", // For lookup
        gloss: {
            singular: "pine tree",
            plural: "pine trees",
        },
        gender: "f", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "pīnus",
            plural: "pīnūs",
        },
        genitive: {
            singular: "pīnūs",
            plural: "pīnuum",
        },
        dative: {
            singular: "pīnuī",
            plural: "pīnibus",
        },
        accusative: {
            singular: "pīnum",
            plural: "pīnūs",
        },
        ablative: {
            singular: "pīnū",
            plural: "pīnibus",
        },
        vocative: {
            singular: "pīnus",
            plural: "pīnūs",
        },
    },
    {
        id: "cornū", // For lookup
        gloss: {
            singular: "horn",
            plural: "horns",
        },
        gender: "n", // should be 'm', 'f', or 'n'
        declension: "fourth",
        nominative: {
            singular: "cornū",
            plural: "cornua",
        },
        genitive: {
            singular: "cornūs",
            plural: "cornuum",
        },
        dative: {
            singular: "cornū",
            plural: "cornibus",
        },
        accusative: {
            singular: "cornū",
            plural: "cornua",
        },
        ablative: {
            singular: "cornū",
            plural: "cornibus",
        },
        vocative: {
            singular: "cornū",
            plural: "cornua",
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