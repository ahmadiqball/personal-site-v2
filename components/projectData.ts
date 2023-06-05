interface Project {
  id: string;
  name: string;
  type: string;
  date: string;
  deploy: string | null;
  repo: string | null;
  image: string;
  desc: string;
  stack: string[];
  features: string[];
}

class Project {
  constructor(
    id: string,
    name: string,
    type: string,
    date: string,
    deploy: string | null,
    repo: string | null,
    image: string,
    desc: string,
    stack: string[],
    features: string[]
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.date = date;
    this.deploy = deploy;
    this.repo = repo;
    this.image = image;
    this.desc = desc;
    this.stack = stack;
    this.features = features;
  }
}

const projectData = [
  new Project(
    "00001",
    "Landing Page #1",
    "Front End",
    "January 2021",
    " ",
    "https://ahmadiqball/td-landing-page",
    "landing-page.png",
    "This landing page is one of first website in my first time learning web development. Showing a landing page that expalin a product of tider like app but for a dog. I created this purely with html, css, and bootstrap. This website is responsive across all platform.",
    ["html", "css", "bootstrap"],
    ["Responsive landing page.", "Product detail and carousel of user review."]
  ),
  new Project(
    "00002",
    "Drum Kit Game",
    "Front End",
    "January 2021",
    "https://ahmadiqball.github.io/drum-kit",
    "https://ahmadiqball/drum-kit",
    "drum-kit.png",
    "This website is my first time trying out to use javascript in my website. In this website, you could play a set of drum instrument. With clicking the corresponding icon, you will play a sound of certain drum instruments.",
    ["htmls", "css", "javascript", "jquery"],
    ["Let you playing sound of drums instrument"]
  ),
  new Project(
    "00003",
    "Simon Game",
    "Front End",
    "January 2021",
    "https://ahmadiqball.github.io/simon-game",
    "https://ahmadiqball/simon-game",
    "simon-game.png",
    "Simon game is actually an electronic game created in 1978. This time, i recreate that game in web platform. The gameplay of this game is pretty simple, you will be given a sequence of color that consist four color. The length of sequence is equal to the level you're at. At every level you will be given a new color, and send back the sequence of color that given from previous level to this level. You will sending back the sequence by clicking the corresponding button in order.",
    ["htmls", "css", "javascript", "jquery"],
    [""]
  ),
  new Project(
    "00004",
    "Number's Image Classification",
    "Data Science",
    "Maret 2022",
    null,
    "https://drive.google.com/drive/folders/1s36vJQo82LibgnYi44SbwCl2iMM6J1wl?usp=sharing",
    "mnist-image-classification.png",
    "This projects is part of my college projects while taking a Deep Learning course. In this project i create a deep learning model that able to clasify and recognize a number in image. Here i use a dataset from MNIST to be used as training and test data. The model itself created with a deep learning algorithm that build from scratch without any deep learning library. ",
    ["python", "sklearn", "pandas", "matplotlib"],
    []
  ),
  new Project(
    "00005",
    "Stock Prediction CNN",
    "Data Science",
    "April 2022",
    null,
    "https://drive.google.com/drive/folders/1o3UgNiv01Cq_AjtsitV_964nQhbB0aIc?usp=sharing",
    "stock-prediction.jpg",
    "This projects is part of my college projects while taking a Deep Learning course. In this project i create a neural network model that able to predict stocks. The NN model is build using a CNN architecture, it's also build without using deep learning library. So, it needs to derive the mathematical formula and turn it into deep learning algorithm. The features to predict the stock is using a 13 parameters that derived from open, close, and volume value of stock in each day.",
    ["python", "sklearn", "pandas", "matplotlib"],
    []
  ),
  new Project(
    "00006",
    "Expense App",
    "Front End",
    "June 2022",
    "https://ahmadiqball.github.io/expense-app",
    "https://ahmadiqball/expense-app",
    "expense-app.png",
    "This app could be used to track your expenses. You could create, read, update, and delete the expenses data. It also provide a visualization of your total expense ratio of each month along the year. You could also filter the shown data by year.",
    ["reactjs", "css", "javascript"],
    [
      "CRUD of expenses data.",
      "Display total expense along by month in a year using chart.",
      "Filter displayed expenses data by year.",
    ]
  ),
  new Project(
    "00007",
    "Food Recipe App",
    "Front End",
    "June 2022",
    "https://ahmadiqball.github.io/vue-foodpage",
    "https://ahmadiqball/vue-foodpage",
    "food-recipe-app.png",
    "If you don\'t have an idea what to cook, then this website would answer that. Here you can find various food recipe with many kind of food. You could find the recipe by navigating to the food categorization, so it\'s easier to find type of menu that you desire. It also provide a vide that show how to cook the menu, so it would be easier for you to create the menu.",
    ["vuejs", "css", "javascript"],
    [
      "Make an API call to food categories list that then could be clicked to make another API call to get food data within the categories.",
      "Categorized every food recipe",
      "Display various page using vue router.",
    ]
  ),
  new Project(
    "00008",
    "Food Order App",
    "Front End",
    "July 2022",
    "https://ahmadiqball.github.io/food-order-app",
    "https://ahmadiqball/food-order-app",
    "food-order.png",
    "In this app user could make order of food. The menu is displayed and user could add it to cart. The cart functionality is utilizing context API in react. The ordered food will be send to a backend app, which in this case is using Firebase.",
    ["reactjs", "css", "javascript", "reduxjs", "firebase"],
    [
      "Display meal data from backend (Firebase).",
      "Store the ordered meal in a cart using Context API.",
      "Send the ordered meal to backend (firebase).",
    ]
  ),
  new Project(
    "00009",
    "Personal Site 1.0",
    "Front End",
    "August 2022",
    "https://v1.ahmadiqbal.site",
    "https://github.com/ahmadiqball/personal-site-v1",
    "personal-site-v1.png",
    "This my first personal website that i build and deploy. This website is a single page application that i build using reactjs and bootstrap. I developed this right after i learn about react. This website is responsive to all paltform.",
    ["reactjs", "css", "javascript", "bootstrap"],
    [
      "Responsive in all devices",
      "Provide contact me using EmailJs",
    ]
  ),
  new Project(
    "00010",
    "URL Shortener App",
    "Front End",
    "August 2022",
    "https://ahmadiqball.github.io/url-shortener-app",
    "https://ahmadiqball/url-shortener-app",
    "url-shortener.png",
    "Build a website that provide URL Shortener service, it\'s utilize and API from shrtco.de for the ability to shorten url. This website is fully responsive in all platform that build using ReactJs and basic css. The UI itself is coming from challenge in frontendmentor.io.",
    ["reactjs", "css", "javascript"],
    [
      "Shortening an URL using API from shrtco.de",
      "Store the URL and its shorter version in session storage so it wouldn't be lose from refreshing the page.",
      "Responsive to desktop, tablet, and mobile size.",
    ]
  ),
  new Project(
    "00011",
    "Pokemon API Site",
    "Front End",
    "September 2022",
    "https://ahmadiqball.github.io/pokemon-site",
    "https://ahmadiqball/pokemon-site",
    "pokemon-site.png",
    "Build a responsive web that shows information about various pokemon from pokedex API. It's build with ReactJs and using some technologies of react including React Portal, React Router, and Redux with ReduxJs Toolkit.",
    ["reactjs", "css", "javascript", "bootstrap", "reduxjs"],
    [
      "Display a list of pokemon data that acquired from Pokemon API.",
      "Search and display certain pokemon by inputted name.",
      "Filter and display certain pokemon by its type.",
      "Display detailed pokemon data through a modal.",
      "Catch a pokemon and store it using Redux.",
      "Responsive page in desktop, table, and phone size.",
      "Display custom 404 page from entering unknown route.",
    ]
  ),
  new Project(
    "00012",
    "SIMA JUARA",
    "Front End",
    "January 2023",
    "https://sijuara.jabarprov.go.id/",
    null,
    "sima-juara.png",
    "Build a job portal sites for west java government using Next.Js and TailwindCSS. I build the user profile page, company page, admin page, and some of call center page that includes chat platform. Some features that i develop includes user authentication, integration with backend using Next API, CRUD for job and user data, create PDF doc using JsPDF.",
    [
      "nextjs",
      "tailwind",
      "javascript",
      "nodejs",
      "reduxjs",
      "directus",
      "nextauth",
      "jwt",
    ],
    ["Connecting company and jobseeker through a job portal.", "Company app that includes ability for company to create job post and interact with jobseeker.", "Admin app that able to control and oversee user (company and jobseeker)."]
  ),
  new Project(
    "00013",
    "Movie App (Reproduce Netflix)",
    "Front End",
    "February 2022",
    "https://movieapp14.vercel.app/",
    "https://ahmadiqball/netflix-clone",
    "netflix-clone.png",
    "Build a movie web app by reproducing Netflix using Next.Js 13, Typescript, Tailwind CSS, and Firebase. Its features including authentication (login and signup), save user personal data (preference and membership), and custom movie player.",
    ["nextjs", "tailwind", "firebase", "recoiljs"],
    [
      "Authentication (sign up and login) to access page content",
      "Display movie content based on category",
      "User can store their personal movie list",
      "User subscription and user able to change theri subscription",
    ]
  ),
];

export { projectData, Project };
