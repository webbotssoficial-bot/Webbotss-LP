export interface FaqCategory {
    id: string
    name: string
  }
  
  export interface FaqItem {
    id: string
    category: string
    question: string
    answer: string
  }
  
  // Categorias de FAQ
  const faqCategories: FaqCategory[] = [
    { id: "geral", name: "Geral" },
    { id: "precos", name: "Preços e Planos" },
    { id: "implementacao", name: "Implementação" },
    { id: "integracao", name: "Integrações" },
    { id: "whatsapp", name: "WhatsApp Business" },
    { id: "suporte", name: "Suporte" },
    { id: "seguranca", name: "Segurança e Privacidade" },
  ]
  
  // Itens de FAQ
  const faqItems: FaqItem[] = [
    // Geral
    {
      id: "o-que-e-webbotss",
      category: "geral",
      question: "O que é a WebBotss?",
      answer: `
        <p>A WebBotss é uma plataforma de automação inteligente que ajuda empresas a economizar tempo, reduzir custos e aumentar a produtividade. Oferecemos soluções personalizadas para automatizar processos, melhorar o atendimento ao cliente e impulsionar o crescimento do seu negócio.</p>
        <p>Nossa plataforma inclui recursos como:</p>
        <ul>
          <li>Robô Numérico Avançado para automação de processos</li>
          <li>Campanhas de WhatsApp com recursos avançados</li>
          <li>Análise de dados e dashboards personalizáveis</li>
          <li>Integrações com diversas ferramentas e sistemas</li>
          <li>Segurança avançada e conformidade com LGPD</li>
        </ul>
      `,
    },
    {
      id: "quem-pode-usar",
      category: "geral",
      question: "Quem pode usar a WebBotss?",
      answer: `
        <p>A WebBotss foi projetada para atender empresas de todos os tamanhos e segmentos. Nossa plataforma é utilizada por:</p>
        <ul>
          <li><strong>Pequenas empresas e startups</strong> que buscam automatizar processos para crescer sem aumentar custos</li>
          <li><strong>Empresas de médio porte</strong> que desejam otimizar operações e melhorar a experiência do cliente</li>
          <li><strong>Grandes corporações</strong> que precisam de soluções escaláveis e personalizadas para automação</li>
        </ul>
        <p>Independentemente do tamanho da sua empresa, temos um plano que se adapta às suas necessidades.</p>
      `,
    },
    {
      id: "beneficios-automacao",
      category: "geral",
      question: "Quais são os principais benefícios da automação com a WebBotss?",
      answer: `
        <p>A automação com a WebBotss traz diversos benefícios para o seu negócio:</p>
        <ul>
          <li><strong>Economia de tempo:</strong> Automatize tarefas repetitivas e libere sua equipe para atividades estratégicas</li>
          <li><strong>Redução de custos:</strong> Diminua despesas operacionais e otimize recursos</li>
          <li><strong>Aumento de produtividade:</strong> Faça mais com menos, aumentando a eficiência da sua equipe</li>
          <li><strong>Melhoria no atendimento:</strong> Ofereça respostas rápidas e consistentes aos seus clientes</li>
          <li><strong>Escalabilidade:</strong> Cresça seu negócio sem precisar aumentar proporcionalmente sua equipe</li>
          <li><strong>Redução de erros:</strong> Minimize erros humanos em processos críticos</li>
          <li><strong>Insights valiosos:</strong> Obtenha dados e análises para tomar decisões mais informadas</li>
        </ul>
        <p>Nossos clientes relatam, em média, um aumento de 40% na produtividade após implementar nossas soluções.</p>
      `,
    },
    {
      id: "casos-uso",
      category: "geral",
      question: "Quais são os principais casos de uso da WebBotss?",
      answer: `
        <p>A WebBotss pode ser aplicada em diversos cenários e departamentos:</p>
        <ul>
          <li><strong>Marketing e Vendas:</strong> Automação de campanhas, qualificação de leads, follow-up de clientes</li>
          <li><strong>Atendimento ao Cliente:</strong> Chatbots, respostas automáticas, triagem de tickets</li>
          <li><strong>Recursos Humanos:</strong> Recrutamento, onboarding, gestão de férias e benefícios</li>
          <li><strong>Financeiro:</strong> Emissão de notas fiscais, conciliação bancária, cobrança</li>
          <li><strong>Operações:</strong> Gestão de estoque, logística, agendamentos</li>
          <li><strong>TI:</strong> Monitoramento de sistemas, resolução de problemas comuns</li>
        </ul>
        <p>Independentemente do seu setor, temos soluções que podem ser adaptadas às necessidades específicas do seu negócio.</p>
      `,
    },
    {
      id: "diferenciais",
      category: "geral",
      question: "O que diferencia a WebBotss de outras soluções de automação?",
      answer: `
        <p>A WebBotss se destaca no mercado por diversos fatores:</p>
        <ul>
          <li><strong>Facilidade de uso:</strong> Interface intuitiva que não exige conhecimentos técnicos avançados</li>
          <li><strong>Personalização:</strong> Soluções adaptadas às necessidades específicas do seu negócio</li>
          <li><strong>Integração completa:</strong> Conecte-se facilmente com as ferramentas que você já utiliza</li>
          <li><strong>Suporte especializado:</strong> Equipe dedicada para ajudar em todas as etapas</li>
          <li><strong>Tecnologia avançada:</strong> Utilizamos IA e machine learning para oferecer resultados superiores</li>
          <li><strong>Escalabilidade:</strong> Nossas soluções crescem junto com o seu negócio</li>
          <li><strong>Resultados comprovados:</strong> Casos de sucesso em diversos segmentos</li>
        </ul>
        <p>Além disso, somos uma empresa brasileira, o que facilita o suporte, entendimento das necessidades locais e conformidade com legislações nacionais.</p>
      `,
    },
  
    // Preços e Planos
    {
      id: "planos-disponiveis",
      category: "precos",
      question: "Quais planos a WebBotss oferece?",
      answer: `
        <p>A WebBotss oferece três planos principais para atender diferentes necessidades e tamanhos de empresas:</p>
        <ul>
          <li><strong>Plano Iniciante (R$99/mês):</strong> Ideal para pequenas empresas e startups que estão começando com automação</li>
          <li><strong>Plano Profissional (R$249/mês):</strong> Perfeito para empresas em crescimento que precisam de recursos mais avançados</li>
          <li><strong>Plano Empresarial (R$499/mês):</strong> Desenvolvido para empresas de médio e grande porte com necessidades complexas</li>
        </ul>
        <p>Todos os planos incluem nosso Robô Numérico, dashboards com dados para insights e atendimento 24/7. Os planos mais avançados oferecem recursos adicionais como atendimento com inteligência artificial, mensagens em massa com multimídia e integração multicanal.</p>
        <p>Para ver uma comparação detalhada dos planos, visite nossa <a href="#precos" class="text-primary hover:underline">página de preços</a>.</p>
      `,
    },
    {
      id: "periodo-cobranca",
      category: "precos",
      question: "Quais são as opções de período de cobrança?",
      answer: `
        <p>Oferecemos três opções de período de cobrança para todos os nossos planos:</p>
        <ul>
          <li><strong>Mensal:</strong> Pagamento mês a mês, sem compromisso de longo prazo</li>
          <li><strong>Semestral:</strong> Pagamento a cada seis meses, com 10% de desconto sobre o valor mensal</li>
          <li><strong>Anual:</strong> Pagamento anual, com 20% de desconto sobre o valor mensal</li>
        </ul>
        <p>Os descontos para pagamentos semestrais e anuais representam uma economia significativa ao longo do tempo. Por exemplo, no plano Profissional, você economiza até R$598 por ano optando pelo pagamento anual.</p>
      `,
    },
    {
      id: "teste-gratuito",
      category: "precos",
      question: "A WebBotss oferece teste gratuito?",
      answer: `
        <p>Sim, oferecemos um período de teste gratuito de 14 dias para todos os nossos planos. Durante este período, você terá acesso a todas as funcionalidades do plano escolhido, permitindo que você avalie completamente nossa plataforma antes de tomar uma decisão.</p>
        <p>Para iniciar seu teste gratuito:</p>
        <ol>
          <li>Acesse nossa página de <a href="https://app.webbotss.com.br/signup" class="text-primary hover:underline">cadastro</a></li>
          <li>Escolha o plano que melhor atende às suas necessidades</li>
          <li>Crie sua conta com e-mail e senha</li>
          <li>Comece a explorar a plataforma imediatamente</li>
        </ol>
        <p>Não é necessário fornecer dados de cartão de crédito para iniciar o teste gratuito. Ao final do período, você pode optar por continuar com um plano pago ou cancelar sem qualquer custo.</p>
      `,
    },
    {
      id: "mudar-plano",
      category: "precos",
      question: "Posso mudar de plano depois de assinar?",
      answer: `
        <p>Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. O processo é simples e pode ser feito diretamente na sua área de cliente.</p>
        <p>Ao fazer upgrade para um plano superior:</p>
        <ul>
          <li>Você terá acesso imediato aos recursos adicionais</li>
          <li>Será cobrado apenas a diferença proporcional ao tempo restante do seu ciclo de faturamento atual</li>
        </ul>
        <p>Ao fazer downgrade para um plano inferior:</p>
        <ul>
          <li>A mudança será aplicada no início do próximo ciclo de faturamento</li>
          <li>Você continuará com acesso ao seu plano atual até o final do período pago</li>
        </ul>
        <p>Não há taxas ou penalidades para mudança de planos. Nossa política é flexível para se adaptar às necessidades do seu negócio à medida que elas evoluem.</p>
      `,
    },
    {
      id: "formas-pagamento",
      category: "precos",
      question: "Quais formas de pagamento são aceitas?",
      answer: `
        <p>A WebBotss aceita diversas formas de pagamento para sua conveniência:</p>
        <ul>
          <li><strong>Cartão de crédito:</strong> Aceitamos as principais bandeiras (Visa, Mastercard, American Express, Elo)</li>
          <li><strong>Boleto bancário:</strong> Disponível para pagamentos mensais, semestrais e anuais</li>
          <li><strong>PIX:</strong> Para pagamentos rápidos e seguros</li>
          <li><strong>Transferência bancária:</strong> Para empresas que preferem esta modalidade</li>
        </ul>
        <p>Para planos empresariais personalizados, também oferecemos condições especiais de pagamento. Entre em contato com nossa equipe comercial para discutir opções específicas para sua empresa.</p>
      `,
    },
    {
      id: "cancelamento",
      category: "precos",
      question: "Como funciona o cancelamento?",
      answer: `
        <p>Nosso processo de cancelamento é simples e transparente:</p>
        <ol>
          <li>Acesse sua conta na plataforma WebBotss</li>
          <li>Navegue até "Configurações" > "Assinatura"</li>
          <li>Clique em "Cancelar assinatura"</li>
          <li>Preencha um breve formulário sobre o motivo do cancelamento</li>
          <li>Confirme o cancelamento</li>
        </ol>
        <p>Políticas importantes sobre cancelamento:</p>
        <ul>
          <li>Não há taxas ou multas por cancelamento</li>
          <li>Para planos mensais, o acesso permanece ativo até o final do período pago</li>
          <li>Para planos semestrais e anuais, oferecemos reembolso proporcional ao período não utilizado</li>
          <li>Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento</li>
        </ul>
        <p>Nossa equipe de suporte está disponível para ajudar com qualquer dúvida durante o processo de cancelamento.</p>
      `,
    },
  
    // Implementação
    {
      id: "tempo-implementacao",
      category: "implementacao",
      question: "Quanto tempo leva para implementar a WebBotss?",
      answer: `
        <p>O tempo de implementação da WebBotss varia de acordo com a complexidade do seu caso de uso e o nível de personalização necessário:</p>
        <ul>
          <li><strong>Implementação básica:</strong> 1 a 3 dias para configurações simples como chatbots básicos e automações padrão</li>
          <li><strong>Implementação intermediária:</strong> 1 a 2 semanas para casos que exigem personalização moderada e integrações com sistemas existentes</li>
          <li><strong>Implementação avançada:</strong> 3 a 4 semanas para soluções complexas com alto grau de personalização e múltiplas integrações</li>
        </ul>
        <p>Nossa equipe trabalha com você em cada etapa do processo:</p>
        <ol>
          <li><strong>Análise inicial:</strong> Entendemos suas necessidades e definimos objetivos</li>
          <li><strong>Configuração:</strong> Preparamos a plataforma de acordo com seus requisitos</li>
          <li><strong>Personalização:</strong> Adaptamos fluxos e integrações específicas</li>
          <li><strong>Testes:</strong> Validamos todas as funcionalidades antes do lançamento</li>
          <li><strong>Treinamento:</strong> Capacitamos sua equipe para utilizar a plataforma</li>
          <li><strong>Lançamento:</strong> Colocamos a solução em produção</li>
        </ol>
        <p>Oferecemos suporte contínuo após a implementação para garantir que você obtenha o máximo valor da plataforma.</p>
      `,
    },
    {
      id: "necessidade-ti",
      category: "implementacao",
      question: "Preciso de uma equipe de TI para implementar a WebBotss?",
      answer: `
        <p>Não, você não precisa de uma equipe de TI dedicada para implementar a WebBotss. Nossa plataforma foi projetada para ser acessível a usuários não técnicos, com uma interface intuitiva e processos simplificados.</p>
        <p>Para a maioria das implementações:</p>
        <ul>
          <li>Nossa equipe de suporte guia você durante todo o processo</li>
          <li>Oferecemos assistência técnica para configurações mais complexas</li>
          <li>Disponibilizamos documentação detalhada e vídeos tutoriais</li>
          <li>Realizamos treinamentos para sua equipe</li>
        </ul>
        <p>No entanto, para casos de uso mais complexos ou integrações personalizadas com sistemas legados, pode ser útil ter alguém com conhecimentos técnicos básicos envolvido no processo. Mesmo nesses casos, nossa equipe fornece o suporte necessário.</p>
        <p>Muitos de nossos clientes implementam a WebBotss com sucesso sem qualquer background técnico, aproveitando nossa abordagem "no-code" para automação.</p>
      `,
    },
    {
      id: "treinamento-equipe",
      category: "implementacao",
      question: "Como funciona o treinamento da minha equipe?",
      answer: `
        <p>Oferecemos um programa completo de treinamento para garantir que sua equipe aproveite ao máximo a plataforma WebBotss:</p>
        <ul>
          <li><strong>Sessões de onboarding:</strong> Treinamento inicial para novos usuários</li>
          <li><strong>Webinars ao vivo:</strong> Sessões regulares sobre recursos específicos</li>
          <li><strong>Biblioteca de vídeos:</strong> Tutoriais passo a passo para consulta a qualquer momento</li>
          <li><strong>Documentação detalhada:</strong> Guias completos sobre todas as funcionalidades</li>
          <li><strong>Treinamento personalizado:</strong> Sessões específicas para suas necessidades</li>
        </ul>
        <p>Nosso processo de treinamento é estruturado em módulos:</p>
        <ol>
          <li><strong>Fundamentos:</strong> Visão geral da plataforma e funcionalidades básicas</li>
          <li><strong>Configuração:</strong> Como configurar automações e fluxos de trabalho</li>
          <li><strong>Integrações:</strong> Como conectar a WebBotss com outras ferramentas</li>
          <li><strong>Análise de dados:</strong> Como utilizar dashboards e relatórios</li>
          <li><strong>Administração:</strong> Gerenciamento de usuários e permissões</li>
        </ol>
        <p>Todos os treinamentos estão incluídos nos planos, sem custos adicionais. Também oferecemos sessões de reciclagem sempre que novos recursos são lançados.</p>
      `,
    },
    {
      id: "migracao-dados",
      category: "implementacao",
      question: "Como funciona a migração de dados de outros sistemas?",
      answer: `
        <p>A migração de dados para a WebBotss é um processo estruturado que garantimos ser seguro e eficiente:</p>
        <ol>
          <li><strong>Análise inicial:</strong> Avaliamos seus dados atuais e sistemas de origem</li>
          <li><strong>Planejamento:</strong> Desenvolvemos uma estratégia de migração personalizada</li>
          <li><strong>Mapeamento:</strong> Definimos como os dados serão estruturados na WebBotss</li>
          <li><strong>Extração:</strong> Coletamos os dados dos sistemas de origem</li>
          <li><strong>Transformação:</strong> Convertemos os dados para o formato adequado</li>
          <li><strong>Carregamento:</strong> Importamos os dados para a WebBotss</li>
          <li><strong>Validação:</strong> Verificamos a integridade e precisão dos dados migrados</li>
        </ol>
        <p>Suportamos migração de diversos tipos de dados:</p>
        <ul>
          <li>Contatos e informações de clientes</li>
          <li>Histórico de interações e atendimentos</li>
          <li>Fluxos de trabalho e automações existentes</li>
          <li>Dados de campanhas e métricas</li>
          <li>Configurações e preferências</li>
        </ul>
        <p>Nossa equipe técnica acompanha todo o processo, minimizando o tempo de inatividade e garantindo que você possa começar a usar a plataforma com todos os seus dados históricos intactos.</p>
      `,
    },
    {
      id: "personalizacao",
      category: "implementacao",
      question: "Quanto de personalização é possível na plataforma?",
      answer: `
        <p>A WebBotss oferece um alto nível de personalização para atender às necessidades específicas do seu negócio:</p>
        <ul>
          <li><strong>Interface:</strong> Personalização de cores, logos e elementos visuais para alinhar com sua marca</li>
          <li><strong>Fluxos de trabalho:</strong> Criação de fluxos totalmente personalizados para seus processos específicos</li>
          <li><strong>Automações:</strong> Definição de regras e condições únicas para suas automações</li>
          <li><strong>Integrações:</strong> Conexão com sistemas específicos da sua empresa</li>
          <li><strong>Relatórios:</strong> Criação de dashboards e métricas personalizadas</li>
          <li><strong>Mensagens:</strong> Personalização completa de todas as comunicações com clientes</li>
        </ul>
        <p>Níveis de personalização disponíveis:</p>
        <ol>
          <li><strong>Configuração básica:</strong> Ajustes simples via interface visual (disponível em todos os planos)</li>
          <li><strong>Personalização avançada:</strong> Configurações mais complexas usando nossa ferramenta de regras (planos Profissional e Empresarial)</li>
          <li><strong>Personalização total:</strong> Desenvolvimento de soluções sob medida para casos específicos (plano Empresarial)</li>
        </ol>
        <p>Nossa filosofia é que a plataforma deve se adaptar ao seu negócio, e não o contrário. Por isso, investimos continuamente em recursos que permitem maior flexibilidade e personalização.</p>
      `,
    },
  
    // Integrações
    {
      id: "integracoes-disponiveis",
      category: "integracao",
      question: "Com quais sistemas a WebBotss se integra?",
      answer: `
        <p>A WebBotss oferece uma ampla gama de integrações nativas com sistemas populares, além de métodos para conectar com praticamente qualquer plataforma:</p>
        <p><strong>Integrações nativas:</strong></p>
        <ul>
          <li><strong>CRM:</strong> Salesforce, HubSpot, RD Station, Pipedrive</li>
          <li><strong>E-commerce:</strong> Shopify, WooCommerce, Magento, VTEX</li>
          <li><strong>Marketing:</strong> Mailchimp, ActiveCampaign, RD Station Marketing</li>
          <li><strong>Comunicação:</strong> WhatsApp Business API, Instagram, Facebook Messenger, Telegram</li>
          <li><strong>ERP:</strong> SAP, Totvs, Oracle NetSuite</li>
          <li><strong>Financeiro:</strong> Conta Azul, Nibo, QuickBooks</li>
          <li><strong>Atendimento:</strong> Zendesk, Freshdesk, Intercom</li>
          <li><strong>Produtividade:</strong> Google Workspace, Microsoft 365, Trello, Asana</li>
        </ul>
        <p><strong>Métodos de integração adicionais:</strong></p>
        <ul>
          <li><strong>API RESTful:</strong> Nossa API documentada permite integração com qualquer sistema</li>
          <li><strong>Webhooks:</strong> Receba e envie dados em tempo real para outros sistemas</li>
          <li><strong>Zapier:</strong> Conecte-se a mais de 3.000 aplicativos sem código</li>
          <li><strong>Integrações personalizadas:</strong> Desenvolvemos conectores específicos para suas necessidades</li>
        </ul>
        <p>Nossa equipe está constantemente adicionando novas integrações com base nas necessidades dos clientes. Se você precisa de uma integração específica, entre em contato conosco para verificar a disponibilidade ou discutir opções de desenvolvimento.</p>
      `,
    },
    {
      id: "api-disponivel",
      category: "integracao",
      question: "A WebBotss possui uma API para desenvolvedores?",
      answer: `
        <p>Sim, a WebBotss oferece uma API RESTful completa e bem documentada que permite aos desenvolvedores integrar e estender as funcionalidades da plataforma.</p>
        <p><strong>Recursos da nossa API:</strong></p>
        <ul>
          <li><strong>Autenticação segura:</strong> OAuth 2.0 para acesso seguro</li>
          <li><strong>Documentação interativa:</strong> Swagger UI para testar endpoints em tempo real</li>
          <li><strong>Rate limits generosos:</strong> Limites adequados para uso em produção</li>
          <li><strong>Versionamento:</strong> Garantia de compatibilidade com atualizações</li>
          <li><strong>Webhooks:</strong> Notificações em tempo real sobre eventos na plataforma</li>
        </ul>
        <p><strong>O que você pode fazer com nossa API:</strong></p>
        <ul>
          <li>Criar e gerenciar automações programaticamente</li>
          <li>Integrar a WebBotss com sistemas internos</li>
          <li>Enviar e receber mensagens via WhatsApp e outros canais</li>
          <li>Acessar e manipular dados de clientes e interações</li>
          <li>Gerar relatórios personalizados</li>
          <li>Criar interfaces personalizadas usando nossos serviços</li>
        </ul>
        <p>Nossa API está disponível em todos os planos, com limites de requisições que variam de acordo com o plano contratado. A documentação completa está disponível em <a href="https://api.webbotss.com.br/docs" class="text-primary hover:underline">https://api.webbotss.com.br/docs</a>.</p>
        <p>Também oferecemos SDKs para linguagens populares como JavaScript, Python, PHP e Java para facilitar a integração.</p>
      `,
    },
    {
      id: "integracao-whatsapp",
      category: "integracao",
      question: "Como funciona a integração com WhatsApp?",
      answer: `
        <p>A WebBotss oferece uma integração robusta com o WhatsApp Business API, permitindo comunicação eficiente e automatizada com seus clientes:</p>
        <p><strong>Opções de integração:</strong></p>
        <ul>
          <li><strong>WhatsApp Business API oficial:</strong> Integração completa com a API oficial do WhatsApp</li>
          <li><strong>Multi-dispositivos:</strong> Suporte para múltiplos números e dispositivos</li>
          <li><strong>Conexão direta:</strong> Sem intermediários, garantindo melhor desempenho e segurança</li>
        </ul>
        <p><strong>Recursos disponíveis:</strong></p>
        <ul>
          <li><strong>Mensagens automatizadas:</strong> Respostas automáticas para perguntas frequentes</li>
          <li><strong>Chatbot inteligente:</strong> Atendimento automatizado com IA</li>
          <li><strong>Campanhas em massa:</strong> Envio de mensagens para múltiplos contatos</li>
          <li><strong>Mensagens multimídia:</strong> Envio de imagens, vídeos, documentos e áudios</li>
          <li><strong>Botões e listas:</strong> Criação de menus interativos</li>
          <li><strong>Transferência para humano:</strong> Opção de transferir conversas para atendentes</li>
          <li><strong>Análise de conversas:</strong> Métricas e insights sobre interações</li>
        </ul>
        <p><strong>Processo de implementação:</strong></p>
        <ol>
          <li>Verificação do número de WhatsApp Business</li>
          <li>Configuração da integração na plataforma WebBotss</li>
          <li>Criação de fluxos de atendimento e automações</li>
          <li>Testes e validação</li>
          <li>Lançamento e monitoramento</li>
        </ol>
        <p>Nossa integração com WhatsApp é totalmente compatível com as políticas do WhatsApp Business e oferece todos os recursos necessários para uma comunicação eficiente com seus clientes.</p>
      `,
    },
    {
      id: "integracao-crm",
      category: "integracao",
      question: "Como integrar a WebBotss com meu CRM?",
      answer: `
        <p>A integração da WebBotss com seu CRM permite sincronizar dados de clientes, interações e oportunidades de vendas, criando um fluxo de trabalho unificado:</p>
        <p><strong>CRMs com integração nativa:</strong></p>
        <ul>
          <li>Salesforce</li>
          <li>HubSpot</li>
          <li>RD Station</li>
          <li>Pipedrive</li>
          <li>Zoho CRM</li>
          <li>Microsoft Dynamics</li>
        </ul>
        <p><strong>Processo de integração:</strong></p>
        <ol>
          <li><strong>Configuração inicial:</strong> Conecte sua conta do CRM na plataforma WebBotss</li>
          <li><strong>Mapeamento de campos:</strong> Defina como os dados serão sincronizados entre os sistemas</li>
          <li><strong>Configuração de gatilhos:</strong> Determine quando e como os dados serão transferidos</li>
          <li><strong>Testes:</strong> Valide a sincronização de dados</li>
          <li><strong>Ativação:</strong> Coloque a integração em produção</li>
        </ol>
        <p><strong>Funcionalidades disponíveis:</strong></p>
        <ul>
          <li>Sincronização bidirecional de contatos e leads</li>
          <li>Criação automática de oportunidades no CRM</li>
          <li>Atualização de status de negociações</li>
          <li>Registro de interações de atendimento</li>
          <li>Segmentação de contatos para campanhas</li>
          <li>Automação de follow-up baseada em ações no CRM</li>
        </ul>
        <p>Para CRMs não listados acima, oferecemos integrações via Zapier ou nossa API. Nossa equipe de suporte pode ajudar a determinar a melhor abordagem para seu caso específico.</p>
      `,
    },
    {
      id: "integracao-personalizada",
      category: "integracao",
      question: "É possível criar integrações personalizadas?",
      answer: `
        <p>Sim, a WebBotss oferece diversas opções para criar integrações personalizadas com sistemas específicos do seu negócio:</p>
        <p><strong>Opções para integrações personalizadas:</strong></p>
        <ul>
          <li><strong>API RESTful:</strong> Use nossa API documentada para desenvolver integrações customizadas</li>
          <li><strong>Webhooks:</strong> Configure eventos que disparam chamadas para seus sistemas</li>
          <li><strong>Desenvolvimento sob medida:</strong> Nossa equipe pode desenvolver conectores específicos</li>
          <li><strong>Integradores de terceiros:</strong> Use ferramentas como Zapier, Integromat ou n8n</li>
        </ul>
        <p><strong>Processo para integrações personalizadas:</strong></p>
        <ol>
          <li><strong>Análise de requisitos:</strong> Identificamos suas necessidades específicas</li>
          <li><strong>Avaliação técnica:</strong> Determinamos a melhor abordagem para integração</li>
          <li><strong>Desenvolvimento:</strong> Criamos a solução de integração</li>
          <li><strong>Testes:</strong> Validamos o funcionamento em ambiente controlado</li>
          <li><strong>Implementação:</strong> Colocamos a integração em produção</li>
          <li><strong>Monitoramento:</strong> Acompanhamos o desempenho e fazemos ajustes necessários</li>
        </ol>
        <p>Exemplos de integrações personalizadas que já desenvolvemos:</p>
        <ul>
          <li>Sistemas ERP legados com APIs proprietárias</li>
          <li>Plataformas de e-commerce customizadas</li>
          <li>Sistemas de gestão desenvolvidos internamente</li>
          <li>Equipamentos IoT para automação industrial</li>
          <li>Sistemas de gestão hospitalar</li>
        </ul>
        <p>O custo e prazo para desenvolvimento de integrações personalizadas variam de acordo com a complexidade. Entre em contato com nossa equipe comercial para uma avaliação específica do seu caso.</p>
      `,
    },
  
    // WhatsApp Business
    {
      id: "whatsapp-business-api",
      category: "whatsapp",
      question: "O que é a WhatsApp Business API e como funciona?",
      answer: `
        <p>A WhatsApp Business API é a interface de programação oficial do WhatsApp que permite empresas se comunicarem com seus clientes em escala através da plataforma WhatsApp:</p>
        <p><strong>Principais características:</strong></p>
        <ul>
          <li><strong>Comunicação em escala:</strong> Envie mensagens para milhares de clientes</li>
          <li><strong>Múltiplos atendentes:</strong> Vários colaboradores podem atender pelo mesmo número</li>
          <li><strong>Automação:</strong> Integração com chatbots e sistemas de automação</li>
          <li><strong>Recursos avançados:</strong> Botões interativos, listas, mensagens multimídia</li>
          <li><strong>Verificação oficial:</strong> Número verificado com selo verde (para contas elegíveis)</li>
          <li><strong>Segurança:</strong> Criptografia de ponta a ponta em todas as mensagens</li>
        </ul>
        <p><strong>Como funciona:</strong></p>
        <ol>
          <li>Sua empresa solicita acesso à API do WhatsApp Business</li>
          <li>Após aprovação, seu número é verificado e configurado</li>
          <li>A WebBotss conecta-se à sua conta de API do WhatsApp</li>
          <li>Configuramos fluxos de atendimento e automações na plataforma</li>
          <li>Você pode começar a enviar e receber mensagens em escala</li>
        </ol>
        <p><strong>Diferenças entre WhatsApp Business API e o aplicativo WhatsApp Business:</strong></p>
        <ul>
          <li>O aplicativo WhatsApp Business é limitado a um dispositivo e usuário</li>
          <li>A API permite múltiplos usuários e integrações com sistemas</li>
          <li>A API oferece recursos avançados de automação e análise</li>
          <li>A API permite envio de mensagens em massa (respeitando políticas do WhatsApp)</li>
        </ul>
        <p>A WebBotss é um provedor oficial da WhatsApp Business API, oferecendo uma solução completa que facilita o uso de todos os recursos disponíveis.</p>
      `,
    },
    {
      id: "campanhas-whatsapp",
      category: "whatsapp",
      question: "Como funcionam as campanhas de WhatsApp?",
      answer: `
        <p>As campanhas de WhatsApp na plataforma WebBotss permitem enviar mensagens personalizadas para múltiplos contatos de forma organizada e eficiente:</p>
        <p><strong>Tipos de campanhas disponíveis:</strong></p>
        <ul>
          <li><strong>Campanhas informativas:</strong> Comunicados, novidades, atualizações</li>
          <li><strong>Campanhas promocionais:</strong> Ofertas, descontos, lançamentos</li>
          <li><strong>Campanhas de relacionamento:</strong> Aniversários, datas comemorativas</li>
          <li><strong>Campanhas de reengajamento:</strong> Recuperação de clientes inativos</li>
          <li><strong>Campanhas de pós-venda:</strong> Avaliações, feedback, suporte</li>
        </ul>
        <p><strong>Recursos disponíveis:</strong></p>
        <ul>
          <li><strong>Personalização:</strong> Campos dinâmicos com dados do cliente (nome, histórico, etc.)</li>
          <li><strong>Conteúdo multimídia:</strong> Imagens, vídeos, áudios, documentos, botões interativos</li>
          <li><strong>Segmentação avançada:</strong> Filtros por comportamento, histórico, dados demográficos</li>
          <li><strong>Agendamento:</strong> Programação de envios em datas e horários específicos</li>
          <li><strong>A/B testing:</strong> Teste diferentes versões de mensagens para otimizar resultados</li>
          <li><strong>Análise de desempenho:</strong> Métricas de entrega, leitura e resposta</li>
        </ul>
        <p><strong>Processo de criação de campanha:</strong></p>
        <ol>
          <li>Defina o objetivo da campanha</li>
          <li>Selecione o público-alvo usando filtros de segmentação</li>
          <li>Crie o conteúdo da mensagem com elementos personalizados</li>
          <li>Configure o agendamento ou disparo imediato</li>
          <li>Realize testes internos antes do envio</li>
          <li>Execute a campanha e monitore resultados em tempo real</li>
        </ol>
        <p>Todas as nossas campanhas seguem rigorosamente as políticas do WhatsApp, garantindo conformidade e evitando bloqueios. Oferecemos também orientação sobre melhores práticas para maximizar o engajamento e minimizar taxas de opt-out.</p>
      `,
    },
    {
      id: "limites-whatsapp",
      category: "whatsapp",
      question: "Existem limites para envio de mensagens no WhatsApp?",
      answer: `
        <p>Sim, o WhatsApp estabelece limites para envio de mensagens através da API Business para garantir uma boa experiência para os usuários e evitar spam:</p>
        <p><strong>Principais limites:</strong></p>
        <ul>
          <li><strong>Janela de 24 horas:</strong> Respostas gratuitas dentro de 24 horas após mensagem do cliente</li>
          <li><strong>Mensagens ativas (templates):</strong> Necessárias para iniciar conversas ou após 24 horas</li>
          <li><strong>Aprovação de templates:</strong> Todos os modelos de mensagens ativas precisam ser aprovados</li>
          <li><strong>Quality Rating:</strong> Sistema de pontuação que afeta limites de envio</li>
          <li><strong>Limites de volume:</strong> Restrições no número de mensagens por dia (aumenta gradualmente)</li>
        </ul>
        <p><strong>Como funcionam os limites de volume:</strong></p>
        <ul>
          <li><strong>Contas novas:</strong> Iniciam com limites mais baixos (cerca de 1.000 mensagens/dia)</li>
          <li><strong>Aumento gradual:</strong> Os limites aumentam com o uso adequado da plataforma</li>
          <li><strong>Contas estabelecidas:</strong> Podem enviar dezenas de milhares de mensagens diárias</li>
          <li><strong>Fatores de influência:</strong> Taxa de bloqueio, taxa de resposta, qualidade das interações</li>
        </ul>
        <p><strong>Melhores práticas para evitar problemas:</strong></p>
        <ul>
          <li>Obtenha consentimento explícito antes de enviar mensagens</li>
          <li>Mantenha alta relevância no conteúdo enviado</li>
          <li>Respeite a frequência adequada de comunicação</li>
          <li>Ofereça opção clara de cancelamento (opt-out)</li>
          <li>Monitore métricas de engajamento e ajuste estratégias</li>
        </ul>
        <p>A WebBotss oferece ferramentas para ajudar a gerenciar esses limites, incluindo filas inteligentes, priorização de mensagens e monitoramento de métricas de qualidade. Nossa equipe também fornece orientação sobre como otimizar suas campanhas dentro das diretrizes do WhatsApp.</p>
      `,
    },
    {
      id: "chatbot-whatsapp",
      category: "whatsapp",
      question: "Como configurar um chatbot para WhatsApp?",
      answer: `
        <p>Configurar um chatbot para WhatsApp na plataforma WebBotss é um processo intuitivo que não exige conhecimentos técnicos avançados:</p>
        <p><strong>Etapas para configuração:</strong></p>
        <ol>
          <li><strong>Definição de objetivos:</strong> Determine o propósito principal do chatbot (atendimento, vendas, suporte)</li>
          <li><strong>Mapeamento de fluxos:</strong> Identifique as principais jornadas e interações</li>
          <li><strong>Criação de fluxos:</strong> Use nosso editor visual para construir a árvore de decisão</li>
          <li><strong>Configuração de respostas:</strong> Crie mensagens para cada etapa do fluxo</li>
          <li><strong>Personalização:</strong> Adicione elementos interativos (botões, listas, imagens)</li>
          <li><strong>Integração:</strong> Conecte com sistemas externos se necessário (CRM, ERP)</li>
          <li><strong>Testes:</strong> Valide o funcionamento em ambiente controlado</li>
          <li><strong>Lançamento:</strong> Ative o chatbot para seus clientes</li>
          <li><strong>Monitoramento e otimização:</strong> Analise desempenho e faça melhorias contínuas</li>
        </ol>
        <p><strong>Recursos disponíveis para chatbots:</strong></p>
        <ul>
          <li><strong>Reconhecimento de linguagem natural:</strong> Entendimento de perguntas em linguagem coloquial</li>
          <li><strong>Menus interativos:</strong> Botões e listas para facilitar navegação</li>
          <li><strong>Conteúdo multimídia:</strong> Imagens, vídeos, áudios, documentos</li>
          <li><strong>Variáveis dinâmicas:</strong> Personalização com dados do cliente</li>
          <li><strong>Condições e lógica:</strong> Fluxos baseados em regras e condições</li>
          <li><strong>Transferência para humano:</strong> Opção de escalar para atendente quando necessário</li>
          <li><strong>Integrações:</strong> Conexão com sistemas externos para buscar ou enviar dados</li>
        </ul>
        <p><strong>Exemplos de uso comuns:</strong></p>
        <ul>
          <li>Atendimento inicial e triagem de clientes</li>
          <li>FAQ e respostas para dúvidas frequentes</li>
          <li>Agendamentos e reservas</li>
          <li>Consultas de status de pedidos</li>
          <li>Qualificação de leads</li>
          <li>Pesquisas de satisfação</li>
        </ul>
        <p>Nossa plataforma oferece templates pré-configurados para diversos segmentos, acelerando o processo de implementação. Além disso, nossa equipe de suporte está disponível para ajudar em cada etapa da configuração.</p>
      `,
    },
  
    // Suporte
    {
      id: "canais-suporte",
      category: "suporte",
      question: "Quais são os canais de suporte disponíveis?",
      answer: `
        <p>A WebBotss oferece múltiplos canais de suporte para garantir que você obtenha ajuda quando precisar:</p>
        <p><strong>Canais de suporte disponíveis:</strong></p>
        <ul>
          <li><strong>Chat ao vivo:</strong> Suporte em tempo real disponível em dias úteis, das 8h às 20h</li>
          <li><strong>WhatsApp:</strong> Atendimento via WhatsApp Business com respostas rápidas</li>
          <li><strong>Email:</strong> Suporte via suporte@webbotss.com.br com SLA definido</li>
          <li><strong>Central de ajuda:</strong> Base de conhecimento com artigos, tutoriais e vídeos</li>
          <li><strong>Webinars:</strong> Sessões ao vivo regulares para treinamento e dúvidas</li>
          <li><strong>Suporte telefônico:</strong> Disponível para planos Profissional e Empresarial</li>
          <li><strong>Gerente de sucesso dedicado:</strong> Exclusivo para plano Empresarial</li>
        </ul>
        <p><strong>Horários de atendimento:</strong></p>
        <ul>
          <li><strong>Chat e WhatsApp:</strong> Segunda a sexta, das 8h às 20h</li>
          <li><strong>Email:</strong> 24/7 com respostas em horário comercial</li>
          <li><strong>Telefone:</strong> Segunda a sexta, das 9h às 18h</li>
          <li><strong>Suporte emergencial:</strong> 24/7 para plano Empresarial</li>
        </ul>
        <p><strong>SLAs de atendimento por plano:</strong></p>
        <table class="w-full text-sm">
          <tr>
            <td><strong>Plano Iniciante:</strong></td>
            <td>Resposta em até 24 horas úteis</td>
          </tr>
          <tr>
            <td><strong>Plano Profissional:</strong></td>
            <td>Resposta em até 8 horas úteis</td>
          </tr>
          <tr>
            <td><strong>Plano Empresarial:</strong></td>
            <td>Resposta em até 2 horas úteis</td>
          </tr>
        </table>
        <p>Nossa equipe de suporte é composta por especialistas treinados em todos os aspectos da plataforma, garantindo respostas precisas e eficientes para suas dúvidas e necessidades.</p>
      `,
    },
    {
      id: "treinamentos-adicionais",
      category: "suporte",
      question: "Existem treinamentos adicionais disponíveis?",
      answer: `
        <p>Sim, além do treinamento básico incluído em todos os planos, a WebBotss oferece opções adicionais de capacitação para maximizar o valor da plataforma:</p>
        <p><strong>Opções de treinamento adicional:</strong></p>
        <ul>
          <li><strong>Webinars temáticos:</strong> Sessões online focadas em recursos específicos (gratuitos)</li>
          <li><strong>Workshops avançados:</strong> Treinamentos práticos em pequenos grupos</li>
          <li><strong>Treinamento personalizado:</strong> Sessões adaptadas às necessidades específicas da sua empresa</li>
          <li><strong>Certificação WebBotss:</strong> Programa de certificação oficial para usuários e administradores</li>
          <li><strong>Academia WebBotss:</strong> Plataforma de e-learning com cursos estruturados</li>
          <li><strong>Documentação técnica:</strong> Guias detalhados para desenvolvedores e integradores</li>
        </ul>
        <p><strong>Formatos disponíveis:</strong></p>
        <ul>
          <li>Treinamentos online ao vivo</li>
          <li>Cursos gravados sob demanda</li>
          <li>Treinamentos presenciais (para planos Empresarial)</li>
          <li>Material em PDF e guias de referência</li>
          <li>Vídeos tutoriais passo a passo</li>
        </ul>
        <p><strong>Tópicos populares de treinamento:</strong></p>
        <ul>
          <li>Estratégias avançadas de automação</li>
          <li>Otimização de campanhas de WhatsApp</li>
          <li>Construção de chatbots inteligentes</li>
          <li>Análise de dados e relatórios</li>
          <li>Integrações avançadas</li>
          <li>Melhores práticas de segurança</li>
        </ul>
        <p>Os treinamentos adicionais podem ser adquiridos separadamente ou como parte de pacotes de serviços. Para o plano Empresarial, alguns treinamentos avançados já estão incluídos sem custo adicional.</p>
        <p>Entre em contato com seu gerente de conta para mais informações sobre opções de treinamento disponíveis para sua empresa.</p>
      `,
    },
    {
      id: "atualizacoes-plataforma",
      category: "suporte",
      question: "Com que frequência a plataforma é atualizada?",
      answer: `
        <p>A WebBotss segue um ciclo de desenvolvimento contínuo, com atualizações regulares para melhorar a plataforma e adicionar novos recursos:</p>
        <p><strong>Ciclo de atualizações:</strong></p>
        <ul>
          <li><strong>Atualizações menores:</strong> Lançadas semanalmente (correções de bugs, melhorias de desempenho)</li>
          <li><strong>Atualizações de recursos:</strong> Lançadas mensalmente (novos recursos e melhorias)</li>
          <li><strong>Atualizações principais:</strong> Lançadas trimestralmente (grandes novos recursos e mudanças significativas)</li>
        </ul>
        <p><strong>Processo de atualização:</strong></p>
        <ol>
          <li>As atualizações são testadas em ambientes de desenvolvimento e homologação</li>
          <li>Clientes do programa beta têm acesso antecipado para feedback</li>
          <li>Atualizações são implementadas gradualmente para minimizar impacto</li>
          <li>Todas as atualizações são realizadas em horários de baixo uso</li>
          <li>Documentação e comunicados são enviados antes de grandes atualizações</li>
        </ol>
        <p><strong>Como ficar informado sobre atualizações:</strong></p>
        <ul>
          <li>Notificações no painel de controle da plataforma</li>
          <li>Emails com notas de lançamento para administradores</li>
          <li>Blog de atualizações com detalhes sobre novos recursos</li>
          <li>Webinars demonstrando novas funcionalidades</li>
          <li>Changelog completo disponível na central de ajuda</li>
        </ul>
        <p>Nosso compromisso é manter a plataforma sempre atualizada com as mais recentes tecnologias e melhores práticas, enquanto garantimos estabilidade e compatibilidade com suas integrações existentes.</p>
        <p>Para recursos específicos que você gostaria de ver na plataforma, você pode enviar sugestões através do portal de feedback disponível no painel de controle.</p>
      `,
    },
    {
      id: "tempo-resposta-suporte",
      category: "suporte",
      question: "Qual é o tempo médio de resposta do suporte?",
      answer: `
        <p>O tempo de resposta do suporte da WebBotss varia de acordo com o plano contratado e a criticidade do problema:</p>
        <p><strong>Tempos médios de primeira resposta por plano:</strong></p>
        <table class="w-full text-sm">
          <tr>
            <td><strong>Plano Iniciante:</strong></td>
            <td>
              <ul>
                <li>Problemas críticos: até 8 horas úteis</li>
                <li>Problemas normais: até 24 horas úteis</li>
                <li>Dúvidas gerais: até 48 horas úteis</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Plano Profissional:</strong></td>
            <td>
              <ul>
                <li>Problemas críticos: até 4 horas úteis</li>
                <li>Problemas normais: até 8 horas úteis</li>
                <li>Dúvidas gerais: até 24 horas úteis</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Plano Empresarial:</strong></td>
            <td>
              <ul>
                <li>Problemas críticos: até 1 hora (24/7)</li>
                <li>Problemas normais: até 2 horas úteis</li>
                <li>Dúvidas gerais: até 8 horas úteis</li>
              </ul>
            </td>
          </tr>
        </table>
        <p><strong>Definição de criticidade:</strong></p>
        <ul>
          <li><strong>Problemas críticos:</strong> Plataforma indisponível, falhas que impedem operações essenciais</li>
          <li><strong>Problemas normais:</strong> Funcionalidades específicas com problemas, erros em operações não críticas</li>
          <li><strong>Dúvidas gerais:</strong> Questões sobre uso da plataforma, solicitações de informações</li>
        </ul>
        <p><strong>Canais com resposta mais rápida:</strong></p>
        <ol>
          <li>Chat ao vivo (durante horário comercial)</li>
          <li>WhatsApp</li>
          <li>Telefone (para planos elegíveis)</li>
          <li>Email</li>
        </ol>
        <p>Nosso compromisso é não apenas responder rapidamente, mas resolver seu problema de forma eficiente. Nossos índices de resolução na primeira interação são superiores a 85%, e o tempo médio de resolução completa é de menos de 24 horas para a maioria dos casos.</p>
        <p>Para situações urgentes fora do horário comercial, clientes do plano Empresarial têm acesso a um número de telefone dedicado para suporte emergencial 24/7.</p>
      `,
    },
  
    // Segurança e Privacidade
    {
      id: "seguranca-dados",
      category: "seguranca",
      question: "Como a WebBotss garante a segurança dos meus dados?",
      answer: `
        <p>A segurança dos dados é uma prioridade máxima na WebBotss. Implementamos múltiplas camadas de proteção para garantir a integridade e confidencialidade das suas informações:</p>
        <p><strong>Infraestrutura e armazenamento:</strong></p>
        <ul>
          <li><strong>Criptografia em trânsito:</strong> Todas as comunicações protegidas com TLS 1.3</li>
          <li><strong>Criptografia em repouso:</strong> Dados armazenados com criptografia AES-256</li>
          <li><strong>Data centers certificados:</strong> Infraestrutura em data centers com certificações ISO 27001, SOC 2 Type II</li>
          <li><strong>Redundância geográfica:</strong> Dados replicados em múltiplas regiões para garantir disponibilidade</li>
          <li><strong>Backups automáticos:</strong> Backups diários com retenção configurável</li>
        </ul>
        <p><strong>Controles de acesso:</strong></p>
        <ul>
          <li><strong>Autenticação multifator (MFA):</strong> Proteção adicional para contas de usuários</li>
          <li><strong>Controle de acesso baseado em funções (RBAC):</strong> Permissões granulares para usuários</li>
          <li><strong>Políticas de senhas fortes:</strong> Requisitos de complexidade e rotação de senhas</li>
          <li><strong>Registro de atividades:</strong> Logs detalhados de todas as ações na plataforma</li>
          <li><strong>Sessões com timeout:</strong> Encerramento automático de sessões inativas</li>
        </ul>
        <p><strong>Segurança operacional:</strong></p>
        <ul>
          <li><strong>Monitoramento 24/7:</strong> Sistemas de detecção de intrusão e anomalias</li>
          <li><strong>Testes de penetração:</strong> Avaliações regulares por empresas independentes</li>
          <li><strong>Gestão de vulnerabilidades:</strong> Processo contínuo de identificação e correção</li>
          <li><strong>Atualizações de segurança:</strong> Patches aplicados regularmente</li>
          <li><strong>Equipe dedicada:</strong> Profissionais especializados em segurança da informação</li>
        </ul>
        <p><strong>Conformidade e certificações:</strong></p>
        <ul>
          <li><strong>LGPD:</strong> Total conformidade com a Lei Geral de Proteção de Dados</li>
          <li><strong>ISO 27001:</strong> Certificação do Sistema de Gestão de Segurança da Informação</li>
          <li><strong>SOC 2 Type II:</strong> Auditoria independente de controles de segurança</li>
          <li><strong>PCI DSS:</strong> Conformidade para processamento de dados de pagamento</li>
        </ul>
        <p>Realizamos auditorias de segurança regulares e mantemos um programa de bug bounty para identificar e corrigir potenciais vulnerabilidades. Nossa abordagem de segurança segue o princípio de defesa em profundidade, com múltiplas camadas de proteção.</p>
      `,
    },
    {
      id: "lgpd-conformidade",
      category: "seguranca",
      question: "A WebBotss está em conformidade com a LGPD?",
      answer: `
        <p>Sim, a WebBotss está em total conformidade com a Lei Geral de Proteção de Dados (LGPD) brasileira. Implementamos processos, políticas e medidas técnicas para garantir que todos os aspectos da lei sejam respeitados:</p>
        <p><strong>Principais aspectos da nossa conformidade com a LGPD:</strong></p>
        <ul>
          <li><strong>Base legal para processamento:</strong> Processamos dados apenas com base legal adequada</li>
          <li><strong>Finalidade específica:</strong> Dados são coletados e usados apenas para finalidades declaradas</li>
          <li><strong>Minimização de dados:</strong> Coletamos apenas os dados necessários para as finalidades especificadas</li>
          <li><strong>Transparência:</strong> Política de privacidade clara e acessível</li>
          <li><strong>Direitos dos titulares:</strong> Mecanismos para exercício de direitos (acesso, correção, exclusão, etc.)</li>
          <li><strong>Segurança:</strong> Medidas técnicas e organizacionais para proteger dados pessoais</li>
          <li><strong>Retenção limitada:</strong> Dados mantidos apenas pelo tempo necessário</li>
        </ul>
        <p><strong>Medidas implementadas:</strong></p>
        <ul>
          <li><strong>DPO designado:</strong> Oficial de Proteção de Dados dedicado</li>
          <li><strong>Registro de operações:</strong> Documentação detalhada de todas as atividades de processamento</li>
          <li><strong>Avaliação de impacto:</strong> Análises regulares de impacto à proteção de dados</li>
          <li><strong>Contratos de processamento:</strong> Acordos com subprocessadores alinhados à LGPD</li>
          <li><strong>Treinamento de equipe:</strong> Capacitação regular sobre proteção de dados</li>
          <li><strong>Procedimentos de violação:</strong> Protocolos para notificação em caso de incidentes</li>
        </ul>
        <p><strong>Como ajudamos nossos clientes com a conformidade:</strong></p>
        <ul>
          <li>Ferramentas para obtenção e gestão de consentimento</li>
          <li>Recursos para atender solicitações de titulares de dados</li>
          <li>Funcionalidades de anonimização e pseudonimização</li>
          <li>Controles de acesso granulares para dados sensíveis</li>
          <li>Registros de auditoria para demonstrar conformidade</li>
          <li>Documentação e orientações sobre melhores práticas</li>
        </ul>
        <p>Nossa política de privacidade completa está disponível em nosso site, detalhando como coletamos, processamos e protegemos dados pessoais. Para questões específicas sobre LGPD, você pode contatar nosso DPO através do email dpo@webbotss.com.br.</p>
      `,
    },
    {
      id: "propriedade-dados",
      category: "seguranca",
      question: "Quem é o proprietário dos dados na plataforma?",
      answer: `
        <p>Na WebBotss, temos uma política clara sobre propriedade de dados: <strong>você é e sempre será o único proprietário de todos os seus dados</strong>.</p>
        <p><strong>Nossa política de propriedade de dados:</strong></p>
        <ul>
          <li>Todos os dados que você armazena ou processa em nossa plataforma pertencem exclusivamente à sua empresa</li>
          <li>Não reivindicamos nenhum direito de propriedade sobre seus dados</li>
          <li>Não utilizamos seus dados para fins próprios, como treinamento de modelos de IA ou marketing</li>
          <li>Não vendemos, alugamos ou compartilhamos seus dados com terceiros</li>
          <li>Você mantém controle total sobre seus dados, incluindo o direito de exportar ou excluir</li>
        </ul>
        <p><strong>Como isso se aplica na prática:</strong></p>
        <ul>
          <li><strong>Acesso aos dados:</strong> Apenas pessoal autorizado da sua empresa tem acesso aos seus dados</li>
          <li><strong>Exportação de dados:</strong> Oferecemos ferramentas para exportar todos os seus dados a qualquer momento</li>
          <li><strong>Exclusão de dados:</strong> Você pode solicitar a exclusão permanente dos seus dados</li>
          <li><strong>Término do contrato:</strong> Após o encerramento do serviço, seus dados são mantidos por um período limitado (30 dias por padrão) e depois excluídos permanentemente</li>
          <li><strong>Subprocessadores:</strong> Quando utilizamos serviços de terceiros, garantimos que eles sigam as mesmas políticas rigorosas</li>
        </ul>
        <p><strong>Nosso compromisso:</strong></p>
        <p>Atuamos apenas como processadores dos seus dados, seguindo suas instruções e implementando medidas técnicas e organizacionais adequadas para proteger seus dados. Nosso papel é fornecer a infraestrutura e os serviços para que você possa utilizar, analisar e obter valor dos seus próprios dados.</p>
        <p>Este compromisso está formalizado em nossos Termos de Serviço e no Acordo de Processamento de Dados (DPA) que disponibilizamos a todos os clientes.</p>
      `,
    },
    {
      id: "politica-backup",
      category: "seguranca",
      question: "Qual é a política de backup e recuperação de dados?",
      answer: `
        <p>A WebBotss implementa uma política robusta de backup e recuperação de dados para garantir a segurança e disponibilidade das suas informações:</p>
        <p><strong>Estratégia de backup:</strong></p>
        <ul>
          <li><strong>Backups automáticos diários:</strong> Realizados durante janelas de baixo uso</li>
          <li><strong>Backups incrementais:</strong> A cada hora para minimizar perda de dados</li>
          <li><strong>Backups completos semanais:</strong> Para garantir integridade total</li>
          <li><strong>Retenção padrão:</strong> 30 dias para backups diários, 3 meses para backups semanais</li>
          <li><strong>Retenção estendida:</strong> Disponível como opção adicional (até 7 anos)</li>
        </ul>
        <p><strong>Segurança dos backups:</strong></p>
        <ul>
          <li><strong>Criptografia:</strong> Todos os backups são criptografados em repouso (AES-256)</li>
          <li><strong>Armazenamento redundante:</strong> Cópias mantidas em múltiplas regiões geográficas</li>
          <li><strong>Controle de acesso:</strong> Acesso restrito apenas a pessoal autorizado</li>
          <li><strong>Verificação de integridade:</strong> Testes regulares para garantir a validade dos backups</li>
        </ul>
        <p><strong>Capacidades de recuperação:</strong></p>
        <ul>
          <li><strong>Recuperação pontual (Point-in-Time Recovery):</strong> Restauração para qualquer momento dentro do período de retenção</li>
          <li><strong>Recuperação granular:</strong> Possibilidade de restaurar dados específicos sem afetar o restante</li>
          <li><strong>Recuperação de desastres:</strong> Procedimentos documentados para cenários de falha catastrófica</li>
          <li><strong>Tempo de recuperação:</strong> RTO (Recovery Time Objective) de 4 horas para ambientes de produção</li>
          <li><strong>Ponto de recuperação:</strong> RPO (Recovery Point Objective) de 1 hora no máximo</li>
        </ul>
        <p><strong>Testes e validação:</strong></p>
        <ul>
          <li>Testes de recuperação realizados mensalmente</li>
          <li>Simulações de desastre conduzidas trimestralmente</li>
          <li>Auditoria independente anual dos procedimentos de backup e recuperação</li>
        </ul>
        <p>Para clientes dos planos Profissional e Empresarial, oferecemos também a opção de exportação manual de backups para armazenamento local ou em nuvem própria, proporcionando uma camada adicional de segurança e controle sobre seus dados.</p>
      `,
    },
    {
      id: "acesso-dados",
      category: "seguranca",
      question: "Quem tem acesso aos meus dados na WebBotss?",
      answer: `
        <p>A WebBotss implementa controles rigorosos para garantir que o acesso aos seus dados seja estritamente limitado e protegido:</p>
        <p><strong>Acesso por parte da sua empresa:</strong></p>
        <ul>
          <li><strong>Controle total:</strong> Você determina quem na sua organização tem acesso aos dados</li>
          <li><strong>Permissões granulares:</strong> Defina níveis de acesso específicos por usuário ou grupo</li>
          <li><strong>Autenticação multifator:</strong> Proteção adicional para contas com acesso a dados sensíveis</li>
          <li><strong>Logs de auditoria:</strong> Registro detalhado de quem acessou quais dados e quando</li>
        </ul>
        <p><strong>Acesso por parte da WebBotss:</strong></p>
        <ul>
          <li><strong>Acesso zero por padrão:</strong> Nossa equipe não tem acesso aos seus dados por padrão</li>
          <li><strong>Acesso sob demanda:</strong> Acesso temporário apenas quando necessário para suporte</li>
          <li><strong>Processo de aprovação:</strong> Solicitações de acesso requerem aprovação explícita</li>
          <li><strong>Acesso limitado:</strong> Apenas o mínimo necessário para resolver problemas específicos</li>
          <li><strong>Monitoramento em tempo real:</strong> Todas as sessões de acesso são registradas e monitoradas</li>
          <li><strong>Revogação automática:</strong> Acesso encerrado automaticamente após resolução</li>
        </ul>
        <p><strong>Acesso por terceiros:</strong></p>
        <ul>
          <li><strong>Subprocessadores verificados:</strong> Trabalhamos apenas com parceiros que atendem a rigorosos padrões de segurança</li>
          <li><strong>Contratos de processamento:</strong> Acordos legais que exigem proteção adequada dos dados</li>
          <li><strong>Acesso mínimo necessário:</strong> Terceiros têm acesso apenas aos dados estritamente necessários</li>
          <li><strong>Sem acesso não autorizado:</strong> Nenhum terceiro tem acesso aos seus dados sem sua aprovação</li>
        </ul>
        <p><strong>Medidas técnicas de proteção:</strong></p>
        <ul>
          <li>Segregação lógica de dados entre clientes</li>
          <li>Criptografia de dados em trânsito e em repouso</li>
          <li>Firewalls e sistemas de prevenção de intrusão</li>
          <li>Monitoramento contínuo de atividades suspeitas</li>
          <li>Verificações regulares de vulnerabilidades</li>
        </ul>
        <p>Você pode solicitar a qualquer momento um relatório detalhado de todos os acessos aos seus dados através do painel de administração ou entrando em contato com nosso suporte.</p>
      `,
    },
  ]
  
  // Funções para gerenciar os itens de FAQ
  export function getFaqItems(): FaqItem[] {
    return faqItems
  }
  
  export function getFaqCategories(): FaqCategory[] {
    return faqCategories
  }
  
  export function getFaqItemsByCategory(category: string): FaqItem[] {
    return faqItems.filter((item) => item.category === category)
  }
  
  export function searchFaqItems(query: string): FaqItem[] {
    const searchTerm = query.toLowerCase()
    return faqItems.filter(
      (item) => item.question.toLowerCase().includes(searchTerm) || item.answer.toLowerCase().includes(searchTerm),
    )
  }
  
  