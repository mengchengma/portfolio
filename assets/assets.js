import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'BlackJack Multiplayer Web Game',
        description: 'React, TypeScript, Node.js, Socket.io',
        bgImage: '/work-1.png',
        link: 'https://github.com/WildUni/BlackJackWebGame'
    },
    {
        title: 'Rentally AI',
        description: 'Full Stack AI-powered rental app',
        bgImage: '/work-2.png',
        link: 'https://github.com/mengchengma/RentallyAI'
    },
    {
        title: 'Invoice Management Website',
        description: 'Next.js with NeonDB PostgreSQL',
        bgImage: '/work-3.png',
        link: 'https://docs.google.com/presentation/d/1j-2uWl0zazudjv-c7rwZTj1YkvaMC1SGjNPKJX48IWI/edit?usp=sharing'
    },
    {
        title: 'Smart Attendance App',
        description: 'Android Studio with Firebase',
        bgImage: '/work-4.png',
        link: 'https://docs.google.com/presentation/d/1SnJIDbyFOkr1twMBBmlS1JK07Pt4_-mPJI54uxnlLvw/edit?usp=sharing'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Software Developer Co-op @ InterSoft Associates', description: 'Engineered internal timesheet budget analysis tool (React/SQL), optimized 25+ SQL stored procedures, delivered 8+ production-ready full-stack features.', link: 'https://intersoftassociates.com' },
    { icon: assets.mobile_icon, title: 'Web Developer Intern @ National Urban Technology Center', description: 'Enhanced HTML and CSS skills, worked with WordPress for website development, improved SEO and user experience by 10%.', link: 'https://urbantech.org' },
    { icon: assets.ui_icon, title: 'Full Stack Development Projects', description: 'Led multiple team projects including AI-powered applications, multiplayer web games, and invoice management systems.', link: '' },
    { icon: assets.graphics_icon, title: 'Computer Science Student @ NYIT', description: 'Expected December 2025 graduation. Relevant coursework: AI, Operating Systems, Algorithms, Software Engineering.', link: 'https://www.nyit.edu' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Programming Languages', description: 'Java, Python, C, C#, C++, HTML, CSS, JavaScript, SQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Technologies', description: 'React, Next.js, Node.js, Git, AWS, SQL Server, Firebase, Android Studio, Tailwind CSS' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: 'Software Developer Co-op at InterSoft Associates, Web Developer Intern, Multiple full-stack projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];