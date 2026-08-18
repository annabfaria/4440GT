var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  Welcome to the interactive course materials for 4440 Game Theory. These materials are designed to accompany our lectures and provide a hands-on approach to modeling strategic interactions and economic decision-making.  "
},
{
  "id": "sec-what-is-game-theory",
  "level": "1",
  "url": "sec-what-is-game-theory.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Game Theory",
  "body": " Introduction to Game Theory  Whether you are a firm deciding how to price a product against a fierce rival, a lawyer negotiating a legal settlement out of court, or a soccer goalkeeper guessing which way to dive during a critical penalty kick, you are playing a game and Game Theory is the science that explains how to \"win\" it. Game theory is the study of rational strategic decision-making, in which players take into account not only their choices, but the choices of other players as well.  Game Theory (GT) developed as an academic discipline in the mid-20th century. Mathematician John von Neumann and economist Oskar Morgenstern pioneered the study of real games, like chess and poker. The field evolved as John Nash introduced a new way to think about how individuals find stable, predictable patterns of interaction when they cannot coordinate with one another.  To understand the impact of GT on modern economic\/political\/philosophical analysis, we need only look at the list of Economics Nobel recipients whose work focused primarily on GT. In 1994, John Nash, Reinhart Selten and John C. Harsanyi won for their work on non-cooperative games. In 2005, Robert Aumann and Thomas Schelling won for their work on conflict and cooperation. Finally, Leonid Hurwicz, Eric Maskin, and Roger Myerson received the prize in 2007 for their work on mechanism design theory. We will encounter the work of these and other scholars throughout the semester.  The goal of Game Theory is to understand the strategic rules of the game we play every day (whether we realize it or not) from a lens of rationality. The goal of this course is to introduce students to the theory and applications of GT, with a special focus on institutional analysis (how the \"rules of the game\" affect behavior).  Some examples of game theoretical insights in Economics, Political Science and Philosophy include:    Firm Behavior: When businesses compete without talking to each other, their individual attempts to outsmart one another push them to produce more goods and lower their prices, ultimately making them worse off than if they could secretly agree to work together.    Liability: In legal arguments, the way laws split blame dictates how people negotiate, meaning rules can be carefully designed to make settling out of court the most attractive option for both sides to avoid expensive trial costs.    Public Action: When citizens try to organize a protest or movement, individuals often choose to stay home hoping others will take the risk, which means the group fails to achieve its goal unless they find a way to sync their actions and build trust.    Political Platforms: In two-party elections, political candidates naturally change their platforms to sound more and more alike, as both are forced to move toward the center of the political spectrum to steal moderate voters from each other.    Who Guards the Guards: A government strong enough to protect property rights is also strong enough to extract them.     Logic of Belief under Ultimate Uncertainty: When deciding whether to believe in a higher power, making a commitment costs very little but offers the chance at an infinite reward, meaning that logically, it makes more sense to act as a believer rather than risk losing everything for temporary independence.    "
},
{
  "id": "sec-gt-concepts-and-terminology",
  "level": "1",
  "url": "sec-gt-concepts-and-terminology.html",
  "type": "Section",
  "number": "1.2",
  "title": "Game Theory Concepts and Terminology",
  "body": " Game Theory Concepts and Terminology   What is a Game?  In Game Theory, a game is any formal situation involving two or more decision-makers where the outcome depends on the actions of everyone involved.  To be considered a fully defined game, a scenario must contain four essential elements:   Players: The decision-makers (individuals, firms, countries).  Strategies: The complete plans of action available to each player. We also refer to this as a strategy set or space ( ).  Payoffs: The rewards or utility each player receives for every possible combination of strategies.  Information: What players know about the game's state and past actions when making a choice.   A key assumption in GT is that all players are rational, i.e., each player chooses the action that gives them the best possible outcome based on a particular goal. This goal is usually, but not always, to maximize expected utility, profits or some other numerical payoff.  We'll use a famous game, the Prisoner's Dilemma (PD), to introduce several GT concepts and terminologies.   Rowan and Colm, two Irish bandits on the loose, are finally captured by police. The police take Rowan and Colm into separate rooms and begin their interrogation. They want to extract a confession from the bandits, since their evidence without a confession is rather thin. A detective tells Rowan that if she testifies against Colm (and Colm stays silent), she goes free, with Colm taking the full blame and facing ten years in prison. If she and Colm both testify, they get a reduced sentence of five years each. If she stays silent, but Colm decides to testify, she is the one locked up for ten years, while Colm walks free. If they both stay silent, however, the police only have enough evidence to convict them for minor charges and they would each get one year in prison. The detective in the other room gives Colm the same deal. The bandits are unable to communicate or know what the other will do, so what should Rowan and Colm do?    The Prisoner's Dilemma    You'll see the PD repeatedly throughout the semester in different forms. It turns out the PD is a \"silly\" example of a very serious problem all societies face. For now, let's learn to \"talk GT\" through this example.    What Type of Game Is the Prisoner's Dilemma?  There are two general types of games in GT:   Simultaneous Games: Involve players making decisions at the same time.  Sequential Games: Games in which players take turns acting.   The Prisoner's Dilemma is an example of a simultaneous game: Rowan and Colm decide their actions at the same time.    Do They Get to Go Again?  The frequency in which players play a game will determine their optimal strategies.   One-Shot Games: Played once, no concern for reputation, no need to account for differences in patience levels and time horizons.  Repeated Games: Involve playing the same game multiple times. Can be finite or infinite.   In our PD example, Rowan and Colm get one shot to try and save themselves from a lengthy prison sentence.    What Are They Playing For?  In GT, players have goals to optimize payoffs, which are the actual or expected returns for each possible outcome of the game.   Zero-Sum Games: What you gain, I lose (competition games).  Constant-Sum Games: A game in which the sum of all players' payoffs is a constant, the same for all their strategy combinations.  Non-Zero-Sum Games: The sum of the payoffs is not constant.   The goal of either Rowan or Colm isn't to \"win,\" but to minimize prison time for themselves. The Prisoner's Dilemma is an example of a non-zero-sum game.    Information Distribution and Availability  How much information a player has and whether the other players have similar information matters a lot in solving games. We distinguish between completeness and perfection of information:   Complete Information: All players know the rules, the players' preferences over outcomes, and beliefs about chance moves.  Incomplete Information: Involve a Nature player (randomness) or players who do not know about the actions of other players. This leads to asymmetric information issues.  Perfect Information: Players know everything they might wish to know about what has happened in the game so far when they make a move.  Imperfect Information: Players do not observe all prior actions when making choices.   The Prisoner's Dilemma has complete information, since both Rowan and Colm know the entire structure of the game (theirs and the other's possible actions and payoffs). It also has imperfect information, since they are in separate interrogation rooms and make their choices simultaneously.    Why Don't They Cooperate?  In GT, we categorize games relative to the players' ability to act jointly, so that in:   Non-Cooperative Games: Each player chooses and implements his actions individually, without any joint-action agreements directly enforced by other players.  Cooperative Games: Joint agreements can be directly implemented and enforced. Enforcement here is key. We'll learn time and time again that talk is cheap!   Rowan and Colm are in separate rooms and have to decide separately on how to act. In any PD game, one action is known as the cooperative strategy, or cooperation, and the other as defection. Even if they could speak to each, should they trust a fellow bandit?    Visualizing The Game  There are two general forms that game theorists use to represent games.   Normal Form: Also called game matrix or strategic form. It works well for smaller games, where rows\/columns depict payoffs for strategy combinations.  Extensive Form: Game trees specifying nodes, branches, and payoffs.   We can depict the PD game we described in both forms, but we need to introduce several terms to learn how to read and create game trees and tables.    Welcome to the Matrix  The matrix below shows the possible actions of two players and the associated payoffs of each action given another player's choices. In this case, Player 1, in row, has four possible actions: , , and . Player 2, in column, has two: and .   General Game Matrix                                  Note that the payoff for row player (Player 1) comes first, here shown in blue. The column player's (Player 2) payoffs come second, here shown in red. This is a rule. Follow it.  The players' strategy sets for this game are:   Player 1:  Player 2:   The subscript in each strategy set shows the name or label of each player.  For Rowan and Colm's PD game, the matrix looks like this:   Prisoner's Dilemma Matrix         Stay Silent  Testify    Stay Silent      Testify       Their strategy sets are:      Note that their payoffs here are depicted as negative values, to better represent the fact that they would \"lose\" years of freedom.    The Anatomy of a Tree  A GT tree contains the following elements:   Nodes: Points in the game in which one of the players takes an action. An initial node is called a root. End nodes contain terminal payoffs.  Branches: Represents one action from a player's action set at some node.  Payoffs: The first payoff listed in a vertical tree or extensive form represents the payoff of the first moving agent (excluding nature).  Information Set: A decision node layout containing more than one node where a player does not know what the other player has done. We depict an information set by drawing dashed ovals or dashed lines connecting a player's nodes to indicate that player does not know which node they are playing. This is common in simultaneous games.  Game vs. Subgame: The overall game encompasses the entire tree starting from the root node, whereas a subgame is a self-contained portion that begins at a single decision node and includes all subsequent branches without cutting through any information sets.     Handling Incomplete vs. Imperfect Information Setups   For games with imperfect information\/simultaneous choice, we use dashed circles or ovals around decision nodes to indicate that an agent makes their decision without knowing the other's decision first.  Games with incomplete information: Nature becomes the first mover in the game.   The tree below shows a general sequential game in which Player 1 acts first and Player 2 \"reacts,\" knowing Player 1's action.   General Sequential Game Tree      You will see below that game trees can be oriented in different directions. The decision of which orientation to use is purely stylistic. A horizontal orientation is preferred when the game has many sequential stages. Shorter games can be shown vertically.  The next tree is the extensive form of the first matrix we looked at, recreated below. The dashed oval around Player 2's nodes indicates they act without knowing what action Player 1 took. This is therefore a simultaneous and\/or imperfect information game.                                      Below is our Prisoner's Dilemma example in extensive form.   Prisoner's Dilemma Extensive Form      We have now been introduced to several concepts and terms we will use throughout the semester, but we have not yet answered a key question: what will Rowan and Colm do? That's up next.   "
},
{
  "id": "fig-pd-001",
  "level": "2",
  "url": "sec-gt-concepts-and-terminology.html#fig-pd-001",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " The Prisoner's Dilemma   "
},
{
  "id": "fig-general-matrix",
  "level": "2",
  "url": "sec-gt-concepts-and-terminology.html#fig-general-matrix",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " General Game Matrix                                 "
},
{
  "id": "fig-pd-matrix",
  "level": "2",
  "url": "sec-gt-concepts-and-terminology.html#fig-pd-matrix",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Prisoner's Dilemma Matrix         Stay Silent  Testify    Stay Silent      Testify      "
},
{
  "id": "fig-sequential-tree",
  "level": "2",
  "url": "sec-gt-concepts-and-terminology.html#fig-sequential-tree",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " General Sequential Game Tree     "
},
{
  "id": "fig-pd-extensive",
  "level": "2",
  "url": "sec-gt-concepts-and-terminology.html#fig-pd-extensive",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " Prisoner's Dilemma Extensive Form     "
},
{
  "id": "sec-gt-assumptions",
  "level": "1",
  "url": "sec-gt-assumptions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Assumptions",
  "body": " Assumptions   Let's expand on the key three assumptions in Game Theory. We may violate them later on in the semester.    Rationality  Rationality means that players engage in a \"perfectly calculating pursuit of a complete and internally consistent objective payoff function.\" In other words, players do the best they can with the information they have about their and other players' payoffs. Players do not make systematic mistakes nor do they deliberately act in a way that goes against their goal.    Preferences    Completeness refers to the fact that all preferences are known.    Transitivity refers to the fact that if I prefer to and to then I must prefer to ( ).    Continuity means that there is a \"tipping point\" between being better than and worse than a given middle option. Mathematically it means that given , then there exists a probability between and such that .   Game Show Decision Time    Imagine you are participating in a game show in which you are given two options: you can go through a series of physically-demanding obstacles with the possibility of a $1,000 prize (or $0 if failed) or you can take home $200. You clearly prefer $1,000 to $200 to $0. So how do you choose?  You have three strictly ordered outcomes:   (Best): Winning $1,000.  (Middle): Taking a guaranteed $200.  (Worst): Leaving with $0.   Because , the continuity axiom guarantees there is a tipping point. In this scenario, the probability of success is not a random coin flip; is your perceived likelihood of completing the obstacle course. It represents your confidence in your own physical abilities. What is your tipping point?  We can find the that makes you indifferent between taking on the obstacles or taking the $200. Given and =$1,000, =$200 and =$0, then . Therefore , which is your tipping point. This means that if you think the probability you'll succeed in the obstacle course is greater than 20%, you'll take that on. If you aren't so sure of your physical prowess, and think there's a less than one in five chance you'll make it, you take the $200 and run the other way.    Independence means that mixing two options with the exact same third, irrelevant option should not change your underlying preference. If you prefer over in isolation, then any gamble involving should be preferred to the exact same gamble involving . In other words, given then for any and between and , .  Returning to our game show example. Imagine that rather than making a choice to tackle an obstacle course, you were given the choice of two probability or mystery boxes:   Box 1: A 10% chance of taking home $1,000 and a 90% chance of going home empty handed.  Box 2: A 10% chance of taking home $200 and a 90% chance of going home empty handed.   You would, of course, choose Box 1 and this choice is consistent with the independence axiom.      Common Knowledge  I know that you know that I know that you know.   "
},
{
  "id": "fig-continuity-tipping-point",
  "level": "2",
  "url": "sec-gt-assumptions.html#fig-continuity-tipping-point",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Game Show Decision Time   "
},
{
  "id": "sec-expected-utility",
  "level": "1",
  "url": "sec-expected-utility.html",
  "type": "Section",
  "number": "1.4",
  "title": "Expected Utility",
  "body": " Expected Utility   Von Neumann-Morgenstern Expected Utility Functions  We can translate players' preferences into von Neumann-Morgenstern expected utility functions. These functions take into account the expected value of all possible probabilistic outcomes. They are particularly useful when rational actors must make decision under risk or uncertainty.  Risk means there are known probabilities to any outcome, whereas uncertainty means these probabilities are not known. In the words of Donald Rumsfeld, \"as we know, there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns - the ones we don't know we don't know. And if one looks throughout the history of our country and other free countries, it is the latter category that tends to be the difficult ones.\" Uncertainty is a tricky thing.  The formula for the expected utility of a lottery with possible outcomes is , where is the probability of outcome occurring and is the utility (subjective value) the decision-maker gets from outcome .  Imagine a coin toss. Heads you win $100, Tails you lose and get $0. If the coin is fair, the probability is for either outcome. The Expected Value (EV) of this gamble is just the mathematical average: . Pretty straightforward, right? But how much is that gamble actually worth to you? Do you really hate losing and would rather just have a safe, guaranteed payout? Or do you love being daring and get a thrill from the gamble itself?   \"Lord, I was born a gambling (wo)man!\"    We measure this subjective satisfaction using expected utility. Because human beings value risk differently, does not necessarily equal the $50 expected value. To find out what the gamble is really worth, we have to look at the player's unique risk profile.  We can use von Neumann-Morgenstern utility functions to map out risk preferences for individual players. The curvature of the utility function defines three risk profiles:    Risk-Averse (Concave Function): The utility of a guaranteed payout is strictly greater than the expected utility of a gamble with the exact same expected value. A risk-averse person will gladly pay a premium (like buying insurance) to avoid risk. Risk-averse utility functions might look something like this , a function exhibiting diminishing marginal utility.    Risk-Neutral (Linear Function): The utility function is a straight line. The person cares only about the raw expected value and is completely indifferent between a guaranteed $50 and a coin flip for $100. Risk-neutral utility functions are linear and do not suffer from diminishing returns.    Risk-Seeking (Convex Function): The utility of the gamble is strictly greater than the utility of the guaranteed expected value. This person gets active utility from the thrill of the gamble itself (like someone buying a lottery ticket). Their utility function will resemble , showing they get increasing marginal utility from the thrill of the potential gamble payoff.    If we return to our coin toss example, we can see how risk profiles matter for decision making. Suppose you can choose between a sure $50 or a chance at $100. Let's calculate the expected utility of this scenario for each of the three risk-profiles.    Risk-Averse:   Expected Utility of the Gamble:  Utility of the Certain Outcome:  The Comparison:     Risk-Neutral:   Expected Utility of the Gamble:  Utility of the Certain Outcome:  The Comparison:     Risk-Loving:   Expected Utility of the Gamble:  Utility of the Certain Outcome:  The Comparison:     Your own risk-profile (what your utility function looks like) determines what choice you'd make. Of course, probabilities matter too. If the probability of success in the coin toss decreased to 10%, would the risk-loving person still choose the gamble? No, because the expected utility of the gamble is now , which is less than the utility of the certain outcome: .   "
},
{
  "id": "fig-risk-profiles",
  "level": "2",
  "url": "sec-expected-utility.html#fig-risk-profiles",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " \"Lord, I was born a gambling (wo)man!\"   "
},
{
  "id": "sec-sample-questions",
  "level": "1",
  "url": "sec-sample-questions.html",
  "type": "Section",
  "number": "1.5",
  "title": "Sample Questions",
  "body": " Sample Questions  For each of the three matrices below, circle the payoffs to the row player, write out the strategy sets for each player and draw the games in extensive form.                                       Strategy Sets:   Row Player: ____________________  Column Player: ____________________                                      Strategy Sets:   Row Player: ____________________  Column Player: ____________________                                  Strategy Sets:   Row Player: ____________________  Column Player: ____________________     A risk-loving sports bettor has a utility function of . They are considering placing a wager on a heavy underdog in a boxing match. They calculate there is a 40% chance the underdog wins, which would pay out $100, and a 60% chance the favorite wins, leaving them with $0. Alternatively, the bettor can simply keep their guaranteed $50 in their wallet. Which option should they choose?    "
},
{
  "id": "sec-sample-answers",
  "level": "1",
  "url": "sec-sample-answers.html",
  "type": "Section",
  "number": "1.6",
  "title": "Answers",
  "body": " Answers                                       Strategy Sets:   Row Player:  Column Player:                                         Strategy Sets:   Row Player:  Column Player:                                     Strategy Sets:   Row Player:  Column Player:        The bettor should take the gamble.    Step 1: Calculate the Expected Utility of the Gamble.     Step 2: Calculate the Utility of the Certain Outcome.     Step 3: Compare.  ( ). The thrill of the potential $100 payout outweighs the safety of keeping the $50.      "
},
{
  "id": "sec-nash-equilibrium",
  "level": "1",
  "url": "sec-nash-equilibrium.html",
  "type": "Section",
  "number": "2.1",
  "title": "Nash Equilibrium",
  "body": " Nash Equilibrium  In the words of the great Phil Heap, a Nash equilibrium (NE) is \"a set of strategies, one for each player, such that each player's strategy is a best response given the strategies chosen by the other players. Each player's strategy is a best response to another player's best strategies.\"  Nash equilibria are stable, but do not necessarily generate the \"best\" outcome or the social optimum. Instead, time and time again, rational individuals, when unable to credibly commit and coordinate, will choose actions that offer inferior payoffs simply because they know other players are also rational.  An NE survives an announcement test: Suppose players all announce their strategies. If those strategies are each player's best response (thus the outcome is a NE), then no player will deviate even after the announcement. An NE is a self-enforcing agreement : There is no need for a third-party to enforce the outcome if that outcome is a NE, since no player can be better off by deviating.  The NE also works as a prediction of play. The NE is a stable point players eventually converge to from trial-and-error. Even if at first we do not reach an equilibrium, over time in repeated play players will choose actions which lead to a NE.  Every game with a finite number of strategies has at least one Nash Equilibrium; however, it may only exist in mixed strategies. Therefore, we solve for Nash equilibria in simultaneous games either by finding pure strategies or mixed strategies, which, put simply, mean:   Pure Strategies: A player chooses a single, specific strategy to play with 100% certainty. Always choosing to play Rock in a Rock-Paper-Scissors game is a pure strategy (albeit not a very good one).  Mixed Strategies: Players randomize and choose among two or more pure strategies according to specific probabilities. Playing a mixed strategy (playing Rock 1\/3, Paper 1\/3, and Scissors 1\/3 of the time) is the only way to avoid systematically losing in RPS.   Let's begin by looking at games solvable by pure strategies.   The \"Underlining Method\" For Finding Best Responses  We're finally ready to find out what Rowan and Colm are going to do. Will they stay silent and cooperate or testify and defect? We can use the underlining method to find Rowan's and Colm's optimal strategies. Let's recap their game:  Rowan and Colm are playing a one-shot simultaneous game and cannot cooperate. Even if they had telepathic abilities, they could not credibly commit to a particular action. So their only option is to figure out the best possible strategy given the other person's strategies.   Prisoner's Dilemma Normal Form          Colm      Stay Silent  Testify    Rowan  Stay Silent  -1, -1  -10, 0     Testify  0, -10  -5, -5     Rowan is thinking \"what should I do if Colm stays silent and what should I do if he testifies?\" Assuming Colm stays silent, staying silent herself would land her in prison for a year (Payoff=-1), whereas testifying would get her out of serving time (Payoff=0). So between the two strategies, she will choose to testify (defect) if Colm stays silent. We should underline the highest payoff for Rowan in the first column. This shows her choice given Colm's potential action.  Now assuming Colm testifies, staying silent would mean 10 years in the pen (Payoff=-10), whereas a little ratting (testifying) would lessen her time inside to five years (Payoff=-5). So between the two strategies, she will choose to testify (defect) if Colm testifies. We should underline the highest payoff for Rowan in the second column.  Colm is thinking the exact same thing and will arrive at the same conclusions. We should underline the highest payoffs for Colm in the first and second rows.  We have found our first Nash equilibrium. This is a pure strategy Nash. We can sometimes skip the word \"equilibrium,\" because why not? Neither Rowan nor Colm can do any better by changing their behavior, given what the other person might do.  You should star ( ) any cells containing Nash equilibria and\/or write out the solution formally:  , where PSNE stands for pure strategy Nash equilibrium.  We find Nash equilibria by the underlining method when a payoff cell contains the best contingent strategy choices of all players. In two player games, where both payoffs are underlined, that's a Nash. If solving a simultaneous game in its extensive form, hold the other player's action constant, which isolates one specific decision node, and compare your payoffs between the branches available at that node. Repeat this for each of the other player's possible actions.  Let's solve a simultaneous game with more actions:  Rowan and Colm are rival royals and must decide what gladiators to send to the Coliseum for the battle that will finally settle the succession war. What champions will they choose? Assume the payoffs are the probability their champion will win.   The Gladiator Game           Colm      MAN  DOG  MOUSE    Rowan  WOMAN  50, 50  60, 40  10, 90     LION  60, 40  70, 30  80, 20     CAT  20, 80  50, 50  90, 10     Rowan sends ______________________ into the arena. Who does Colm send? ______________________   "
},
{
  "id": "table-pd-normal",
  "level": "2",
  "url": "sec-nash-equilibrium.html#table-pd-normal",
  "type": "Table",
  "number": "2.1.1",
  "title": "Prisoner’s Dilemma Normal Form",
  "body": " Prisoner's Dilemma Normal Form          Colm      Stay Silent  Testify    Rowan  Stay Silent  -1, -1  -10, 0     Testify  0, -10  -5, -5    "
},
{
  "id": "table-gladiator",
  "level": "2",
  "url": "sec-nash-equilibrium.html#table-gladiator",
  "type": "Table",
  "number": "2.1.2",
  "title": "The Gladiator Game",
  "body": " The Gladiator Game           Colm      MAN  DOG  MOUSE    Rowan  WOMAN  50, 50  60, 40  10, 90     LION  60, 40  70, 30  80, 20     CAT  20, 80  50, 50  90, 10    "
},
{
  "id": "sec-multiple-psne",
  "level": "1",
  "url": "sec-multiple-psne.html",
  "type": "Section",
  "number": "2.2",
  "title": "Multiple Pure Strategy Nash Equilibria",
  "body": " Multiple Pure Strategy Nash Equilibria  There are games with multiple pure strategy Nash equilibria, such as Battle of the Sexes, the Stag Hunt (or Assurance Game), and Game of Chicken (or Hawk-Dove). Using the underlining method, these games yield more than one PSNE.   Battle of the Sexes  In the Battle of the Sexes (what a silly name!), two players want to meet up, but can't coordinate (let's say their phones are dead). The players are Rowan and Colm. They must choose to go to either a Football Game (F) or the Opera (O). Rowan prefers the Football Game, while Colm prefers the Opera. Where do they go?   Battle of the Sexes          Colm      Football  Opera    Rowan  Football  3, 2  0, 0     Opera  0, 0  2, 3     Solution: __________________________________________________  Neither PSNE stands out as fundamentally superior to the other, and both players would want to go to the same event (cooperate). The problem is: which event do they go to? They need a focal point . A focal point is an outcome that players naturally converge on without communicating, simply because it possesses some cultural, historical, or psychological prominence that makes it stand out as the obvious \"common sense\" choice. We also refer to focal points as a Schelling point , after Nobel-winning economist Thomas Schelling (1921-2016).  What might be a Schelling point for Battle of the Sexes? ____________________    Game of Chicken - Hawk-Dove - Brinkmanship  The Game of Chicken (also known as the Hawk-Dove game) is a classic game of anti-coordination. Each player can choose to Swerve (S), which is the safe, cooperative action, or Straight (ST), which is the aggressive, defecting action.  If both swerve, they face minor loss of face but remain safe. If one goes straight while the other swerves, the aggressive player wins total prestige while the swerving player is humiliated. However, if both go straight, they result in a catastrophic head-on crash. The payoffs of the game are:   Game of Chicken          Colm      Swerve  Straight    Rowan  Swerve  0, 0  -1, 2     Straight  2, -1  -10, -10     Solution: __________________________________________________  In this simultaneous game, the stakes are high. To ensure a player doesn't end up in the worst possible equilibrium, they have to create a commitment device or credible commitment that does just that: commits the player to a particular action. Schelling proposed the following thought experiment: Imagine you are driving down that single-lane road. How do you guarantee the other driver swerves? You restrict your own choices. Remove the steering wheel from your car and throw it out so the other player sees that the only action you can take is to go straight. This \"forces\" the other player to swerve. Going straight would make them worse off than swerving.    Stag Hunt - Assurance Game  The Stag Hunt is a classic game in which there are two PSNEs. One PSNE gives both players higher payoffs than the other, but any defection risks leaving both players with nothing. The lower payoff PSNE, however, requires no cooperation. Here's the basic game.  Rowan and Colm must decide between hunting a Stag, which provides a high payoff but requires both to cooperate (they cannot hunt the stag alone), or hunting a Hare, which is safer (they can each hunt a hare by themselves) but provides a lower payoff. Let's solve for the equilibria.   Stag Hunt          Colm      Stag  Hare    Rowan  Stag  5, 5  0, 2     Hare  2, 0  2, 2     Solution: __________________________________________________  is a payoff-dominant equilibrium ; it yields the highest possible payoffs for all players compared to the other PSNE. is a risk-dominant equilibrium ; it is the least risky choice when the other player could defect. Rowan and Colm both prefer the Stag if they can trust the other to participate, but they risk ending up with nothing if they hunt the Stag alone.  So when should we expect cooperation? Rowan and Colm face a coordination problem where the highest payoff requires mutual trust. The higher the trust between players (probability of cooperation), the more likely they are to cooperate. The lower the trust, the greater the chances of defection. For example, suppose Rowan assigns a 50\/50 chance to Colm hunting the Stag. Her expected utilities are:   Expected Utility of :  Expected Utility of :   For this level of trust (50% chance of defection), Rowan chooses (cooperation). We can take the idea of trust as probability expectation further and plot the expected utility of each of Rowan's choice based on her belief about Colm's Stag choice, i.e., based on different levels of trust.   Expected Utility in Stag Hunt      Understanding Rowan's expected utility from trusting Colm will help us see that there is a mixed strategy Nash equilibrium in the Stag Hunt (and other games).   "
},
{
  "id": "table-battle-sexes",
  "level": "2",
  "url": "sec-multiple-psne.html#table-battle-sexes",
  "type": "Table",
  "number": "2.2.1",
  "title": "Battle of the Sexes",
  "body": " Battle of the Sexes          Colm      Football  Opera    Rowan  Football  3, 2  0, 0     Opera  0, 0  2, 3    "
},
{
  "id": "table-chicken",
  "level": "2",
  "url": "sec-multiple-psne.html#table-chicken",
  "type": "Table",
  "number": "2.2.2",
  "title": "Game of Chicken",
  "body": " Game of Chicken          Colm      Swerve  Straight    Rowan  Swerve  0, 0  -1, 2     Straight  2, -1  -10, -10    "
},
{
  "id": "table-stag-hunt",
  "level": "2",
  "url": "sec-multiple-psne.html#table-stag-hunt",
  "type": "Table",
  "number": "2.2.3",
  "title": "Stag Hunt",
  "body": " Stag Hunt          Colm      Stag  Hare    Rowan  Stag  5, 5  0, 2     Hare  2, 0  2, 2    "
},
{
  "id": "fig-stag-hunt-graph",
  "level": "2",
  "url": "sec-multiple-psne.html#fig-stag-hunt-graph",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": " Expected Utility in Stag Hunt     "
},
{
  "id": "sec-mixed-strategies-nash-equilibrium",
  "level": "1",
  "url": "sec-mixed-strategies-nash-equilibrium.html",
  "type": "Section",
  "number": "2.3",
  "title": "Mixed Strategies Nash Equilibrium",
  "body": " Mixed Strategies Nash Equilibrium  The normal form game of Rock-Paper-Scissors (RPS) is shown below. Solve it using the underlining method. Can you find a PSNE?   Rock-Paper-Scissors Normal Form           Colm      Rock ( )  Paper ( )  Scissors ( )    Rowan  Rock ( )  0, 0  -1, 1  1, -1     Paper ( )  1, -1  0, 0  -1, 1     Scissors ( )  -1, 1  1, -1  0, 0     Some simultaneous games do not have pure strategy NE, but that does not mean that they do not have Nash equilibria. Ask any kid you know (including your inner child) how to play RPS and they'll tell you: just randomized. Strategic randomization in games such as RPS is using mixed strategy to solve games.  A mixed strategy is a randomization of a player's pure strategies made with specified probabilities. In a mixed strategy, the probabilities range from to and their sum must equal .  Of course, mixed strategy NE require that randomization be done according to the expected payoffs of each action. In RPS, each player has three pure strategies, namely {Rock}, {Paper} and {Scissors}. A mixed strategy in RPS assigns a set probability to playing each of those pure strategies in repeated play. For example: or .  A mixed strategy profile is a Nash equilibrium if each player's mixed strategy is a best response to the other player's best response strategies. Every pure strategy in a Nash mixed strategy must itself be a best response strategy to the other player's strategies.  To find the Mixed Strategy Nash Equilibrium or MSNE ( for Rowan and for Colm or ) in this symmetric zero-sum Rock-Paper-Scissors game, we use the Indifference Principle. Rowan must randomize her strategies such that Colm is completely indifferent between playing his three pure strategies (Rock, Paper, or Scissors). If his expected utilities are identical, he cannot find a predictable pattern to exploit her.  We calculate Colm's expected utility ( ) for each of his choices based on Rowan's strategy probabilities ( ):   If Colm plays Rock:   If Colm plays Paper:   If Colm plays Scissors:    To make Colm indifferent, we set these three expected utility equations equal to each other:   Because probabilities must sum to one ( ), the only mathematical solution to this system is for the differences between all payoffs to be exactly zero, meaning . Splitting the total probability evenly yields the unique mixed strategy equilibrium for Rowan:   Because the game is perfectly symmetric, Colm's strategy ( ) is the same as Rowan's, such that:   If either player deviates from playing each option exactly 33.3% of the time, the other player can immediately shift to a pure strategy and exploit them. The overall expected payoff for both players in this equilibrium is exactly 0.  In a standard two-player game, expected payoffs of MSNE can be calculated by a weighted average of the expected payoffs of each single cell: Probability of Row Probability of Column Player's Payoff in that cell.   Rock-Paper-Scissors Weighted Payouts                Rock ( )  Paper ( )  Scissors ( )     Rock ( )        Paper ( )        Scissors ( )        For Rowan,     Suppose Rowan chooses a different mixed strategy to play, say (playing Rock 20% of the time, Paper 60% , and Scissors 20% ). For a mixed strategy to be a true Nash Equilibrium, it must make the opponent completely indifferent between all of their available choices. If they aren't indifferent, it means they have found a predictable pattern they can exploit. We need to calculate Colm's expected utility ( ) for each of his three pure strategies given Rowan's mixed strategy.   If Colm plays Rock: He ties against Rock ( 20% ), loses to Paper ( 60% ), and wins against Scissors ( 20% ):  If Colm plays Paper: He wins against Rock ( 20% ), ties Paper ( 60% ), and loses to Scissors ( 20% ):  If Colm plays Scissors: He loses to Rock ( 20% ), wins against Paper ( 60% ), and ties Scissors ( 20% ):   For Rowan's strategy to be a Nash Equilibrium, Colm's expected utilities would all need to equal each other. But looking at the math:  Because the expected payoffs are unequal, Colm is not indifferent. He can clearly see that Rowan is heavily favoring Paper , so Colm will completely stop playing Rock and Paper , and deviate to playing pure Scissors 100% of the time. By doing so, Colm secures a positive expected payout of 0.4 per game. Once Colm starts playing only Scissors , Rowan will immediately regret her heavy reliance on Paper and will want to switch to playing Rock . Since both players still have an incentive to unilaterally change their behavior, mathematically cannot be a MSNE.  "
},
{
  "id": "table-rps",
  "level": "2",
  "url": "sec-mixed-strategies-nash-equilibrium.html#table-rps",
  "type": "Table",
  "number": "2.3.1",
  "title": "Rock-Paper-Scissors Normal Form",
  "body": " Rock-Paper-Scissors Normal Form           Colm      Rock ( )  Paper ( )  Scissors ( )    Rowan  Rock ( )  0, 0  -1, 1  1, -1     Paper ( )  1, -1  0, 0  -1, 1     Scissors ( )  -1, 1  1, -1  0, 0    "
},
{
  "id": "table-rps-weighted",
  "level": "2",
  "url": "sec-mixed-strategies-nash-equilibrium.html#table-rps-weighted",
  "type": "Table",
  "number": "2.3.2",
  "title": "Rock-Paper-Scissors Weighted Payouts",
  "body": " Rock-Paper-Scissors Weighted Payouts                Rock ( )  Paper ( )  Scissors ( )     Rock ( )        Paper ( )        Scissors ( )       "
},
{
  "id": "sec-solving-games-sample-questions-1",
  "level": "1",
  "url": "sec-solving-games-sample-questions-1.html",
  "type": "Section",
  "number": "2.4",
  "title": "Sample Questions",
  "body": " Sample Questions  For each of the games below, find the Nash equilibrium\/a.             Colm      Left  Right    Rowan  Up  10, 5  6, 2     Down  4, 1  2, 8     Solution: ____________________              Colm      Left  Center  Right    Rowan  Up  3, 2  4, 5  1, 0     Down  5, 4  8, 7  0, 6     Solution: ____________________             Colm      Left  Right    Rowan  Top  4, 3  2, 6     Middle  1, 2  5, 9     Bottom  0, 1  3, 4     Solution: ____________________               Colm      Action 1  Action 2  Action 3  Action 4    Rowan  Strategy A  4, 8  3, 5  9, 2  6, 7     Strategy B  2, 1  7, 9  12, 11  5, 4     Strategy C  8, 3  1, 2  6, 5  10, 9     Solution: ____________________    Refer to the information below on the Matching Pennies game. Solve for the Nash equilibrium and calculate the expected payoffs to the players.   Matching Pennies is a classic zero-sum, strictly competitive game played with two players, Rowan and Colm. Each player has a penny and must simultaneously turn it to either Heads (H) or Tails (T). The strategic stakes are completely opposed: Rowan (Row Player) wants the pennies to match. If both are Heads or both are Tails, Rowan wins Colm's penny (Payoff: to Rowan, to Colm). Colm (Column Player) wants the pennies to mismatch. If one is Heads and the other is Tails, Colm wins Rowan's penny (Payoff: to Rowan, to Colm).            Colm      Heads  Tails    Rowan  Heads  1, -1  -1, 1     Tails  -1, 1  1, -1     Solution: ____________________    In October 1962, US intelligence discovered that the Soviet Union, under Nikita Kruschev, was secretly installing nuclear missiles in Cuba. This was a severe security threat to the US. American president JFK was faced with a most important task: to get the Soviets to back out without making the Cold War hot. JFK had two options:   the Hawkish option: an aggressive choice to invade Cuba.  the Dovish option: use diplomacy to solve the Cuban Missile Crisis.   The payoff matrix below ranks each player's preferred outcomes from worst (1) to best (4).           Khrushchev      Dovish (Diplomacy)  Hawkish (Aggression)    JFK  Dovish (Diplomacy)  3, 3  2, 4     Hawkish (Aggression)  4, 2  1, 1     Refer to the game information to answer the following six questions.    What type of game is the Cuban Missile Crisis? Select all that apply.   Sequential game  Simultaneous game  Coordination game  Anti-coordination game     Solve the game.  Solution: ____________________    JFK ultimately decided to implement a naval blockade that prevented new weapons shipments, while demanding the removal of existing arsenal from the island. This suggest JFK chose to commit to what action?  ____________________    We refer to JFK's choice as a way to:   defect.  find a Nash equilibrium.  find a focal point.  create a commitment device.     Given JFK's commitment, what is Khruschev's best action? Explain your answer by describing the outcome of each of Khruschek's possible actions in this scenario.  __________________________________________________    Dean Rusk, Secretary of State during the CMC, concluded: \"We're eyeball to eyeball, and I think the other fellow just blinked.\" What does this indicate about the success of JFK's strategy?  __________________________________________________    In the 2001 movie \"A Beautiful Mind,\" John Nash solves the \"Beauty Game\" while at a bar with his friends, surrounded by flirty women. You can scan the QR code below to watch the scene. The movie is old and about events that took place even earlier (and is also largely made up), so the game is a rather sexist, but let's solve it. In our example, the game involves two players, Ben and Mark, who must choose between approaching the only blonde woman in the crowd or one of the many brunettes. The payoff matrix is shown below.           Ben      Blonde  Brunette    Mark  Blonde  1, 1  4, 2     Brunette  2, 4  3, 3      QR Code for A Beautiful Mind Scene      What are the PSNE? ____________________    Does movie John Nash get it right? ____________________    "
},
{
  "id": "table-sample-1-1",
  "level": "2",
  "url": "sec-solving-games-sample-questions-1.html#table-sample-1-1",
  "type": "Table",
  "number": "2.4.1",
  "title": "",
  "body": "         Colm      Left  Right    Rowan  Up  10, 5  6, 2     Down  4, 1  2, 8    "
},
{
  "id": "table-sample-1-2",
  "level": "2",
  "url": "sec-solving-games-sample-questions-1.html#table-sample-1-2",
  "type": "Table",
  "number": "2.4.2",
  "title": "",
  "body": "          Colm      Left  Center  Right    Rowan  Up  3, 2  4, 5  1, 0     Down  5, 4  8, 7  0, 6    "
},
{
  "id": "table-sample-1-3",
  "level": "2",
  "url": "sec-solving-games-sample-questions-1.html#table-sample-1-3",
  "type": "Table",
  "number": "2.4.3",
  "title": "",
  "body": "         Colm      Left  Right    Rowan  Top  4, 3  2, 6     Middle  1, 2  5, 9     Bottom  0, 1  3, 4    "
},
{
  "id": "table-sample-1-4",
  "level": "2",
  "url": "sec-solving-games-sample-questions-1.html#table-sample-1-4",
  "type": "Table",
  "number": "2.4.4",
  "title": "",
  "body": "           Colm      Action 1  Action 2  Action 3  Action 4    Rowan  Strategy A  4, 8  3, 5  9, 2  6, 7     Strategy B  2, 1  7, 9  12, 11  5, 4     Strategy C  8, 3  1, 2  6, 5  10, 9    "
},
{
  "id": "table-matching-pennies-q",
  "level": "2",
  "url": "sec-solving-games-sample-questions-1.html#table-matching-pennies-q",
  "type": "Table",
  "number": "2.4.5",
  "title": "",
  "body": "         Colm      Heads  Tails    Rowan  Heads  1, -1  -1, 1     Tails  -1, 1  1, -1    "
},
{
  "id": "table-cuban-missile-q",
  "level": "2",
  "url": "sec-solving-games-sample-questions-1.html#table-cuban-missile-q",
  "type": "Table",
  "number": "2.4.6",
  "title": "",
  "body": "         Khrushchev      Dovish (Diplomacy)  Hawkish (Aggression)    JFK  Dovish (Diplomacy)  3, 3  2, 4     Hawkish (Aggression)  4, 2  1, 1    "
},
{
  "id": "table-beautiful-mind-q",
  "level": "2",
  "url": "sec-solving-games-sample-questions-1.html#table-beautiful-mind-q",
  "type": "Table",
  "number": "2.4.7",
  "title": "",
  "body": "         Ben      Blonde  Brunette    Mark  Blonde  1, 1  4, 2     Brunette  2, 4  3, 3    "
},
{
  "id": "fig-qr-code",
  "level": "2",
  "url": "sec-solving-games-sample-questions-1.html#fig-qr-code",
  "type": "Figure",
  "number": "2.4.8",
  "title": "",
  "body": " QR Code for A Beautiful Mind Scene   "
},
{
  "id": "sec-solving-games-sample-answers-1",
  "level": "1",
  "url": "sec-solving-games-sample-answers-1.html",
  "type": "Section",
  "number": "2.5",
  "title": "Answers",
  "body": " Answers  For each of the games below, find the Nash equilibrium\/a.             Colm      Left  Right    Rowan  Up       Down  4, 1  2,     Solution:              Colm      Left  Center  Right    Rowan  Up  3, 2  4,  1, 0     Down    0,     Solution:             Colm      Left  Right    Rowan  Top   2,     Middle  1, 2      Bottom  0, 1  3, 4     Solution:               Colm      Act. 1  Act. 2  Act. 3  Act. 4    Rowan  St. A  4,  3, 5  9, 2  6, 7     St. B  2, 1  , 9   5, 4     St. C  , 3  1, 2  6, 5      Solution:    Let be the probability that Rowan plays Heads, and be the probability that Colm plays Heads.  Rowan chooses to make Colm indifferent between playing Heads or Tails:    Colm chooses to make Rowan indifferent between playing Heads or Tails:    Expected Payoff:   Solution: ,    B and D    Solution:    Hawk    create a commitment device.    If the Soviets choose Hawk, the US would be committed to respond with Hawk, triggering a nuclear exchange. This is the worst-case scenario (lowest payoff for either player) If Khrushchev choose Dove, he would avoid war but suffer a massive blow to Soviet global prestige (second lowest payoff to the Soviets, but better than nuclear option).    The Soviets \"correctly\" chose Dove, they swerved, preventing a nuclear conflict.    What are the PSNE?    Does movie John Nash get it right? No. Movie Nash says the equilibrium is {(Brunette, Brunette)}.    "
},
{
  "id": "table-ans-1-1",
  "level": "2",
  "url": "sec-solving-games-sample-answers-1.html#table-ans-1-1",
  "type": "Table",
  "number": "2.5.1",
  "title": "",
  "body": "         Colm      Left  Right    Rowan  Up       Down  4, 1  2,    "
},
{
  "id": "table-ans-1-2",
  "level": "2",
  "url": "sec-solving-games-sample-answers-1.html#table-ans-1-2",
  "type": "Table",
  "number": "2.5.2",
  "title": "",
  "body": "          Colm      Left  Center  Right    Rowan  Up  3, 2  4,  1, 0     Down    0,    "
},
{
  "id": "table-ans-1-3",
  "level": "2",
  "url": "sec-solving-games-sample-answers-1.html#table-ans-1-3",
  "type": "Table",
  "number": "2.5.3",
  "title": "",
  "body": "         Colm      Left  Right    Rowan  Top   2,     Middle  1, 2      Bottom  0, 1  3, 4    "
},
{
  "id": "table-ans-1-4",
  "level": "2",
  "url": "sec-solving-games-sample-answers-1.html#table-ans-1-4",
  "type": "Table",
  "number": "2.5.4",
  "title": "",
  "body": "           Colm      Act. 1  Act. 2  Act. 3  Act. 4    Rowan  St. A  4,  3, 5  9, 2  6, 7     St. B  2, 1  , 9   5, 4     St. C  , 3  1, 2  6, 5     "
},
{
  "id": "sec-msne-and-best-response-functions",
  "level": "1",
  "url": "sec-msne-and-best-response-functions.html",
  "type": "Section",
  "number": "2.6",
  "title": "MSNE and Best Response Functions",
  "body": " MSNE and Best Response Functions  So far, we've looked at games solving for either pure strategy or mixed strategies or Nash equilibria (PSNE or MSNE). Some games, including some we've solved, have both PSNE and MSNE. We will look at how to systematically assess whether games have PSNE, MSNE or a combination of both.   Step 1: Finding PSNE  We know this one already. Find any PSNE using the underlining method.    Step 2: \"Odd Number\" Rule of Thumb  In 1971, Robert Wilson found that nearly all finite games have an odd number of Nash equilibria. This allows us to predict whether a game will have MSNE based on the number of PSNE found in the first step. The table below summarizes the rule of thumb we can use.   Odd Number Rule of Thumb        Underline Method Result  Can an MSNE exist?  Total NE Count  Common Examples    0 Pure Equilibria  Yes (Always 1)  1 (Mixed)  RPS, Matching Pennies    1 Pure Equilibrium  No  1 (Pure)  Prisoner's Dilemma    2 Pure Equilibria  Yes (Always 1)  3 (2 Pure, 1 Mixed)  Stag Hunt, Chicken       Step 3: Pruning  A player will never assign a positive probability to a strictly dominated strategy. So it is important to check for those. Is there a strategy that always gives a lower payoff than another strategy regardless of what the other player does? If so, that strategy needs to be crossed out. If by doing this pruning process, the resulting payoff matrix is a single cell or contains a single column or row (one action left for a player), there is no MSNE. The only equilibrium is the PSNE of that cell.  Recall Rowan and Colm's first game, the Prisoner's Dilemma. Can this game be pruned? Does it have an MSNE?           Colm      Stay Silent  Testify    Rowan  Stay Silent  -1, -1  -10, 0     Testify  0, -10  -5, -5       Step 4: Plot Reaction Functions  The final step in the process of finding all possible Nash equilibria is to find the MSNE, if any. We do so by calculating the expected payoffs for each player given the probability that the other player plays a particular strategy. We then plot the optimal decision each player would make given these probabilities, what we call a best response or reaction function .  Let's use Stag Hunt game from earlier as our framework to understand best response or reaction functions.  Step 1: Finding PSNE  By the underlining method, we find two PSNE.           Colm      Stag  Hare    Rowan  Stag   0, 2     Hare  2, 0      Step 2: \"Odd Number\" Rule of Thumb  The Stag Hunt game has two PSNE so it will have an MSNE.  Step 3: Pruning  We know the game will have a MSNE, so pruning won't work. Neither player has a strictly dominated strategy.  Step 4: Plot Reaction Functions  Let be the probability that Colm plays , and be the probability that Rowan plays .  First, we want to plot Rowan's reaction or best response function ( as a function of ): what she will do given what Colm does (probabilistically). Reaction functions will usually look like a step-functions.   For low values of , will be pinned at or . In other words, when the probability of Colm playing is low, Rowan will be better off playing .  At some critical threshold or tipping point, Rowan is exactly indifferent between playing or , so can be any value between and (a vertical line segment).  For high values of , it flips to the opposite edge at , where Rowan always plays because her expected utility is higher than playing .    We can use these reaction function plots to map out not only MSNE but also the game's PSNE. Any PSNE is simply a MSNE for which one probability is 1 and the other 0. For example, we know this Stag Hunt game has two PSNE: and . Probabilistically, is simply , meaning Rowan and Colm both always choose . is . So we can plot the PSNE in the best response maps, as shown below:      Now moving on to finding the MSNE by finding each player's best response or reaction function. Since the game is symmetrical, we need only find one player's reaction function and mirror it later on. To begin, let's look at Rowan. Rowan's expected utility helps us build her reaction function.  By comparing the expected utilities of Rowan's actions and , we see that Rowan's payoff from is greater than from as long as the probability that Colm chooses is less than 0.4 (if , then ). At , Rowan is indifferent between and , because she receives the exact same expected payoff . If , then her expected payoff from is always greater than and she will always choose .          We can do the same for Colm, and we end up with the following diagram.   Combined Best Response Functions      Where the two lines intersect, we find the MSNE. In this case, . So Stag Hunt has three Nash equilibria: two PSNE and one MSNE.   "
},
{
  "id": "table-odd-number-rule",
  "level": "2",
  "url": "sec-msne-and-best-response-functions.html#table-odd-number-rule",
  "type": "Table",
  "number": "2.6.1",
  "title": "Odd Number Rule of Thumb",
  "body": " Odd Number Rule of Thumb        Underline Method Result  Can an MSNE exist?  Total NE Count  Common Examples    0 Pure Equilibria  Yes (Always 1)  1 (Mixed)  RPS, Matching Pennies    1 Pure Equilibrium  No  1 (Pure)  Prisoner's Dilemma    2 Pure Equilibria  Yes (Always 1)  3 (2 Pure, 1 Mixed)  Stag Hunt, Chicken    "
},
{
  "id": "table-pd-pruning",
  "level": "2",
  "url": "sec-msne-and-best-response-functions.html#table-pd-pruning",
  "type": "Table",
  "number": "2.6.2",
  "title": "",
  "body": "         Colm      Stay Silent  Testify    Rowan  Stay Silent  -1, -1  -10, 0     Testify  0, -10  -5, -5    "
},
{
  "id": "table-stag-hunt-underlined",
  "level": "2",
  "url": "sec-msne-and-best-response-functions.html#table-stag-hunt-underlined",
  "type": "Table",
  "number": "2.6.3",
  "title": "",
  "body": "         Colm      Stag  Hare    Rowan  Stag   0, 2     Hare  2, 0     "
},
{
  "id": "fig-combined-br",
  "level": "2",
  "url": "sec-msne-and-best-response-functions.html#fig-combined-br",
  "type": "Figure",
  "number": "2.6.4",
  "title": "",
  "body": " Combined Best Response Functions     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
