export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  featured?: boolean;
  note?: string;
};

const github = "https://github.com/bely-lab";

export const projects: Project[] = [
  {
    title: "Eye health referral management system",
    category: "Full-stack · Health technology",
    description:
      "A system designed to connect eye hospitals and streamline patient information tracking across facilities. The project focuses on supporting referral workflows and continuity of information.",
    stack: ["Vue.js", "Node.js", "Express", "PostgreSQL"],
    href: `${github}/Eye_Health-referal-management-system`,
    featured: true,
  },
  {
    title: "Brain MRI analysis and deep learning",
    category: "Medical imaging · Deep learning",
    description:
      "A neuroimaging project covering brain MRI preprocessing, analysis and deep learning workflows using Python.",
    stack: ["Python", "Deep learning", "Neuroimaging"],
    href: `${github}/MRI_Alzhiemer_Deeplearning`,
    featured: true,
  },
  {
    title: "Sentiment analysis service",
    category: "Backend · Cloud",
    description:
      "A serverless sentiment analysis service built with Azure Functions. It explores REST APIs, text sentiment analysis, Cosmos DB storage and automated summaries.",
    stack: ["Python", "Azure Functions", "REST API", "Cosmos DB"],
    href: `${github}/SentimentService`,
    featured: true,
  },
  {
    title: "Reading-time prediction from text",
    category: "NLP · Cognitive data",
    description:
      "An investigation of whether sentence-level reading time can be predicted from text using the ZuCo eye-tracking corpus. It compares linguistic features, TF-IDF and BERT representations.",
    stack: ["Python", "NLP", "scikit-learn", "Transformers"],
    href: `${github}/zuco-reading-time-prediction`,
    featured: true,
  },
  {
    title: "Multi-agent job application assistant",
    category: "Applied AI · Agents",
    description:
      "A multi-agent assistant that analyses job descriptions, reviews CVs and supports the preparation of tailored application materials.",
    stack: ["Python", "CrewAI", "Hugging Face"],
    href: `${github}/multi-agent-job-application-assistant`,
  },
  {
    title: "Waste classification API",
    category: "Computer vision · API",
    description:
      "A REST API for image classification using transfer learning with ResNet50 and TensorFlow.",
    stack: ["Python", "Flask", "TensorFlow", "ResNet50"],
    href: `${github}/waste-classification-REST-api`,
  },
  {
    title: "Big data software analytics",
    category: "Data science · Software analytics",
    description:
      "Data-driven analysis of Agile Scrum velocity and system logs to explore software delivery performance, anomaly detection and predictive maintenance.",
    stack: ["Python", "Data analysis", "Machine learning"],
    href: `${github}/big-data-software-analytics`,
  },
  {
    title: "Rabies case classification",
    category: "Machine learning · Public health",
    description:
      "A classification project exploring rabies cases against other zoonotic disease cases using human case data.",
    stack: ["Python", "Machine learning", "Data analysis"],
    href: `${github}/Rabies-classfication`,
  },
];

export const thesis = {
  title: "Classification of experimentally induced stress using MEG and cardiac features with machine learning",
  description:
    "Master’s thesis investigating whether experimentally induced stress conditions can be distinguished using magnetoencephalography (MEG) features and cardiac features derived from ECG recordings.",
  methods: [
    "MEG signal preprocessing and spectral feature extraction",
    "ECG-derived cardiac feature analysis",
    "Nested group cross-validation",
    "Comparison of machine learning classifiers",
  ],
};
