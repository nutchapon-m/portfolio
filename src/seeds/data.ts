export const menu: {label: string, link: string}[] = [
    {label: "Home", link: "/home"},
    {label: "Exp", link: "/experience"},
    {label: "Skills", link: "/skills"},
    // {label: "Certs", link: "/certificate"},
]

export const contacts: {label: string, link: string}[] = [
    {label: "email", link: ""},
    {label: "github", link: "https://github.com/nutchapon-m"},
    {label: "linkedin", link: "https://www.linkedin.com/in/nutchapon-metmaolee-822a72243/"},
 
]

export const expSteps = [
    {
      company: 'Swift Dynamics Co., Ltd., Bangkok, Thailand',
      position: 'Backend Developer',
      period: 'Nov 2024 - Present',
      description: [
        `- Concentrating efforts on designing and developing a variety of backend services while collaborating with fellow engineers through coding and code reviews.`,
        `- Tackling challenges to master backend engineering, deepen understanding of software architectural patterns (with a focus on microservices and event-driven architecture), and expand knowledge in DevSecOps and cloud technologies.`],
      type: 'work'
    },
    {
      company: 'Autocorp Holding Co., Ltd., KhonKaen, Thailand',
      position: 'Developer',
      period: 'Feb 2023 - Oct 2024',
      description: [
        `- Develop & Deploy RPA service using Python Selenium Framework.`,
        `- Develop & Deploy RESTful API KPI calculator service.`,
        `- Develop & Deploy RESTful API freeradius router authentication service.`,
        `- Develop & Deploy RESTful API router downtime checking service.`,
        `- Deploy web application by docker.`,
        `- Implement ELK stack for log monitoring.`,
        `- Implement Inficical platform to securely manage application configuration and secrets.`
      ],
      type: 'work'
    },
    {
      company: 'Progress Service Support Co., Ltd., KhonKaen, Thailand',
      position: 'Call Center Specialist',
      period: 'Jan 2022 - Apr 2022',
      description: [
        `- Consultation on using the K-PLUS application service.`,
        `- Unlock K-PLUS application.`,
        `- Providing another information’s financial service.`
      ],
      type: 'work'
    },
    {
      company: 'National Institute of Development Administration',
      position: 'Master of Public Administration',
      period: '2019 - 2023',
      description: [],
      type: 'education'
    },
];

export const skillSet = [
  {
    header: "OS",
    skills: [
      {name: "Ubuntu",  img:"https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg", link:"https://ubuntu.com/"},
    ],
  },
  {
    header: "Programming Languages ",
    skills: [
      {name: "Go",img:"https://www.vectorlogo.zone/logos/golang/golang-icon.svg",  link:"https://go.dev/"},
      {name: "Python",img:"https://www.vectorlogo.zone/logos/python/python-icon.svg",  link:"https://www.python.org/"},
      {name: "Javascript", img:"https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
      {name: "Rust", img:"https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg", link:"https://www.rust-lang.org/"},
    ]
  },
  {
    header: "Frontend",
    skills: [
      {name: "ReactTS", img:"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", link:"https://react.dev/"},
    ],
  },
  {
    header: "Backend",
    skills: [
      {name: "Django",img:"https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg",  link:"https://www.djangoproject.com/"},
      {name: "FastAPI", img:"https://upload.wikimedia.org/wikipedia/commons/1/1a/FastAPI_logo.svg", link:"https://fastapi.tiangolo.com/"},
      {name: "Fiber",img:"https://gofiber.io/assets/images/logo.svg",  link:"https://docs.gofiber.io/"},
    ],
  },
  {
    header: "Databases & Caches",
    skills: [
      {name: "Postgresql",img:"https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",  link:"https://www.postgresql.org/"},
      {name: "Mysql", img:"https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", link:"https://www.mysql.com/"},
      {name: "Mongodb",img:"https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",  link:"https://www.mongodb.com/"},
      {name: "Redis",img:"https://www.vectorlogo.zone/logos/redis/redis-icon.svg",  link:"https://redis.io/"},
      {name: "Elasticsearch",img:"https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",  link:"https://www.elastic.co/"},
    ],
  },
  {
    header: "Communication Technology & protocals",
    skills: [
      {name: "GRPC",img:"https://www.vectorlogo.zone/logos/grpcio/grpcio-ar21.svg",  link:"https://grpc.io/"},
      {name: "RabbitMQ", img:"https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-ar21.svg", link:"https://www.rabbitmq.com/"},
    ],
  },
  {
    header: "Infra & More",
    skills: [
      {name: "Git",img:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",  link:"https://git-scm.com/"},
      {name: "GitHub", img:"https://www.vectorlogo.zone/logos/github/github-icon.svg", link:"https://github.com/"},
      {name: "GitLab", img:"https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg", link:"https://about.gitlab.com/"},
      {name: "Docker", img:"https://www.vectorlogo.zone/logos/docker/docker-icon.svg", link:"https://www.docker.com/"},
      {name: "podman", img:"https://www.vectorlogo.zone/logos/podmanio/podmanio-icon.svg", link:"https://podman.io/"},
    ],
  },
]