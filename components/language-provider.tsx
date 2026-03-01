"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Translations
const translations = {
  pt: {
    // Navbar
    resources: "Recursos",
    testimonials: "Depoimentos",
    pricing: "Preços",
    contact: "Contato",
    login: "Entrar",
    startFree: "Começar Grátis",

    // Theme
    toggleTheme: "Alternar tema",
    lightTheme: "Claro",
    darkTheme: "Escuro",
    systemTheme: "Sistema",

    // Hero
    heroTitle: "Automatize seu negócio com inteligência artificial",
    heroSubtitle:
      "Nossa plataforma de automação inteligente ajuda empresas a economizar tempo, reduzir custos e aumentar a produtividade com soluções personalizadas.",
    startNow: "Começar Agora",
    seeDemo: "Ver Demonstração",
    trustedBy: "Mais de 2.000 empresas confiam em nós",

    // Nichos (carrossel)
    nichesTitle: "Atendemos os principais profissionais",
    nichesSubtitle: "Soluções de automação sob medida para quem precisa de agilidade, segurança e resultados.",
    nicheMedicos: "Médicos",
    nicheMedicosDesc: "Agendamento inteligente, lembretes de consulta e prontuários organizados. Foque no paciente.",
    nicheAdvogados: "Advogados",
    nicheAdvogadosDesc: "Prazos processuais, clientes engajados e comunicação profissional automatizada.",
    nicheContadores: "Contadores",
    nicheContadoresDesc: "Documentos em dia, cobrança humanizada e gestão de múltiplos clientes simplificada.",
    nicheDentistas: "Dentistas",
    nicheDentistasDesc: "Remarcação de consultas, confirmações e fidelização de pacientes no piloto automático.",
    nichesBadge: "Principais clientes",
    seeHowToAutomate: "Ver como automatizar",

    // Stats
    activeClients: "Clientes Ativos",
    hoursSaved: "Horas Economizadas/Semana",
    productivityIncrease: "Aumento de Produtividade",
    customerRating: "Avaliação dos Clientes",

    // Features
    featuresTitle: "Transforme seu negócio com automação inteligente",
    featuresSubtitle:
      "Nossa plataforma oferece soluções completas para automatizar processos, analisar dados e impulsionar o crescimento do seu negócio.",

    // Feature Cards
    intelligentAutomation: "Automação Inteligente",
    intelligentAutomationDesc:
      "Automatize tarefas repetitivas e processos complexos com nossa tecnologia de IA avançada.",
    customWorkflows: "Fluxos de trabalho personalizados",
    appIntegrations: "Integração com mais de 100 aplicativos",
    ruleBasedAutomation: "Automação baseada em regras e IA",

    fastProcessing: "Processamento Rápido",
    fastProcessingDesc: "Processe grandes volumes de dados em tempo real com nossa infraestrutura de alta performance.",
    realTimeProcessing: "Processamento em tempo real",
    autoScaling: "Escalabilidade automática",
    lowLatency: "Baixa latência garantida",

    advancedAnalytics: "Análise Avançada",
    advancedAnalyticsDesc: "Obtenha insights valiosos com nossas ferramentas de análise e visualização de dados.",
    customDashboards: "Dashboards personalizáveis",
    automatedReports: "Relatórios automatizados",
    aiPredictions: "Previsões baseadas em IA",

    globalAccess: "Acessibilidade Global",
    globalAccessDesc: "Acesse sua plataforma de qualquer lugar, a qualquer momento, em qualquer dispositivo.",
    responsiveInterface: "Interface responsiva",
    nativeApps: "Aplicativos móveis nativos",
    realTimeSync: "Sincronização em tempo real",

    advancedSecurity: "Segurança Avançada",
    advancedSecurityDesc: "Proteja seus dados com nossa infraestrutura segura e conformidade com regulamentações.",
    endToEndEncryption: "Criptografia de ponta a ponta",
    lgpdCompliance: "Conformidade com LGPD",
    twoFactorAuth: "Autenticação de dois fatores",

    continuousIntegration: "Integração Contínua",
    continuousIntegrationDesc: "Integre facilmente com suas ferramentas existentes e expanda conforme necessário.",
    restfulApis: "APIs RESTful",
    customWebhooks: "Webhooks personalizáveis",
    prebuiltConnectors: "Conectores pré-construídos",

    // Testimonials
    testimonialsTitle: "O que nossos clientes dizem",
    testimonialsSubtitle: "Descubra como a WebBotss está transformando negócios em todo o Brasil.",

    // Pricing
    pricingTitle: "Planos para empresas de todos os tamanhos",
    pricingSubtitle: "Escolha o plano ideal para o seu negócio e comece a transformar seus processos hoje mesmo.",
    monthly: "Mensal",
    semiannual: "Semestral",
    annual: "Anual",
    saveWith: "Economize",
    withPlan: "com o plano",

    starter: "Iniciante",
    starterDesc: "Ideal para pequenas empresas e startups.",
    professional: "Profissional",
    professionalDesc: "Perfeito para empresas em crescimento.",
    enterprise: "Empresarial",
    enterpriseDesc: "Para empresas de médio e grande porte.",

    month: "mês",
    billedSemiannually: "Faturado semestralmente",
    billedAnnually: "Faturado anualmente",

    // Plan features
    upToUsers: "Até",
    users: "usuários",
    unlimitedUsers: "Usuários ilimitados",
    automations: "automações",
    unlimitedAutomations: "Automações ilimitadas",
    basicIntegrations: "Integrações básicas",
    advancedIntegrations: "Integrações avançadas",
    allIntegrations: "Todas as integrações",
    emailSupport: "Suporte por email",
    prioritySupport: "Suporte prioritário",
    support247: "Suporte 24/7",
    storage: "Armazenamento de",
    unlimitedStorage: "Armazenamento ilimitado",
    basicDataAnalysis: "Análise de dados básica",
    advancedDataAnalysis: "Análise de dados avançada",
    customApi: "API personalizada",

    // WhatsApp Campaign
    whatsappCampaigns: "Campanhas WhatsApp",
    whatsappCampaignsDesc: "Lance campanhas de marketing eficientes diretamente pelo WhatsApp com recursos avançados.",
    massBroadcast: "Mensagens em massa com multimídia",
    campaignScheduling: "Agendamento de campanhas",
    audienceSegmentation: "Segmentação de público",
    advancedNumericBot: "Robô Numérico Avançado",

    // Pricing section
    pricingBadge: "Preços",
    popular: "Popular",
    getStarted: "Começar Agora",
    numericBot: "Robô Numérico",
    highlyCustomizable: "Altamente customizável",
    dashboardInsights: "Dashboard com dados para insights",
    support24_7NoInterruption: "Atendimento 24/7 sem interrupções",
    upTo5Users: "Até 5 usuários",
    allStarterBenefits: "Todos os benefícios do plano Iniciante",
    aiSupport: "Atendimento com inteligência artificial",
    massMessagingMultimedia: "Mensagem em massa com multimídia",
    multichannelIntegration: "Integração Multicanal",
    upTo20Users: "Até 20 usuários",
    allProfessionalBenefits: "Todos os benefícios do plano Profissional",
    unlimitedSending: "Envio ilimitado",
    aiAgentMissions: "Agente de IA que cumpre missões",
    advancedContextUnderstanding: "Entendimento de contexto avançado",
    dedicatedSupport247: "Suporte 24/7 dedicado",

    // CTA
    ctaTitle: "Pronto para transformar seu negócio?",
    ctaSubtitle:
      "Junte-se a milhares de empresas que já estão economizando tempo e dinheiro com nossas soluções de automação.",
    startFreeNow: "Começar Gratuitamente",
    talkToExpert: "Falar com um Especialista",
    freeTrial: "Teste grátis por 14 dias. Sem necessidade de cartão de crédito.",

    // Footer
    footerDesc:
      "Soluções de automação inteligente para empresas de todos os tamanhos. Transforme seu negócio com tecnologia de ponta.",
    product: "Produto",
    features: "Recursos",
    useCases: "Casos de Uso",
    integrations: "Integrações",
    company: "Empresa",
    aboutUs: "Sobre Nós",
    blog: "Blog",
    careers: "Carreiras",
    clients: "Clientes",
    partners: "Parceiros",
    support: "Suporte",
    help: "Ajuda",
    documentation: "Documentação",
    status: "Status",
    allRightsReserved: "Todos os direitos reservados.",
    termsOfService: "Termos de Serviço",
    privacyPolicy: "Política de Privacidade",
    cookies: "Cookies",

    // Language
    language: "Idioma",
    portuguese: "Português",
    english: "Inglês",
    spanish: "Espanhol",

    // About
    aboutTitle: "Conheça a WebBotss",
    aboutSubtitle:
      "Somos uma empresa inovadora focada em transformar negócios através da automação inteligente e soluções tecnológicas de ponta.",
    ourHistory: "Nossa História",
    ourHistoryDesc:
      "Fundada em 2020, a WebBotss nasceu com a missão de simplificar processos empresariais através da tecnologia, tornando empresas mais eficientes e competitivas.",
    ourMission: "Nossa Missão",
    ourMissionDesc:
      "Capacitar empresas de todos os tamanhos com soluções de automação inteligente que impulsionam a produtividade e reduzem custos operacionais.",
    ourTeam: "Nossa Equipe",
    ourTeamDesc:
      "Contamos com uma equipe diversificada de especialistas em tecnologia, IA e automação, comprometidos em oferecer as melhores soluções para nossos clientes.",
    ourValues: "Nossos Valores",
    ourValuesDesc:
      "Inovação, excelência, integridade e foco no cliente são os pilares que guiam nossas ações e decisões em todos os níveis da empresa.",
    contactUs: "Entre em contato conosco em",
    toKnowMore: "para saber como podemos ajudar a transformar seu negócio.",

    // FAQ
    faq: "Perguntas Frequentes",
    faqTitle: "Perguntas Frequentes",
    faqSubtitle: "Encontre respostas para as perguntas mais comuns sobre nossos serviços.",
    searchFaq: "Buscar perguntas frequentes...",
    noResults: "Nenhum resultado encontrado",
    noResultsDesc:
      "Não encontramos nenhuma pergunta correspondente à sua busca. Tente outros termos ou entre em contato com nosso suporte.",
    viewAllFaq: "Ver todas as perguntas",

    // Categorias de FAQ
    faqCategoryGeneral: "Geral",
    faqCategoryPricing: "Preços e Planos",
    faqCategoryImplementation: "Implementação",
    faqCategoryIntegration: "Integrações",
    faqCategoryWhatsapp: "WhatsApp Business",
    faqCategorySupport: "Suporte",
    faqCategorySecurity: "Segurança e Privacidade",

    // Blog
    blog: "Blog",
    blogTitle: "Blog da WebBotss",
    blogSubtitle: "Artigos, tutoriais e novidades sobre automação, IA e transformação digital para seu negócio.",
    readMore: "Ler mais",
    viewAllArticles: "Ver todos os artigos",
    backToBlog: "Voltar para o blog",
    category: "Categoria",
    all: "Todos",
    noPostsFound: "Nenhum post encontrado",
    noPostsInCategory: "Não há posts disponíveis nesta categoria no momento.",
    viewAllPosts: "Ver todos os posts",
    relatedPosts: "Posts Relacionados",
    tags: "Tags",
    share: "Compartilhar",
    readingTime: "min de leitura",

    // Formulários
    name: "Nome",
    yourFullName: "Seu nome completo",
    email: "Email",
    yourEmail: "seu@email.com",
    message: "Mensagem",
    describeHowWeCanHelp: "Descreva como podemos ajudar seu negócio",
    sending: "Enviando...",
    sendMessage: "Enviar Mensagem",
    messageSent: "Mensagem Enviada!",
    contactTeamWillReach: "Nossa equipe entrará em contato em breve para agendar uma conversa com um especialista.",
    backToHomepage: "Voltar para a página inicial",
    errorSendingMessage: "Erro ao enviar mensagem",
    pleaseTryAgainLater: "Por favor, tente novamente mais tarde.",
    requestDemo: "Solicitar Demonstração",
    fillFormBelowDemo: "Preencha o formulário abaixo para agendar uma demonstração personalizada da WebBotss.",
    needs: "Necessidades",
    tellUsAboutNeeds: "Conte-nos sobre suas necessidades e como podemos ajudar",
    demoRequested: "Demonstração Solicitada!",
    willContactSoon: "Entraremos em contato em breve para agendar sua demonstração personalizada.",
    errorSendingRequest: "Erro ao enviar solicitação",
  },
  en: {
    // Navbar
    resources: "Features",
    testimonials: "Testimonials",
    pricing: "Pricing",
    contact: "Contact",
    login: "Login",
    startFree: "Start Free",

    // Theme
    toggleTheme: "Toggle theme",
    lightTheme: "Light",
    darkTheme: "Dark",
    systemTheme: "System",

    // Hero
    heroTitle: "Automate your business with artificial intelligence",
    heroSubtitle:
      "Our intelligent automation platform helps companies save time, reduce costs, and increase productivity with customized solutions.",
    startNow: "Start Now",
    seeDemo: "See Demo",
    trustedBy: "Over 2,000 companies trust us",

    // Nichos (carousel)
    nichesTitle: "We serve top professionals",
    nichesSubtitle: "Tailored automation for those who need speed, security and results.",
    nicheMedicos: "Doctors",
    nicheMedicosDesc: "Smart scheduling, appointment reminders and organized records. Focus on the patient.",
    nicheAdvogados: "Lawyers",
    nicheAdvogadosDesc: "Court deadlines, engaged clients and professional automated communication.",
    nicheContadores: "Accountants",
    nicheContadoresDesc: "Documents on track, friendly billing and simplified multi-client management.",
    nicheDentistas: "Dentists",
    nicheDentistasDesc: "Rebooking, confirmations and patient retention on autopilot.",
    nichesBadge: "Key clients",
    seeHowToAutomate: "See how to automate",

    // Stats
    activeClients: "Active Clients",
    hoursSaved: "Hours Saved/Week",
    productivityIncrease: "Productivity Increase",
    customerRating: "Customer Rating",

    // Features
    featuresTitle: "Transform your business with intelligent automation",
    featuresSubtitle:
      "Our platform offers complete solutions to automate processes, analyze data, and drive business growth.",

    // Feature Cards
    intelligentAutomation: "Intelligent Automation",
    intelligentAutomationDesc: "Automate repetitive tasks and complex processes with our advanced AI technology.",
    customWorkflows: "Custom workflows",
    appIntegrations: "Integration with over 100 apps",
    ruleBasedAutomation: "Rule-based and AI automation",

    fastProcessing: "Fast Processing",
    fastProcessingDesc: "Process large volumes of data in real-time with our high-performance infrastructure.",
    realTimeProcessing: "Real-time processing",
    autoScaling: "Automatic scaling",
    lowLatency: "Guaranteed low latency",

    advancedAnalytics: "Advanced Analytics",
    advancedAnalyticsDesc: "Gain valuable insights with our data analysis and visualization tools.",
    customDashboards: "Customizable dashboards",
    automatedReports: "Automated reports",
    aiPredictions: "AI-based predictions",

    globalAccess: "Global Accessibility",
    globalAccessDesc: "Access your platform from anywhere, anytime, on any device.",
    responsiveInterface: "Responsive interface",
    nativeApps: "Native mobile apps",
    realTimeSync: "Real-time synchronization",

    advancedSecurity: "Advanced Security",
    advancedSecurityDesc: "Protect your data with our secure infrastructure and regulatory compliance.",
    endToEndEncryption: "End-to-end encryption",
    lgpdCompliance: "GDPR compliance",
    twoFactorAuth: "Two-factor authentication",

    continuousIntegration: "Continuous Integration",
    continuousIntegrationDesc: "Easily integrate with your existing tools and expand as needed.",
    restfulApis: "RESTful APIs",
    customWebhooks: "Custom webhooks",
    prebuiltConnectors: "Pre-built connectors",

    // Testimonials
    testimonialsTitle: "What our customers say",
    testimonialsSubtitle: "Discover how WebBotss is transforming businesses around the world.",

    // Pricing
    pricingTitle: "Plans for businesses of all sizes",
    pricingSubtitle: "Choose the ideal plan for your business and start transforming your processes today.",
    monthly: "Monthly",
    semiannual: "Semi-annual",
    annual: "Annual",
    saveWith: "Save",
    withPlan: "with the",

    starter: "Starter",
    starterDesc: "Ideal for small businesses and startups.",
    professional: "Professional",
    professionalDesc: "Perfect for growing companies.",
    enterprise: "Enterprise",
    enterpriseDesc: "For medium and large companies.",

    month: "month",
    billedSemiannually: "Billed semi-annually",
    billedAnnually: "Billed annually",

    // Plan features
    upToUsers: "Up to",
    users: "users",
    unlimitedUsers: "Unlimited users",
    automations: "automations",
    unlimitedAutomations: "Unlimited automations",
    basicIntegrations: "Basic integrations",
    advancedIntegrations: "Advanced integrations",
    allIntegrations: "All integrations",
    emailSupport: "Email support",
    prioritySupport: "Priority support",
    support247: "24/7 support",
    storage: "Storage",
    unlimitedStorage: "Unlimited storage",
    basicDataAnalysis: "Basic data analysis",
    advancedDataAnalysis: "Advanced data analysis",
    customApi: "Custom API",

    // WhatsApp Campaign
    whatsappCampaigns: "WhatsApp Campaigns",
    whatsappCampaignsDesc: "Launch efficient marketing campaigns directly through WhatsApp with advanced features.",
    massBroadcast: "Mass messaging with multimedia",
    campaignScheduling: "Campaign scheduling",
    audienceSegmentation: "Audience segmentation",
    advancedNumericBot: "Advanced Numeric Bot",

    // Pricing section
    pricingBadge: "Pricing",
    popular: "Popular",
    getStarted: "Get Started",
    numericBot: "Numeric Bot",
    highlyCustomizable: "Highly customizable",
    dashboardInsights: "Dashboard with data for insights",
    support24_7NoInterruption: "24/7 support without interruption",
    upTo5Users: "Up to 5 users",
    allStarterBenefits: "All Starter plan benefits",
    aiSupport: "AI-powered support",
    massMessagingMultimedia: "Mass messaging with multimedia",
    multichannelIntegration: "Multichannel integration",
    upTo20Users: "Up to 20 users",
    allProfessionalBenefits: "All Professional plan benefits",
    unlimitedSending: "Unlimited sending",
    aiAgentMissions: "AI agent that completes missions",
    advancedContextUnderstanding: "Advanced context understanding",
    dedicatedSupport247: "Dedicated 24/7 support",

    // CTA
    ctaTitle: "Ready to transform your business?",
    ctaSubtitle: "Join thousands of companies already saving time and money with our automation solutions.",
    startFreeNow: "Start Free",
    talkToExpert: "Talk to an Expert",
    freeTrial: "14-day free trial. No credit card required.",

    // Footer
    footerDesc:
      "Intelligent automation solutions for businesses of all sizes. Transform your business with cutting-edge technology.",
    product: "Product",
    features: "Features",
    useCases: "Use Cases",
    integrations: "Integrations",
    company: "Company",
    aboutUs: "About Us",
    blog: "Blog",
    careers: "Careers",
    clients: "Clients",
    partners: "Partners",
    support: "Support",
    help: "Help",
    allRightsReserved: "All rights reserved.",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    cookies: "Cookies",

    // Language
    language: "Language",
    portuguese: "Portuguese",
    english: "English",
    spanish: "Spanish",

    // About
    aboutTitle: "Meet WebBotss",
    aboutSubtitle:
      "We are an innovative company focused on transforming businesses through intelligent automation and cutting-edge technology solutions.",
    ourHistory: "Our History",
    ourHistoryDesc:
      "Founded in 2020, WebBotss was born with the mission of simplifying business processes through technology, making companies more efficient and competitive.",
    ourMission: "Our Mission",
    ourMissionDesc:
      "To empower companies of all sizes with intelligent automation solutions that boost productivity and reduce operational costs.",
    ourTeam: "Our Team",
    ourTeamDesc:
      "We have a diverse team of experts in technology, AI, and automation, committed to offering the best solutions for our clients.",
    ourValues: "Our Values",
    ourValuesDesc:
      "Innovation, excellence, integrity, and customer focus are the pillars that guide our actions and decisions at all levels of the company.",
    contactUs: "Contact us at",
    toKnowMore: "to learn how we can help transform your business.",

    // FAQ
    faq: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to the most common questions about our services.",
    searchFaq: "Search frequently asked questions...",
    noResults: "No results found",
    noResultsDesc: "We couldn't find any questions matching your search. Try different terms or contact our support.",
    viewAllFaq: "View all questions",

    // Categorias de FAQ
    faqCategoryGeneral: "General",
    faqCategoryPricing: "Pricing & Plans",
    faqCategoryImplementation: "Implementation",
    faqCategoryIntegration: "Integrations",
    faqCategoryWhatsapp: "WhatsApp Business",
    faqCategorySupport: "Support",
    faqCategorySecurity: "Security & Privacy",

    // Blog
    blog: "Blog",
    blogTitle: "WebBotss Blog",
    blogSubtitle: "Articles, tutorials, and news about automation, AI, and digital transformation for your business.",
    readMore: "Read more",
    viewAllArticles: "View all articles",
    backToBlog: "Back to blog",
    category: "Category",
    all: "All",
    noPostsFound: "No posts found",
    noPostsInCategory: "There are no posts available in this category at the moment.",
    viewAllPosts: "View all posts",
    relatedPosts: "Related Posts",
    tags: "Tags",
    share: "Share",
    readingTime: "min read",

    // Formulários
    name: "Name",
    yourFullName: "Your full name",
    email: "Email",
    yourEmail: "your@email.com",
    message: "Message",
    describeHowWeCanHelp: "Describe how we can help your business",
    sending: "Sending...",
    sendMessage: "Send Message",
    messageSent: "Message Sent!",
    contactTeamWillReach: "Our team will contact you soon to schedule a conversation with an expert.",
    backToHomepage: "Back to homepage",
    errorSendingMessage: "Error sending message",
    pleaseTryAgainLater: "Please try again later.",
    requestDemo: "Request Demo",
    fillFormBelowDemo: "Fill out the form below to schedule a personalized demo of WebBotss.",
    needs: "Needs",
    tellUsAboutNeeds: "Tell us about your needs and how we can help",
    demoRequested: "Demo Requested!",
    willContactSoon: "We will contact you soon to schedule your personalized demo.",
    errorSendingRequest: "Error sending request",
  },
  es: {
    // Navbar
    resources: "Recursos",
    testimonials: "Testimonios",
    pricing: "Precios",
    contact: "Contacto",
    login: "Iniciar Sesión",
    startFree: "Comenzar Gratis",

    // Theme
    toggleTheme: "Cambiar tema",
    lightTheme: "Claro",
    darkTheme: "Oscuro",
    systemTheme: "Sistema",

    // Hero
    heroTitle: "Automatice su negocio con inteligencia artificial",
    heroSubtitle:
      "Nuestra plataforma de automatización inteligente ayuda a las empresas a ahorrar tiempo, reducir costos y aumentar la productividad con soluciones personalizadas.",
    startNow: "Comenzar Ahora",
    seeDemo: "Ver Demostración",
    trustedBy: "Más de 2.000 empresas confían en nosotros",

    // Nichos (carrusel)
    nichesTitle: "Atendemos a los principales profesionales",
    nichesSubtitle: "Soluciones de automatización a medida para quien necesita agilidad, seguridad y resultados.",
    nicheMedicos: "Médicos",
    nicheMedicosDesc: "Agendamiento inteligente, recordatorios y expedientes organizados. Enfócate en el paciente.",
    nicheAdvogados: "Abogados",
    nicheAdvogadosDesc: "Plazos procesales, clientes comprometidos y comunicación profesional automatizada.",
    nicheContadores: "Contadores",
    nicheContadoresDesc: "Documentos al día, cobranza humanizada y gestión de múltiples clientes simplificada.",
    nicheDentistas: "Dentistas",
    nicheDentistasDesc: "Reprogramación, confirmaciones y fidelización de pacientes en piloto automático.",
    nichesBadge: "Principales clientes",
    seeHowToAutomate: "Ver cómo automatizar",

    // Stats
    activeClients: "Clientes Activos",
    hoursSaved: "Horas Ahorradas/Semana",
    productivityIncrease: "Aumento de Productividad",
    customerRating: "Calificación de Clientes",

    // Features
    featuresTitle: "Transforme su negocio con automatización inteligente",
    featuresSubtitle:
      "Nuestra plataforma ofrece soluciones completas para automatizar procesos, analizar datos e impulsar el crecimiento de su negocio.",

    // Feature Cards
    intelligentAutomation: "Automatización Inteligente",
    intelligentAutomationDesc:
      "Automatice tareas repetitivas y procesos complejos con nuestra tecnología de IA avanzada.",
    customWorkflows: "Flujos de trabajo personalizados",
    appIntegrations: "Integración con más de 100 aplicaciones",
    ruleBasedAutomation: "Automatización basada en reglas e IA",

    fastProcessing: "Procesamiento Rápido",
    fastProcessingDesc:
      "Procese grandes volúmenes de datos en tiempo real con nuestra infraestructura de alto rendimiento.",
    realTimeProcessing: "Procesamiento en tiempo real",
    autoScaling: "Escalabilidad automática",
    lowLatency: "Baja latencia garantizada",

    advancedAnalytics: "Análisis Avanzado",
    advancedAnalyticsDesc:
      "Obtenga información valiosa con nuestras herramientas de análisis y visualización de datos.",
    customDashboards: "Paneles personalizables",
    automatedReports: "Informes automatizados",
    aiPredictions: "Predicciones basadas en IA",

    globalAccess: "Accesibilidad Global",
    globalAccessDesc: "Acceda a su plataforma desde cualquier lugar, en cualquier momento, en cualquier dispositivo.",
    responsiveInterface: "Interfaz responsiva",
    nativeApps: "Aplicaciones móviles nativas",
    realTimeSync: "Sincronización en tiempo real",

    advancedSecurity: "Seguridad Avanzada",
    advancedSecurityDesc: "Proteja sus datos con nuestra infraestructura segura y cumplimiento normativo.",
    endToEndEncryption: "Cifrado de extremo a extremo",
    lgpdCompliance: "Cumplimiento con RGPD",
    twoFactorAuth: "Autenticación de dos factores",

    continuousIntegration: "Integración Continua",
    continuousIntegrationDesc: "Integre fácilmente con sus herramientas existentes y expanda según sea necesario.",
    restfulApis: "APIs RESTful",
    customWebhooks: "Webhooks personalizados",
    prebuiltConnectors: "Conectores preconfigurados",

    // Testimonials
    testimonialsTitle: "Lo que dicen nuestros clientes",
    testimonialsSubtitle: "Descubra cómo WebBotss está transformando negocios en todo el mundo.",

    // Pricing
    pricingTitle: "Planes para empresas de todos los tamaños",
    pricingSubtitle: "Elija el plan ideal para su negocio y comience a transformar sus procesos hoy mismo.",
    monthly: "Mensual",
    semiannual: "Semestral",
    annual: "Anual",
    saveWith: "Ahorre",
    withPlan: "con el plan",

    starter: "Inicial",
    starterDesc: "Ideal para pequeñas empresas y startups.",
    professional: "Profesional",
    professionalDesc: "Perfecto para empresas en crecimiento.",
    enterprise: "Empresarial",
    enterpriseDesc: "Para empresas medianas y grandes.",

    month: "mes",
    billedSemiannually: "Facturado semestralmente",
    billedAnnually: "Facturado anualmente",

    // Plan features
    upToUsers: "Hasta",
    users: "usuarios",
    unlimitedUsers: "Usuarios ilimitados",
    automations: "automatizaciones",
    unlimitedAutomations: "Automatizaciones ilimitadas",
    basicIntegrations: "Integraciones básicas",
    advancedIntegrations: "Integraciones avanzadas",
    allIntegrations: "Todas las integraciones",
    emailSupport: "Soporte por email",
    prioritySupport: "Soporte prioritario",
    support247: "Soporte 24/7",
    storage: "Almacenamiento de",
    unlimitedStorage: "Almacenamiento ilimitado",
    basicDataAnalysis: "Análisis de datos básico",
    advancedDataAnalysis: "Análisis de datos avanzado",
    customApi: "API personalizada",

    // WhatsApp Campaign
    whatsappCampaigns: "Campañas de WhatsApp",
    whatsappCampaignsDesc:
      "Lance campañas de marketing eficientes directamente a través de WhatsApp con funciones avanzadas.",
    massBroadcast: "Mensajes masivos con multimedia",
    campaignScheduling: "Programación de campañas",
    audienceSegmentation: "Segmentación de audiencia",
    advancedNumericBot: "Bot Numérico Avanzado",

    // Pricing section
    pricingBadge: "Precios",
    popular: "Popular",
    getStarted: "Comenzar Ahora",
    numericBot: "Bot Numérico",
    highlyCustomizable: "Altamente personalizable",
    dashboardInsights: "Dashboard con datos para insights",
    support24_7NoInterruption: "Atención 24/7 sin interrupciones",
    upTo5Users: "Hasta 5 usuarios",
    allStarterBenefits: "Todos los beneficios del plan Inicial",
    aiSupport: "Atención con inteligencia artificial",
    massMessagingMultimedia: "Mensajes masivos con multimedia",
    multichannelIntegration: "Integración multicanal",
    upTo20Users: "Hasta 20 usuarios",
    allProfessionalBenefits: "Todos los beneficios del plan Profesional",
    unlimitedSending: "Envío ilimitado",
    aiAgentMissions: "Agente de IA que cumple misiones",
    advancedContextUnderstanding: "Comprensión de contexto avanzada",
    dedicatedSupport247: "Soporte 24/7 dedicado",

    // CTA
    ctaTitle: "¿Listo para transformar su negocio?",
    ctaSubtitle:
      "Únase a miles de empresas que ya están ahorrando tiempo y dinero con nuestras soluciones de automatización.",
    startFreeNow: "Comenzar Gratis",
    talkToExpert: "Hablar con un Experto",
    freeTrial: "Prueba gratuita de 14 días. No se requiere tarjeta de crédito.",

    // Footer
    footerDesc:
      "Soluciones de automatización inteligente para empresas de todos los tamaños. Transforme su negocio con tecnología de vanguardia.",
    product: "Producto",
    features: "Características",
    useCases: "Casos de Uso",
    integrations: "Integraciones",
    company: "Empresa",
    aboutUs: "Sobre Nosotros",
    blog: "Blog",
    careers: "Carreras",
    clients: "Clientes",
    partners: "Socios",
    support: "Soporte",
    help: "Ayuda",
    allRightsReserved: "Todos los derechos reservados.",
    termsOfService: "Términos de Servicio",
    privacyPolicy: "Política de Privacidad",
    cookies: "Cookies",

    // Language
    language: "Idioma",
    portuguese: "Portugués",
    english: "Inglés",
    spanish: "Español",

    // About
    aboutTitle: "Conozca WebBotss",
    aboutSubtitle:
      "Somos una empresa innovadora enfocada en transformar negocios a través de la automatización inteligente y soluciones tecnológicas de vanguardia.",
    ourHistory: "Nuestra Historia",
    ourHistoryDesc:
      "Fundada en 2020, WebBotss nació con la misión de simplificar procesos empresariales a través de la tecnología, haciendo que las empresas sean más eficientes y competitivas.",
    ourMission: "Nuestra Misión",
    ourMissionDesc:
      "Capacitar a empresas de todos los tamaños con soluciones de automatización inteligente que impulsen la productividad y reduzcan los costos operativos.",
    ourTeam: "Nuestro Equipo",
    ourTeamDesc:
      "Contamos con un equipo diverso de expertos en tecnología, IA y automatización, comprometidos a ofrecer las mejores soluciones para nuestros clientes.",
    ourValues: "Nuestros Valores",
    ourValuesDesc:
      "Innovación, excelencia, integridad y enfoque en el cliente son los pilares que guían nuestras acciones y decisiones en todos los niveles de la empresa.",
    contactUs: "Contáctenos en",
    toKnowMore: "para saber cómo podemos ayudar a transformar su negocio.",

    // FAQ
    faq: "Preguntas Frecuentes",
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Encuentre respuestas a las preguntas más comunes sobre nuestros servicios.",
    searchFaq: "Buscar preguntas frecuentes...",
    noResults: "No se encontraron resultados",
    noResultsDesc:
      "No encontramos ninguna pregunta que coincida con su búsqueda. Intente con otros términos o póngase en contacto con nuestro soporte.",
    viewAllFaq: "Ver todas las preguntas",

    // Categorias de FAQ
    faqCategoryGeneral: "General",
    faqCategoryPricing: "Precios y Planes",
    faqCategoryImplementation: "Implementación",
    faqCategoryIntegration: "Integraciones",
    faqCategoryWhatsapp: "WhatsApp Business",
    faqCategorySupport: "Soporte",
    faqCategorySecurity: "Seguridad y Privacidad",

    // Blog
    blog: "Blog",
    blogTitle: "Blog de WebBotss",
    blogSubtitle:
      "Artículos, tutoriales y novedades sobre automatización, IA y transformación digital para su negocio.",
    readMore: "Leer más",
    viewAllArticles: "Ver todos los artículos",
    backToBlog: "Volver al blog",
    category: "Categoría",
    all: "Todos",
    noPostsFound: "No se encontraron posts",
    noPostsInCategory: "No hay posts disponibles en esta categoría en este momento.",
    viewAllPosts: "Ver todos los posts",
    relatedPosts: "Posts Relacionados",
    tags: "Tags",
    share: "Compartir",
    readingTime: "min de lectura",

    // Formulários
    name: "Nombre",
    yourFullName: "Su nombre completo",
    email: "Email",
    yourEmail: "su@email.com",
    message: "Mensaje",
    describeHowWeCanHelp: "Describa cómo podemos ayudar a su negocio",
    sending: "Enviando...",
    sendMessage: "Enviar Mensaje",
    messageSent: "¡Mensaje Enviado!",
    contactTeamWillReach:
      "Nuestro equipo se pondrá en contacto en breve para programar una conversación con un experto.",
    backToHomepage: "Volver a la página de inicio",
    errorSendingMessage: "Error al enviar mensaje",
    pleaseTryAgainLater: "Por favor, inténtelo de nuevo más tarde.",
    requestDemo: "Solicitar Demo",
    fillFormBelowDemo:
      "Complete el formulario a continuación para programar una demostración personalizada de WebBotss.",
    needs: "Necesidades",
    tellUsAboutNeeds: "Cuéntenos sobre sus necesidades y cómo podemos ayudar",
    demoRequested: "¡Demo Solicitada!",
    willContactSoon: "Nos pondremos en contacto en breve para programar su demostración personalizada.",
    errorSendingRequest: "Error al enviar la solicitud",
  },
}

// Types
type Language = "pt" | "en" | "es"
type TranslationKey = keyof typeof translations.pt

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)

    // Check if there's a saved language preference
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && ["pt", "en", "es"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  // Update language and save to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)

      // Update html lang attribute
      document.documentElement.lang = lang
    }
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  }

  if (!mounted) {
    // Retorna null para evitar renderizar os filhos sem o Provider
    return null
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}

// Language switcher component
export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("pt")} className={language === "pt" ? "bg-accent" : ""}>
          {t("portuguese")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-accent" : ""}>
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")} className={language === "es" ? "bg-accent" : ""}>
          {t("spanish")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

