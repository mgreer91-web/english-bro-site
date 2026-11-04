const LEARNING = {
 'present-simple':{goals:['Describe regular habits using positive and negative sentences.','Ask about someone’s routine with do or does.'],scene:[['SAM','Does your sister post every day?'],['YOU','No, she doesn’t. She posts on Fridays.']],notice:'Does asks about a habit. In the answer, doesn’t takes no -s on a following verb, but the positive she posts does.'},
 'present-continuous':{goals:['Describe an action that is happening now.','Build a sentence with the correct form of be + verb-ing.'],context:"Two friends are building a house in Minecraft. Imagine the scene; no game knowledge is needed.",scene:[["SAM","Are you building the roof right now?"],["YOU","No, I’m collecting wood. Mia is building the roof."]],notice:"Are you building asks about an action now. Am collecting and is building both include be before the -ing verb."},
 'articles':{goals:['Choose a or an by the first sound of the next word.','Use the to refer back to something already introduced.'],scene:[['SAM','I found a jacket in a second-hand shop.'],['YOU','Is it the jacket you wore yesterday?']],notice:'A introduces a jacket for the first time. The identifies the jacket both speakers can now recognise.'},
 'questions':{goals:['Make questions with be and do or does.','Recognise a subject question with who.'],scene:[['SAM','Who writes your songs?'],['ARTIST','My sister does. What do you want to know about them?']],notice:'Who is the subject of writes, so there is no do in the first question. The second question has the subject you and needs do.'},
 'past-simple':{goals:['Describe a finished event using regular and irregular past forms.','Make a past negative or question with did + base verb.'],scene:[['SAM','Did you see the last song?'],['YOU','No, I didn’t. We left early to catch the train.']],notice:'Did + see asks about a finished event. Left is the irregular past of leave. We do not say did you saw.'},
 'simple-or-continuous':{goals:['Choose between a routine and an action in progress.','Use common state verbs in a simple form.'],scene:[['SAM','You usually walk home. Why are you taking the bus?'],['YOU','I’m carrying a project today. It’s huge.']],notice:'Usually walk describes the routine. Are taking and am carrying describe today’s temporary situation.'},
 'comparatives':{goals:['Compare two things using a comparative and than.','Choose a superlative to describe one thing within a group.'],context:"Two friends are choosing a starting team in FIFA / EA Sports FC. A striker is an attacking player.",scene:[["SAM","This striker is faster than our old striker."],["YOU","True, but the old striker is better at passing. Who is the best choice for our team?"]],notice:"Faster and better compare two players. The best compares one choice with the whole group. Better and best are irregular forms of good."},
 'quantifiers':{goals:['Distinguish countable and uncountable nouns in quantity expressions.','Use some and any in common statements, questions and offers.'],scene:[['SAM','How many people are coming?'],['YOU','A few friends. We don’t need much food.']],notice:'People are countable, so use many and a few. Food is uncountable here, so use much.'},
 'present-perfect':{goals:['Separate life experience from a finished past event.','Use since for a starting point and for for a duration.'],scene:[['SAM','Have you ever been to a festival?'],['YOU','Yes! I went to one last summer.']],notice:'The first question asks about life experience without a finished time. The answer adds last summer, so it switches to the past simple.'},
 'future-forms':{goals:['Explain the difference between an intention, an arrangement and an offer.','Choose a future form that matches what you mean.'],context:"Friends are planning a tour of Los Santos in GTA, starting at Del Perro Pier. A pier is a structure beside the sea.",scene:[["SAM","We’re meeting at Del Perro Pier at six tomorrow. I’m going to plan the route tonight."],["YOU","My map won’t load."],["SAM","I’ll send you a screenshot."]],notice:"We’re meeting presents an agreed arrangement. Going to plan expresses an intention formed earlier. I’ll send is an offer made in response to the problem now."},
 'zero-conditional':{goals:['Describe a repeated result with present forms in both clauses.','Distinguish a general rule from one future possibility.'],context:"A Minecraft server is a shared game space. This group is inventing its own house rules.",scene:[["SAM","What happens if a new player joins our Minecraft server?"],["YOU","If someone joins, we show them around. When we finish a build, we take a screenshot."]],notice:"These are invented group habits that apply each time. Joins, show, finish and take all use the present simple. The rules do not predict just one future event."},
 'first-conditional':{goals:['Describe a real future possibility and its result.','Use the present simple after if and will in the result.'],scene:[['SAM','If this video gets a million views, I’ll dye my hair.'],['YOU','If you do, I’ll film it.']],notice:'Both speakers discuss possible future events. Gets and do stay in the present simple after if; the results use will.'},
 'modals':{goals:['Distinguish advice from obligation.','Explain the difference between a prohibition and no obligation.'],scene:[['SAM','Do I have to reply tonight?'],['YOU','You don’t have to. But you mustn’t share their private message.']],notice:'Don’t have to means a reply is optional. Mustn’t means sharing the private message is not allowed.'},
 'relative-clauses':{goals:['Identify people and things with defining relative clauses.','Decide when an object relative pronoun can be omitted.'],context:"Two friends are describing players in an imaginary FIFA / EA Sports FC squad. A kit is a team’s shirt and other playing clothes.",scene:[["SAM","Who is the FC player whose shirt number is ten?"],["YOU","That’s the player who scored our winner. This is the kit I chose for the team."]],notice:"Whose links the player to their shirt number. Who is the subject of scored and must stay. In the kit I chose, the object relative pronoun is omitted."},
 'gerunds-infinitives':{goals:['Use common verbs with either -ing or a to-infinitive.','Use an -ing form after a preposition.'],scene:[['SAM','I want to start a film club.'],['YOU','I enjoy making videos. I’m interested in joining.']],notice:'Want takes to start. Enjoy takes making. The preposition in is followed by joining.'},
 'second-conditional':{goals:['Describe an imagined present or future situation.','Give hypothetical advice using If I were you.'],scene:[['SAM','If you owned a social app, what would you change?'],['YOU','If I owned one, I would let users switch off the algorithm.']],notice:'Owned is a past form, but the meaning is an imagined situation now or in the future. Would change gives the hypothetical result.'},
 'third-conditional':{goals:['Imagine a different past condition and result.','Build a third conditional with two past participles.'],context:"Imagine an FC final that your team lost 2–1. Your controller switched off and you missed a late penalty.",scene:[["SAM","We lost the FC final. My controller switched off just before their second goal."],["YOU","If you had charged it, it wouldn’t have switched off. If we had scored that late penalty, we would have drawn 2–2."]],notice:"Had charged and had scored imagine changing past events. Wouldn’t have switched off and would have drawn imagine different past results. The match is already over."},
 'passive':{goals:['Shift the focus from the person doing an action to its receiver.','Build passive forms in different tenses.'],scene:[['SAM','Where was that track recorded?'],['YOU','It was recorded in a bedroom. The vocals have been remixed.']],notice:'The track and vocals receive the actions. Was recorded is past simple passive; have been remixed is present perfect passive.'},
 'reported-speech':{goals:['Report a statement using appropriate pronouns and tense choices.','Use statement word order in reported questions.'],scene:[['SAM','Mia said, “I will send you the clip.”'],['YOU','Later, I told Alex that Mia had said she would send me the clip.']],notice:'In the later report, I changes to she and you becomes me to reflect the original speaker and listener. Will is backshifted to would.'},
 'phrasal-verbs':{goals:['Use five common multi-word verbs in context.','Place pronoun objects correctly with separable phrasal verbs.'],scene:[['SAM','That music is really loud.'],['YOU','I’ll turn it down. Can you look after my bag for a minute?']],notice:'Turn down is separable: turn it down. Look after is not: look after my bag, not look my bag after.'}
};
const PATHS = [
 {level:'A1',title:'Build your base.',color:'#e7e3ff',outcome:'Talk about everyday habits, describe what is happening and ask simple questions.',order:['articles','present-simple','questions','present-continuous']},
 {level:'A2',title:'Say a little more.',color:'#d8efbf',outcome:'Tell a finished story, compare things and explain everyday rules.',order:['simple-or-continuous','past-simple','comparatives','quantifiers','zero-conditional']},
 {level:'B1',title:'Connect your ideas.',color:'#ffdfc4',outcome:'Share experiences, make plans, explain possibilities and identify what you mean.',order:['present-perfect','future-forms','first-conditional','modals','relative-clauses','gerunds-infinitives']},
 {level:'B2',title:'Make your meaning count.',color:'#d9e8fc',outcome:'Explore hypothetical situations, report messages and choose what to emphasise.',order:['second-conditional','third-conditional','passive','reported-speech','phrasal-verbs']}
];

