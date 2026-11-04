'use strict';
// Every row is authored. The helper only gives sections a consistent shape.
function exerciseSection(id,title,instruction,type,rows){return {id,title,instruction,items:rows.map((r,i)=>type==='choice'?{id:`${id}-${i+1}`,type,prompt:r[0],options:r[1],answer:r[2],why:r[3]}:{id:`${id}-${i+1}`,type,prompt:r[0],answer:r[1],why:r[2]})};}
const EXERCISE_BANK_VERSION=1;
const EXERCISE_SETS=[
 {id:'present-simple',context:'Your feed, your routine',intro:'Talk about habits, ask about routines and get do, does and the third-person ending working together.',sections:[
 exerciseSection('choose','Choose the form','Choose the best answer.','choice',[
 ['Noah ___ his playlist every Sunday.',['update','updates','is update'],'updates','Every Sunday describes a routine. Noah is one person, so add -s: updates.'],
 ['Our friends ___ their phones during training.',['does not check','not check','do not check'],'do not check','Our friends = they. Use do not + the base verb check.'],
 ['___ your music teacher play the drums?',['Does','Do','Is'],'Does','Your music teacher is singular. Does carries the third-person ending; play stays in the base form.'],
 ['We ___ the early bus on Mondays.',['catches','catch','catching'],'catch','With we, use the base verb catch. On Mondays signals a repeated action.'],
 ['Which sentence describes a regular habit?',['I am editing a clip right now.','I edited a clip yesterday.','I edit a clip every Friday.'],'I edit a clip every Friday.','Every Friday describes a habit, so edit is in the present simple.']]),
 exerciseSection('complete','Complete the sentence','Write only the missing word or words. Use full forms.','gap',[
 ['My cousin ___ (watch) football after school.','watches','Add -es after -ch with a third-person singular subject: watches.'],
 ['She ___ (try) a new recipe every week.','tries','Try ends in a consonant + y. Change y to -ies: tries.'],
 ['We ___ (not / share) our passwords.','do not share','With we, use do not + base verb. Do not add an -s to share.'],
 ['___ (do) Leo practise the guitar every day?','Does','A present simple question with the singular subject Leo needs does.'],
 ['My friends ___ (study) together on Tuesdays.','study','My friends is plural. Keep the base form study, with no -ies.']]),
 exerciseSection('repair','Fix the sentence','Correct one grammar error. Rewrite the whole sentence using full forms. Keep the other words.','rewrite',[
 ['She do not like loud music.','She does not like loud music.','She needs does not. Like remains in the base form after does.'],
 ['Does he posts every morning?','Does he post every morning?','Does already carries the third-person ending. The main verb is post.'],
 ['They plays football on Fridays.','They play football on Fridays.','Use the base verb play with they.'],
 ['My sister studys at the library.','My sister studies at the library.','Consonant + y changes to -ies in the third-person singular: studies.'],
 ['Do your brother cycle to school?','Does your brother cycle to school?','Your brother is one person. Use does + subject + base verb.']]),
 exerciseSection('change','Change the meaning','Rewrite the whole sentence as instructed. Use full forms.','rewrite',[
 ['Make this negative: I follow that creator.','I do not follow that creator.','Use do not + follow with I.'],
 ['Make this negative: Mia plays the piano.','Mia does not play the piano.','Use does not + play. Remove the -s from the main verb.'],
 ['Make a yes/no question: You use this app.','Do you use this app?','Put do before you, then use the base verb use.'],
 ['Make a yes/no question: Sam goes to the gym.','Does Sam go to the gym?','Put does before Sam and change goes to the base form go.'],
 ['Replace I with She: I carry my books.','She carries her books.','Carry becomes carries with she. My changes to her to keep the owner consistent.']])]},
 {id:'present-continuous',context:'Minecraft build chat',intro:'Imagine friends building a Minecraft base. Describe what is happening now. All the information you need is in the sentences.',sections:[
 exerciseSection('choose','Choose the form','Choose the best answer.','choice',[
 ['Listen! Our Minecraft team ___ the next build.',['plan','is planning','plans'],'is planning','Listen points to an action happening now. Our team is treated as singular here: is planning.'],
 ['I ___ the roof right now.',['am building','build','is building'],'am building','With I, use am + verb-ing: am building.'],
 ['___ you collecting stone at the moment?',['Do','Is','Are'],'Are','The present continuous question begins with are before you.'],
 ['Which sentence is a correct negative?',['They not are playing.','They are not playing.','They do not playing.'],'They are not playing.','Put not after are, then use the -ing form playing.'],
 ['Look! The character ___ across the bridge.',['running','runs','is running'],'is running','An action happening now needs be + verb-ing. The singular subject takes is.']]),
 exerciseSection('complete','Complete the build chat','Write only the missing word or words. Use full forms.','gap',[
 ['Ella ___ (make) a map of our Minecraft base now.','is making','Ella takes is. Drop the final -e from make before adding -ing: making.'],
 ['We ___ (not / play) on that server today.','are not playing','Use are not + playing with we. Today describes the temporary situation here.'],
 ['I am ___ (sit) beside the window while we chat.','sitting','Double the final consonant in sit before adding -ing: sitting.'],
 ['___ (be) they building a tower right now?','Are','Move are before the plural subject they in a question.'],
 ['My brother is ___ (use) my controller this evening.','using','Drop the final -e from use before adding -ing: using.']]),
 exerciseSection('repair','Fix the sentence','Correct one grammar error. Rewrite the whole sentence using full forms. Keep the other words.','rewrite',[
 ['I is collecting wood.','I am collecting wood.','I takes am, not is. The complete form is am collecting.'],
 ['She building a Minecraft house.','She is building a Minecraft house.','A present continuous sentence needs a form of be before building.'],
 ['They are make a bridge.','They are making a bridge.','After are, use the -ing form making for an action in progress.'],
 ['Are he playing with us?','Is he playing with us?','The singular subject he takes is, including in a question.'],
 ['We are not build today.','We are not building today.','Use are not + verb-ing: are not building.']]),
 exerciseSection('change','Change the build chat','Rewrite the whole sentence as instructed. Use full forms.','rewrite',[
 ['Make this negative: I am building a tower.','I am not building a tower.','Put not after am. Keep building.'],
 ['Make this negative: They are sharing a screen.','They are not sharing a screen.','Put not after are to make the present continuous negative.'],
 ['Make a yes/no question: Mia is collecting wood.','Is Mia collecting wood?','Move is before Mia. Collecting stays after the subject.'],
 ['Make a yes/no question: You are drawing the map.','Are you drawing the map?','Move are before you. Do is not needed.'],
 ['Replace He with They: He is running home.','They are running home.','They takes are instead of is. Running stays the same.']])]},
 {id:'past-simple',context:'The FC final recap',intro:'Tell the story of a FIFA / EA Sports FC match. Practise finished events, irregular verbs and questions with did.',sections:[
 exerciseSection('choose','Choose the match report','Choose the best answer.','choice',[
 ['Our FC team ___ the final last night.',['wins','has win','won'],'won','Last night is a finished past time. The past simple of win is won.'],
 ['I did not ___ the first goal.',['saw','see','seen'],'see','After did not, use the base form see.'],
 ['___ you watch the replay yesterday?',['Did','Do','Have'],'Did','Yesterday is a finished past time, so use did + subject + base verb.'],
 ['The two teams ___ ready at seven yesterday.',['was','were','be'],'were','The teams is plural. The past form of be is were.'],
 ['Which sentence uses did correctly?',['Did she saved the penalty?','Did she save the penalty?','Did she saves the penalty?'],'Did she save the penalty?','Did already marks past time. Use save in the base form.']]),
 exerciseSection('complete','Complete the recap','Write only the missing word or words. Use full forms.','gap',[
 ['My friend ___ (score) twice in our FC match yesterday.','scored','Score is regular. Add -d because it already ends in -e.'],
 ['We ___ (go) to extra time last night.','went','Go has the irregular past form went.'],
 ['I ___ (not / hear) the final whistle.','did not hear','Use did not + the base form hear for a past negative.'],
 ['Our goalkeeper ___ (catch) the ball just before the whistle.','caught','The irregular past simple of catch is caught.'],
 ['The controller ___ (be) on the sofa yesterday.','was','The controller is singular. Use was for the past of be.']]),
 exerciseSection('repair','Fix the match report','Correct one grammar error. Rewrite the whole sentence using full forms. Keep the other words.','rewrite',[
 ['We did not won the final.','We did not win the final.','After did not, use win instead of the past form won.'],
 ['Did you watched the whole match?','Did you watch the whole match?','After did, use the base form watch.'],
 ['She goed to extra time.','She went to extra time.','Go is irregular: the past simple is went, not goed.'],
 ['They was disappointed after the match.','They were disappointed after the match.','They takes were in the past of be.'],
 ['He score two goals yesterday.','He scored two goals yesterday.','Yesterday marks finished past time. Use the regular past form scored.']]),
 exerciseSection('change','Change the recap','Rewrite the whole sentence as instructed. Use full forms.','rewrite',[
 ['Make this negative: We won the match.','We did not win the match.','Use did not + win, rather than did not won.'],
 ['Make a yes/no question: Alex missed the penalty.','Did Alex miss the penalty?','Put did before Alex and use the base verb miss.'],
 ['Make this negative: Mia was tired.','Mia was not tired.','Be makes its own negative. Put not after was; do not add did.'],
 ['Make a yes/no question: They were at home.','Were they at home?','Move were before they to ask a question with be.'],
 ['Change every Friday to last Friday: I play FC every Friday.','I played FC last Friday.','Last Friday is a finished past time, so play becomes played.']])]},
 {id:'simple-or-continuous',context:'Usually vs right now',intro:'Separate routines from actions in progress. Watch for state verbs such as know, want and like.',sections:[
 exerciseSection('choose','Read the time clues','Choose the form that matches the meaning.','choice',[
 ['I usually ___ Minecraft after football training.',['am playing','play','plays'],'play','Usually signals a habit, so use the present simple play.'],
 ['Be quiet! The band ___ a song right now.',['records','record','is recording'],'is recording','Right now describes an action in progress. Use is recording.'],
 ['I ___ that this answer is correct.',['know','am knowing','knowing'],'know','Know is normally a state verb. Use the present simple to describe what you know.'],
 ['My sister normally walks, but today she ___ the bus.',['takes','is taking','take'],'is taking','Today contrasts with her normal habit. Is taking describes the temporary action.'],
 ['Which sentence describes a regular routine?',['We are eating lunch now.','We are wearing costumes today.','We eat lunch at one every day.'],'We eat lunch at one every day.','Every day describes a routine, expressed with the present simple.']]),
 exerciseSection('complete','Choose the tense yourself','Write only the missing word or words. Use the present simple or continuous and full forms.','gap',[
 ['Every weekend, Leo ___ (visit) his grandparents.','visits','Every weekend is a regular habit. Leo takes the third-person singular visits.'],
 ['Look! The cat ___ (sleep) on your homework.','is sleeping','Look draws attention to what is happening now. Use is + sleeping.'],
 ['We ___ (not / need) a new controller. This one works.','do not need','Need normally describes a state here, so use the present simple negative do not need.'],
 ['I cannot come to the phone. I ___ (cook) dinner right now.','am cooking','Right now describes an action in progress. I takes am cooking.'],
 ['Mia usually ___ (study) in the library after school.','studies','Usually signals a routine. Study changes to studies with the singular subject Mia.']]),
 exerciseSection('repair','Fix the tense choice','Correct one grammar error. Rewrite the whole sentence using full forms. Keep the other words.','rewrite',[
 ['I am knowing the answer.','I know the answer.','Know normally takes a simple form when it describes knowledge.'],
 ['She play tennis every Saturday.','She plays tennis every Saturday.','Every Saturday is a habit. She needs the third-person singular plays.'],
 ['They watching the match right now.','They are watching the match right now.','The continuous form needs are before watching.'],
 ['Does he wearing a school uniform today?','Is he wearing a school uniform today?','Wearing is an -ing form. Use is before he to ask about today’s temporary situation.'],
 ['I am wanting a quieter room.','I want a quieter room.','Want normally describes a state. Use the present simple want.']]),
 exerciseSection('change','Build the right sentence','Rewrite the whole sentence as instructed. Use full forms.','rewrite',[
 ['Use right now and the correct tense: We practise our song every day.','We are practising our song right now.','Right now changes the meaning to an action in progress: are practising.'],
 ['Use every evening and the correct tense: She is reading a comic right now.','She reads a comic every evening.','Every evening describes a habit. Use reads with she.'],
 ['Make a yes/no question about now: They are playing FC.','Are they playing FC?','Move are before they for a present continuous question.'],
 ['Make a yes/no question about a habit: Sam plays FC on Fridays.','Does Sam play FC on Fridays?','A present simple question with Sam needs does + play.'],
 ['Make this negative: I believe that story.','I do not believe that story.','Believe normally describes a state. Use the present simple negative do not believe.']])]},
 {id:'present-perfect',context:'Experiences, gigs and firsts',intro:'Use the present perfect for experiences connected to now and the past simple for events at a finished time.',sections:[
 exerciseSection('choose','Choose the time perspective','Choose the best answer.','choice',[
 ['I ___ that singer live twice, but not this year.',['have seen','saw yesterday','have saw'],'have seen','The sentence counts experiences without giving a finished time for them. Use have + seen.'],
 ['We ___ to a concert last Saturday.',['have gone','went','have went'],'went','Last Saturday is a finished past time, so use went.'],
 ['Has your cousin ever ___ a song?',['wrote','write','written'],'written','After has, use the past participle written.'],
 ['Mia has played guitar ___ three years.',['since','for','ago'],'for','Three years is a duration, so use for.'],
 ['I have known Alex ___ we were children.',['for','since','during'],'since','We were children gives the starting point. Use since.']]),
 exerciseSection('complete','Complete the experience','Write only the missing word or words. Use full forms.','gap',[
 ['She has never ___ (meet) her favourite singer.','met','Has needs a past participle. Meet → met.'],
 ['I ___ (buy) this ticket yesterday.','bought','Yesterday is finished past time. Buy has the irregular past form bought.'],
 ['We have ___ (be) friends for five years.','been','Have is followed by the past participle been.'],
 ['Our band ___ (not / perform) at a festival yet. Use the present perfect.','has not performed','Our band is singular here. Use has not + the past participle performed.'],
 ['I have lived here ___ 2022. Type for or since.','since','A year is a starting point, so use since.']]),
 exerciseSection('repair','Fix the time mismatch','Correct one grammar error. Rewrite the whole sentence using full forms. Keep the other words.','rewrite',[
 ['I have saw that band before.','I have seen that band before.','Have takes the past participle seen, not the past simple saw.'],
 ['She have never played the drums.','She has never played the drums.','She takes has in the present perfect.'],
 ['We have watched the concert yesterday.','We watched the concert yesterday.','Yesterday is a finished past time. Use the past simple watched.'],
 ['I have known her since two years.','I have known her for two years.','Two years is a duration. Use for, not since.'],
 ['Did you ever been to a festival?','Have you ever been to a festival?','An experience question with been needs have + subject + ever + been.']]),
 exerciseSection('change','Move between experience and event','Rewrite the whole sentence as instructed. Use full forms.','rewrite',[
 ['Make a yes/no experience question: You have visited London.','Have you visited London?','Move have before you. Keep the past participle visited.'],
 ['Make this negative: She has heard this song.','She has not heard this song.','Put not after has, before the past participle heard.'],
 ['Replace before with last night and use the correct tense: We have seen this band before.','We saw this band last night.','Last night is finished past time. Have seen becomes saw.'],
 ['Complete a full sentence using the present perfect: I / never / try / surfing.','I have never tried surfing.','Use have + never + the past participle tried with I.'],
 ['Make a question beginning When about the finished event: You bought the ticket yesterday.','When did you buy the ticket?','When asks for a finished time. Use did + buy and remove yesterday because it is the information being asked for.']])]},
 {id:'first-conditional',context:'If the group chat agrees…',intro:'Connect a real future possibility with its result. Think plans, posts, matches and a shared Minecraft build.',sections:[
 exerciseSection('choose','Choose the future possibility','Choose the best answer.','choice',[
 ['If our video ___ enough views, we will make a second one.',['gets','will get','got'],'gets','Use the present simple after if for a real future condition. The result already uses will.'],
 ['If it rains tomorrow, we ___ football indoors.',['played','will play','playing'],'will play','Use will + the base verb play for the possible future result.'],
 ['Which sentence follows the target pattern?',['If we will finish, we celebrate.','If we finish tonight, we will celebrate.','If we finished yesterday, we will celebrate.'],'If we finish tonight, we will celebrate.','The target pattern is if + present simple, will + base verb for a real future possibility.'],
 ['I will send the link if you ___ me your email address.',['gave','will give','give'],'give','The if-clause uses the present simple even when it follows the result.'],
 ['If Mia does not join our call, we ___ her a message.',['will send','sent','sending'],'will send','Use will + send for the future result of this possibility.']]),
 exerciseSection('complete','Complete the plan','Write only the missing word or words. Use full forms.','gap',[
 ['If Sam ___ (finish) the Minecraft roof tonight, we will take a screenshot.','finishes','Use the present simple in the if-clause. With Sam, finish becomes finishes.'],
 ['We ___ (share) the clip tomorrow if everyone agrees. Use will.','will share','Will belongs in the result clause and is followed by the base form share.'],
 ['If I ___ (not / have) training tomorrow, I will join your call.','do not have','The if-clause uses the present simple negative do not have with I.'],
 ['If you practise today, you ___ (be) more confident tomorrow. Use will.','will be','Use will + be for the possible future result.'],
 ['If our friends ___ (arrive) early tomorrow, we will start the match at six.','arrive','Friends is plural. Use the base present simple form arrive after if.']]),
 exerciseSection('repair','Fix the conditional','Use the target pattern: if + present simple, will + base verb. Correct one grammar error and keep the other words. Use full forms.','rewrite',[
 ['If she will post tonight, I will share the clip.','If she posts tonight, I will share the clip.','In the target pattern, the if-clause uses present simple posts, not will post.'],
 ['If we win tomorrow, we will celebrates.','If we win tomorrow, we will celebrate.','Will takes the base form celebrate, with no -s.'],
 ['If he do not reply tonight, I will call tomorrow.','If he does not reply tonight, I will call tomorrow.','He needs does not + reply in the present simple if-clause.'],
 ['I will helps if you ask me tomorrow.','I will help if you ask me tomorrow.','After will, use the base form help.'],
 ['If it rain tomorrow, we will stay inside.','If it rains tomorrow, we will stay inside.','It takes the third-person singular present form rains after if.']]),
 exerciseSection('change','Build a complete conditional','Rewrite the whole sentence as instructed. Use full forms.','rewrite',[
 ['Join the ideas beginning If: You practise. You will improve.','If you practise, you will improve.','Put the present simple condition first, then a comma and the result with will.'],
 ['Put the if-clause first: We will go outside if the rain stops.','If the rain stops, we will go outside.','Use a comma after the if-clause when it comes first. The verb forms stay the same.'],
 ['Make only the result negative: If we finish early, we will leave.','If we finish early, we will not leave.','Put not after will in the result clause. Keep the condition unchanged.'],
 ['Make only the condition negative: If Mia joins, we will start at six.','If Mia does not join, we will start at six.','Use does not + join for the negative condition with Mia.'],
 ['Put the result first: If you send the link, I will watch the video.','I will watch the video if you send the link.','When the result comes first, a comma is normally unnecessary. The if-clause still uses present simple.']])]}
];
