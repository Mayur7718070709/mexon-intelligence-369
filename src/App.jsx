import React from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircuitBoard,
  DatabaseZap,
  Factory,
  Globe2,
  HeartHandshake,
  Layers3,
  Megaphone,
  Menu,
  Play,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X
} from "lucide-react";
import brandFilmPoster from "./assets/nexvora-brand-film.png";
import bankingFraudImage from "./assets/projects/banking-fraud.png";
import digitalBankingImage from "./assets/projects/digital-banking-os.png";
import gramPanchayatImage from "./assets/projects/gram-panchayat.png";
import marketingOsImage from "./assets/projects/marketing-os.png";
import operatingIntelligenceImage from "./assets/projects/operating-intelligence.png";
import sugarFactoryImage from "./assets/projects/sugar-factory.png";
import tradeIntelligenceImage from "./assets/projects/trade-intelligence.png";
import deploymentImage from "./assets/framework/deployment-adoption.png";
import developmentImage from "./assets/framework/development.png";
import discoveryImage from "./assets/framework/discovery.png";
import jijaTaraImage from "./assets/framework/jija-tara.png";
import optimizationImage from "./assets/framework/optimization-scale.png";
import solutionDesignImage from "./assets/framework/solution-design.png";
import strategyImage from "./assets/framework/strategy.png";

const navItems = ["Product", "Solutions", "Industries", "Projects", "About"];

const metrics = [
  ["21+", "Projects"],
  ["3+", "Years Exp"],
  ["4.8â˜…", "Rating"],
  ["6+", "Industries Served"]
];

const services = [
  ["Agentic AI", Bot, "Autonomous AI agents that reason, plan, execute, review, and escalate work across enterprise systems.", ["Agents", "Tool use", "Approvals"]],
  ["Autonomous Business OS", Layers3, "A unified operating model for AI-powered workflows, teams, data, and business execution.", ["Operating layer", "Dashboards", "Governance"]],
  ["AI Consulting", BrainCircuit, "AI strategy, roadmap, architecture, adoption, and measurable ROI planning for leadership teams.", ["Roadmap", "ROI", "Governance"]],
  ["Data Engineering", DatabaseZap, "Reliable data pipelines, warehouses, lakehouses, and analytics foundations for AI at scale.", ["Pipelines", "Quality", "BI"]],
  ["Enterprise Automation", Workflow, "End-to-end workflow automation across documents, APIs, CRMs, ERPs, approvals, and teams.", ["RPA", "Integrations", "Audit"]],
  ["Generative AI Solution", Sparkles, "Custom copilots, chatbots, RAG systems, document intelligence, and AI content engines.", ["RAG", "Copilots", "Chatbots"]],
  ["AI / ML Solution", Target, "Prediction, classification, anomaly detection, NLP, computer vision, and decision intelligence models.", ["ML models", "Forecasting", "Anomaly detection"]],
  ["AI Digital Marketing", Megaphone, "AI-powered content, social automation, lead nurturing, campaign optimization, and marketing analytics.", ["Content", "Lead scoring", "Campaigns"]]
];

const productPillars = [
  ["Orchestrate", "Deploy agents into business workflows with triggers, tools, memory, and policy controls."],
  ["Observe", "Track every decision, handoff, exception, and business outcome from one command layer."],
  ["Improve", "Use feedback loops to make automations more accurate, compliant, and useful over time."],
  ["Govern", "Ensure AI operates securely, transparently, and in alignment with enterprise policies."],
  ["Scale", "Extend AI-powered operations across the organization through a unified operating model."]
];

const imperativeStats = [
  ["40%", "Operational Cost Reduction", "AI automation eliminates repetitive manual work and can reduce operating costs within the first year."],
  ["10x", "Decision-Making Speed", "AI-powered analytics help leaders move from delayed reports to real-time action."],
  ["85%", "Enterprise AI Adoption", "Leading companies are embedding AI into daily operations, not treating it as an experiment."],
  ["24/7", "Always-On Operations", "AI agents support customers, teams, and business processes beyond office hours."],
  ["3-5x", "Revenue Uplift Potential", "Personalization, lead scoring, and revenue intelligence help teams grow without only adding headcount."],
  ["$15.7T", "AI Economic Impact", "Early adopters are positioned to capture outsized value as AI reshapes global business."]
];

