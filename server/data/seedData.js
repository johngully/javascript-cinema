/** Question seed data */
var questions = {
    question1: {
        question: "Who played Spock in the original Star Trek movies?",
        answer: "Lenard Nimoy",
        answers: [
            "William Shatner",
            "Lenard Nimoy",
            "George Takei",
            "David Hasselhoff"
        ],
        _id: 2
    },
    question2: {
        question: "How much did Marvel's The Avengers gross at the box office in 2012?",
        answer: "623 million",
        answers: [
            "243 million",
            "575 million",
            "623 million",
            "1.15 billion"
        ],
        _id: 3
    },
    question3: {
        question: "This is a test question?",
        answer: "623 million",
        answers: [
            "A",
            "B"
        ],
        _id: 4
    }
};

/** Game seed data */
var games = {
    game1: {
        theater: 1,
        questions: [
            questions.question3,
            questions.question2,
            questions.question1
        ],
        _id: 1
    },
    game2: {
        theater: 2,
        questions: [
            questions.question2,
            questions.question1,
            questions.question3
        ],
        _id: 2
    },
    game3: {
        theater: 1,
        questions: [
            questions.question2,
            questions.question1,
            questions.question3
        ],
        _id: 2
    }
}

/** Theater seed data */
var theaters = {
    theater1: {
        name: "12 3D",
        currentFilm: "Life of Pi",
        currentQuestion: questions.question2,
        game: games.game3,
        _id: 1
    },
    theater2: {
        name: "16",
        currentFilm: "Lincoln",
        currentQuestion: {},
        game: games.game2,
        _id: 2
    }
};

exports.questions = questions;
exports.games = games;
exports.theaters = theaters;