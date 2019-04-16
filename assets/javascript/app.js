let card = $("#main");
main
// Q set
let Qs = [
  {
    Q: "What Spanish artist said he would eat his wife when she died?", 
    choices: ["Francisco Goya", "Salvador Dali", "Pablo Picasso", "Diego Velazquez"],
    answer: "Salvador Dali"
  },
  {
    Q: "Who painted 'The Scream' (the famous painting of a man screaming)?",
    choices: ["Oskar Kokoschka", "Marc Chagall", "Egon Schiele", "Edvard Munch" ],
    answer: "Edvard Munch"
  },
  {
    Q: "How many paintings did Vincent Van Gogh sell in his lifetime?", 
    choices: ["100", "54", "16", "1" ],
    answer: "1"
  },
  {
    Q: "How long did Leonardo da Vinci spend painting the Mona Lisa's lips?",
    choices: ["8 months", "12 years", "10 weeks", "2 years" ],
    answer: "12 years"
  },
  {
    Q: "Who is famous for painting huge close-ups of flowers?", 
    choices: ["Mary Cassatt", "Georgia O'Keeffe", "Camille Claudel", "Sonia Delauney" ],
    answer: "Georgia O'Keeffe"
  },
  {
    Q:
    "Leonardi Da Vinci invented which one of these items?", 
    choices: ["Kites", "High heels", "Gunpowder", "Wine cork" ],
    answer: "High heels"
  },
  {
    Q: "Which artist is known for splashing paint onto a canvas layed on the floor?",
    choices: ["Jean-Michel Basquiat", "Wassily Kandinsky", "Jackson Pollack", "Marcel Duchamp"],
    answer: "Jackson Pollack"
  },
  {
    Q: "Who painted 'Starry Night?'",
    choices: ["Claude Monet", "Paul Gauguin", "Georges Seurat", "Édouard Manet" ],
    answer: "Claude Monet"
  },
  {
    Q: "Pablo Picasso’s real name is actually how many words long?",
    choices: ["5", "12", "23", "19"],
    answer: "23"
  },
  {
    Q: "In which century did Rembrandt live?",
    choices: ["15th", "16th", "17th", "18th" ],
    answer: "16th"
  },
  {
    Q:  "Which famous female artist was known for having a unibrow?", 
    choices: ["Georia O'Keeffe", "Artemisia Gentileschi", "Frida Kahlo", "Leonora Carrington" ],
    answer: "Frida Kahlo",
  },
  {
    Q: "Which artist predicted that everyone would be famous for 15 minutes?", 
    choices: ["Andy Warhol", "Tracy Enim", "Cornelia Parker", "Claude Monet" ],
    answer: "Andy Warhol"
  }

];

let timer;

let game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  begin: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );


    $("#begin").remove();

    for (let i = 0; i < Qs.length; i++) {
      card.append("<h2>" + Qs[i].Q + "</h2>");
      for (let x = 0; x < Qs[i].choices.length; x++) {
        card.append("<input type='radio' name='Q-" + i +
          "' value='" + Qs[i].choices[x] + "''>" + Qs[i].choices[x]);
      }
    }

    card.append("<button id='done'>Finished!</button>");
  },

  done: function() {
    let inputs = card.children("input:checked");
    for (let i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === Qs[i].answer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();

    card.html("<h2>How Did You Do?</h2>");
    card.append("<h3>Correct choices: " + this.correct + "</h3>");
    card.append("<h3>Incorrect choices: " + this.incorrect + "</h3>");
  }
};

$(document).on("click", "#begin", function() {
  game.begin();
});

$(document).on("click", "#done", function() {
  game.done();
});

