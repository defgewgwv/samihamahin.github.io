/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

var modalInfo = {
  1: {
    title: "Clustering for scRNA-seq",
    info:
      "Explaining tutorial in Scanpy (https://scanpy-tutorials.readthedocs.io/en/latest/pbmc3k.html) of the preprocessing and clustering of 3k PBMCs from the 10x genomics database. Goes into depth of definitions and important terms and additional analysis not found on the tutorial about single cell RNA analysis and clustering.",
    languages: "Written in Python using the libraries Scanpy and Matplotlib",
    link: "",
    github:
      "https://github.com/samihamahin/clustering_scanpy/blob/main/Scanpy_clustering%20%282%29.ipynb"
  },
  2: {
    title:
      "Identification and Classifcation of Intrisically Disordered Regions in Proteins using Neural Network",
    info:
      "We first evaluated existing predictors for disordered regions in proteins and found many inaccessible and hard to work with. We built a more accurate and more accessible predictor for instrinsically disordered regions in proteins. We built features that evaluated composition(i.e. distribution of individual amino acids and amino acid repeats)and physiochemical properties (i.e. hydrophobicity, charge properties, etc.) of the protein. ",
    languages: "Written in Python using the library Keras",
    github: "https://github.com/Discovery-IDRs/predIDR"
  },
  3: {
    title: "Gitlet",
    info:
      "Built a version-control system, Git, to keep track of changing of files. I handled complex functionality such as saving contents of entire directories of files, restoring version of files, viewing the history of backups, maintaining related sequences of commits, and merging changes made in one branch into another.",
    languages: "Written in Java",
    link: "#",
    github:
      "https://gitfront.io/r/samihamahin/1bdee205a31704b157365e5a20402f5e303fffe5/61Brepo/tree/proj3/"
  },
  4: {
    title:
      "Classification of Hollywood Movies using K-Nearest Neighbor Algorithm",
    info:
      "First performed exploratory data analysis on a dataset that contained the genre and the words of 500 movies. And then built a classifier based on the counts of specific words to predict the genre of a movie using K-Nearest Neighbor Algorithm. My classifier had an accuracy of 82%. ",
    languages: "Written in Python using the libraries MatplotLib and NumPy",
    github:
      "https://github.com/samihamahin/classification_movies/blob/main/project3.ipynb"
  },
  5: {
    title: "World Progresss",
    info:
      "Used data from Gapminder.com in order to build data visualizations that described population, fertility, child mortality, and poverty. Data exploration and hypothesis testing about global development challenges. ",
    languages: "Written in Python using the libraries Matplotlib and NumPy",
    github:
      "https://github.com/samihamahin/worldprogress/blob/main/project1.ipynb"
  },
  6: {
    title: "Intepreter for Scheme",
    info:
      "Developed an interpreter for a subset of the Scheme language. This interpreter had functionality such as a read-eval-print loop that read, evaluated, and printed the results of the command in Scheme along with user-defined procedures.",
    languages: "Written in Python and Scheme ",
    github:
      "https://gitfront.io/r/samihamahin/9a2480c2f962ddba3e15bf02ca6e2b07697d5092/cs61a/blob/projects/scheme/scheme.py"
  },
  7: {
    title: "Enigma",
    info:
      "Replicated encryption machine used in WWII by building a simulator for a generalized version of this machine. My program takes descriptions of possible initial configurations of the machine and messages to encode or decode the given message. The simulation is done by using object oriented programming and having classes of different machinery parts such as rotors and reflectors.",
    languages: "Written in Java",
    github:
      "https://gitfront.io/r/samihamahin/1bdee205a31704b157365e5a20402f5e303fffe5/61Brepo/tree/proj1/enigma/"
  },
  8: {
    title: "Ants vs. Bees",
    info:
      "Developed a tower defense games called Ants vs. Bees inspired by PopCap Games, Plants Vs. Zombies. Combined functional and object oriented programming to deal with representing different types of Bees and Ants along with the game state and which place the bee/ant occupies. ",
    languages: "Written in Python",
    github:
      "https://gitfront.io/r/samihamahin/9a2480c2f962ddba3e15bf02ca6e2b07697d5092/cs61a/tree/projects/ants/"
  },
  9: {
    title: "Lines of Action",
    info:
      "Implemented chess game, Lines fo Action, in Java with a GUI and MachinePlayer. MachinePlayer is a computer player that uses heuristics in order to predict the best move that it can possibly make and makes that move and plays against you. ",
    languages: "Written in Java",
    github:
      "https://gitfront.io/r/samihamahin/1bdee205a31704b157365e5a20402f5e303fffe5/61Brepo/tree/proj2/loa/"
  }
};

// Get the modal
var modal = document.getElementById("preview");

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement;
    openModal(project);
  });
}

function openModal(project) {
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("languages").innerHTML = modalInfo[id].languages;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function() {
    window.open(modalInfo[id].link, "_blank");
  };
  document.getElementById("github").onclick = function() {
    window.open(modalInfo[id].github, "_blank");
  };
}

// close the modal
span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
