/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Haziq Aqeel",
  title: "Hi all, I'm Haziq",
  subTitle: emoji(`
    🚀 Full Stack Software Developer with extensive experience in designing and developing robust Web and Mobile applications using modern technologies. Proficient in JavaScript, TypeScript, Ruby, and Python, I specialize in building scalable solutions with a focus on performance and clean architecture.
    🔍 I’m passionate about leveraging technology to solve real-world problems and thrive in fast-paced, collaborative environments where innovation meets impact.
  `),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/beinghaziq",
  linkedin: "https://www.linkedin.com/in/beinghaziq/",
  gmail: "beinghaziq@gmail.com",
  facebook: "https://www.facebook.com/beinghaziq",
  instagram: "https://www.instagram.com/beinghaziq",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop responsive and highly interactive web and mobile user interfaces using React.js, React Native, and TypeScript"
    ),
    emoji("⚡ Build scalable backend APIs with Node.js, Ruby on Rails, and FastAPI"),
    emoji(
      "⚡ Design and implement modern Progressive Web Applications (PWA) with SPA architecture"
    ),
    emoji(
      "⚡ Integrate LLM-powered features using LangChain and OpenAI for smart user experiences"
    ),
    emoji("⚡ Connect and manage cloud services including AWS, GCP, Heroku, and serverless architecture"),
    emoji(
      "⚡ Handle database modeling and optimization with PostgreSQL, MySQL, MariaDB, and DynamoDB"
    ),
    emoji("⚡ Set up containerized applications and CI/CD pipelines using Docker and modern DevOps workflows"),
    emoji("⚡ Seamlessly integrate third-party services and APIs such as Zoom, Stripe, Twilio, and more"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ruby-on-rails",
      fontAwesomeClassname: "fab fa-ruby"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fab fa-fastapi"
    },
    {
      skillName: "no-sql-database",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "heroku",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PUCIT",
      logo: require("./assets/images/pucitLogo.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "October 2014 - August 2018",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Devops",
      progressPercentage: "60%"
    },
    {
      Stack: "AI/LLM Integrations",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "POLN",
      companylogo: require("./assets/images/polnLogo.png"),
      date: "Oct 2024 – Present",
      desc: "As a Full-Stack Developer, I built Datadyno (transaction analytics) and Wrapsody (book collage app), developed serverless APIs in Node.js/Python (AWS SAM/Cognito/WebSockets), implemented AI search (Langchain/OpenAI) and blockchain identity (Veramo), created embeddable widgets, enhanced testing with Cypress, deployed AWS infrastructure (S3/CloudFront), and engineered Python-based image animation—demonstrating full-stack versatility in web and data-driven applications.",
      descBullets: [
        "Developed the Datadyno app to import purchase history and visualize transaction data through interactive metrics, charts and graphs",
        "Integrated Langchain with OpenAI in Node.js to enable querying of user questions from our database.",
        "Integrated Veramo to generate zero-knowledge proofs and verifiable credentials.",
        "Created embeddable widget applications for streamlined user interaction.",
        "Integrated Cypress for integration testing.",
        "Built Wrapsody app for making books wrap-ups and collages using templates and imported books from Amazon, Barnes and Noble and Google books",
        "Integrated Google Books Api, ISBNdb and Open Library to fetch books details",
        "Implemented APIs using serverless framework in NodeJS along with the AWS Cognito authorization",
        "Configured web socket server in express app and used it for notification of background processes",
        "Updated UI for marketing site and configured staging server it’s using AWS Cloudfront and S3",
        "Implemented APIs using SAM in Python",
        "Implemented image animation in Python"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Devsinc",
      companylogo: require("./assets/images/devsincLogo.png"),
      date: "Dec 2020 – Sep 2024",
      desc: "As a Full-Stack Developer, I design and maintain efficient, reusable code while mentoring teams, leverage AWS for scalable storage, utilize Git/GitHub for version control, and employ metaprogramming to boost productivity by 90%. I ensure robust front-end testing (React Testing Library/Jest/Enzyme), deploy on Heroku/AWS, integrate APIs (Zoom with custom wrapper/gem contributions), implement secure auth (OAuth/DynamoDB, Azure SAML SSO), and manage secrets via AWS Secrets Manager—delivering end-to-end solutions with optimized performance.",
      descBullets: [
        "Designing, building, and maintaining an efficient, reusable, and reliable code",
        "Helping maintain code quality and onboarding/mentoring new team members",
        "Utilizing Amazon Web Services (AWS) for improved storage efficiency and fast access",
        "Implementing version control with Git and GitHub for enhanced application functionality",
        "Applying metaprogramming techniques to reduce coding time by over 90%",
        "Conducting client-side testing with React Testing Library, Jest, and Enzyme",
        "Deploying applications on Heroku and AWS servers",
        "Integrating Zoom API by creating a custom wrapper with meeting management features",
        "Contributing to zoom_rb Rails gem by adding webinar support",
        "Implementing OAuth with active session handling in DynamoDB and AWS Secrets Manager",
        "Configuring Azure SAML SSO for secure authentication"
      ]
    },
    {
      role: "Software Engineer",
      company: "Visnext Software Solutions",
      companylogo: require("./assets/images/visnextLogo.png"),
      date: "Dec 2018 – Dec 2020",
      desc: "As a Full-Stack Developer, I've built and maintained web applications, upgraded Rails 4→6, implemented Stripe payment systems, integrated email/SMS (Mandrill/Plivo), optimized SEO via Google Search Console, tracked analytics with Google Optimize, developed GraphQL/REST APIs, and utilized Git/GitHub for version control—delivering robust, scalable solutions.",
      descBullets: [
        "Developed multiple web applications and maintained existing applications",
        "Upgraded Rails application from version 4 to 6",
        "Built bespoke credit card forms with Stripe API for secure payments",
        "Integrated email functionality using Mandrill",
        "Implemented SMS/MMS functionality with Plivo",
        "Optimized web page performance using Google Search Console",
        "Created Google Analytics goals and integrated with Google Optimize experiments",
        "Developed both GraphQL and REST APIs",
        "Utilized Git and GitHub for version control and application functionality"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "DataDyno",
      projectDesc: "Transformed Amazon purchase history into actionable insights, improving customer tracking and organization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3219427187",
  email_address: "beinghaziq@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "beinghaziq", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
