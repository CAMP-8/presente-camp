import monthIndication from 'assets/Banner/Indicação do mês.svg';
import impediment from 'assets/Content/Blog/Impediment/Impedimento.png';
import management from 'assets/Content/Blog/BestPracticesProjectManagement/Banner.jpg';
import IContent from '../interfaces/content.interface';

const Blogs: IContent[] = [
    {
        id: "indicacoes-do-mes",
        description: 'Recomendações',
        banner: monthIndication,
        title: 'Indicações do mês',
        by: 'Equipe Presente',
        publishDate: '27 de Maio de 2021',
        content: 'Indication',
        type: 'Blog',
        interests: 'UI/UX'
    },
    {
        id: "dicas-para-designers-que-procuram-trabalhar-no-exterior",
        description: 'O mundo está entrando numa era remota e democratizando oportunidades — veja como aproveitá-las.',
        banner: 'https://miro.medium.com/max/3200/1*5rHHan0Zd71LWdzNMCmGUg.jpeg',
        title: 'Dicas para designers que buscam trabalhar no exterior',
        by: 'Equipe Presente',
        publishDate: '21 de Maio de 2021',
        content: 'Designer Tips',
        type: 'Blog',
        interests: 'UI/UX'
    },
    {
        id: "ux-design-e-comunicacao",
        description: 'A importância da empatia, compaixão e comunicação para o desenvolvimento de soluções centradas no usuário.',
        banner: 'https://miro.medium.com/max/7200/1*dG1lzqSNOqzlKqWPfGvzhQ.jpeg',
        title: 'UX Design e Comunicação',
        by: 'Equipe Presente',
        publishDate: '14 de Maio de 2021',
        content: 'Design and communication',
        type: 'Blog',
        interests: 'UI/UX'
    },
    {
        id: "impedimentos-o-que-e-como-agir",
        description: 'Como agir nessas situações',
        banner: impediment,
        title: 'Impedimento: o que é e como agir',
        by: 'Equipe Presente',
        publishDate: '24 de Maio de 2021',
        content: 'Impediments',
        type: 'Blog',
        interests: 'Gestão de projetos'
    },
    {
        id: "boas-praticas-de-gestao-de-projetos",
        description: 'Boas práticas de gestão de projetos',
        banner: management,
        title: '10 dicas aprofundadas para aplicar boas práticas de gestão de projetos',
        by: 'Equipe Presente',
        publishDate: '04 de Maio de 2021',
        content: 'Best practices project management',
        type: 'Blog',
        interests: 'Gestão de projetos'
    },
    {
        id: "criando-primeira-api-rest-com-node-js",
        description: 'Primeiros passos',
        banner: 'https://res.cloudinary.com/practicaldev/image/fetch/s--_QMQU86---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/6dnng3pre04xxdebia1g.png',
        title: 'Criando minha primeira API REST com Node.js',
        by: 'Equipe Presente',
        publishDate: '31 de Maio de 2021',
        content: 'First API',
        type: 'Blog',
        interests: 'Backend'
    },
    {
        id: "docker-fundamentals",
        description: 'Entendendo o que são containers e primeiros comandos Docker!',
        banner: 'https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker-filesystems-busyboxrw.png',
        title: 'Primeiros passos com o Docker',
        by: 'Equipe Presente',
        publishDate: '18 de Maio de 2021',
        content: 'Docker',
        type: 'Blog',
        interests: 'Backend'
    },
    {
        id: "cors",
        description: 'Aqui vamos ver o que é CORS, quais os principais erros relacionados com ele, suas principais causas e como resolve-los corretamente.',
        banner: 'http://nexusinno.com/wp-content/uploads/cors_thumbnail-1024x538-2.jpg',
        title: 'O que é CORS e como resolver os principias erros',
        by: 'Equipe Presente',
        publishDate: '17 de Maio de 2021',
        content: 'CORS',
        type: 'Blog',
        interests: 'Backend'
    },
    {
        id: "android-intents",
        description: 'O que é e como usar',
        banner: 'https://miro.medium.com/max/1334/1*VdzFXBMfw9oSI2SuWVIMZQ.jpeg',
        title: 'Builder Inference annotation',
        by: 'Equipe Presente',
        publishDate: '22 de Maio de 2021',
        content: 'Build inference',
        type: 'Blog',
        interests: 'Android'
    },
    {
        id: "web-accessibility",
        description: 'Falando um pouco sobre, teoria, como implementar e algumas dicas',
        banner: 'https://miro.medium.com/max/3224/1*-MlUHTFPrgKXOQCRvY0Xfw.png',
        title: 'Frontenders, bora falar de acessibilidade?',
        by: 'Equipe Presente',
        publishDate: '5 de Maio de 2021',
        content: 'Accessibility',
        type: 'Blog',
        interests: 'Frontend'
    }
];

export default Blogs;
