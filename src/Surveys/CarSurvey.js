import React from "react";
import * as Survey from "survey-react";
import myCss from "survey-react/survey.css";
// import { VelocityComponent } from "velocity-react";

// import SurveyCreator from "./SurveyCreator";
// import logo from "./logo.svg";
// import "./DemoSurvey.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
// import "nouislider/distribute/nouislider.css";
// import "./select2.css";
// import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";
// import "jQuery";
// import SurveyCreator from "./SurveyCreator";
// import logo from "./logo.svg";
import "jquery";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
// import "./select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating";
import "jquery-bar-rating/dist/themes/css-stars.css";
// import "jQuery";
import * as widgets from "surveyjs-widgets";
import $ from "jquery";
// import "icheck";
// import "icheck/skins/square/blue.css";

window["$"] = window["jQuery"] = $;
require("icheck");
const showdown = require("showdown");
Survey.StylesManager.applyTheme("default");

// widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

let makePage = element => {
  return {
    elements: [element]
  };
};

let makePages = elements => {
  return elements.map(element => makePage(element));
};

let allPages = [];

let YesNo = (name, title) => {
  return {
    type: "radiogroup",
    name,
    title,
    colCount: 2,
    choices: ["1| Yes", "2| No"]
  };
};

let YesNoNo = (name, title) => {
  return {
    type: "radiogroup",
    name,
    title,
    colCount: 2,
    choices: ["1| Yes", "2| No", "3| Not sure"]
  };
};

let Choice = (name, title, choices) => {
  return {
    type: "radiogroup",
    name,
    title,
    colCount: 1,
    choices: choices.map((choice, i) => `${i}| ${choice}`)
  };
};

let Choices = (name, title, choices) => {
  return {
    type: "checkbox",
    name,
    title,
    colCount: 1,
    choices: choices.map((choice, i) => `${i}| ${choice}`)
  };
};

allPages.push(
  YesNo(
    "lackconnection",
    `Are you aware that **many**
    modern non-self-driving cars 
    lack direct physical connection 
    between the driver and the engine/brakes/steering 
    -- in other words, that computers are in control? `
  )
);

let barrating1 = {
  type: "barrating",
  name: "barrating1",
  ratingTheme: "css-stars",
  title: "Please rate the movie you've just watched",
  choices: ["1", "2", "3", "4", "5"]
};

let connectGood = {
  type: "radiogroup",
  name: "connectgood",
  title: `How do you feel about the fact 
  that in most modern cars, computers 
  can affect--and in some cases override-- 
  human control of brakes, steering, 
  and other critical functions?`,

  choices: [
    "1| It's a good thing",
    "2| It doesn't bother me",
    "3| I'm not sure",
    "4| It concerns me",
    "5| It worries me"
  ]
};
allPages.push(connectGood);

allPages.push(
  YesNo(
    "installSafety",
    `Do you think car manufacturers should 
offer a “safety switch” so that owners can
 choose whether 
and when to be connected to the Internet?`
  )
);

allPages.push(
  YesNo(
    "announcedcars",
    `Are you aware that the major auto 
companies have announced plans to sell only
 Internet-connected cars starting later this year?`
  )
);
allPages.push(
  Choice(
    "newsJeep",
    `Do you recall a news story from 2015 
in which researchers took remote control
 of an unmodified Jeep Cherokee over the 
 Internet to prove it could be done?`,
    [
      "Yes, I remeber it well",
      "Sounds familiar, but I don't recall the details",
      "No, I don't recall it."
    ]
  )
);

allPages.push(
  YesNo(
    "vulneable",
    `Do you think modern cars are
   vulnerable to similar external control?`
  )
);

allPages.push(
  Choices(
    "skillset",
    `Whom do you think
     has the necessary skills to hack modern 
     cars?  (check all that apply)`,
    [
      "Government-backed groups from the U.S., Russia, China, North Korea, Iran, etc.",
      "Elite hacking organizations behind major recent hacks",
      "Highly-skilled individuals / researchers",
      "High school / college students"
    ]
  )
);

allPages.push(
  YesNo(
    "fleetHack",
    `Have you heard or r
ead a news story using the term 
“fleet-wide hack?”`
  )
);

// allPages = [];