const solutions = [
  {
    title: "Revenue Intelligence",
    text: "AI agents accelerate revenue growth by automating sales workflows, improving customer engagement, and providing actionable pipeline insights.",
    useCases: ["Lead qualification & routing", "Account research & enrichment", "Proposal & quotation generation", "Customer follow-up automation", "Renewal & upsell management", "Revenue forecasting"]
  },
  {
    title: "Financial Intelligence",
    text: "AI agents streamline financial operations by automating transactions, improving accuracy, reducing risk, and delivering real-time financial visibility.",
    useCases: ["Invoice processing", "Accounts payable & receivable automation", "Reconciliations", "Collections management", "Approval workflows", "Financial reporting & analytics"]
  },
  {
    title: "Customer Intelligence",
    text: "AI agents enhance customer experiences through intelligent support, personalized interactions, faster resolutions, and continuous service optimization.",
    useCases: ["AI customer support agents", "Knowledge base search", "Ticket triage & routing", "Resolution drafting", "Escalation management", "Customer sentiment analysis"]
  },
  {
    title: "Supply Chain Intelligence",
    text: "AI agents optimize supply chain performance by improving planning, supplier collaboration, inventory visibility, and operational resilience.",
    useCases: ["Demand forecasting", "Procurement automation", "Vendor communication", "Inventory optimization", "Shipment tracking & exception handling", "Logistics performance monitoring"]
  },
  {
    title: "Human Resources Operations",
    text: "AI-powered recruitment, candidate screening, onboarding, employee support, performance insights, and workforce planning.",
    useCases: ["Resume screening", "Interview scheduling", "Employee helpdesk", "Learning recommendations", "Attrition prediction"]
  },
  {
    title: "Marketing Operations",
    text: "Autonomous campaign execution, content generation, audience targeting, lead nurturing, and marketing analytics.",
    useCases: ["AI content creation", "Social media automation", "Email marketing", "Lead scoring", "Campaign optimization"]
  },
  {
    title: "IT & Service Operations",
    text: "AI agents for incident management, root-cause analysis, infrastructure monitoring, ticket resolution, and knowledge management.",
    useCases: ["IT helpdesk", "Ticket automation", "System monitoring", "Change management", "DevOps support"]
  },
  {
    title: "Risk, Compliance & Governance",
    text: "Continuous monitoring of policies, regulations, contracts, audit requirements, and enterprise controls.",
    useCases: ["Regulatory compliance", "Fraud monitoring", "Internal audits", "Policy validation", "Risk reporting"]
  },
  {
    title: "Executive Decision Intelligence",
    text: "AI-powered command center providing real-time business insights, predictions, recommendations, and autonomous actions.",
    useCases: ["CEO dashboard", "Business forecasting", "Revenue predictions", "KPI monitoring", "Strategic recommendations"]
  },
  {
    title: "Industry Operating Systems",
    text: "Vertical AI agents tailored for specific industries and business processes.",
    useCases: ["Banking Operating System", "Insurance Operating System", "Healthcare Operating System", "Manufacturing Operating System", "Retail Operating System", "Smart Village Operating System", "Sugar Factory Operating System", "Government Operating System"]
  },
  {
    title: "Procurement Operations",
    text: "Automate sourcing, vendor evaluation, contract management, purchase approvals, and supplier collaboration.",
    useCases: ["RFQ generation", "Vendor risk assessment", "Contract review", "Purchase order automation", "Spend analytics"]
  },
  {
    title: "Legal Operations",
    text: "AI-powered contract intelligence, compliance monitoring, legal research, and document management.",
    useCases: ["Contract drafting", "Clause extraction", "Legal risk detection", "Regulatory tracking", "Document summarization"]
  },
  {
    title: "Project & Delivery Operations",
    text: "Manage enterprise projects, resources, timelines, budgets, risks, and delivery outcomes using AI agents.",
    useCases: ["Project planning", "Resource allocation", "Risk monitoring", "Status reporting", "Delivery forecasting"]
  },
  {
    title: "Data & Analytics Operations",
    text: "Transform raw enterprise data into trusted business intelligence, predictions, and actionable insights.",
    useCases: ["Data quality monitoring", "Data pipeline management", "Business intelligence", "Predictive analytics", "Executive reporting"]
  },
  {
    title: "Cybersecurity Operations",
    text: "AI agents continuously monitor threats, vulnerabilities, access controls, and security incidents.",
    useCases: ["Threat detection", "Security monitoring", "Access governance", "Incident response", "Security compliance"]
  },
  {
    title: "Smart Society Operating System",
    text: "AI-powered society operations for residents, committees, finance, security, facilities, compliance, and service automation.",
    useCases: ["Resident management", "Maintenance billing", "Gate security", "Complaint automation", "Facility booking", "Compliance reporting"]
  }
];

