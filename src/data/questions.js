export const convertToJson = () => {
    const str = `What would you say to a friend struggling with loneliness?
    Do you think it is ever okay to share a secret that you were told in confidence? When and why?
    Does it matter if someone makes a moral/immoral choice if no one ever sees or knows?
    How much is enough money?
    What is "the good life?"
    As a Christian, what does it mean to be healthy? How can you be more healthy?
    On a scale of 1-10, how weird are you?
    What are your top 3 values that you try to live out?
    What does it mean to be generous? How can you be a more generous person?
    What makes a good parent?
    What's your take on personality tests (enneagram, myers briggs, strengths finders, etc.)?
    Is tradition important for the church?
    What makes a good worship song?
    What is the line between sharing with someone about a hard relationship in your life and gossip? How do you define gossip?`;

    const ret = str.split('\n').map((q) => {
        return {
            "question": q.trim(),
            "level": 4,
            "note": "",
        }
    })
    console.log(ret);
}

const questions = [
    {
        "question": "What is your favorite place to go?",
        "level": 1,
        "note": ""
    },
    {
        "question": "Share an embarrassing story that just won't leave your memory no matter how much you try.",
        "level": 1,
        "note": ""
    },
    {
        "question": "What is your favorite season and why?",
        "level": 1,
        "note": ""
    },
    {
        "question": "What is your biggest pet peeve?",
        "level": 1,
        "note": ""
    },
    {
        "question": "If you had to delete one year from your life completely, what year would you delete?",
        "level": 1,
        "note": ""
    },
    {
        "question": "If you had to change your name right now, what would you change it to?",
        "level": 1,
        "note": ""
    },
    {
        "question": "What are you grateful for today?",
        "level": 2,
        "note": "Psalm 107:8 Let them thank the Lord for his steadfast love, for his wondrous works to the children of man! "
    },
    {
        "question": "Who are your role models?",
        "level": 2,
        "note": "1 Cor 11:1 Be imitators of me, as I am of Christ"
    },
    {
        "question": "What do you daydream about?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What do you think your spiritual gifts are?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What personal trait that you are most thankful to God for?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Would you rather lose all your memories or never be able to make new ones?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What is one really difficult thing you've had to do in your life?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What is one quote that has been helpful for your faith (not from the Bible)?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What are your top three worship songs?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What scriptures are most precious to you?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What is your favorite hymn?",
        "level": 2,
        "note": ""
    },
    {
        "question": "How do you become vulnerable with someone? What actions, circumstances, traits, words \"earn\" your trust?",
        "level": 2,
        "note": "Galatians 6:2 Bear one another's burdens, and so fulfill the law of Christ"
    },
    {
        "question": "Are you missing anyone right now? What about them?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What is your mother's name? What is your favorite thing about her?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Describe your perfect day off.",
        "level": 2,
        "note": ""
    },
    {
        "question": "What is a happy memory you have from childhood?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What do you love about your life right now?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What's your father's name? Tell me something about him.",
        "level": 2,
        "note": ""
    },
    {
        "question": "How has God been kind to you this week?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Is there anyone whom you fear, dislike, disown, criticize, hold a resentment toward or disregard? If so, what are you doing about it?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What brings you the greatest joy?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What is something you are very scared of?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Who would you want to speak at your funeral?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What do you love about your church?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What do you love about your family members?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Do you ever feel lonely? When are you prone to feeling lonely? Where is God in your loneliness?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What emotion do you have the most difficulty expressing or handling?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Which biblical figure do you relate to the most?",
        "level": 2,
        "note": ""
    },
    {
        "question": "If you could ask God to fix one problem/sin in the world today, what would you pick?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Think about your closest brother or sister in Christ. In what ways have they encouraged you or helped your faith?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Choose a mentor figure in your life — How have they helped you grow? How have they helped you love jesus more?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Who is a dear friend who is not present in the room right now? What do you love about them?",
        "level": 2,
        "note": ""
    },
    {
        "question": "Do you handle strong emotions well? What do you do when you face a strong emotion?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What hurts your feelings? What do you do when your feelings are hurt?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What were you like as a kid?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What draws you to be friends with someone?",
        "level": 2,
        "note": "Proverbs 17:17 A friend loves at all times, and a brother is born for adversity."
    },
    {
        "question": "What is one regret you have? What do you think God has to say about that regret?",
        "level": 2,
        "note": ""
    },
    {
        "question": "What is a feeling that you miss?",
        "level": 2,
        "note": ""
    },

    {
        "question": "What is one thing that you love about our friendship?",
        "level": 3,
        "note": ""
    },
    {
        "question": "How can I pray for you?",
        "level": 3,
        "note": "Colossians 4:2 Continue steadfastly in prayer."
    },
    {
        "question": "How do you struggle with the fear of man?",
        "level": 3,
        "note": ""
    },
    {
        "question": "Who do you admire? What about them?",
        "level": 3,
        "note": ""
    },
    {
        "question": "What about me most surprises you?",
        "level": 3,
        "note": ""
    },
    {
        "question": "What is the first thing you noticed about me?",
        "level": 3,
        "note": ""
    },
    {
        "question": "What are my quirks? What about my personality is fun?",
        "level": 3,
        "note": ""
    },
    {
        "question": "What is a dream you've had to let go of in order to obey God?",
        "level": 3,
        "note": ""
    },
    {
        "question": "What's the most pain you've been in (physical or emotional)?",
        "level": 3,
        "note": ""
    },
    {
        "question": "What is a passage of the bible that has changed your life?",
        "level": 3,
        "note": ""
    },
    {
        "question": "Who are the people who have helped you most in your pursuit of Christ?",
        "level": 3,
        "note": ""
    },
    {
        "question": "Have you ever lost somone important to you, either through death or a broken relationship, and what has that experience been like for you?",
        "level": 3,
        "note": ""
    },
    {
        "question": "What do you do when you face conflict in a friendship? What have you done in the past, and what would you do differently?",
        "level": 3,
        "note": ""
    },
    {
        "question": "Share ways that you have been encouraged by one another.",
        "level": 3,
        "note": ""
    },
    {
        "question": "What do you want to know about me?",
        "level": 3,
        "note": ""
    },
    {
        "question": "What do you think my weaknesses are?",
        "level": 3,
        "note": ""
    },
    {
        "question": "How would you describe me to a stranger?",
        "level": 3,
        "note": ""
    },
    {
        "question": "How would you describe how I view/define greatness?",
        "level": 3,
        "note": ""
    },

    {
        "question": "What would you say to a friend struggling with loneliness?",
        "level": 4,
        "note": ""
    },
    {
        "question": "Do you think it is ever okay to share a secret that you were told in confidence? When and why?",
        "level": 4,
        "note": ""
    },
    {
        "question": "Does it matter if someone makes a moral/immoral choice if no one ever sees or knows?",
        "level": 4,
        "note": ""
    },
    {
        "question": "How much is enough money?",
        "level": 4,
        "note": "Matthew 6:24 You cannot serve God and money."
    },
    {
        "question": "What is \"the good life?\"",
        "level": 4,
        "note": ""
    },
    {
        "question": "As a Christian, what does it mean to be healthy? How can you be more healthy?",
        "level": 4,
        "note": ""
    },
    {
        "question": "On a scale of 1-10, how weird are you?",
        "level": 4,
        "note": ""
    },
    {
        "question": "What are your top 3 values that you try to live out?",
        "level": 4,
        "note": ""
    },
    {
        "question": "What does it mean to be generous? How can you be a more generous person?",
        "level": 4,
        "note": ""
    },
    {
        "question": "What makes a good parent?",
        "level": 4,
        "note": ""
    },
    {
        "question": "What's your take on personality tests (enneagram, myers briggs, strengths finders, etc.)?",
        "level": 4,
        "note": ""
    },
    {
        "question": "Is tradition important for the church?",
        "level": 4,
        "note": ""
    },
    {
        "question": "What makes a good worship song?",
        "level": 4,
        "note": ""
    },
    {
        "question": "What is the line between sharing with someone about a hard relationship in your life and gossip? How do you define gossip?",
        "level": 4,
        "note": "Ephesians 4:29"
    }
]

export default questions;