allPages.push(
  Choices(
    "atRisk",
    `Whom do you think
 is at risk if one or more cars were 
 hijacked over the Internet? (Check all that apply)`,
    ["Occupant(s) of hacked cars", "Occupant(s) of other cars", "Pedestrians"]
  )
);

allPages.push(
  Choices(
    "safetyPremium",
    `When buying a new car, 
would you pay a premium for a 
"safety switch" allowing you to 
choose whether/when to connect your 
car to the Internet? If so, how much would you be willing to pay?`,
    [
      "I would not pay because I don't think it's necessary",
      "I'd pay up to 10% of the price of the car",
      "I'd pay, but no more than $1,000",
      "I'd pay, but no more than $100"
    ]
  )
);

allPages.push(
  Choices(
    "safteyAlternative",
    `When buying a new car, 
if a safety switch option cost more than 
you were willing to pay, what would you do?`,
    ["I would buy a different car", "I would do without it"]
  )
);

allPages.push(
  YesNo(
    "swayDecision",
    `When car shopping, would 
the presence of a "safety switch" allowing you to choose whether/when to connect your
car to the Internet sway your decision?`
  )
);

allPages.push(
  YesNo(
    "signPetition",
    `Would you sign a petition
 demanding all cars that are currently
  connected to the internet be disconnected 
  from the internet?`
  )
);
// allPages = [];

allPages.push(
  Choices(
    "newsJeep",
    `Which of the 
following concerns you more about Internet-connected cars?`,
    [
      "Privacy",
      "Safety from hackers",
      "I'm concerned about both",
      "I'm not concerned about either"
    ]
  )
);

allPages.push(YesNo("newsJeep", ``));

allPages.push(YesNo("newsJeep", ``));

allPages.push(YesNo("newsJeep", ``));

let jobpos = {
  type: "radiogroup",
  name: "position",
  title: "Choose job position...",
  isRequired: true,
  colCount: 0,
  choices: [
    "1|Designer",
    "2|Front-end Developer",
    "3|Back-end Developer",
    "4|Database Administrator",
    "5|System Engineer"
  ]
};
allPages.push(jobpos);

let matrix = {
  type: "matrix",
  name: "Quality",
  title:
    "Please indicate if you agree or disagree with the following statements",
  columns: [
    {
      value: 1,
      text: "Strongly Disagree"
    },
    {
      value: 2,
      text: "Disagree"
    },
    {
      value: 3,
      text: "Neutral"
    },
    {
      value: 4,
      text: "Agree"
    },
    {
      value: 5,
      text: "Strongly Agree"
    }
  ],
  rows: [
    {
      value: "affordable",
      text: "Product is affordable"
    },
    {
      value: "does what it claims",
      text: "Product does what it claims"
    },
    {
      value: "better then others",
      text: "Product is better than other products on the market"
    },
    {
      value: "easy to use",
      text: "Product is easy to use"
    }
  ]
};
allPages.push(matrix);
let jobpos1 = { ...jobpos };
jobpos1.name = "altname";

const json1 = {
  // title: "Product Feedback Survey Example",
  // showProgressBar: "top",
  goNextPageAutomatic: true,

  showNavigationButtons: true,
  // showNavigationButtons: true,
  pages: makePages(allPages)
};

let dropdownq = {
  type: "dropdown",
  renderAs: "select2",
  choicesByUrl: {
    url: "https://restcountries.eu/rest/v1/all"
  },
  name: "countries",
  title: "Please select the country you have arrived from:"
};

let radiogroup = {
  type: "radiogroup",
  name: "position",
  title: "Choose job position...",
  isRequired: true,
  colCount: 0,
  choices: [
    "1|Designer",
    "2|Front-end Developer",
    "3|Back-end Developer",
    "4|Database Administrator",
    "5|System Engineer"
  ]
};

let imgpicker = {
  type: "imagepicker",
  name: "choosepicture",
  title: "What animal would you like to see first ?",
  choices: [
    {
      value: "lion",
      imageLink:
        "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
    },
    {
      value: "giraffe",
      imageLink:
        "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
    },
    {
      value: "panda",
      imageLink:
        "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
    },
    {
      value: "camel",
      imageLink:
        "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
    }
  ]
};

let slider = {
  type: "bootstrapslider",
  name: "bootstrapslider"
};

let signaturepad = {
  type: "signaturepad",
  name: "sign",
  title: "Please enter your signature"
};

