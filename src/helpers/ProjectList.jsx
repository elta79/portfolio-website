import Bird from '/images/bird.jpeg'
import PregCalc from '/images/pregCalc.png'
import FBCWeb from '/images/FBCWeb.png'
import Chores from '/images/chores.png'
import Placenta from '/images/placenta.png'
import Portfolio from'/images/portfolio.png'
import PernToDo from '/images/pernTodo.png'
import Piano from '/images/piano.png'
import Memory from '/images/memory.png'

export const ProjectList = [
    {
        key: 1,
        name: 'Placenta Website',
        image: Placenta,
        skills: 'React, Javascript, HTML, CSS, Vite, EmailJS, Google reCAPTCHA v2, Netlify',
        video: 'https://youtu.be/qec_WaqJWXo',
        notes: {
            objective:'Build a static business website with a contact form. Mobile friendly a must.', 
            challenges:'I encountered an issue when setting state for different input types on the form. The difficulty was in saving the multi-selection form input values to be returned. I tried to condense my code by using a single onChange event, but later reverted to multiple onChange events and the problem was solved.',
            learned:'New things I learned through building this project are React concepts useState(updates DOM when state changes) and useRef(does not update DOM when state changes), using multi-selection form inputs, and working with EmailJS & reCaptcha v2. '
        },
        gitLink: 'https://github.com/elta79/placenta-website',
        webLink: 'https://naplesplacenta.com'
    },
    {
        key: 2,
        name: 'Portfolio Website',
        image: Portfolio,
        skills: 'React, JavaScript, HTML, CSS, Adobe Illustrator, Figma, Netlify',
        video: 'placeholder',
        notes: {
            objective:'Display my front-end skills in a simple and beautiful static website.', 
            challenges:'The biggest frustration for this site was deciding when to use grid vs flex. Optimizing the bird animation for mobile was tedious but worth it!',
            learned:'Birds make a beautiful color pallette! I learned more about React-Router (enables client-side routing), React-player (component for playing URLs on the web page) and practiced using props. The project page layout was designed in Figma and the logo was designed in Adobe Illustrator.'
        },
        gitLink: 'https://github.com/elta79/estimatedDueDateCalculator_JavaScript',
        webLink: 'https://fantastic-lollipop-308cd7.netlify.app'
    },
    {
        key: 3,
        name: 'Pregnancy Calculator',
        image: PregCalc,
        skills: 'JavaScript, HTML, CSS, Netlify',
        video: 'https://youtube.com/shorts/Ejk2FZs9Fic',
        notes: {
            objective:'Calculate an estimated due date based on the users choice of calculation method, and return the number of weeks pregnant.', 
            challenges:'I struggled to solve the JavaScript "one day" discrepancy when using JavaScript Date objects. I feel this code could be condensed even further by moving the innerHTML properties outside of the if-else statement, but further exploration is needed to make it work. ',
            learned:'Calculations with dates is easier using Python vs JavaScript, mostly because of Pythons dayOfYear function.  In JavaScript, I had to convert all dates to milliseconds (epoch time) and maneuver through timezones to get a correct date result. '
        },
        gitLink: 'https://github.com/elta79/estimatedDueDateCalculator_JavaScript',
        webLink: 'https://resonant-zabaione-1c366a.netlify.app'
    },
    {
        key: 4,
        name: 'Memory Game',
        image: Memory,
        skills: 'JavaScript, React, CSS, HTML, Vite, Netlify',
        video: '',
        notes: {
            objective:'Create a memory game that gets random pictures from the Cat API.', 
            challenges:'After deployment, the page was rendering 20 cards instead of 16 cards. This caused my winner modal to pop up before all cards were flipped. My environment variables weren’t set up correctly in Netlify. So, I added my API key to Netlify environment variables and now it works like a charm.',
            learned:'I can use the Fisher-Yates(Knuth) shuffle algorithm to efficiently shuffle my cards.'
        },
        gitLink: 'https://github.com/elta79/cat-api-memory-game',
        webLink: 'https://cats-memory-game.netlify.app/'
    },    
    {
        key: 5,
        name: 'Chores App',
        image: Chores,
        skills: 'JavaScript, HTML, CSS, Firebase, Netlify',
        video: 'https://youtube.com/shorts/3RQE3GYX8_I?feature=share',
        notes: {
            objective:'Deploy app that make a list of chores held in a database. Clicking the chore deletes the chore from the database and from the app.', 
            challenges:'One challenge I experienced was that my data doubled when rendering to the DOM. I learned that could not just append the new chore to the end of the list and have it appear on screen. Once the new chore was appended, the database changes trigger the list to be rendered again. To prevent duplication, I had to clear the DOM before appending the new chore to the list.',
            learned:'I learned a lot about working with a realtime database, such as Firebases onValue() function which listens for data changes at a specific location, and returns a snapshot of the data object.  '
        },
        gitLink: 'https://github.com/elta79/estimatedDueDateCalculator_JavaScript',
        webLink: 'https://warm-longma-9991e5.netlify.app'
    },    
    {
        key: 6,
        name: 'PERN To Do App',
        image: PernToDo,
        skills: 'JavaScript, React, PostgreSQL, Express, NodeJS, HTML, CSS, Vite, Netlify',
        video: 'https://youtu.be/f8Q2kbpF0nE',
        notes: {
            objective:'Create a fullstack to do app in which the user can edit or delete items. The user can add tasks and edit/delete them by clicking the button.', 
            challenges:'One of my biggest challenges was figuring out how to implement .gitignore for my database info. Seems like an easy task, but Vite is has specific naming requirements.',
            learned:'I learned how to create a simple database using SQL commands and I learned how to connect the database to the front end using Express and CORS.'
        },
        gitLink: 'https://github.com/elta79/pern_todo.git',
        webLink: 'https://youtu.be/f8Q2kbpF0nE'
    },
    {
        key: 7,
        name: 'Piano Lessons Website',
        image: Piano,
        skills: 'JavaScript, React, TailwindCSS, HTML, Vite, Figma, Netlify',
        video: 'https://youtube.com/shorts/v6UJsjBfX6U',
        notes: {
            objective:'Client needed a basic one page site for customer outreach. They wanted a description of services and a contact form. I wanted to practice using TailwindCSS.', 
            challenges:'I approached this project with a mobile-first design. I did struggle with some styling that looked different in my IDE vs the real product and was making my page "floaty" when touched, but it ended up being a simple padding fix',
            learned:'I found some VS Code extensions; Headwind (class sorter) and Tailwind CSS IntelliSense (offers suggestions)that really made Tailwind code visualization easier when the file seemed to be getting bloated.'
        },
        gitLink: 'https://github.com/elta79/piano-website',
        webLink: 'https://lessonsbysparrow.netlify.app'
    },
   
    {
        key:8,
        name: 'Family Birth Center Website',
        image: FBCWeb,
        skills: 'JavaScript, HTML, CSS, Bootstrap',
        video: 'https://youtu.be/GsLPSqcYsno',
        notes: {
            objective:'Create a website (using Bootstrap) to serve as a prototype for a medical facility website.', 
            challenges:'I learned how to incorporate carousels, parallax, and accordion features, but I really struggled to get the styling right. And the code for this site got a little overwhelming and repetitive.',
            learned:'I wrote the code for this site over a year ago, and looking back I realize that there is a lot of room for refactoring to implement reuseable components'
        },
        gitLink: 'https://github.com/elta79/FBCWebsitePrototype',
        webLink: 'https://youtu.be/GsLPSqcYsno'
    },
    // {
    //     key:9,
    //     name: 'Color Scheme Generator',
    //     image: ,
    //     skills: 'JavaScript, HTML, CSS, Bootstrap',
    //     video: 'https://youtu.be/GsLPSqcYsno',
    //     notes: {
    //         objective:'Create a website (using Bootstrap) to serve as a prototype for a medical facility website.', 
    //         challenges:'I learned how to incorporate carousels, parallax, and accordion features, but I really struggled to get the styling right. And the code for this site got a little overwhelming and repetitive.',
    //         learned:'I wrote the code for this site over a year ago, and looking back I realize that there is a lot of room for refactoring to implement reuseable components'
    //     },
    //     gitLink: 'https://github.com/elta79/FBCWebsitePrototype',
    //     webLink: 'https://youtu.be/GsLPSqcYsno'
    // },

]