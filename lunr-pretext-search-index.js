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
