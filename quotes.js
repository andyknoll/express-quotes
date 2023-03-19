// quotes.js

const quotes = [
    "To be or not to be",
    "Live and let live",
    "Four score and seven years ago",
    "Today is a great day",
    "A bird in hand is worth two in the bush",
    "If there is no struggle, there is no progress.",
    "The best way out is always through.",
    "More is lost by indecision than wrong decision.",
    "A year from now you will wish you had started today.",
    "Don’t worry about failure; you only have to be right once.",
]

const getQuote = (idx) => {
    if (idx < 0) return "Invalid low index: " + idx;
    if (idx >= quotes.length) return "Invalid high index: " + idx;
    // return idx + "<br/>" + quotes[idx];
    return quotes[idx];
};

const getQuotes = () => {
    return quotes;
};

const getQuotesCount = () => {
    return (`There are currently ${quotes.length} quotes in the database.`);
};

const getQuotesLength = () => {
    return quotes.length;
};

exports.getQuote = getQuote;
exports.getQuotes = getQuotes;
exports.getQuotesCount = getQuotesCount;
exports.getQuotesLength = getQuotesLength;
