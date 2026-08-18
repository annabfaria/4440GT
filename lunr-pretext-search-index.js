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
