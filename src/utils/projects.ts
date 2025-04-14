import { projectDataType } from "./interfaces";

export const projectData : projectDataType[] = [
    {
        name:"Portfolio",
        description:"My software developer portfolio, built with React and TypeScript. Showcases my projects, skills, and experience.", 
        date:"April 2025", 
        images:["portfolio1.png","portfolio2.png","portfolio3.png"], 
        github:"https://github.com/Diangondi03/my-portfolio",
        skills:["HTML","CSS","JavaScript","React","TypeScript","Tailwind","Git","GitHub"]
    },
    {
        name:"Tech E-commerce", 
        description:"Ecommerce built in React with TypeScript, Tailwind and HeroUI components. Product data is fetched from FakeStore API, users are stored in a Firebase Database", 
        date:"February 2025", 
        images:["tech1.png","tech2.png","tech3.png"], 
        github:"https://github.com/Diangondi03/Tech-E-commerce",
        skills:["HTML","CSS","JavaScript","React","TypeScript","Tailwind","Git","GitHub"]

    },
    {
        name:"X (Twitter) Clone", 
        description:"X clone built using HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, React-JSS, Material UI and PostgreSQL. It allows to create users, users can create, edit and delete posts. They can also like, repost, comment and bookmark someone else's posts.", 
        date:"January 2025", 
        images:["twitter1.jpeg","twitter2.jpeg","twitter3.jpeg"], 
        github:"https://github.com/Diangondi03/X-Twitter-Clone",
        skills:["HTML","CSS","JavaScript","React","PostgreSQL","Git","GitHub"]

    },
    {
        name:"Weather App", 
        description:"Weather app build with React, TypeScript and shadcn, styled with Tailwind CSS. Data fetched by Weather API", 
        date:"November 2024", 
        images:["weather1.png","weather2.png","weather3.png"], 
        github:"https://github.com/Diangondi03/Weather-App",
        skills:["HTML","CSS","JavaScript","React","TypeScript","Tailwind","Git","GitHub"]

    },
    
    {
        name:"Notepad with Encryption", 
        description:"Notepad with encryption, built using C and the GTK library. It generates a txt file with the input entered on the program. It has a 4 page limit because of the project's original requirements.", 
        date:"January 2024", 
        images:["notepad1.jpeg","notepad2.jpeg","notepad3.PNG"], 
        github:"https://github.com/Diangondi03/Gtk-Notepad",
        skills:["C","Git","GitHub"]


    }
]