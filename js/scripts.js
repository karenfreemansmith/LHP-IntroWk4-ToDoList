//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
//business logic (or list of goals as objects)
function Item(description, status) {
  this.description=description;
  this.status=status;
}

var Items = [
  {
    "course":"Intro to Programming",
    "level": 1,
    "topics":["Getting Started at Epicodus",
              "Getting Started with Programming",
              "Git, HTML, and CSS",
              "JavaScript and jQuery",
              "Arrays & Looping",
              "Object-oriented JavaScript",
              "Team Week"]
  },
  {
    "course":"JavaScript",
    "level":2.5,
    "topics":["Getting Started with JavaScript",
              "Modern JS apps",
              "Angular JS",
              "Ember JS",
              "Ember Extended",
              "Team Week"]
  },
  {
    "course":"Java",
    "level": 2,
    "topics":["Getting Started with Java",
              "Java Basics",
              "Java Applications",
              "Java Branching & Looping",
              "How the Web Works",
              "Spark",
              "Behavior-driven Development(theory)",
              "Behavior-driven Development with Java",
              "Object-oriented Java",
              "Java Database Basics",
              "Advanced Dababases",
              "Team Week"]
  },
  {
    "course":"Android",
    "level": 3,
    "topics":["Getting Started with Android",
              "Introduction to Android",
              "User Interface Basics",
              "Web Service Backends and Fragments",
              "Data Persistence",
              "Gestures, Animations & Flexible UIs",
              "Personal Projects"]
  },
  {
    "course":"PHP",
    "level": 2,
    "topics":["Getting Started with PHP",
              "PHP Basics",
              "PHP Branching & Looping",
              "Object-oriented PHP prep",
              "Object-oriented PHP",
              "Behavior-driven Development with PHP",
              "Database Basics with PHP",
              "Databases Extended",
              "Team Week"]
  },
  {
    "course":"Drupal",
    "level": 3,
    "topics":["Site Building with the Drupal Interface",
              "Module Development",
              "Extending Drupal",
              "Advanced Drupal",
              "Personal Projects"]
  },
  {
    "course":"C#",
    "level": 2,
    "topics":["Getting Started with C#",
              "C# Basics",
              "Writing C# Programs",
              "C# Branching & Looping",
              "Object-oriented C#",
              "Web Apps with Nancy",
              "Behavior-driven Development with C#",
              "C# Database Basics",
              "Advanced Databases",
              "Team Week"]
  },
  {
    "course":".NET",
    "level": 3,
    "topics":["ASP.NET MVC",
              "Authentication and Testing",
              "Database Testing and AJAX",
              "APIs",
              "Personal Projects"]
  },
  {
    "course":"CSS",
    "level": 2,
    "topics":["Getting Started with CSS",
              "Moving Forward with CSS",
              "Responsive Design",
              "SASS",
              "Beyond the Basics",
              "Team Week"]
  },
  {
    "course":"Design",
    "level": 3,
    "topics":["Getting Started with Design",
              "Design Foundations",
              "User Interface (UI) & Atomic Design",
              "User Experience (UX) & the Design Process",
              "Portfolios and Case Studies",
              "Personal Project"]
  },
  {
    "course":"Ruby",
    "level": 2,
    "topics":["Getting Started with Ruby",
              "Ruby Basics",
              "Ruby Branching & Looping",
              "Sinatra",
              "Behavior-driven Development with Ruby",
              "Object-oriented Ruby",
              "Ruby Database Basics",
              "Databases with Active Record",
              "Team Week"]
  },
  {
    "course":"Rails",
    "level": 3,
    "topics":["Getting Started with Rails",
              "Ruby on Rails Basics",
              "Rails Authentication",
              "AJAX",
              "APIs",
              "Personal Project"]
  },
  {
    "course":"Internship & Job Placement",
    "level": 4,
    "topics":["Resume & LinkedIn",
              "Cover Letter",
              "Sprucing up GitHub",
              "Homepage/Portfolio Site",
              "Non-technical Interview",
              "Technical Interviews",
              "Interview Research",
              "Interview Tips",
              "Negotiating a Salary"]
  }
];


//User interface logic...display to-do list
var listHTML="";
$("#goals").children().remove();
Items.forEach(function(item) {
  listHTML+="<li>" + item.course;
  if(item.topics!==undefined) {
    listHTML+="<ul>";
    item.topics.forEach(function(topic) {
      listHTML+="<li>" + topic + "</li>";
    });
  listHTML+="</ul></li>";
  } else {
    listHTML+="</li>";
  }
});
  $("#goals").append(listHTML);
