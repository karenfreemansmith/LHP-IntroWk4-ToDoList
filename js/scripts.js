//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
//business logic (or list of goals as objects)
var Items = [
  {
    "goal":"Prepare for Epicodus",
    "steps":[
      "Complete online Intro coursework",
      "Start Java coursework",
      "Start Ruby coursework",
      "Start PHP coursework",
      "Start C# coursework",
      "Start JavaScript coursework",
      "Complete CSS coursework",
      "Complete Design coursework"]
  },
  {
    "goal":"Get 20,000 points on TeamTreeHouse",
    "steps": [
      "answer daily question in community",
      "complete daily badge for lowest ranked subject",
      "complete recommended steps",
      "complete daily badge for most interesting subject"
    ]
  },
  {
    "goal":"Complete FreeCodeCamp Certification",
    "steps": [
      "Front-End Developer Certification",
      "Data Visualization Certification",
      "Back-End Developer Certification",
      "Full-Stack Web Developer Certificaiton"
    ]
  },
  {
    "goal":"Change Careers from Trucking to Web Development",
    "steps": [
      "Call leasing to find out options for getting out of truck",
      "Recruit driver as needed",
      "Get load to Springfield (or where ever driver is)",
      "Clean out truck",
      "Bus to Portland",
      "Catch up on sleep and detox from OTR diet",
      "Review resume",
      "Update portfolio",
      "Research local companies and job openings"
    ]
  },
  {
    "goal":"Restore health and fitness",
    "steps": [
      "Eliminate toxins from diet",
      "Replace junk with healthy food items, maintain 2400-3000 calories/day",
      "Regulate sleep to 5-7 hours every night",
      "Create and follow stretching routine (Tai Chi/Yoga/Qui Jong)",
      "Create and follow strength conditioning routine (crunches, squats, pushups)",
      "Start walking and increase endurance by keeping within target heart range (125pbm)"
    ]
  },
  {
    "goal":"Organize Eugene household",
    "steps": [
      "Remove standing trash",
      "Do laundry and donate old clothing",
      "Find place to store clean linens",
      "Eliminate any remaining clutter and sweep/vacuum floors",
      "Organize books",
      "Organize CDs & DVDs",
      "Organize and donate/replace kitchenware as needed",
      "Sort storage boxes and eliminate old unwanteds items"
    ]
  },
  {
    "goal":"Create and adjust to new routines",
    "steps": [
      "Find workspace in Eugene house and organize work items",
      "Work with Johnathan on regular cleaning routines (cat box, dishes, etc)",
      "Find workspace in Portland house and organize work items",
      "Find clothing & personal item space in Portland and organize personal effects",
      "Setup regular routines for spending family time together",
      "Setup regular routines for work and study time",
      "Reinforce new diet and exercise habits in new location"
    ]
  }
];


//User interface logic...display to-do list
var listHTML="";
$("#goals").children().remove();
Items.forEach(function(item) {
  listHTML+="<li>" + item.goal;
  if(item.steps!==undefined) {
    listHTML+="<ul>";
    item.steps.forEach(function(step) {
      listHTML+="<li>" + step + "</li>";
    });
  listHTML+="</ul></li>";
  } else {
    listHTML+="</li>";
  }
});
  $("#goals").append(listHTML);
