/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kaushik Manivannan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kaushik Manivannan Portfolio",
    type: "website",
    url: "https://kaushik-manivannan.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Kaushik Manivannan",
  logo_name: "Kaushik Manivannan",
  nickname: "kauieee",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/11HWWIpTrmxn1vnO3Df25XL4uJBNlhe8E/view?usp=sharing",
  portfolio_repository: "https://github.com/kaushik-manivannan",
  githubProfile: "https://github.com/kaushik-manivannan",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/kaushik-manivannan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kaushik-manivannan",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:kaushik.manivannan@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kauieee/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Leading full stack development projects with a focus on scalable web applications using Angular, React.js, and Node.js",
        "⚡ Architecting and implementing robust backend systems with Node.js, and Express.js, enhancing data management and API efficiency",
        "⚡ Leveraging Java, Python, and JavaScript to craft sophisticated software solutions that enhance functionality and improve user experiences",
        "⚡ Utilizing Git and Postman to facilitate version control and efficient API testing, contributing to the delivery of high-quality software products",
        "⚡ Designing and deploying machine learning models with TensorFlow, driving innovation in AI-based application features",
        "⚡ Leading cross-functional teams through agile development cycles, fostering collaboration, and driving projects to successful completion"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "devicon:bootstrap",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "skill-icons:redux",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#DD0031"
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon:nodejs-wordmark"
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "devicon:express",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Mongoose",
          fontAwesomeClassname: "devicon:mongoose-wordmark",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "logos:oracle",
          style: {
            color: "#663399",
            width: "80px"
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python-wordmark",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codecademy",
      iconifyClassname: "cib:codecademy",
      style: {
        color: "#204156",
      },
      profileLink: "https://www.codecademy.com/profiles/KaushikCodes",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/kaushik_manivannan/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/kauieee",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Northeastern University | Boston MA",
      subtitle: "Master of Science in Software Engineering Systems",
      logo_path: "northeastern.png",
      alt_name: "Northeastern University, Boston MA",
      duration: "Expected May 2025",
      descriptions: [
        "Relevant Coursework:",
        "⚡ Object Oriented Design - Leveraged abstraction, encapsulation, inheritance, and polymorphism to develop modular and scalable software, applying design patterns to efficiently tackle common development challenges",
        "⚡ Web Design and User Experience Engineering - Mastered HTML, CSS, SCSS, JavaScript, TypeScript, React, Angular, Node.js, Redux, Express.js, MongoDB, and Mongoose to build responsive, dynamic web applications, focusing on both client and server-side development for full-stack solutions",
        "⚡ Data Management and Database Design - Leveraging Oracle to explore data-centric information system design, focusing on data modeling, relational design, SQL, and data normalization",
        "⚡ Enterprise Software Design - Enhancing my skills in architecture, design, and implementation, focusing on both server-side and client-side programming using frameworks like Spring MVC, Hibernate, and jQuery, aimed at creating sophisticated web-based, client-server, and database-intensive multitier applications",
      ],
      website_link: "https://www.northeastern.edu/",
    },
    {
      title: "Sri Sivasubramaniya Nadar College of Engineering | Chennai, India",
      subtitle: "Bachelor of Engineering in Electrical and Electronics",
      logo_path: "ssn.png",
      alt_name: "SSN College of Engineering",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Developed proficiency in Python and C Programming, laying the foundation for both high-level scripting and system-level programming",
        "⚡ Mastered Object-Oriented Programming using Java, alongside Data Structures and Algorithms, to enhance software development and algorithmic problem-solving skills",
        "⚡ Gained comprehensive understanding in Embedded Systems, Microprocessors and Microcontrollers, focusing on the integration of software and hardware for dedicated functionalities",
        "⚡ Explored Digital Signal Processing and applied mathematical techniques in Probability and Statistics to support data analysis and signal manipulation in software engineering",
      ],
      website_link: "https://www.ssn.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Computer Science Bridge",
      subtitle: "- NYU Tandon School of Engineering",
      logo_path: "nyu.png",
      certificate_link:
        "https://www.credential.net/9db6dcd8-b5ac-4f77-b974-fd4de8c03737#gs.4sxhyi",
      alt_name: "Computer Science Bridge",
      color_code: "#FC675B",
    },
    {
      title: "Computer Science Career Path",
      subtitle: "- Codecademy",
      logo_path: "codecademy.svg",
      certificate_link:
        "https://www.codecademy.com/profiles/KaushikCodes/certificates/5b5001a11d176d7acd8b2bf8",
      alt_name: "Codecademy",
      color_code: "#FCB05B",
    },
    {
      title: "Fundamentals of Graphic Design",
      subtitle: "- Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://coursera.org/share/e1a4d43ab197ffd46f919b96f9715140",
      alt_name: "Coursera",
      color_code: "#5BD1FC",
    },
    {
      title: "Problem Solving (Intermediate)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/684d3f938837",
      alt_name: "Problem Solving",
      color_code: "#5BFC77",
    },
    {
      title: "Angular",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/4cdf9217c46d",
      alt_name: "Angular",
      color_code: "#5BFC77",
    },
    {
      title: "SQL (Advanced)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/9e11c9dd89d1",
      alt_name: "SQL",
      color_code: "#5BFC77",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    "Results-driven Software Engineering Systems Master’s student from Northeastern University with expertise in modern front-end development and a passion for building inclusive digital solutions. Proven leadership in spearheading teams to revolutionize critical business processes and boost key metrics through high-performance web applications. Promoted collaborative engineering culture by coaching 5 junior developers to peak productivity and instituting Agile processes. Highly skilled across the Full Stack, with specialized proficiency in Java, Angular, React, Node.js, and Oracle. Aspiring to contribute to projects that emphasize the creation of accessible and user-centered software solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experience",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs.png",
          duration: "Aug 2021 - Feb 2023",
          location: "Chennai, India",
          description:
            "- Spearheaded the front-end team in developing an SPA utilizing Angular, revolutionizing the customer verification process for an insurance firm by replacing their traditional call center process with a streamlined digital system\n- Integrated Tensorflow-powered AI facial recognition and MediaRecorder Web API for video capture\n- Streamlined user verification process, slashing average confirmation times from 10+ minutes to just 3 minutes (300% faster) by implementing self-service tools, dramatically improving customer experience\n- Engineered user accessibility, cross-browser compatibility and OTP validation to ensure seamless user experience\n- Drove 25% increase in organic traffic through performance upgrades focused on boosting accessibility, memory utilization, and code refactoring\n- Orchestrated the growth and development of a team of 5 junior developers, delivering 20% increased productivity\n- Promoted Agile development methodologies, pair programming and personalized code review sessions within the team, leading to accelerated project completion timelines and an overall reduction in bugs",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "On-Campus Experience",
      experiences: [
        {
          title: "RSO Proctor",
          company: "Northeastern University",
          company_url: "https://housing.northeastern.edu/residential-security-office/",
          logo_path: "northeastern.png",
          duration: "Feb 2024 - Present",
          location: "Boston, MA",
          description:
              "- Managing entry at 30+ residence halls, safeguarding residents and creating a welcoming environment\n- Serving as a liaison between Residential Life, Campus Security, and NUPD, facilitating communication and resolving issues related to housing, security, or other campus services to establish a safe setting\n- Acting as a supportive intermediary, providing essential campus details and linking residents with university services\n- Maintaining accurate and detailed records of security-related incidents, reporting findings to relevant stakeholders and contributing to ongoing security assessments",
          color: "#000000",
        },
        {
          title: "Intramural Sports League Manager",
          company: "Northeastern University Recreation",
          company_url: "https://recreation.northeastern.edu/intramural-sports/",
          logo_path: "imleagues.png",
          duration: "Sep 2023 - Present",
          location: "Boston, MA",
          description:
            "- Spearheading the seamless execution of Soccer, Cricket, Table Tennis, Squash, Broomball, KanJam, and Spikeball games, guaranteeing a high level of success in program delivery\n- Maintaining precise documentation by accurately reporting scores, sportsmanship observations, and incidents, ensuring a thorough and organized record-keeping system\n- Upholding the integrity of Northeastern Intramural Sports by enforcing policies and procedures, fostering a fair and competitive playing environment for all",
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teaching Volunteer",
          company: "Teach A School",
          company_url: "https://www.facebook.com/TasLakshya/",
          logo_path: "teachaschool.jpg",
          duration: "June 2018 - May 2020",
          location: "Chennai, India",
          description:
            "- Volunteered in the “Teach A School” program organized by SSN Lakshya to provide basic knowledge in the field of science and mathematics for underprivileged children\n- Implemented interactive teaching methods resulting in a 25% increase in student comprehension and interest\n- Played a key role in improving academic performance of the students, resulting in a 20% increase in test scores among participating students\n- Coordinated activities that boosted student engagement, leading to a 15% increase in active participation\n- Successfully executed 10+ educational events, reaching a broader audience and enhancing the impact of the program\nLogged over 200 volunteer hours, showcasing a strong dedication to the community and the program's objectives",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "⚡ Tasty Trails: Led the development of a community-driven web application facilitating surplus food sharing and engagement to reduce food waste and foster an inclusive environment for users to discover, share, and contribute to sustainability efforts\n⚡ SigLens: Contributed to UI enhancements for SigLens, an open-source Observability solution revolutionizing data analysis for IT professionals by SigScalr\n⚡ Pathfinding Visualizer: Developed an interactive tool to visualize various pathfinding algorithms, improving users' understanding of algorithmic concepts and demonstrating the application of multiple pathfinding strategies\n⚡ Elderly Healthcare Monitoring System using IoT: Engineered a cost-effective wearable device for monitoring vital health parameters, paired with a web application for real-time data logging and emergency notifications\n⚡ Smart Baby Cradle System: Constructed a prototype baby cradle with integrated sensors and webcam, enabling working parents to monitor their toddlers remotely and ensure their safety and comfort",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description:
    "",
  avatar_image_path: "",
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilepic.png",
    description:
      "",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "3381 Washington Street Apt 2, Boston, MA",
    locality: "Boston",
    country: "USA",
    region: "Boston, MA",
    postalCode: "02130",
    streetAddress: "3381 Washington Street Apt 2",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/zEaTJ7GcYSAQqYGe7",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1(781)971-2560",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
