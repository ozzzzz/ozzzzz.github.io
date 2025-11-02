export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  technologies: string[];
  summary: string;
  contributions: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface CertificateItem {
  title: string;
  provider: string;
  year: string;
  url?: string;
}

export interface PresentationItem {
  title: string;
  event: string;
  year: string;
  url?: string;
}

export interface ArticleItem {
  title: string;
  publication: string;
  year: string;
  url?: string;
}

export interface PrincipleItem {
  title: string;
  description: string;
}

export interface PatentItem {
  title: string;
  number: string;
  year: string;
  url?: string;
}

export interface TechStackItem {
  name: string;
  technologies: string[];
}

export interface ProfileData {
  name: string;
  headline: string;
  location: string;
  currentFocus: string;
  overview: string[];
  quickFacts: QuickFact[];
  contacts: Record<string, ContactLink>;
  experienceYears: number;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  presentations: PresentationItem[];
  articles: ArticleItem[];
  principles: PrincipleItem[];
  patents: PatentItem[];
  techStack: TechStackItem[];
  interests: string[];
}

// Calculate total years of experience starting from Dec 2013 until now
const totalExperiencesYears: number = new Date().getFullYear() - 2013;

const profileData: ProfileData = {
  name: 'Bogdan Neterebskii',
  headline: 'Senior Software Engineer and Technical Leader',
  location: 'Belgrade, Serbia',
  currentFocus: 'Developing computational tooling for prefabricated construction at All3.',
  overview: [
    `Senior Software Engineer and Technical Leader with ${totalExperiencesYears} years of experience across backend, frontend, and ML projects.`,
    'Comfortable switching between leadership and individual contributor roles after guiding a 25 person team for three years.',
    'Motivated by constant learning and pragmatic problem solving that keeps business goals in focus.',
    'Excited about research-heavy tasks, robotics, 3D printing, and AI-augmented workflows.'
  ],
  quickFacts: [
    { label: 'Experience', value: `${totalExperiencesYears} years (including 3 years in leadership)` },
    { label: 'Current Role', value: 'Senior Software Developer @ All3' },
    { label: 'Scientific Publications', value: '4 articles and 1 patent' },
    { label: 'Languages', value: 'English, Russian, Serbian (learning)' },
    { label: 'Fun Fact', value: 'Was in the group that developed vaccine for COVID-19' }
  ],
  contacts: {
    email: { label: 'Email', value: 'bog2dan1@gmail.com', href: 'mailto:bog2dan1@gmail.com' },
    linkedin: { label: 'LinkedIn', value: 'bogdan-neterebskii', href: 'https://www.linkedin.com/in/bogdan-neterebskii/' },
    github: { label: 'GitHub', value: 'ozzzzz', href: 'https://github.com/ozzzzz' }
  },
  experienceYears: totalExperiencesYears,
  experiences: [
    {
      role: 'Senior Software Developer',
      company: 'All3',
      companyUrl: 'https://www.all3.com/',
      location: 'Belgrade, Serbia',
      period: 'May 2024 - Present',
      technologies: ['Python', 'React', 'ThreeJS', 'Rhino', 'Grasshopper', 'RFEM6'],
      summary: 'Designing digital tooling that accelerates the full prefabricated construction workflow from brief to factory floor.',
      contributions: [
        'Develop services and algorithms that accelerate the construction workflow from project brief to prefabrication.',
        'Study load-bearing structures and run FEM analysis with RFEM6 to validate safety and performance.',
        'Integrate computational design outputs with prefabrication pipelines so factory production stays predictable.'
      ]
    },
    {
      role: 'Senior Software Developer',
      company: 'Nortal',
      companyUrl: 'https://nortal.com/',
      location: 'Belgrade, Serbia',
      period: 'Aug 2022 - May 2024',
      technologies: ['Python', 'Spark', 'React', 'Kubernetes', 'Kafka', 'Keycloak'],
      summary: 'Contributed to the digital core for NEOM, delivering dependable services for city scale operations.',
      contributions: [
        'Co-created the microservice architecture for NEOM and kept the system diagrams current for the team.',
        'Delivered backend systems and supported mobile development for NEOM Airport releases on tight timelines.',
        'Drove knowledge sharing practices that kept distributed teams aligned during rapid delivery.'
      ]
    },
    {
      role: 'Senior Software Developer',
      company: 'The AnyLogic Company',
      companyUrl: 'https://www.anylogic.com/',
      location: 'Saint Petersburg, Russia',
      period: 'Sep 2021 - Aug 2022',
      technologies: ['Java', 'Python', 'Docker', 'GitLab', 'NSIS'],
      summary: 'Modernised a 20 year old desktop simulation platform across all major operating systems.',
      contributions: [
        'Redesigned the cross-platform desktop application after two decades of legacy evolution.',
        'Rebuilt infrastructure as code and GitLab pipelines to remove release bottlenecks.'
      ]
    },
    {
      role: 'Head of Bioinformatics Software Development',
      company: 'BIOCAD',
      companyUrl: 'https://biocad.ru/',
      location: 'Saint Petersburg, Russia',
      period: 'Feb 2019 - Aug 2021',
      technologies: ['Haskell', 'Python', 'React', 'RabbitMQ', 'GitLab', 'Kubernetes'],
      summary: 'Led a 25 person group delivering data platforms and lab automation for drug discovery.',
      contributions: [
        'Developed services that store and connect biological data produced during drug discovery, from antibodies to lab workflows.',
        'Delivered dozens of lab algorithms that shorten the path from in silico sequences to physical proteins or viruses.',
        'Built a React and Next.js interface backed by Haskell and Python services orchestrated through Kubernetes queues.'
      ]
    },
    {
      role: 'Lead Software Developer',
      company: 'BIOCAD',
      companyUrl: 'https://biocad.ru/',
      location: 'Saint Petersburg, Russia',
      period: 'Jan 2018 - Jan 2019',
      technologies: ['Haskell', 'Python', 'Neo4j', 'MongoDB'],
      summary: 'Developed computational tools for protein design and internal project coordination.',
      contributions: [
        'Developed algorithms that mine the full PDB database for rational in silico modelling, showcased at PEGS 2019.',
        'Partnered with the Matrosov Institute on optimisation methods for protein structure analysis, resulting in a published article.',
        'Led a project management service powered by a Haskell and MongoDB backend with a React frontend.'
      ]
    },
    {
      role: 'Senior Software Developer',
      company: 'BIOCAD',
      companyUrl: 'https://biocad.ru/',
      location: 'Saint Petersburg, Russia',
      period: 'Jan 2017 - Dec 2017',
      technologies: ['Haskell', 'Python', 'ZeroMQ', 'Neo4j'],
      summary: 'Advanced protein folding research with production ready distributed tooling.',
      contributions: [
        'Created an antibody structure prediction workflow comparable to Rosetta and Schrödinger tooling.',
        'Built a ZeroMQ based task distribution bus with bindings for Haskell and Python.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'BIOCAD',
      companyUrl: 'https://biocad.ru/',
      location: 'Saint Petersburg, Russia',
      period: 'May 2016 - Dec 2016',
      technologies: ['Scala', 'Julia', 'MySQL', 'Docker'],
      summary: 'Bridged scientific ideas with robust backend systems for high throughput biology workflows.',
      contributions: [
        'Implemented storage services and a custom identity platform later migrated to Keycloak.',
        'Built a Sun Grid Engine based compute solution for heavy batch workloads.',
        'Wrote a Julia basecalling algorithm that converts raw lab data into DNA sequences.'
      ]
    },
    {
      role: 'Junior Software Developer',
      company: 'Laser Systems',
      companyUrl: 'http://www.lsystems.ru/en/',
      location: 'Saint Petersburg, Russia',
      period: 'Jul 2015 - Apr 2016',
      technologies: ['Qt'],
      summary: 'Shipped positioning algorithms and connectivity modules for industrial laser tools.',
      contributions: [
        'Developed positioning algorithms for industrial laser tools.',
        'Created modules that connected product components through protobuf communication.'
      ]
    },
    {
      role: 'Mathematician',
      company: 'Kotlin-Novator',
      companyUrl: 'https://www.kotlin-novator.ru/',
      location: 'Saint Petersburg, Russia',
      period: 'Jan 2015 - Jun 2015',
      technologies: ['Python', 'LaTeX'],
      summary: 'Solved aircraft navigation problems with optimisation techniques.',
      contributions: ['Solved aircraft navigation problems and built trajectory optimisation algorithms.']
    },
    {
      role: 'Junior Web Developer',
      company: 'Mr. Brooks Private Marketing',
      location: 'Saint Petersburg, Russia',
      period: 'Dec 2013 - Dec 2014',
      technologies: ['WordPress', 'JavaScript', 'CSS'],
      summary: 'Delivered marketing websites and branding assets.',
      contributions: [
        'Created WordPress sites customised with JavaScript features for marketing campaigns.',
        'Collaborated with designers on a bespoke font and supporting brand assets.'
      ]
    }
  ],
  education: [
    {
      degree: 'Diploma of Specialist in Mathematical Physics',
      institution: 'Saint Petersburg State University, Mathematics and Mechanics Faculty',
      period: 'Sep 2010 - Jun 2015',
      details: 'Mathematics and mechanics curriculum with research in mathematical physics.'
    },
    {
      degree: 'Lieutenant, Faculty of Military Studies',
      institution: 'Saint Petersburg State University',
      period: 'Sep 2011 - Aug 2014',
      details: 'Completed military training programme alongside academic studies.'
    }
  ],
  certificates: [
    {
      title: 'Deep Learning Specialization',
      provider: 'Coursera',
      year: '2021',
      url: 'https://www.coursera.org/specializations/deep-learning'
    },
    {
      title: 'Modern Robotics: Mechanics, Planning, and Control Specialization',
      provider: 'Coursera',
      year: '2022',
      url: 'https://www.coursera.org/specializations/modernrobotics'
    }
  ],
  articles: [
    {
      title: 'The Multiplicity of Positive Solutions to A Quasilinear Equation Generated By The Ilin-Caffarelli-Cohn-Nirenberg Inequality',
      publication: 'Journal of Mathematical Sciences',
      year: '2017',
      url: 'https://doi.org/10.1007/s10958-017-3427-z'
    },
    {
      title: 'Algorithms for local minimization of 3D molecules OPLS force field',
      publication: 'arXiv',
      year: '2018',
      url: 'https://arxiv.org/abs/1810.03358'
    },
    {
      title: 'Development of a T Cell-Based COVID-19 Vaccine Using a Live Attenuated Influenza Vaccine Viral Vector',
      publication: 'National Institutes of Health',
      year: '2022',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9318028/'
    },
    {
      title: 'Expression of the SARS-CoV-2 receptor-binding domain by live attenuated influenza vaccine virus as a strategy for designing a bivalent vaccine against COVID-19 and influenza',
      publication: 'National Institutes of Health',
      year: '2024',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11003101/'
    }
  ],
  principles: [
    {
      title: 'Do something valuable',
      description:
        'Either make people’s lives easier and healthier, or reduce environmental impact. No gambling, high-frequency trading or anything else that feels to me wrong.'
    },
    {
      title: 'Transparency first',
      description:
        'C4 models and Mermaid diagrams are must-haves for a clear system overview, with Confluence pages, solid READMEs, and how-to blocks maintaining shared context.'
    },
    {
      title: 'Focus on the result',
      description: 'Keep outcomes visible, measure impact, and change course when the value is not there.'
    },
    {
      title: 'Default tech stack mindset',
      description:
        'Start with proven tools and borrowed best practices, yet stay open to new solutions when they bring measurable value.'
    },
    {
      title: 'Respect time',
      description:
        'Prefer deeper thinking and written pre-mortems over extra meetings; flag risks before large discussions.'
    },
    {
      title: 'Responsible AI usage',
      description:
        'Let AI handle routine work, but review every line, understand its limits, and step in manually whenever needed.'
    }
  ],
  patents: [
    {
      title: 'Influenza virus-based isolated recombinant virus',
      number: 'WO2023287324A1',
      year: '2023',
      url: 'https://patents.google.com/patent/WO2023287324A1'
    }
  ],
  presentations: [],
  interests: ['Research tasks', 'Robotics', '3D printing', 'AI-assisted engineering'],
  techStack: [
    { name: 'Backend', technologies: ['Python', 'Haskell', 'Java', 'Scala', 'Julia'] },
    { name: 'Frontend', technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript'] },
    { name: 'DevOps', technologies: ['Docker', 'Kubernetes', 'GitLab CI/CD'] },
    { name: 'Databases', technologies: ['PostgreSQL', 'MongoDB', 'Neo4j', 'MySQL'] },
    { name: 'Brokers', technologies: ['RabbitMQ', 'Kafka', 'ZeroMQ'] },
    { name: 'Tools & Platforms', technologies: ['RFEM6', 'Grasshopper', 'Rhino', 'NSIS', 'OnShape'] },
    { name: "Security", technologies: ['Keycloak', 'GDPR Compliance'] },
  ]
}

export default profileData
