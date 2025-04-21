import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const userLng : string = navigator.language

const resources = {
  en: {
    home: {
        "Role":"Software Engineer",
        "ContactMe": "Contact Me",
        "Resume": "Download Resume",

        "Description":"Hello! I'm a software engineer passionate about creating efficient and scalable solutions. I enjoy tackling challenging problems and continuously learning new technologies.",
        "Skills" : "Skills",
        "Languages": "Languages",
        "English" : "English",
        "Spanish" : "Spanish",
        "Native" : "Native",

        
        
    },
    nav:{
        "Home": "Home",
        "Projects": "Projects",
        "Education": "Education",
        "Contact" : "Contact",
    },
    projects:{
        "Title":"My Projects",
        "Details":"View Details"
    },
    project:{
        name:{
            "1":"Portfolio",
            "2":"Tech E-commerce",
            "3":"X (Twitter) Clone",
            "4":"Weather App",
            "5":"NotePad with Encription",
        },
        date:{
            "1":"April 2025",
            "2":"February 2025",
            "3":"January 2025",
            "4":"November 2024",
            "5":"January 2024",
        },
        description:{
            "1":"My software developer portfolio, built with React and TypeScript. Showcases my projects, skills, and experience.",
            "2":"Ecommerce built in React with TypeScript, Tailwind and HeroUI components. Product data is fetched from FakeStore API, users are stored in a Firebase Database.",
            "3":"X clone built using HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, React-JSS, Material UI and PostgreSQL. It allows to create users, users can create, edit and delete posts. They can also like, repost, comment and bookmark someone else's posts.",
            "4":"Weather app build with React, TypeScript and shadcn, styled with Tailwind CSS. Data fetched by Weather API.",
            "5":"Notepad with encryption, built using C and the GTK library. It generates a txt file with the input entered on the program. It has a 4 page limit because of the project's original requirements.",
        },
        "Github":"Check it out on Github"

    },
    education:{
        "Title":"Education",
        name:{
            "1":"Systems Engineering - Santa María University",
            "2":"Scientific Computing with Python - FreeCodeCamp",
            "3":"Relational Database - FreeCodeCamp",
            "4":"Inglés (Adultos) como lengua extranjera - FUNDEIM (UCV)",
            "5":"The Web Development Bootcamp - UDEMY",
        },
        description:{
            "1":"Systems Engineering, Software Development, Web Development, Mobile Development, Data Science.",
            "2":"Data Science, Machine Learning, Python Programming.",
            "3":"Database Design, SQL Programming",
            "4":"English Language, Communication Skills.",
            "5":"Full Stack Web Development, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
        },
        "Check":"Check my certificates on: "

    },
    contact:{
        "Title":"Contact",
        "Text":"Feel free to reach out! You can connect with me through the following platforms or contact me directly."
    },
    footer:{
        "First":"My Portfolio. All rights reserved.",
        "Second":"Built with "
    }
        
  },
  es: {
    nav:{
        "Home": "Inicio",
        "Projects": "Proyectos",
        "Education": "Educación",
        "Contact" : "Contacto",
    },
    home: {

        "Role": "Ingenierio de Software",
        "ContactMe": "Contactar",
        "Resume": "Descargar CV",
        "Description":"¡Hola! Soy ingeniero de software y me apasiona crear soluciones eficientes y escalables. Disfruto abordando problemas desafiantes y aprendiendo constantemente nuevas tecnologías.",
        "Skills" : "Habilidades",
        "Languages": "Idiomas",
        "English" : "Inglés",
        "Spanish" : "Español",
        "Native" : "Nativo"
    },
    projects:{
        "Title":"Mis Proyectos",
        "Details":"Ver Detalles"

    },
    project:{
        name:{
            "1":"Portafolio",
            "2":"E-commerce de Tecnología",
            "3":"Clon de X (Twitter)",
            "4":"Aplicación del Clima",
            "5":"Bloc de Notas con Encriptación",
        },
        date:{
            "1":"Abril 2025",
            "2":"Febrero 2025",
            "3":"Enero 2025",
            "4":"Noviembre 2024",
            "5":"Enero 2024",
        },
        description:{
            "1":"Mi portafolio de desarrollo de software, creado con React y TypeScript, muestra mis proyectos, habilidades y experiencia.",
            "2":"Comercio electrónico desarrollado en React con componentes TypeScript, Tailwind y HeroUI. Los datos de los productos se obtienen de la API de FakeStore y los usuarios se almacenan en una base de datos de Firebase.",
            "3":'Clon de X desarrollado con HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, React-JSS, Material UI y PostgreSQL. Permite crear usuarios, quienes pueden crear, editar y eliminar publicaciones. También pueden dar "me gusta", reenviar, comentar y guardar en marcadores las publicaciones de otros.',
            "4":"Aplicación meteorológica desarrollada con React, TypeScript y shadcn, con estilo Tailwind CSS. Datos obtenidos mediante la API meteorológica.",
            "5":"Bloc de notas con cifrado, desarrollado con C y la biblioteca GTK. Genera un archivo .txt con la información ingresada en el programa. Tiene un límite de 4 páginas debido a los requisitos originales del proyecto.",
        },
        "Github":"Ver en Github"
    },
    education:{
        "Title":"Educación",
        name:{
            "1":"Ingeniería de Sistemas - Universidad Santa María",
            "2":"Computación científica con Python - FreeCodeCamp",
            "3":"Bases de Datos Relacionales - FreeCodeCamp",
            "4":"English (Adults) as a Foreign Language - FUNDEIM (UCV)",
            "5":"Bootcamp de Desarrollo Web - UDEMY",
        },
        description:{
            "1":"Ingeniería de Sistemas, Desarrollo de Software, Desarrollo Web, Desarrollo Móvil, Ciencia de Datos.", 
            "2":"Ciencia de Datos, Aprendizaje Automático, Programación en Python.",
            "3":"Diseño de Bases de Datos, Programación en SQL.",
            "4":"Idioma Inglés, Habilidades de Comunicación.",
            "5":"Desarrollo Web Full Stack, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB."
        },
        "Check":"Revisa mis certificados en: "
    },
    contact:{
        "Title":"Contacto",
        "Text":"¡No dudes en contactarme! Puedes contactarme a través de las siguientes plataformas o directamente."
    },
    footer:{
        "First":"Mi Portafolio. Todos los derechos reservados.",
        "Second":"Desarrollado con "
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //@ts-ignore
    lng: userLng.startsWith("es") ? "es" : "en",


    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;