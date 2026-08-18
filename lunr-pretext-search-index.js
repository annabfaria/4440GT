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
  "title": "Game Theory Concepts and Terminology I",
  "body": " Game Theory Concepts and Terminology I   What is a Game?  In Game Theory, a game is any formal situation involving two or more decision-makers where the outcome depends on the actions of everyone involved.  To be considered a fully defined game, a scenario must contain four essential elements:   Players: The decision-makers (individuals, firms, countries).  Strategies: The complete plans of action available to each player. We also refer to this as a strategy set or space ( ).  Payoffs: The rewards or utility each player receives for every possible combination of strategies.  Information: What players know about the game's state and past actions when making a choice.   A key assumption in GT is that all players are rational, i.e., each player chooses the action that gives them the best possible outcome based on a particular goal. This goal is usually, but not always, to maximize expected utility, profits or some other numerical payoff.  We'll use a famous game, the Prisoner's Dilemma (PD), to introduce several GT concepts and terminologies.   Rowan and Colm, two Irish bandits on the loose, are finally captured by police. The police take Rowan and Colm into separate rooms and begin their interrogation. They want to extract a confession from the bandits, since their evidence without a confession is rather thin. A detective tells Rowan that if she testifies against Colm (and Colm stays silent), she goes free, with Colm taking the full blame and facing ten years in prison. If she and Colm both testify, they get a reduced sentence of five years each. If she stays silent, but Colm decides to testify, she is the one locked up for ten years, while Colm walks free. If they both stay silent, however, the police only have enough evidence to convict them for minor charges and they would each get one year in prison. The detective in the other room gives Colm the same deal. The bandits are unable to communicate or know what the other will do, so what should Rowan and Colm do?    The Prisoner's Dilemma    You'll see the PD repeatedly throughout the semester in different forms. It turns out the PD is a \"silly\" example of a very serious problem all societies face. For now, let's learn to \"talk GT\" through this example.    What Type of Game Is the Prisoner's Dilemma?  There are two general types of games in GT:   Simultaneous Games: Involve players making decisions at the same time.  Sequential Games: Games in which players take turns acting.   The Prisoner's Dilemma is an example of a simultaneous game: Rowan and Colm decide their actions at the same time.    Do They Get to Go Again?  The frequency in which players play a game will determine their optimal strategies.   One-Shot Games: Played once, no concern for reputation, no need to account for differences in patience levels and time horizons.  Repeated Games: Involve playing the same game multiple times. Can be finite or infinite.   In our PD example, Rowan and Colm get one shot to try and save themselves from a lengthy prison sentence.    What Are They Playing For?  In GT, players have goals to optimize payoffs, which are the actual or expected returns for each possible outcome of the game.   Zero-Sum Games: What you gain, I lose (competition games).  Constant-Sum Games: A game in which the sum of all players' payoffs is a constant, the same for all their strategy combinations.  Non-Zero-Sum Games: The sum of the payoffs is not constant.   The goal of either Rowan or Colm isn't to \"win,\" but to minimize prison time for themselves. The Prisoner's Dilemma is an example of a non-zero-sum game.    Information Distribution and Availability  How much information a player has and whether the other players have similar information matters a lot in solving games. We distinguish between completeness and perfection of information:   Complete Information: All players know the rules, the players' preferences over outcomes, and beliefs about chance moves.  Incomplete Information: Involve a Nature player (randomness) or players who do not know about the actions of other players. This leads to asymmetric information issues.  Perfect Information: Players know everything they might wish to know about what has happened in the game so far when they make a move.  Imperfect Information: Players do not observe all prior actions when making choices.   The Prisoner's Dilemma has complete information, since both Rowan and Colm know the entire structure of the game (theirs and the other's possible actions and payoffs). It also has imperfect information, since they are in separate interrogation rooms and make their choices simultaneously.   "
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
