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

export interface ProfileData {
  name: string;
  headline: string;
  location: string;
  currentFocus: string;
  overview: string[];
  focusAreas: string[];
  quickFacts: QuickFact[];
  contacts: ContactLink[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  presentations: PresentationItem[];
  articles: ArticleItem[];
  interests: string[];
}

const profileData: ProfileData = {
  name: 'Bogdan Neterebskii',
  headline: 'Senior Software Engineer and Technical Leader',
  location: 'Belgrade, Serbia',
  currentFocus: 'Building reliable software systems that connect physical products, data, and AI.',
  overview: [
    'Engineer with 11 years of hands-on development experience across backend, frontend, and ML projects.',
    'Led a 25 person organisation while staying close to the codebase and delivery processes.',
    'Motivated by solving business problems through research, automation, and pragmatic engineering.'
  ],
  focusAreas: [
    'High impact backend services and data pipelines',
    'Bridging research prototypes with production systems',
    'Team leadership with transparent communication',
    'Explorations in robotics, 3D printing, and AI'
  ],
  quickFacts: [
    { label: 'Experience', value: '11 years' },
    { label: 'Leadership', value: '3 years' },
    { label: 'Current Role', value: 'Senior Software Developer @ FunkFlow' },
    { label: 'Previous Focus', value: 'NEOM digital core at Nortal' }
  ],
  contacts: [
    { label: 'Email', value: 'bog2dan1@gmail.com', href: 'mailto:bog2dan1@gmail.com' },
    { label: 'LinkedIn', value: 'bogdan-neterebskii', href: 'https://www.linkedin.com/in/bogdan-neterebskii/' },
    { label: 'GitHub', value: 'ozzzzz', href: 'https://github.com/ozzzzz' }
  ],
  experiences: [
    {
      role: 'Senior Software Developer',
      company: 'FunkFlow',
      companyUrl: 'https://www.funkflow.com/',
      location: 'Belgrade, Serbia',
      period: 'May 2024 - Present',
      technologies: ['Python', 'React', 'Rhino', 'Grasshopper', 'RFEM6'],
      summary: 'Designing digital tooling that accelerates the full prefabricated construction workflow from brief to factory floor.',
      contributions: [
        'Model structural options and automate safety checks with FEM analysis to ensure resilient designs.',
        'Align computational design outputs with prefabrication requirements to keep production flows predictable.',
        'Streamline cross discipline collaboration by wrapping algorithms into accessible services.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Nortal',
      companyUrl: 'https://nortal.com/',
      location: 'Belgrade, Serbia',
      period: 'Aug 2022 - May 2024',
      technologies: ['Python', 'Spark', 'React', 'Kubernetes', 'Kafka', 'Keycloak'],
      summary: 'Contributed to the digital core for NEOM, delivering dependable services for city scale operations.',
      contributions: [
        'Co-created a microservice architecture and maintained an up to date systems map for rapid onboarding.',
        'Delivered backend services and mobile integrations under aggressive deadlines for the NEOM Airport launch.',
        'Enabled knowledge sharing practices that improved cross team visibility and delivery pace.'
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
        'Redesigned release and deployment tooling with new infrastructure as code and CI/CD pipelines.',
        'Removed delivery bottlenecks by rebuilding installation flows and automation scripts.'
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
        'Launched services that connect diverse biological datasets spanning antibodies, plasmids, and lab workflows.',
        'Delivered dozens of algorithms that shorten the path from in silico sequences to wet lab execution.',
        'Built a React and Next.js interface that exposed complex pipelines through a lab friendly UX.'
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
        'Built graph driven knowledge discovery pipelines on top of the full PDB database.',
        'Collaborated with research institutes on optimisation approaches for protein structure analysis.',
        'Delivered a project management service backed by MongoDB and Haskell services.'
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
        'Delivered an antibody structure prediction workflow rivaling industry tools such as Rosetta.',
        'Created a ZeroMQ based task distribution bus with bindings for Haskell and Python.'
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
        'Created motion control algorithms that improved hardware precision.',
        'Integrated disparate product components using protobuf based communication.'
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
      contributions: [
        'Developed trajectory optimisation algorithms for aerospace use cases.'
      ]
    },
    {
      role: 'Junior Web Developer',
      company: 'Mr. Brooks Private Marketing',
      location: 'Saint Petersburg, Russia',
      period: 'Dec 2013 - Dec 2014',
      technologies: ['WordPress', 'JavaScript', 'CSS'],
      summary: 'Delivered marketing websites and branding assets.',
      contributions: [
        'Implemented custom WordPress themes with interactive JavaScript features.',
        'Collaborated with designers on typography assets.'
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
  presentations: [
    {
      title: 'Think like a graph',
      event: 'FProg SPb meetup',
      year: '2019',
      url: 'https://youtu.be/BPB5omKK4Tc'
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
    }
  ],
  interests: ['Robotics', '3D printing', 'AI research', 'Efficient delivery workflows']
}

export default profileData
