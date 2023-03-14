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
  username: "Zachary Ebaugh",
  title: "Hi all, I'm Zac",
  subTitle: emoji(
    "Student @UCF | Software Engineer"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1drCkaw7GWyXnPIUcyG1bHm-1s2lRllTZ/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ZacharyEbaugh",
  linkedin: "https://www.linkedin.com/in/zachary-ebaugh/",
  gmail: "zlebaughwps@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a driven software engineer with a diverse skill set in",
  skills: [
    emoji(
      "⚡ Developing robust web and mobile applications"
    ),
    emoji("⚡ Utilizing data analysis to craft powerful machine learning models"),
    emoji(
      "⚡ Working with cutting-edge cloud computing platforms"
    )
  ],
// Welcome to my portfolio! I am a driven software engineer with a diverse skill set in developing robust web and mobile applications, utilizing data analysis to craft powerful machine learning models, and working with cutting-edge cloud computing platforms. With a passion for innovation and a dedication to delivering exceptional results, I strive to create intuitive and dynamic solutions that exceed expectations. Let's connect and explore the possibilities together.
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "npm",
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
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
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
      schoolName: "University of Central Florida",
      logo: require("./assets/images/UCF-symbol.jpg"),
      subHeader: "Bachelors of Science in Computer Science | Minor in Mathematics",
      duration: "August 2019 - Present",
      // desc: "Activities and Societies",
      // descBullets: [
      //   "Hack@UCF",
      //   "AI@UCF"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
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
      role: "Data Warehouse Architect",
      company: "Hilton Grand Vacations",
      companylogo: require("./assets/images/HGV.png"),
      date: "June 2022 – August 2022",
      desc: "Designed and developed a dynamic documentation converter, increasing internal availability and boosting innovation efficiency by over 50%.",
      descBullets: [
        "Utilized Python and lxml to convert large SSIS packages into compact data packages, streamlining the data analysis process",
        "Integrated a conversion algorithm using PlantUML to produce high-quality UML diagrams, improving the readability and accessibility of project documentation",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Passion projects I have worked on",
  projects: [
    {
      image: require("./assets/images/PhotoCode.png"),
      projectName: "PhotoCode",
      projectDesc: "Developer tool for cloud storage, image to text conversion, and device transferability",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://photocode.app"
        },
        {
          name: "Github",
          url: "https://github.com/ZacharyEbaugh/photoCode"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aq-logo.png"),
      projectName: "AlgoQuant",
      projectDesc: "Automated investment application that provides retail investors the ability to harness the power of algorithms and statistical analysis for stock market trading without any prior knowledge.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://algoquant.app"
        },
        {
          name: "Github",
          url: "https://github.com/AlgoQuantSD"
        }
      ]
    },
    {
      image: require("./assets/images/UCF-symbol.jpg"),
      projectName: "EVI: UCF Event Manager",
      projectDesc: "UCF based event tracker, this involves a user heirarchy, event creation, and event management.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/ZacharyEbaugh/EVI"
        }
      ]
    },
    {
      image: require("./assets/images/elan_logo.png"),
      projectName: "Elan: Nutrition Tracker",
      projectDesc: "A nutrition tracker that allows users to track their daily nutrition intake with a focus on macronutrient visualization and tracking.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/ZacharyEbaugh/elan"
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
      title: "DataCamp Machine Learning Engineer",
      subtitle:
        "Completed the DataCamp Machine Learning Engineer Track",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "DataCamp Machine Learning Engineer Track Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "407-718-0665",
  email_address: "zlebaughwps@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
  isHireable
};