// The catalogue uses familiar grammar names; interests describe the lesson context.
const LEVEL_LABELS = {A1:'Beginner',A2:'Elementary',B1:'Intermediate',B2:'Upper intermediate'};
const TOPICS = [
 {id:'tenses',title:'Verb tenses & time',icon:'clock',description:'Habits, now, the past and future plans.',lessons:['present-simple','present-continuous','simple-or-continuous','past-simple','present-perfect','future-forms']},
 {id:'conditionals',title:'Conditionals',icon:'bolt',description:'Real possibilities. Big what-ifs.',lessons:['zero-conditional','first-conditional','second-conditional','third-conditional']},
 {id:'articles-quantifiers',title:'Articles & quantifiers',icon:'book',description:'A, an, the — and how much or how many.',lessons:['articles','quantifiers']},
 {id:'questions',title:'Question forms',icon:'chat',description:'Ask the right question.',lessons:['questions']},
 {id:'comparisons',title:'Comparatives & superlatives',icon:'ball',description:'Better, bigger, best. Settle the debate.',lessons:['comparatives']},
 {id:'modals',title:'Modal verbs',icon:'bolt',description:'Advice, rules and what you have to do.',lessons:['modals']},
 {id:'relative-clauses',title:'Relative clauses',icon:'chat',description:'Say exactly who or what you mean.',lessons:['relative-clauses']},
 {id:'verb-patterns',title:'Gerunds & infinitives',icon:'game',description:'Enjoy doing it. Want to do it.',lessons:['gerunds-infinitives']},
 {id:'passive',title:'Passive voice',icon:'music',description:'Change the focus of a sentence.',lessons:['passive']},
 {id:'reported-speech',title:'Reported speech',icon:'chat',description:'Pass on what someone said.',lessons:['reported-speech']},
 {id:'phrasal-verbs',title:'Phrasal verbs',icon:'spark',description:'Small words that change the meaning.',lessons:['phrasal-verbs']}
];
const LESSON_SEARCH = {
 'present-simple':'present tense routines habits do does',
 'present-continuous':'present tense progressive ing am is are',
 'simple-or-continuous':'present tense simple continuous progressive',
 'past-simple':'past tense regular irregular verbs did',
 'present-perfect':'present perfect tense past simple since for ever never',
 'future-forms':'future tense will going to arrangements',
 'articles':'article articles a an the',
 'questions':'question questions word order do does who',
 'comparatives':'comparative superlative comparisons than',
 'quantifiers':'quantifier quantifiers countable uncountable nouns some any much many',
 'zero-conditional':'conditional conditionals zero 0 if',
 'first-conditional':'conditional conditionals first 1 if will',
 'second-conditional':'conditional conditionals second 2 if would',
 'third-conditional':'conditional conditionals third 3 if had would have',
 'modals':'modal modals advice obligation permission must have to should',
 'relative-clauses':'relative clause clauses who which that whose',
 'gerunds-infinitives':'gerund gerunds infinitive infinitives verb patterns ing',
 'passive':'passive voice be participle',
 'reported-speech':'reported speech indirect statements questions say tell',
 'phrasal-verbs':'phrasal verbs multi word separable'
};
