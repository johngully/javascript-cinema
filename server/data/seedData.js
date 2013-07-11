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

/** Film seed data */
var films = {
    lifeOfPi: {
        name: "Life of Pi",
        imageUrl: ""
    },
    lincoln: {
        name: "Lincoln",
        imageUrl: ""
    },
    avengers: {
        name: "The Avengers",
        imageUrl: ""
    },
    leMiserables: {
        name: "Le Miserables",
        imageUrl: ""
    }
    
};

/** Theater seed data */
var theaters = {
    theater1: {
        name: "2 Real3D",
        showings: [
            {
                film: films.avengers,
                time: Date.now(),
                questions: [
                    questions.question3, 
                    questions.question2, 
                    questions.question1
                ],
            },
            {
                film: films.avengers,
                time: Date.now(),
                questions: [
                    questions.question1, 
                    questions.question2, 
                    questions.question3
                ],
            }
        ],
        _id: 1
    },
    theater2: {
        name: "16",
        showings: [
            {
                film: films.lincoln,
                time: Date.now(),
                questions: [
                    questions.question1, 
                    questions.question3, 
                    questions.question2
                ],
            },
            {
                film: films.leMiserables,
                time: Date.now(),
                questions: [
                    questions.question2, 
                    questions.question1, 
                    questions.question3
                ],
            }
        ],
        _id: 2
    },
    theater3: {
        name: "20",
        showings: [
            {
                film: films.lifeOfPi,
                time: Date.now(),
                questions: [
                    questions.question1, 
                    questions.question3, 
                    questions.question2
                ],
            },
            {
                film: films.lifeOfPi,
                time: Date.now(),
                questions: [
                    questions.question2, 
                    questions.question1, 
                    questions.question3
                ],
            }
        ],
        _id: 3
    }
};

/** Badge seed data */
var badges = {
    noobie: {
        name: "Noobie",
        description: "Awarded for completing your first",
        points: 10,
        allowMultiple: false,
        _id: 1
    },
    rookie: {
        name: "Rookie",
        description: "Awarded for completing your game",
        points: 10,
        allowMultiple: false,
        _id: 2
    },
    winning: {
        name: "Winning",
        description: "Awarded for winning your first question",
        points: 25,
        allowMultiple: false,
        _id: 3
    },
    streak: {
        name: "Streak",
        description: "Awarded for winning 3 questions in a row",
        points: 50,
        allowMultiple: true,
        _id: 4
    },
    buster: {
        name: "Buster",
        description: "Awarded for winning to break another players streak",
        points: 20,
        allowMultiple: true,
        _id: 5
    },
};

/** Player seed data */
var players = {
    player1: {
        name: "John Gully",
        memberNumber: "12345",
        showings: [1],
        badges: [],
        points: 0,
        _id: 1
    },
    player2: {
        name: "Vishal Marocha",
        memberNumber: "23456",
        showings: [1,2],
        badges: [badges.noobie, badges.winning],
        points: 35,
        _id: 2
    }
};


exports.films = films;
exports.theaters = theaters;

exports.questions = questions;
exports.badges = badges;
exports.players = players;


