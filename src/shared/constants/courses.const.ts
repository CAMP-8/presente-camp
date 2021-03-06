import course1 from 'assets/Content/Courses/Course1.png';
import course2 from 'assets/Content/Courses/Course2.png';
import IContent from '../interfaces/content.interface';

const Courses: IContent[] = [
    {
        id: "teoria-das-cores",
        description: 'Teoria do Design',
        banner: course1,
        title: 'Teoria das cores',
        type: 'Course',
        interests: 'UI/UX'
    },
    {
        id: "teoria-das-cores",
        description: 'UX Writing',
        banner: course2,
        title: 'Como montar um briefing de UX Writing',
        type: 'Course',
        interests: 'UI/UX',
    },
    {
        id: "node-js-armazenando-dados-temporarios-com-o-redis",
        description: 'Armazenamento em memória',
        banner: 'https://fernandofranzini.files.wordpress.com/2017/07/nodejs-2-562x3092x-op.png',
        title: 'NodeJs: Armazenando dados temporários com o Redis',
        type: 'Course',
        interests: 'Backend',
    },
    {
        id: "node-js-criando-uma-aplicacao-baseada-no-padrao-de-projeto-cqrs",
        description: 'Turbinando a abstração de sua aplicação backend',
        banner: 'https://www.cognizantsoftvision.com/wp-content/uploads/2019/11/04201101/CQRS-1000x561.png',
        title: 'NodeJs: Criando uma aplicação utilizando o pattern CQRS',
        type: 'Course',
        interests: 'Backend',
    },
    {
        id: "agilidade-em-seu-projeto",
        description: 'Curso scrum',
        banner: 'https://blog.trello.com/hs-fs/Imported_Blog_Media/scrum_agile_feature-1024x512-2.jpg',
        title: 'Agilidade em seu projeto',
        type: 'Course',
        interests: 'Gestão de projetos',
    },
    {
        id: "listeners-menu-e-ui",
        description: 'Indrodução Android',
        banner: 'https://avantemidia.com.br/wp-content/uploads/2020/03/UI-Design.png',
        title: 'Listeners, menu e UI',
        type: 'Course',
        interests: 'Android',
    },
    {
        id: "flexbox",
        description: 'Flexbox',
        banner: 'https://www.chiefofdesign.com.br/wp-content/uploads/2017/11/flexbox-css.png',
        title: 'Centralizando elementos com Flexbox',
        type: 'Course',
        interests: 'Frontend',
    },
];

export default Courses;