let sortableList = {
  type: "sortablelist",
  name: "lifepriopity",
  title: "Life Priorities ",
  isRequired: true,
  colCount: 0,
  choices: ["family", "work", "pets", "travels", "games"]
};

let datePicker = {
  name: "date",
  type: "datepicker",
  inputType: "date",
  title: "Your favorite date:",
  dateFormat: "mm/dd/yy",
  isRequired: true
};

let signaturePad = {
  type: "signaturepad",
  width: "500px",
  name: "Signature Pad - you can enter your signature here:"
};

let rating = {
  type: "rating",
  name: "satisfaction",
  title: "How satisfied are you with the Product?",
  mininumRateDescription: "Not Satisfied",
  maximumRateDescription: "Completely satisfied"
};

let rating1 = {
  type: "rating",
  name: "recommend friends",
  visibleIf: "{satisfaction} > 3",
  title:
    "How likely are you to recommend the Product to a friend or co-worker?",
  mininumRateDescription: "Will not recommend",
  maximumRateDescription: "I will recommend"
};

let suggestions = {
  type: "comment",
  name: "suggestions",
  title: "What would make you more satisfied with the Product?"
};

let radiogroup2 = {
  type: "radiogroup",
  name: "price to competitors",
  title: "Compared to our competitors, do you feel the Product is",
  choices: [
    "Less expensive",
    "Priced about the same",
    "More expensive",
    "Not sure"
  ]
};

let radiogroup1 = {
  type: "radiogroup",
  name: "price",
  title: "Do you feel our current price is merited by our product?",
  choices: [
    "correct|Yes, the price is about right",
    "low|No, the price is too low for your product",
    "high|No, the price is too high for your product"
  ]
};

let multipleText = {
  type: "multipletext",
  name: "pricelimit",
  title: "What is the... ",
  items: [
    {
      name: "mostamount",
      title: "Most amount you would every pay for a product like ours"
    },
    {
      name: "leastamount",
      title: "The least amount you would feel comfortable paying"
    }
  ]
};

let email = {
  type: "text",
  name: "email",
  title:
    'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
};

let survey = new Survey.Model(json1);
//Documentation here
// https://surveyjs.io/Examples/Library/?id=survey-customnavigation&platform=Reactjs&theme=default#
survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
});

let bounceIn = null;
let bounceOut = null;
let doAnimation = true;

survey.onCurrentPageChanging.add((sender, options) => {
  if (!bounceOut) return;
  if (!doAnimation) return;
  console.log("bounceOut", bounceIn, bounceOut);
  options.allowChanging = false;
  setTimeout(() => {
    doAnimation = false;
    sender.currentPage = options.newCurrentPage;
    doAnimation = true;
  }, 500);

  bounceOut();
});
survey.onCurrentPageChanged.add(function(sender) {
  if (!bounceIn) return;
  console.log("bounceIn", bounceIn, bounceOut);
  bounceIn(); // animate("slideDown", 500);
});

// survey.onUpdateQuestionCssClasses.add((survey, options) => {
//   var classes = options.cssClasses;
//   console.log("c", classes);
// });
var converter = new showdown.Converter();
survey.onTextMarkdown.add(function(survey, options) {
  //convert the mardown text to html
  var str = converter.makeHtml(options.text);
  //remove root paragraphs <p></p>
  str = str.substring(3);
  str = str.substring(0, str.length - 4);
  //set html
  options.html = str;
});
// survey
//     .onCompleting
//     .add(function (sender, options) {
//         if (!doAnimantion)
//             return;
//         options.allowComplete = false;
//         setTimeout(function () {
//             doAnimantion = false;
//             sender.doComplete();
//             doAnimantion = true;
//         }, 500);
//         animate("slideUp", 500);
//     });
// animate("slideDown", 1000);;

export default props => {
  console.log("bounce", props.bounceIn);
  bounceIn = props.bounceIn;
  bounceOut = props.bounceOut;
  // let [animate, setAnimatation] = React.useState(true)
  // setTimeout( ()=> setAnimatation(!animate,2000))
  return (
    // <VelocityComponent
    // duration={500}
    // animation={animate ? {
    //   width: 500,
    //   opacity: 1,
    // } : {
    //   width: 0,
    //   opacity: 0,
    // }}

    // >
    <Survey.Survey model={survey} css={myCss} />
    // </VelocityComponent>
  );
};
