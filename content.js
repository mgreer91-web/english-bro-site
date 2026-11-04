/* Original English, Bro starter curriculum. CEFR labels indicate intended difficulty,
   not certification or the result of a formal placement assessment. */
const LESSONS = [
  {
    id:'present-simple', title:'Your everyday era', grammar:'Present simple', level:'A1', theme:'Social', icon:'chat', minutes:6,
    hook:'Your habits. Your feed. Your very predictable friends.',
    rule:'Use the present simple for routines, repeated actions and general facts. With he, she and it, add -s or -es. For questions and negatives, use do or does with the base verb.',
    form:'She posts. / She doesn’t post. / Does she post?',
    examples:[['My friend uploads a video every Friday.','A repeated action: every Friday.'],['Does your brother watch your videos?','Does already carries the third-person ending.']],
    watchOut:'After does or doesn’t, use the base verb: “She doesn’t watch”, not “She doesn’t watches”.',
    mission:'Write two true habits and one invented habit about your online life. Ask a partner to spot the invented one.',
    questions:[
      {prompt:'Mia ___ dance videos every weekend.',options:['posts','post','posting'],answer:'posts',why:'Mia is one person (she). Add -s to post in an affirmative present simple sentence.'},
      {prompt:'My friends ___ use that app any more.',options:['doesn’t','don’t','aren’t'],answer:'don’t',why:'Use don’t + base verb with I, you, we and they. My friends = they.'},
      {prompt:'___ your sister follow this creator?',options:['Do','Is','Does'],answer:'Does',why:'Use does to ask a present simple question about she. Follow stays in the base form.'},
      {prompt:'He ___ (study) English after school.',answer:['studies'],why:'For a consonant + y, change y to -ies: study → studies.'},
      {prompt:'We ___ (play) games on Fridays.',answer:['play'],why:'With we, use the base verb. The phrase on Fridays signals a regular habit.'}
    ]
  },
  {
    id:'present-continuous', title:"Minecraft, right now", grammar:'Present continuous', level:'A1', theme:'Gaming', icon:'game', minutes:6,
    contexts:["Minecraft"],
    hook:"Your Minecraft base is taking shape. Who’s doing what?",
    rule:'Use am, is or are + verb-ing for actions in progress now and for temporary situations. Put am, is or are before the subject to make a question.',
    form:"I’m building. / She isn’t building. / Are they building?",
    examples:[["I’m building a house in Minecraft right now.","Am + building describes an action in progress."],["She’s using her brother’s laptop this week.","A temporary situation, rather than a permanent habit."]],
    watchOut:'Don’t leave out be: “They are winning”, not “They winning”. Most state verbs, such as know, normally use a simple tense.',
    mission:"Imagine a Minecraft build with three friends. Write three sentences about what they are doing now and one about what they are not doing. You can invent the scene; you do not need to play the game.",
    questions:[
      {"prompt":"Look! Mia ___ a house in Minecraft.","options":["builds","is building","build"],"answer":"is building","why":"Look points to an action in progress now. Mia is one person, so use is + building."},
      {"prompt":"I ___ collecting wood for our Minecraft base at the moment.","options":["am","is","are"],"answer":"am","why":"I pairs with am. Am collecting describes what is happening now."},
      {"prompt":"___ they building on the same Minecraft server right now?","options":["Do","Are","Is"],"answer":"Are","why":"A server is a shared game space. Move are before they to ask about the action in progress."},
      {"prompt":"Her Minecraft character is ___ (run) towards the house.","answer":["running"],"why":"Double the final consonant in run before adding -ing: running."},
      {"prompt":"We ___ (not / play) Minecraft right now. Use the full form.","answer":["are not playing"],"why":"With we, the negative is are not + verb-ing: are not playing."}
    ]
  },
  {
    id:'articles', title:'An outfit. The outfit.', grammar:'A, an & the', level:'A1', theme:'IRL', icon:'spark', minutes:6,
    hook:'Small words. A surprisingly big difference.',
    rule:'Use a or an when introducing one non-specific singular countable thing. Choose an before a vowel sound. Use the when the listener can identify the thing. General plural and uncountable nouns often need no article.',
    form:'a jacket / an outfit / the jacket I bought / I like music',
    examples:[['I bought a jacket. The jacket was second-hand.','First mention: a. Now we know which one: the.'],['She’s a university student.','University begins with a /y/ consonant sound.']],
    watchOut:'Listen to the sound, not just the letter: an hour, but a uniform.',
    mission:'Describe your ideal outfit. Introduce each item with a or an, then refer to it again with the.',
    questions:[
      {prompt:'That is ___ amazing outfit.',options:['a','an','the'],answer:'an',why:'Amazing starts with a vowel sound. This introduces one outfit.'},
      {prompt:'I bought a hoodie. ___ hoodie is green.',options:['A','An','The'],answer:'The',why:'We already know which hoodie: the one just mentioned.'},
      {prompt:'She wears ___ uniform to school.',options:['an','a','— (no article)'],answer:'a',why:'Uniform begins with a /y/ sound, so use a.'},
      {prompt:'We waited for ___ hour. Type a, an or the.',answer:['an'],why:'The h in hour is silent. Its first sound is a vowel.'},
      {prompt:'I listen to ___ music every day. Type a, an, the or “none”.',answer:['none'],why:'Music is uncountable and general here, so no article is needed.'}
    ]
  },
  {
    id:'questions', title:'Ask better questions', grammar:'Question forms', level:'A1', theme:'Music', icon:'music', minutes:6,
    hook:'You get one interview with your favourite artist.',
    rule:'With most present simple verbs, use question word + do/does + subject + base verb. With be, put am/is/are before the subject. In subject questions with who, don’t add do or does.',
    form:'Where do you perform? / Are you ready? / Who writes the songs?',
    examples:[['What does your band play?','Does + subject + base verb.'],['Who sings the chorus?','Who is the subject, so there is no does.']],
    watchOut:'“Where does she live?” has one third-person ending, on does. Don’t add another to live.',
    mission:'Write three interview questions for a musician: one with be, one with do or does, and one subject question with who.',
    questions:[
      {prompt:'Where ___ your favourite singer live?',options:['do','does','is'],answer:'does',why:'Your favourite singer = he or she. Use does + subject + live.'},
      {prompt:'___ you ready for the concert?',options:['Do','Does','Are'],answer:'Are',why:'Ready is an adjective. Use be: Are you ready?'},
      {prompt:'Who ___ the lyrics in your band?',options:['writes','does write','do writes'],answer:'writes',why:'This is a neutral subject question. Who is doing the writing? Use writes without do.'},
      {prompt:'What time ___ (do) the doors open?',answer:['do'],why:'The doors is plural, so use do before the subject.'},
      {prompt:'How often does she ___ (perform) live?',answer:['perform'],why:'After does, the main verb stays in the base form.'}
    ]
  },
  {
    id:'past-simple', title:'Last night was a movie', grammar:'Past simple', level:'A2', theme:'Music', icon:'music', minutes:7,
    hook:'Tell the story of the gig, including the chaos.',
    rule:'Use the past simple for finished actions at a finished past time. Regular verbs usually end in -ed; irregular verbs have their own forms. After did or didn’t, use the base verb. Be uses was or were.',
    form:'We went. / We didn’t go. / Did you go?',
    examples:[['The band played three new songs last night.','A finished event at a finished time.'],['Did you see the support act?','Did + base verb, not saw.']],
    watchOut:'“I didn’t see it” is correct. Did already puts the sentence in the past.',
    mission:'Describe a real or imaginary night out in four sentences. Include a negative and a question.',
    questions:[
      {prompt:'We ___ the band last Saturday.',options:['see','saw','seen'],answer:'saw',why:'Last Saturday is finished. The past simple of see is saw.'},
      {prompt:'They didn’t ___ the last song.',options:['played','playing','play'],answer:'play',why:'After didn’t, use the base verb play.'},
      {prompt:'___ you enjoy the concert?',options:['Did','Were','Do'],answer:'Did',why:'Use did to ask about a finished past event with the verb enjoy.'},
      {prompt:'The tickets ___ (be) expensive.',answer:['were'],why:'Tickets is plural, so the past form of be is were.'},
      {prompt:'She ___ (buy) a poster after the show.',answer:['bought'],why:'Buy is irregular: buy → bought → bought.'}
    ]
  },
  {
    id:'simple-or-continuous', title:'Usually vs. literally now', grammar:'Present simple vs continuous', level:'A2', theme:'Social', icon:'chat', minutes:7,
    hook:'Your normal routine just got interrupted.',
    rule:'Choose the present simple for routines and stable facts. Choose the present continuous for actions in progress and temporary situations. State verbs such as like, know and want normally use the simple form.',
    form:'I usually walk. Today I’m taking the bus.',
    examples:[['She usually posts photos, but today she’s filming a vlog.','A routine contrasted with a temporary action.'],['I know the answer.','Know describes a state, not an action in progress.']],
    watchOut:'Now is a useful clue, but meaning matters too. “I want a break now” still uses the simple form.',
    mission:'Write a caption contrasting what you normally do with what you are doing today.',
    questions:[
      {prompt:'I usually ___ my phone on silent in class.',options:['put','am putting','puts'],answer:'put',why:'Usually describes a routine. With I, use the base verb put.'},
      {prompt:'Be quiet! I ___ a voice message.',options:['record','records','am recording'],answer:'am recording',why:'The action is happening at this moment, so use am recording.'},
      {prompt:'I ___ what you mean.',options:['am knowing','know','knowing'],answer:'know',why:'Know is a state verb and normally takes a simple form.'},
      {prompt:'She ___ (watch) a tutorial right now.',answer:['is watching',"’s watching","'s watching"],why:'Right now marks an action in progress: is watching.'},
      {prompt:'He ___ (play) basketball every Tuesday.',answer:['plays'],why:'Every Tuesday describes a routine. Add -s for he.'}
    ]
  },
  {
    id:'comparatives', title:"Build your FC starting XI", grammar:'Comparatives & superlatives', level:'A2', theme:'Sport', icon:'ball', minutes:7,
    contexts:["EA Sports FC", "FIFA"],
    interests:["Gaming"],
    hook:"FIFA / EA Sports FC: pick your team and defend your choices.",
    rule:'Compare two things with a comparative + than. Short adjectives usually take -er; longer ones usually use more. Superlatives compare one with a whole group: the -est or the most. Good and bad are irregular.',
    form:'faster than / more exciting than / the best / the most exciting',
    examples:[["This striker is faster than my old striker.","Compare two players with faster + than. A striker is an attacking player."],["That was the most exciting match in our FC tournament.","Compare one match with the whole group: the most exciting."]],
    watchOut:'Use either more or -er: “faster”, not “more faster”. Good → better → best.',
    mission:"Pick two real or invented players for a FIFA / EA Sports FC team. Give them fictional speed and passing ratings. Write two comparisons with than and one sentence saying who is the best choice for your team. Explain how the ratings support your choice.",
    questions:[
      {"prompt":"My new FC striker has a higher speed rating. He is ___ than my old striker.","options":["faster","fastest","more fast"],"answer":"faster","why":"We compare two players. Fast is a short adjective, so use faster + than."},
      {"prompt":"That was ___ goal in our FC tournament.","options":["better","the best","best than"],"answer":"the best","why":"We compare one goal with all goals in the tournament. Good → better → the best."},
      {"prompt":"Playing against my friend is ___ than playing against this beginner team.","options":["more difficult","difficulter","most difficult"],"answer":"more difficult","why":"Difficult is a longer adjective. Use more difficult + than to compare two situations."},
      {"prompt":"In your FC squad, Alex is ___ (tall) than Sam.","answer":["taller"],"why":"Tall takes -er in a comparative: taller than."},
      {"prompt":"Of all the players in my FC squad, she has the highest speed rating. She is the ___ (fast).","answer":["fastest"],"why":"We compare her with the whole squad, so use the superlative the fastest."}
    ]
  },
  {
    id:'quantifiers', title:'How much is too much?', grammar:'Some, any, much & many', level:'A2', theme:'IRL', icon:'spark', minutes:7,
    hook:'Plan a hangout without buying 400 snacks.',
    rule:'Use many with plural countable nouns and much with uncountable nouns. Some is common in positive statements and offers; any is common in negatives and neutral questions. A few means a small number; a little means a small amount.',
    form:'many snacks / much time / a few friends / a little water',
    examples:[['We haven’t got much time.','Time is uncountable.'],['Would you like some water?','Offers often use some.']],
    watchOut:'In this meaning, advice, homework and information are uncountable: some advice, not an advice.',
    mission:'Plan a small hangout. Say what you have, what you need, and what you don’t have using four different quantifiers.',
    questions:[
      {prompt:'How ___ people are coming?',options:['much','many','a little'],answer:'many',why:'People is a plural countable noun. Use how many.'},
      {prompt:'We don’t have ___ ice.',options:['any','many','a few'],answer:'any',why:'Any fits a negative statement. Ice is uncountable here.'},
      {prompt:'Would you like ___ juice?',options:['some','many','a few'],answer:'some',why:'Some is natural in an offer. Juice is uncountable.'},
      {prompt:'How ___ money do we need? Type much or many.',answer:['much'],why:'Money is uncountable, so use much.'},
      {prompt:'We have a ___ chairs, but not enough for everyone. Type few or little.',answer:['few'],why:'Chairs are countable. A few means a small number.'}
    ]
  },
  {
    id:'present-perfect', title:'Ever done that?', grammar:'Present perfect vs past simple', level:'B1', theme:'Music', icon:'music', minutes:8,
    hook:'Life experiences meet the festival group chat.',
    rule:'Use have/has + past participle for experiences with no finished time stated and past events connected to now. Use the past simple with a finished time such as yesterday or in 2024. For ongoing situations, since marks the start; for marks the duration.',
    form:'Have you ever been? / I went last year. / I’ve lived here for two years.',
    examples:[['I’ve never seen that band live.','Life experience up to now, with no finished time.'],['I saw them last July.','A finished time takes the past simple.']],
    watchOut:'“I have seen them yesterday” mixes incompatible time signals. Use “I saw them yesterday”.',
    mission:'Ask a partner about an experience using Have you ever…? Then ask a follow-up with the past simple.',
    questions:[
      {prompt:'Have you ever ___ to a music festival?',options:['went','been','go'],answer:'been',why:'After have, use a past participle. Have been to asks about an experience.'},
      {prompt:'I ___ that song yesterday.',options:['have heard','heard','have hear'],answer:'heard',why:'Yesterday is a finished time, so choose the past simple heard.'},
      {prompt:'She has lived here ___ 2021.',options:['for','since','during'],answer:'since',why:'Since introduces the starting point of a situation continuing to now.'},
      {prompt:'We have ___ (know) each other for three years.',answer:['known'],why:'The past participle of know is known. For introduces a duration.'},
      {prompt:'He ___ (lose) his headphones last week.',answer:['lost'],why:'Last week is a finished time, so use the past simple lost.'}
    ]
  },
  {
    id:'future-forms', title:"Meet up in Los Santos", grammar:'Will, going to & arrangements', level:'B1', theme:'Tech', icon:'bolt', minutes:8,
    contexts:["GTA"],
    interests:["Gaming"],
    hook:"GTA’s Los Santos: plan a city tour, arrange a meet-up and offer to help.",
    rule:'Will often expresses a decision made now, an offer or a prediction. Be going to often expresses a prior intention or a prediction based on present evidence. The present continuous can describe a future arrangement. Context can allow more than one future form.',
    form:'I’ll help. / I’m going to learn. / We’re meeting at six.',
    examples:[["“My GTA map won’t load.” “I’ll send you a screenshot.”","An offer made in response to a problem now."],["We’re meeting at Del Perro Pier at six tomorrow.","An agreed arrangement with a place and a future time."],["I’m going to plan a route around the city.","An intention formed before the conversation."]],
    watchOut:'Don’t treat every future sentence as a puzzle with one possible tense. These forms overlap; the speaker’s meaning matters.',
    mission:"Plan an imaginary city tour around Los Santos in GTA, another game map or your own town. Write one prior intention with going to, one agreed arrangement in the present continuous, and one spontaneous offer with will. Make the different meanings clear.",
    questions:[
      {"prompt":"“I can’t find Del Perro Pier on the GTA map.” “I ___ send you a screenshot!” Choose the spontaneous offer.","options":["will","was","did"],"answer":"will","why":"Will is natural for an offer made in response to a problem at the moment of speaking."},
      {"prompt":"You can see dark clouds over the city on screen. It ___ rain.","options":["is going to","going","did"],"answer":"is going to","why":"Be going to expresses a prediction based on evidence visible now."},
      {"prompt":"Your group has agreed a time for the GTA city tour. Which sentence presents the arrangement?","options":["We met at Del Perro Pier yesterday.","We’re meeting at Del Perro Pier at six tomorrow.","We meet at Del Perro Pier sometimes."],"answer":"We’re meeting at Del Perro Pier at six tomorrow.","why":"Present continuous + a future time presents an agreed arrangement, rather than a habit or a past event."},
      {"prompt":"I decided yesterday: I’m going to ___ (plan) a route around the city.","answer":["plan"],"why":"Going to expresses the prior intention and is followed by the base verb plan."},
      {"prompt":"“Our friend can’t find us.” “I’ll ___ (send) our location on the game map now.”","answer":["send"],"why":"Will takes the base verb send. The reply makes an offer now."}
    ]
  },
  {
    id:'zero-conditional', title:"Minecraft server rules", grammar:'Zero conditional', level:'A2', theme:'Gaming', icon:'game', minutes:6,
    contexts:["Minecraft"],
    hook:"Build a Minecraft server with rules everyone understands.",
    rule:'Use if + present simple, present simple for general truths and repeated results. When can often replace if when the meaning is every time. Put a comma after an if-clause that comes first.',
    form:"If a new player joins, we show them around.",
    examples:[["If a new player joins our Minecraft server, we show them around.","An invented server rule: this is what the group does every time."],["When we finish a Minecraft build, we take a screenshot.","When means each time here; both verbs use the present simple."]],
    watchOut:'For general rules, use present forms in both clauses. For a particular future possibility, consider the first conditional.',
    mission:"Invent three house rules for a shared Minecraft server. Use if or when + present simple, present simple. Include one rule about helping new players. Explain one rule to a new player.",
    questions:[
      {"prompt":"Our Minecraft server rule: if a new player ___, we show them around.","options":["joins","will join","joined"],"answer":"joins","why":"This is a repeated group rule. A new player is singular, so use the present simple joins."},
      {"prompt":"If someone needs wood on our Minecraft server, Mia ___ some with them.","options":["shares","share","sharing"],"answer":"shares","why":"The result describes what Mia does each time. Use the present simple shares with Mia."},
      {"prompt":"Which sentence describes a repeated Minecraft group rule?","options":["If we finish a build, we take a screenshot.","If we finish tomorrow, we’ll celebrate.","If we had more time, we would build a castle."],"answer":"If we finish a build, we take a screenshot.","why":"Present simple in both clauses presents a repeated result. The other options refer to a particular future possibility or an imagined situation."},
      {"prompt":"If a player ___ (need) help on our server, we work together.","answer":["needs"],"why":"A player is a singular subject. Add -s: needs."},
      {"prompt":"When we finish a Minecraft house, Sam ___ (take) a screenshot.","answer":["takes"],"why":"This is a repeated action. Sam takes uses the third-person singular present simple."}
    ]
  },
  {
    id:'first-conditional', title:'If this goes viral…', grammar:'First conditional', level:'B1', theme:'Social', icon:'chat', minutes:7,
    hook:'One post. A million possible outcomes.',
    rule:'Use if + present simple, will + base verb for a real future possibility and its likely result. Either clause can come first. The result can also use a modal or an imperative when the meaning calls for it.',
    form:'If this gets a million views, I’ll dye my hair.',
    examples:[['If we finish the edit tonight, we’ll post it tomorrow.','A possible future condition and result.'],['I’ll send you the link if the video uploads.','No comma is needed when the if-clause comes second.']],
    watchOut:'For an ordinary future condition, don’t put will after if: “If it gets views”, not “If it will get views”.',
    mission:'Write a realistic if…will… promise for a creative challenge. Explain what could happen next.',
    questions:[
      {prompt:'If this video ___ a million views, I’ll dye my hair.',options:['gets','will get','got'],answer:'gets',why:'In this future condition, use the present simple after if. Will belongs in the result clause.'},
      {prompt:'We’ll upload it if the editor ___ ready.',options:['will be','is','was'],answer:'is',why:'Use a present form in the if-clause: if the editor is ready.'},
      {prompt:'If you send me the clip, I ___ it tonight.',options:['edited','will edit','editing'],answer:'will edit',why:'The result of this possible future condition uses will + base verb.'},
      {prompt:'If she ___ (finish) early, she’ll join us.',answer:['finishes'],why:'The if-clause uses the present simple. She takes finishes.'},
      {prompt:'We ___ (not / post) it if the sound is bad. Use the full form.',answer:['will not post'],why:'The negative future result is will not + base verb.'}
    ]
  },
  {
    id:'modals', title:'Permission to log off', grammar:'Must, have to & should', level:'B1', theme:'Tech', icon:'bolt', minutes:8,
    hook:'Advice, rules and setting your own boundaries.',
    rule:'Must and have to express obligation; should gives advice. Mustn’t means something is prohibited. Don’t have to means there is no obligation: you can choose. Modal verbs such as must and should take the base verb without to.',
    form:'You must go. / You should go. / You don’t have to go.',
    examples:[['You mustn’t share someone else’s password.','A prohibition.'],['You don’t have to reply immediately.','An immediate reply is optional.']],
    watchOut:'Mustn’t and don’t have to are not interchangeable. One forbids; the other removes an obligation.',
    mission:'Create three digital-wellbeing tips: one piece of advice, one rule and one thing that is optional.',
    questions:[
      {prompt:'Posting is optional. You ___ upload anything.',options:['mustn’t','don’t have to','must'],answer:'don’t have to',why:'No obligation means you don’t have to. You are still allowed to post.'},
      {prompt:'Sharing passwords is forbidden. You ___ share yours.',options:['mustn’t','don’t have to','should'],answer:'mustn’t',why:'Mustn’t expresses a prohibition: it is not allowed.'},
      {prompt:'You look tired. You ___ take a screen break.',options:['should','have','must to'],answer:'should',why:'Should + base verb gives advice.'},
      {prompt:'Everyone has to ___ (create) their own password.',answer:['create'],why:'Have to is followed by the base verb create.'},
      {prompt:'You should ___ (check) the source before sharing.',answer:['check'],why:'Should takes the base verb without to.'}
    ]
  },
  {
    id:'relative-clauses', title:"Guess the FC player", grammar:'Defining relative clauses', level:'B1', theme:'Sport', icon:'ball', minutes:8,
    contexts:["EA Sports FC", "FIFA"],
    interests:["Gaming"],
    hook:"Describe your FIFA / EA Sports FC squad without dropping names.",
    rule:'Defining relative clauses identify the person or thing you mean. Use who or that for people, which or that for things, and whose for possession. You may omit the relative pronoun when it is the object, but not when it is the subject.',
    form:'the player who scored / the boots (that) I bought / the player whose boots broke',
    examples:[["She’s the player who scored our winner in FC.","Who is the subject of scored. Keep the pronoun."],["That’s the player whose shirt number is ten.","Whose links the player to their shirt number."],["This is the kit I chose for our FC team.","I is the subject of chose; the object relative pronoun can be omitted."]],
    watchOut:'Don’t repeat the subject: “the player who scored”, not “the player who she scored”.',
    mission:"Create a three-clue guessing game about an invented FC player or a footballer you know. Include who and whose. Add a clue about a kit or team using which or that. Give your partner enough information to guess without knowing real player statistics.",
    questions:[
      {"prompt":"That is the FC player ___ scored our winning goal.","options":["who","whose","where"],"answer":"who","why":"The player is a person, and who is the subject of scored."},
      {"prompt":"Choose the player ___ shirt number is ten.","options":["who","whose","which"],"answer":"whose","why":"Whose links a person to something associated with them: the player’s shirt number."},
      {"prompt":"In which FC phrase can you leave out that?","options":["the team that won","the player that scored","the kit that I chose"],"answer":"the kit that I chose","why":"I is the subject of chose, so that is the object and may be omitted: the kit I chose."},
      {"prompt":"The FC kit ___ I chose is blue. Type which or whose.","answer":["which"],"why":"The kit is a thing. Which is the object of chose in the relative clause."},
      {"prompt":"She’s the FC player ___ saved the penalty. Type who or whose.","answer":["who"],"why":"Who refers to a person and is the subject of saved."}
    ]
  },
  {
    id:'gerunds-infinitives', title:'Your next side quest', grammar:'Gerunds & infinitives', level:'B1', theme:'IRL', icon:'spark', minutes:8,
    hook:'Things you enjoy. Things you want to try.',
    rule:'Some verbs are followed by -ing, such as enjoy, avoid and finish. Others take to + base verb, such as want, decide and hope. After prepositions, use -ing. Learn verb patterns as chunks because meaning and pattern can change together.',
    form:'enjoy making / decide to make / interested in making',
    examples:[['I enjoy making short films.','Enjoy is followed by -ing.'],['We decided to start a club.','Decide takes a to-infinitive.']],
    watchOut:'“Stop talking” means end the talking. “Stop to talk” means pause another activity so you can talk.',
    mission:'Write a mini bucket list using I enjoy…, I want to… and I’m interested in….',
    questions:[
      {prompt:'I enjoy ___ new recipes.',options:['trying','to try','try'],answer:'trying',why:'Enjoy is followed by the -ing form.'},
      {prompt:'They decided ___ a podcast.',options:['starting','start','to start'],answer:'to start',why:'Decide is followed by to + base verb.'},
      {prompt:'She’s interested in ___ to code.',options:['learn','learning','to learn'],answer:'learning',why:'After the preposition in, use the -ing form.'},
      {prompt:'We hope ___ (visit) London next year. Include to if needed.',answer:['to visit'],why:'Hope takes a to-infinitive: hope to visit.'},
      {prompt:'Please avoid ___ (share) personal details.',answer:['sharing'],why:'Avoid is followed by an -ing form. Share drops its final e before -ing.'}
    ]
  },
  {
    id:'second-conditional', title:'If I ran the internet', grammar:'Second conditional', level:'B2', theme:'Tech', icon:'bolt', minutes:8,
    hook:'Big hypothetical. Even bigger opinions.',
    rule:'Use if + past simple, would + base verb for an imagined or unlikely present or future situation. The past form creates distance from reality, rather than past time. In hypothetical if-clauses, were can be used with all subjects, especially in formal English.',
    form:'If I ran the app, I would change the algorithm.',
    examples:[['If I had a million followers, I would support small creators.','An imagined situation, not a past event.'],['If I were you, I’d check the source.','A common pattern for hypothetical advice.']],
    watchOut:'In this pattern, put would in the result clause: “If I had time, I would help”.',
    mission:'You can redesign one app. Explain three changes using If I…, I would….',
    questions:[
      {prompt:'If I ___ this app, I would remove the adverts.',options:['owned','own','would own'],answer:'owned',why:'An imagined situation uses a past simple form in the if-clause.'},
      {prompt:'If she had more time, she ___ a game.',options:['builds','would build','will built'],answer:'would build',why:'Use would + base verb for the hypothetical result.'},
      {prompt:'Which sentence gives hypothetical advice?',options:['If I were you, I would log off.','If you log off, the call ends.','If you log off later, I’ll wait.'],answer:'If I were you, I would log off.',why:'If I were you imagines being in another person’s position to offer advice.'},
      {prompt:'If we ___ (have) better equipment, we would record a film.',answer:['had'],why:'The hypothetical if-clause uses the past simple had.'},
      {prompt:'I would ___ (choose) a different username if I could.',answer:['choose'],why:'Would is followed by the base verb.'}
    ]
  },
  {
    id:'third-conditional', title:"Replay the FC final", grammar:'Third conditional', level:'B2', theme:'Gaming', icon:'game', minutes:8,
    contexts:["EA Sports FC", "FIFA"],
    interests:["Sport"],
    hook:"You lost your FIFA / EA Sports FC final. Rewrite the turning point.",
    rule:'Use if + had + past participle, would have + past participle to imagine a different past and its result. Both the condition and the result refer to a past that did not happen in the way imagined.',
    form:"If we had defended better, we would have won.",
    examples:[["If I had charged the controller, it wouldn’t have switched off during our FC final.","It wasn’t charged; it switched off. Both imagined changes refer to the past."],["We would have won if we had defended better.","An imagined alternative to a finished match result."]],
    watchOut:'Keep had in the condition and would have in the result. Avoid “If I would have known”.',
    mission:"Imagine this FC final: your controller switched off, your team missed a penalty and you lost 2–1. Rewrite two turning points using the third conditional. Explain which past events you are imagining differently. You can use another match or game instead.",
    questions:[
      {"prompt":"If we ___ better in the FC final, we would have won.","options":["had defended","defended","would defend"],"answer":"had defended","why":"An imagined change to a finished match uses the past perfect in the if-clause: had defended."},
      {"prompt":"I would have joined your FC team if you ___ me before the match.","options":["had invited","invite","would invite"],"answer":"had invited","why":"This imagines a different past condition: if you had invited me."},
      {"prompt":"If she had scored that late penalty at 2–1, we ___ the match.","options":["would have drawn","will draw","would draw"],"answer":"would have drawn","why":"At 2–1, one more goal would have made it 2–2. The imagined past result uses would have + past participle: would have drawn."},
      {"prompt":"If I had ___ (know) the controller battery was low, I would have charged it.","answer":["known"],"why":"Had takes the past participle known, not knew."},
      {"prompt":"In a different FC match, we drew 1–1. We would have ___ (win) if we had scored once more.","answer":["won"],"why":"Would have takes the past participle won."}
    ]
  },
  {
    id:'passive', title:'Made, mixed, remixed', grammar:'The passive voice', level:'B2', theme:'Music', icon:'music', minutes:8,
    hook:'Put the track in the spotlight, not the producer.',
    rule:'Use be + past participle to focus on the person or thing receiving an action. Change be to show the tense; keep the participle. Add by + agent when the person doing the action is relevant.',
    form:'is recorded / was recorded / has been recorded / will be recorded',
    examples:[['The track was recorded in a bedroom.','Past simple passive: was + recorded.'],['The samples have been cleared.','Present perfect passive: have been + cleared.']],
    watchOut:'The participle alone is not enough: “The song was released”, not “The song released” when you mean someone released it.',
    mission:'Describe how a song, video or game was made using three passive sentences.',
    questions:[
      {prompt:'The album ___ last Friday.',options:['was released','released','was release'],answer:'was released',why:'The album receives the action. Last Friday requires past simple: was + released.'},
      {prompt:'Millions of videos ___ every day.',options:['are uploaded','is uploaded','are upload'],answer:'are uploaded',why:'Plural videos + present simple passive = are uploaded.'},
      {prompt:'The track has ___ remixed.',options:['been','be','being'],answer:'been',why:'Present perfect passive uses has/have been + past participle.'},
      {prompt:'The video was ___ (make) by students.',answer:['made'],why:'The passive uses the past participle of make: made.'},
      {prompt:'The tickets will ___ (sell) online. Include be.',answer:['be sold'],why:'Future passive uses will be + past participle: be sold.'}
    ]
  },
  {
    id:'reported-speech', title:'The group chat said what?', grammar:'Reported speech', level:'B2', theme:'Social', icon:'chat', minutes:8,
    hook:'Pass on the message without changing the story.',
    rule:'When reporting later with a past reporting verb, we often backshift: present → past, will → would, and past → past perfect. Adjust pronouns and time references to fit the new context. Backshift can be optional when the information is still true or relevant.',
    form:'“I am busy.” → She said she was busy.',
    examples:[['“I will call you,” he said. → He said he would call me.','Will becomes would in a later report.'],['“Where do you live?” → She asked where I lived.','Reported questions use statement word order.']],
    watchOut:'Say something; tell someone something. In a reported question, don’t keep question word order.',
    mission:'Write two messages from a fictional group chat, then report them to someone who missed the conversation.',
    questions:[
      {prompt:'Report later with backshift: “I am tired,” she said. → She said she ___ tired.',options:['was','is being','were'],answer:'was',why:'With a later past report and backshift, am changes to was. I changes to she.'},
      {prompt:'Report with backshift: “We will help.” → They said they ___ help.',options:['would','will have','had'],answer:'would',why:'Will changes to would when backshifting a future promise.'},
      {prompt:'Choose the correctly ordered reported question.',options:['She asked where I lived.','She asked where did I live.','She asked where lived I.'],answer:'She asked where I lived.',why:'Reported questions use subject + verb word order, without question auxiliary did.'},
      {prompt:'He ___ me that he was leaving. Type said or told.',answer:['told'],why:'Tell takes a person as its object: told me. We would say said to me.'},
      {prompt:'Report later with backshift: “I can help.” → She said she ___ help.',answer:['could'],why:'Can normally changes to could in a backshifted report.'}
    ]
  },
  {
    id:'phrasal-verbs', title:'Don’t give up. Level up.', grammar:'Everyday phrasal verbs', level:'B2', theme:'IRL', icon:'spark', minutes:8,
    hook:'Tiny words that completely change the meaning.',
    rule:'A phrasal verb combines a verb with a particle. Learn the meaning and the object pattern together. With separable phrasal verbs, a pronoun goes between the verb and particle. Some multi-word verbs, such as look after, cannot be separated.',
    form:'turn the sound down / turn it down / look after your cat',
    examples:[['Can you turn it down?','With separable turn down, the pronoun goes in the middle.'],['I’m looking after my friend’s cat.','Look after means take care of and is not separable.']],
    watchOut:'“Turn down it” is incorrect for this meaning. “Look the cat after” is incorrect too: learn the pattern with the meaning.',
    mission:'Write a tiny story using find out, give up and turn down. Make the meaning clear from the context.',
    questions:[
      {prompt:'The music is too loud. Please ___.',options:['turn it down','turn down it','turn down to it'],answer:'turn it down',why:'With separable turn down, a pronoun object goes between the verb and particle.'},
      {prompt:'Can you look ___ my cat this weekend?',options:['after','up','off'],answer:'after',why:'Look after means take care of a person, animal or thing.'},
      {prompt:'I don’t know the answer yet, but I’ll find ___.',options:['out','off','over'],answer:'out',why:'Find out means discover information.'},
      {prompt:'Don’t give ___ just because it’s difficult.',answer:['up'],why:'Give up means stop trying.'},
      {prompt:'Please turn the light ___. We need to sleep.',answer:['off'],why:'Turn off means stop a light or device operating.'}
    ]
  }
];
const LEVELS = ['A1','A2','B1','B2'];
const THEMES = ['Social','Gaming','Music','Sport','Tech','IRL'];
if(typeof module !== 'undefined') module.exports = {LESSONS,LEVELS,THEMES};