const industries = [
  "Banking & Fintech",
  "Insurance",
  "Healthcare & Services",
  "Pharma & Life Sciences",
  "Manufacturing",
  "Energy & Utilities",
  "Telecommunications",
  "Government & Smart Governance",
  "Retail & Commerce",
  "Logistics & Transportation",
  "Real Estate & Construction",
  "Travel & Hospitality",
  "Media & Entertainment",
  "Agriculture & Agribusiness",
  "Food & Beverage Industry",
  "Education & EdTech"
];

const projects = [
  ["Mexon Operating Intelligence Platform", operatingIntelligenceImage, "Enterprise OS"],
  ["Mexon Smart Digital Gram Panchayat Platform", gramPanchayatImage, "Smart Governance"],
  ["Mexon Agentic AI Autonomous Marketing OS", marketingOsImage, "Marketing AI"],
  ["Mexon Real-Time Banking Fraud Detection Platform", bankingFraudImage, "Fintech AI"],
  ["Mexon Smart Sugar Factory Intelligence Platform", sugarFactoryImage, "Industrial AI"],
  ["Mexon Trade Intelligence Platform", tradeIntelligenceImage, "Trade AI"],
  ["Mexon Digital Banking Operating System (DBOS)", digitalBankingImage, "Banking OS"],
  ["Mexon Smart Society OS", gramPanchayatImage, "Smart Society"]
];

const resources = [
  "AI Opportunity Assessment",
  "Executive AI Transformation Assessment",
  "Automation ROI Workshop",
  "Agentic AI Roadmap",
  "Data Readiness Audit",
  "Enterprise AI Use Case Library",
  "AI Agent Design Workshop",
  "Operating Intelligence Platform Blueprint",
  "AI Governance & Compliance Framework",
  "Enterprise AI Architecture Blueprint"
];

const filmScenes = [
  ["00:00", "A leader looks at delayed work, scattered systems, and tired teams.", brandFilmPoster],
  ["00:10", "Mexon connects the signals and brings clarity to the operating room.", operatingIntelligenceImage],
  ["00:20", "AI agents begin moving the routine work so people can focus on judgment.", marketingOsImage],
  ["00:30", "Risk is spotted early, decisions become calmer, and teams trust the flow.", bankingFraudImage],
  ["00:40", "Operations scale from one workflow to industry-wide intelligence.", sugarFactoryImage],
  ["00:50", "The business ends the day with confidence: work seen, routed, completed, improved.", digitalBankingImage]
];

const framework = [
  ["1", "Discovery", "We identify high-value AI and automation opportunities, assess current processes, and define measurable business outcomes.", "Week 1", discoveryImage],
  ["2", "Strategy", "Design the AI architecture, implementation roadmap, governance model, and success metrics aligned with business goals.", "Week 2-3", strategyImage],
  ["3", "Solution Design", "Define workflows, data requirements, integrations, security controls, and user experiences before development begins.", "Week 3-4", solutionDesignImage],
  ["4", "Development", "Build, integrate, and test AI agents, automations, data pipelines, and business workflows using an agile delivery approach.", "Week 4-10", developmentImage],
  ["5", "Deployment & Adoption", "Deploy into production, train teams, establish governance controls, and ensure operational readiness.", "Week 10-11", deploymentImage],
  ["6", "Optimization & Scale", "Continuously monitor performance, improve AI accuracy, expand use cases, and scale automation across the organization.", "Ongoing", optimizationImage]
];

