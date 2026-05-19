// src/data/projectLinks.ts
export interface ProjectLinks {
    slug: string;
    blog?: string;
    github?: string;
    itch?: string;
    myindie?: string;
    gamejolt?: string;
    steam?: string;
}

export const projectLinks: ProjectLinks[] = [
    {
        slug: 'aceage',
        github: 'https://github.com/PureshkaGames/AceAge',
        itch: 'https://clinicallysleepy.itch.io/ace-age',
    },
    {
        slug: 'gutsout',
        github: 'https://github.com/ArcasHH/GutsOut',
        itch: 'https://arcashh.itch.io/gutsout',
        myindie: 'https://myindie.ru/games/game/gutsout',
    },
    {
        slug: 'runpunzel',
        github: 'https://github.com/ArcasHH/RunPunzel',
        itch: 'https://arcashh.itch.io/runpunzel',
    },
    {
        slug: 'tanglejump',
        itch: 'https://arcashh.itch.io/tangle-jump',
    },
];

// Function for getting links by slug
export function getProjectLinks(slug: string): ProjectLinks | undefined {
    return projectLinks.find(links => links.slug === slug);
}