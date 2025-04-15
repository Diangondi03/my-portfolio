export interface LinkType {
    name: string;
    path: string;	
}

export interface projectDataType {
    name: string;
    description: string;
    date: string;
    images: string[];
    github: string;
    skills: string[];
}

export interface EducationItem {
    date: string;
    title: string;
    skills: string;
    icon: string;
    courseLink: string;
    pageLink: string;
}