const faqs = [
  ["What is Mexon Operating Intelligence Platform?", "Mexon Operating Intelligence Platform is a unified control layer where AI agents, automations, enterprise data, and human teams work together. It helps organizations automate workflows, monitor operations, and continuously improve business outcomes from a single platform."],
  ["What is Agentic AI and why do businesses need it?", "Agentic AI refers to autonomous AI systems that can plan, reason, make decisions, and execute multi-step tasks with minimal human intervention. Unlike traditional chatbots, AI agents can use tools, access business data, interact with systems, and complete complex workflows end-to-end."],
  ["What types of AI solutions does Mexon build?", "We build AI agents, intelligent automation platforms, AI copilots, chatbots, data engineering solutions, predictive analytics systems, fraud detection platforms, marketing automation systems, and industry-specific operating intelligence platforms."],
  ["How long does an AI implementation project typically take?", "AI Chatbots & Virtual Assistants: 2-4 weeks. Process Automation Solutions: 3-6 weeks. Data Engineering Platforms: 4-8 weeks. AI Agent Systems: 6-10 weeks. Enterprise AI Platforms: 8-12 weeks."],
  ["Do we need technical staff to use the AI solutions?", "No. We design all solutions with business users in mind. Our platforms include intuitive dashboards, low-code workflows, and user-friendly interfaces. We also provide training and ongoing support."],
  ["What's the typical ROI timeline for AI automation?", "Most organizations begin seeing measurable benefits within 3-6 months. Immediate gains often include reduced manual effort, lower operational costs, faster processing times, and improved customer experiences."],
  ["Can Mexon integrate with our existing systems?", "Yes. We integrate with ERP systems, CRM platforms, databases, APIs, cloud platforms, banking systems, SAP, Salesforce, Microsoft applications, and legacy enterprise systems."],
  ["Is our business data secure?", "Absolutely. Security, privacy, compliance, and governance are built into every solution. We implement role-based access controls, encryption, audit trails, monitoring, and enterprise-grade security practices."],
  ["Which industries does Mexon serve?", "We serve Banking & Fintech, Insurance, Manufacturing, Healthcare, Government, Retail, Logistics, Telecommunications, Energy & Utilities, Agriculture, Real Estate, and other enterprise sectors."],
  ["Can AI replace our employees?", "No. Our goal is to augment human capabilities, not replace them. AI handles repetitive and time-consuming tasks, allowing employees to focus on strategic, creative, and high-value work."],
  ["How do we identify the right AI opportunities?", "We conduct a discovery workshop to analyze your processes, data, systems, and business goals. We then prioritize high-impact AI use cases based on ROI, implementation complexity, and business value."],
  ["Do you provide support after deployment?", "Yes. We offer post-launch support, monitoring, optimization, model improvements, maintenance, and managed AI services to ensure long-term success."],
  ["Can Mexon build custom AI agents for our business?", "Yes. We develop custom AI agents tailored to your workflows, business rules, data sources, and operational requirements. These agents can automate tasks across sales, finance, customer service, operations, compliance, and more."],
  ["What makes Mexon different from other AI companies?", "Mexon combines AI, automation, data engineering, and enterprise integration expertise to deliver complete business solutions. Our focus is not just on AI models, but on creating measurable business outcomes through intelligent operating systems."],
  ["How do we get started?", "Schedule a discovery session with our team. We'll assess your current processes, identify high-value opportunities, and provide a clear roadmap for implementing AI in your organization."]
];

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label="MEXON INTELLIGENCE home">
        <span className="brandMark">M</span>
        <span className="brandText"><strong>MEXON INTELLIGENCE</strong></span>
      </a>
      <button className="menuButton" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "navLinks open" : "navLinks"} aria-label="Main navigation">
        {navItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setOpen(false)}>
            {item}
            {item !== "About" && <ChevronDown size={14} />}
          </a>
        ))}
      </nav>
      <div className="headerActions">
        <a href="#faq">FAQ</a>
        <a className="button dark" href="#contact">Book Strategy Call</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img src={brandFilmPoster} alt="" className="heroImage" />
      <div className="heroShade" />
      <div className="heroContent">
        <p className="eyebrow">Building The Future With Autonomous Exponential Intelligence For Smarter Communities. Always On.</p>
        
        <div className="heroActions">
          <a className="button light" href="#product">
            Explore platform <ArrowRight size={18} />
          </a>
          <a className="button ghost" href="#film">
            Watch emotional brand film <Play size={17} />
          </a>
        </div>
      </div>
      <div className="heroMetrics" aria-label="Mexon impact metrics">
        {metrics.map(([value, label]) => (
          <span key={label}><strong>{value}</strong>{label}</span>
        ))}
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="sectionIntro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ImperativeSection() {
  return (
    <section className="section imperativeSection">
      <SectionIntro
        eyebrow="The AI Imperative"
        title="Why every company must adopt AI - right now."
        text="AI is no longer optional. Companies adopting AI today are creating faster operations, lower costs, better customer experiences, and a durable competitive advantage."
      />
      <div className="imperativeGrid">
        {imperativeStats.map(([value, title, text]) => (
          <article key={title}>
            <strong>{value}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="section productSection" id="product">
      <SectionIntro
        eyebrow="Product"
        title="Mexon Operating Intelligence Platform"
        text="A governed control plane where AI agents, automations, data products, and human teams work as one operating system."
      />
      <div className="productGrid">
        <div className="productConsole">
          <div className="consoleTop">
            <span />
            <span />
            <span />
            <strong>Operations command</strong>
          </div>
          <div className="consoleFlow">
            <div><Bot size={20} /><strong>Agent mesh</strong><small>Executing cross-functional workflows</small></div>
            <div><DatabaseZap size={20} /><strong>Enterprise data</strong><small>Validating context and signals</small></div>
            <div><ShieldCheck size={20} /><strong>Policy guardrails</strong><small>Secure review and approval controls</small></div>
          </div>
          <div className="signalRows">
            <span style={{ width: "82%" }} />
            <span style={{ width: "64%" }} />
            <span style={{ width: "91%" }} />
          </div>
        </div>
        <div className="pillarList">
          {productPillars.map(([title, text]) => (
            <article key={title}>
              {title === "Govern" ? <ShieldCheck size={20} /> : title === "Scale" ? <Scale size={20} /> : <CheckCircle2 size={20} />}
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section muted" id="services">
      <SectionIntro
        eyebrow="Services"
        title="End-to-end AI transformation services"
        text="We combine consulting, data engineering, agentic AI, ML, marketing automation, and enterprise integrations so AI becomes part of daily operations."
      />
      <div className="serviceGrid">
        {services.map(([title, Icon, text, tags]) => (
          <article className="serviceCard" key={title}>
            <div className="iconBox"><Icon size={24} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FilmSection() {
  const [playing, setPlaying] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const activeScene = Math.min(Math.floor(seconds / 10), filmScenes.length - 1);

  React.useEffect(() => {
    if (!playing) return undefined;
    setSeconds(0);
    const timer = window.setInterval(() => {
      setSeconds((current) => {
        if (current >= 60) {
          window.clearInterval(timer);
          return 60;
        }
        return current + 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <section className="filmSection" id="film">
      <div className="filmCopy">
        <p className="eyebrow">Emotional brand film</p>
        <h2>AI should give people confidence, not complexity.</h2>
        <p>
          This brand film frames Mexon as the operating layer behind calm teams, faster decisions, and businesses that keep moving even when work gets complex.
        </p>
        <a className="button dark" href="#contact">Plan your AI operating system <ArrowRight size={18} /></a>
      </div>
      <div className="filmPlayer">
        {!playing ? (
          <button className="filmPoster" onClick={() => setPlaying(true)} aria-label="Play MEXON INTELLIGENCE emotional brand film">
            <img src={brandFilmPoster} alt="MEXON INTELLIGENCE emotional brand film poster" />
            <span><Play size={26} /> Play film</span>
          </button>
        ) : (
          <div className="localFilm" role="img" aria-label="60 second MEXON INTELLIGENCE emotional brand film">
            <img src={filmScenes[activeScene][2]} alt="" />
            <div className="localFilmShade" />
            <div className="localFilmText">
              <small>{filmScenes[activeScene][0]} / 01:00</small>
              <strong>{filmScenes[activeScene][1]}</strong>
            </div>
            <div className="filmProgress"><span style={{ width: `${Math.min(seconds, 60) * 1.6667}%` }} /></div>
            {seconds >= 60 && (
              <button className="filmReplay" onClick={() => { setPlaying(false); setSeconds(0); }}>
                Replay film
              </button>
            )}
          </div>
        )}
        <div className="filmCaption">
          <Play size={18} />
          <span>Stored 60-second local brand-film experience built from Mexon project visuals</span>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const [active, setActive] = React.useState(null);

  return (
    <section className="section" id="solutions">
      <SectionIntro
        eyebrow="Solutions"
        title="15 operating intelligence solutions"
        text="Click any solution to read practical AI use cases that Mexon can design, build, and scale for your organization."
      />
      <div className="solutionGrid large">
        {solutions.map((solution, index) => (
          <button className="solutionCard" key={solution.title} onClick={() => setActive(solution)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
            <strong>Read use cases</strong>
          </button>
        ))}
      </div>
      {active && (
        <div className="modalBackdrop" role="presentation" onClick={() => setActive(null)}>
          <div className="useCaseModal" role="dialog" aria-modal="true" aria-labelledby="use-case-title" onClick={(event) => event.stopPropagation()}>
            <button className="modalClose" onClick={() => setActive(null)} aria-label="Close use cases"><X size={20} /></button>
            <p className="eyebrow">Use Cases</p>
            <h3 id="use-case-title">{active.title}</h3>
            <p>{active.text}</p>
            <ul>
              {active.useCases.map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="section splitSection" id="industries">
      <div>
        <p className="eyebrow">Industries</p>
        <h2>AI operating systems for every complex industry.</h2>
        <p>Mexon adapts to each sector with domain-specific workflows, integrations, controls, and measurable business outcomes.</p>
      </div>
      <div className="industryCloud">
        {industries.map((name) => <span key={name}>{name}</span>)}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section muted projectsSection" id="projects">
      <SectionIntro
        eyebrow="AI Projects"
        title="Platforms and operating systems we build"
        text="Focused AI products designed for real enterprise workflows, fast adoption, and measurable value."
      />
      <div className="projectGrid">
        {projects.map(([project, image, type]) => (
          <article key={project}>
            <img src={image} alt="" />
            <div>
              <span>{type}</span>
              <h3>{project}</h3>
              <p>AI agents, data, dashboards, and automation designed around business outcomes.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FrameworkSection() {
  return (
    <section className="section frameworkSection">
      <SectionIntro
        eyebrow="Our Implementation Framework"
        title="From discovery to scaled autonomous operations"
        text="A practical delivery model that moves AI from idea to production while keeping security, adoption, and outcomes visible."
      />
      <div className="frameworkGrid">
        {framework.map(([number, title, text, timing, image]) => (
          <article key={title}>
            <img src={image} alt="" />
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <strong>{timing}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section muted faqSection" id="faq">
      <SectionIntro
        eyebrow="Frequently Asked Questions"
        title="Answers before your discovery session"
        text="Clear, practical answers about MEXON INTELLIGENCE solutions, timelines, security, integration, support, and ROI."
      />
      <div className="faqList">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<ChevronDown size={18} /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section aboutSection" id="about">
      <div>
        <p className="eyebrow">About MEXON INTELLIGENCE</p>
        <h2>We help enterprises move from AI pilots to autonomous operations.</h2>
      </div>
      <div>
        <p>MEXON INTELLIGENCE works with business and technology leaders to identify high-value workflows, engineer data foundations, build agentic systems, automate execution, and create the governance needed for enterprise trust.</p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta" id="contact">
      <CircuitBoard size={28} />
      <h2>Ready to design your autonomous business operating system?</h2>
      <p>Bring one priority workflow. Mexon will map the agents, data architecture, automation path, and governance model to make it real.</p>
      <a className="button light" href="mailto:jijatara@mexonaintelligence.com">jijatara@mexonaintelligence.com <ArrowRight size={18} /></a>
    </section>
  );
}

function Footer() {
  const serviceLinks = services.map(([title]) => title);
  const solutionLinks = solutions.map(({ title }) => title);

  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerContact">
          <strong>Contact</strong>
          <a href="mailto:jijatara@mexonaintelligence.com">jijatara@mexonaintelligence.com</a>
          <a href="https://wa.me/917715970995">WhatsApp: 7715970995</a>
          <div className="poweredBy">
            <img src={jijaTaraImage} alt="" />
            <span>Powered by Jija & Tara</span>
          </div>
        </div>
        <div className="footerColumns expanded">
          <div><strong>Company</strong><a href="#about">About</a><a href="#projects">AI Projects</a><a href="#faq">FAQ</a></div>
          <div><strong>Platform</strong><a href="#product">Product</a><a href="#solutions">Solutions</a><a href="#industries">Industries</a></div>
          <div><strong>Services</strong>{serviceLinks.map((service) => <a href="#services" key={service}>{service}</a>)}</div>
          <div><strong>Solutions</strong>{solutionLinks.map((solution) => <a href="#solutions" key={solution}>{solution}</a>)}</div>
        </div>
      </div>
      <div className="footerBottom"><span>(c) 2026 MEXON INTELLIGENCE. All rights reserved.</span><span>Privacy - Security - Terms</span></div>
    </footer>
  );
}
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ImperativeSection />
        <ProductSection />
        <ServicesSection />
        <FilmSection />
        <SolutionsSection />
        <IndustriesSection />
        <ProjectsSection />
        <FrameworkSection />
        <FAQSection />
        <AboutSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}














