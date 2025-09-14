const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export const assets = {
    user_image: `${basePath}/user-image.png`,
    code_icon: `${basePath}/code-icon.png`,
    code_icon_dark: `${basePath}/code-icon-dark.png`,
    edu_icon: `${basePath}/edu-icon.png`,
    edu_icon_dark: `${basePath}/edu-icon-dark.png`,
    project_icon: `${basePath}/project-icon.png`,
    project_icon_dark: `${basePath}/project-icon-dark.png`,
    vscode: `${basePath}/vscode.png`,
    firebase: `${basePath}/firebase.png`,
    figma: `${basePath}/figma.png`,
    git: `${basePath}/git.png`,
    mongodb: `${basePath}/mongodb.png`,
    right_arrow_white: `${basePath}/right-arrow-white.png`,
    logo: `${basePath}/logo.png`,
    logo_dark: `${basePath}/logo_dark.png`,
    mail_icon: `${basePath}/mail_icon.png`,
    mail_icon_dark: `${basePath}/mail_icon_dark.png`,
    profile_img: `${basePath}/profile-img.png`,
    download_icon: `${basePath}/download-icon.png`,
    hand_icon: `${basePath}/hand-icon.png`,
    header_bg_color: `${basePath}/header-bg-color.png`,
    moon_icon: `${basePath}/moon_icon.png`,
    sun_icon: `${basePath}/sun_icon.png`,
    arrow_icon: `${basePath}/arrow-icon.png`,
    arrow_icon_dark: `${basePath}/arrow-icon-dark.png`,
    menu_black: `${basePath}/menu-black.png`,
    menu_white: `${basePath}/menu-white.png`,
    close_black: `${basePath}/close-black.png`,
    close_white: `${basePath}/close-white.png`,
    web_icon: `${basePath}/web-icon.png`,
    mobile_icon: `${basePath}/mobile-icon.png`,
    ui_icon: `${basePath}/ui-icon.png`,
    graphics_icon: `${basePath}/graphics-icon.png`,
    right_arrow: `${basePath}/right-arrow.png`,
    send_icon: `${basePath}/send-icon.png`,
    right_arrow_bold: `${basePath}/right-arrow-bold.png`,
    right_arrow_bold_dark: `${basePath}/right-arrow-bold-dark.png`
};

export const workData = [
    {
        title: 'BlackJack Multiplayer Web Game',
        description: 'Real-time multiplayer with React, TypeScript, Socket.io. Game rooms and betting system.',
        bgImage: `${basePath}/work-1.png`,
        link: 'https://github.com/WildUni/BlackJackWebGame'
    },
    {
        title: 'Rentally AI',
        description: 'Led team of 4. AI chatbot for recommendations, CRUD functionality, responsive UI.',
        bgImage: `${basePath}/work-2.png`,
        link: 'https://github.com/mengchengma/RentallyAI'
    },
    {
        title: 'Invoice Management Website',
        description: 'Led team of 3. Next.js with NeonDB PostgreSQL, secure NextAuth authentication.',
        bgImage: `${basePath}/work-3.png`,
        link: 'https://docs.google.com/presentation/d/1j-2uWl0zazudjv-c7rwZTj1YkvaMC1SGjNPKJX48IWI/edit?usp=sharing'
    },
    {
        title: 'Smart Attendance App',
        description: 'Android app with Firebase. Device verification, QR codes, VPN detection.',
        bgImage: `${basePath}/work-4.png`,
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