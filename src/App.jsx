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
  MessageCircle,
  Play,
  Scale,
  Send,
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

const navMenus = [
  {
    label: "Products",
    href: "#product",
    items: ["Operating Intelligence Platform", "Smart Digital Gram Panchayat", "Autonomous Marketing OS", "Banking Fraud Detection", "Smart Society OS"]
  },
  {
    label: "Solutions",
    href: "#solutions",
    items: ["Revenue Intelligence", "Financial Intelligence", "Customer Intelligence", "Supply Chain Intelligence", "Smart Society Operating System"]
  },
  {
    label: "Services",
    href: "#services",
    items: ["Agentic AI", "Autonomous Business OS", "AI Consulting", "Data Engineering", "Enterprise Automation"]
  }
];

const metrics = [
  ["21+", "Projects"],
  ["3+", "Years Exp"],
  ["4.8", "Rating"],
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
  ["AI Digital Marketing", Megaphone, "AI-powered content, social automation, lead nurturing, campaign optimization, and marketing analytics.", ["Content", "Lead scoring", "Campaigns"]],
  ["AI Governance", ShieldCheck, "Enterprise guardrails for responsible AI, access control, auditability, policy workflows, and compliance readiness.", ["Policy", "Audit", "Controls"]],
  ["Enterprise AI Integration", Globe2, "Secure integration of AI capabilities across cloud platforms, APIs, CRMs, ERPs, data systems, and business applications.", ["APIs", "Cloud", "Systems"]]
];

const productPillars = [
  ["Orchestrate", "Deploy agents into business workflows with triggers, tools, memory, and policy controls."],
  ["Observe", "Track every decision, handoff, exception, and business outcome from one command layer."],
  ["Improve", "Use feedback loops to make automations more accurate, compliant, and useful over time."],
  ["Govern", "Ensure AI operates securely, transparently, and in alignment with enterprise policies."],
  ["Scale", "Extend AI-powered operations across the organization through a unified operating model."]
];

const imperativeStats = [
  ["??", "40%", "Operational Cost Reduction", "AI-powered automation eliminates repetitive manual work, streamlines business operations, and reduces operational costs within the first year."],
  ["?", "10x", "Decision-Making Speed", "Autonomous Intelligence transforms delayed reporting into real-time business insights, enabling faster and smarter decisions."],
  ["??", "85%", "Enterprise AI Adoption", "Leading organizations are embedding AI into daily operations, workflows, and customer interactions—not treating AI as an experiment."],
  ["??", "24/7", "Always-On Operations", "AI agents continuously support customers, employees, and business processes beyond traditional business hours."],
  ["??", "3-5x", "Revenue Growth Potential", "AI-powered personalization, lead intelligence, automation, and predictive insights help businesses scale revenue efficiently."],
  ["??", "$15.7T", "Global AI Economic Impact", "AI is reshaping every industry. Early adopters are positioned to capture the largest share of future economic value."]
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
  ["What is Mexon Operating Intelligence Platform?", "Mexon Operating Intelligence Platform is an AI-powered system that helps organizations automate operations, gain real-time insights, and make intelligent decisions through autonomous agents and advanced analytics."],
  ["What is Agentic AI and why do businesses need it?", "Agentic AI uses autonomous AI agents that can understand goals, make decisions, and execute tasks with minimal human intervention, helping businesses improve efficiency, productivity, and scalability."],
  ["What types of AI solutions does Mexon build?", "Mexon develops Agentic AI solutions, AI assistants, intelligent automation platforms, AI chatbots, predictive analytics systems, AI-powered operating platforms, and custom enterprise AI applications."],
  ["How long does an AI implementation project typically take?", "Most AI projects take between 4 to 16 weeks depending on complexity, integrations, data availability, and business requirements."],
  ["Do we need technical staff to use the AI solutions?", "No. Mexon designs user-friendly AI solutions that business teams can operate with minimal technical expertise."],
  ["What's the typical ROI timeline for AI automation?", "Most organizations begin seeing measurable efficiency gains and cost savings within 3 to 12 months after deployment."],
  ["Can Mexon integrate with our existing systems?", "Yes. Mexon can integrate with ERPs, CRMs, databases, cloud platforms, APIs, websites, mobile apps, and third-party business systems."],
  ["Is our business data secure?", "Absolutely. We follow industry best practices for encryption, access control, secure architecture, and compliance to protect your data."],
  ["Which industries does Mexon serve?", "We serve enterprises, government organizations, housing societies, manufacturing, banking, healthcare, education, retail, logistics, and many other industries."],
  ["Can AI replace our employees?", "No. AI is designed to augment human capabilities by automating repetitive tasks, allowing employees to focus on higher-value strategic work."],
  ["How do we identify the right AI opportunities?", "Our team conducts an AI Opportunity Assessment to identify processes with the highest potential for automation, cost reduction, and business impact."],
  ["Do you provide support after deployment?", "Yes. We provide ongoing support, monitoring, maintenance, optimization, training, and continuous improvement services."],
  ["Can Mexon build custom AI agents for our business?", "Yes. We specialize in designing and deploying custom AI agents tailored to your workflows, goals, and business processes."],
  ["What makes Mexon different from other AI companies?", "Mexon combines Agentic AI, Autonomous Intelligence, enterprise integration expertise, and industry-specific solutions to deliver measurable business outcomes, not just AI prototypes."],
  ["How do we get started?", "Simply schedule a consultation with our team. We'll understand your goals, assess opportunities, and create a tailored AI transformation roadmap."],
  ["Ready to Transform Your Business with AI?", "Schedule a free AI strategy consultation and discover how Mexon Intelligence can help automate operations, reduce costs, and accelerate growth through Autonomous Intelligence."]
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
        {navMenus.map((menu) => (
          <div className="navItem" key={menu.label}>
            <a className="navTop" href={menu.href} onClick={() => setOpen(false)}>
              {menu.label}
              <ChevronDown size={14} />
            </a>
            <div className="navDropdown" aria-label={`${menu.label} menu`}>
              {menu.items.map((item) => (
                <a href={menu.href} key={item} onClick={() => setOpen(false)}>{item}</a>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="headerActions">
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
          <span key={label}><strong>{value}{label === "Rating" && <em className="goldStar">?</em>}</strong>{label}</span>
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

function IntelligenceCounter({ value }) {
  const [visible, setVisible] = React.useState(false);
  const [display, setDisplay] = React.useState("0");
  const ref = React.useRef(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!visible) return undefined;
    const presets = {
      "40%": { end: 40, suffix: "%", decimals: 0 },
      "10x": { end: 10, suffix: "x", decimals: 0 },
      "85%": { end: 85, suffix: "%", decimals: 0 },
      "$15.7T": { end: 15.7, prefix: "$", suffix: "T", decimals: 1 }
    };
    const preset = presets[value];
    if (!preset) {
      setDisplay(value);
      return undefined;
    }
    let frame = 0;
    const totalFrames = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      const current = preset.end * progress;
      setDisplay(`${preset.prefix || ""}${current.toFixed(preset.decimals)}${preset.suffix || ""}`);
      if (frame >= totalFrames) {
        setDisplay(value);
        window.clearInterval(timer);
      }
    }, 22);
    return () => window.clearInterval(timer);
  }, [visible, value]);

  return <strong ref={ref}>{display}</strong>;
}

function ImperativeSection() {
  return (
    <section className="section imperativeSection premiumImperative" id="ai-imperative">
      <div className="aiParticleField" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, index) => <span key={index} />)}
      </div>
      <div className="imperativeShell">
        <div className="imperativeHeroCopy">
          <p className="eyebrow">The AI Imperative</p>
          <h2>Why Every Company Must Adopt AI — Right Now</h2>
          <p>AI is no longer optional. Organizations adopting AI today are building faster operations, lower costs, better customer experiences, and sustainable competitive advantage.</p>
        </div>
        <div className="imperativeGrid intelligenceGrid">
          {imperativeStats.map(([icon, value, title, text], index) => (
            <article className="intelligenceCard" key={title} style={{ "--delay": `${index * 90}ms` }}>
              <div className="intelligenceIcon" aria-hidden="true">{icon}</div>
              <IntelligenceCounter value={value} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
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
  const serviceLoop = [...services, ...services];

  return (
    <section className="section muted" id="services">
      <SectionIntro
        eyebrow="Services"
        title="End-to-end AI transformation services"
        text="We combine consulting, data engineering, agentic AI, ML, marketing automation, and enterprise integrations so AI becomes part of daily operations."
      />
      <div className="serviceRunway" aria-label="Mexon Intelligence services carousel">
        <div className="serviceGrid serviceOrbitTrack">
          {serviceLoop.map(([title, Icon, text, tags], index) => (
            <article className="serviceCard serviceOrbitCard" key={`${title}-${index}`} aria-hidden={index >= services.length ? "true" : undefined}>
              <div className="iconBox"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
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
    <section className="section muted projectsSection" id="product">
      <SectionIntro
        eyebrow="PRODUCTS"
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

function createAssistantReply(question) {
  const query = question.toLowerCase();

  const answers = [
    { keywords: ["operating intelligence", "platform", "mexon platform"], answer: "Mexon Operating Intelligence Platform is an AI-powered system that helps organizations automate operations, gain real-time insights, and make intelligent decisions through autonomous agents and advanced analytics." },
    { keywords: ["agentic ai", "autonomous ai", "why businesses need"], answer: "Agentic AI uses autonomous AI agents that can understand goals, make decisions, and execute tasks with minimal human intervention, helping businesses improve efficiency, productivity, and scalability." },
    { keywords: ["types", "ai solutions", "build", "chatbot", "assistant", "predictive"], answer: "Mexon develops Agentic AI solutions, AI assistants, intelligent automation platforms, AI chatbots, predictive analytics systems, AI-powered operating platforms, and custom enterprise AI applications." },
    { keywords: ["how long", "timeline", "implementation", "project take", "weeks"], answer: "Most AI projects take between 4 to 16 weeks depending on complexity, integrations, data availability, and business requirements." },
    { keywords: ["technical staff", "technical expertise", "business teams", "use the ai"], answer: "No. Mexon designs user-friendly AI solutions that business teams can operate with minimal technical expertise." },
    { keywords: ["roi", "return", "cost saving", "efficiency gains", "savings"], answer: "Most organizations begin seeing measurable efficiency gains and cost savings within 3 to 12 months after deployment." },
    { keywords: ["integrate", "integration", "erp", "crm", "database", "api", "existing systems"], answer: "Yes. Mexon can integrate with ERPs, CRMs, databases, cloud platforms, APIs, websites, mobile apps, and third-party business systems." },
    { keywords: ["secure", "security", "data", "encryption", "compliance", "access control"], answer: "Absolutely. We follow industry best practices for encryption, access control, secure architecture, and compliance to protect your data." },
    { keywords: ["industries", "industry", "government", "housing", "manufacturing", "banking", "healthcare", "education", "retail", "logistics"], answer: "We serve enterprises, government organizations, housing societies, manufacturing, banking, healthcare, education, retail, logistics, and many other industries." },
    { keywords: ["replace employees", "employees", "jobs", "human"], answer: "No. AI is designed to augment human capabilities by automating repetitive tasks, allowing employees to focus on higher-value strategic work." },
    { keywords: ["right ai opportunities", "identify", "opportunity", "assessment", "business impact"], answer: "Our team conducts an AI Opportunity Assessment to identify processes with the highest potential for automation, cost reduction, and business impact." },
    { keywords: ["support", "after deployment", "maintenance", "monitoring", "training"], answer: "Yes. We provide ongoing support, monitoring, maintenance, optimization, training, and continuous improvement services." },
    { keywords: ["custom ai agents", "custom agents", "tailored", "workflows"], answer: "Yes. We specialize in designing and deploying custom AI agents tailored to your workflows, goals, and business processes." },
    { keywords: ["different", "other ai companies", "makes mexon different", "why mexon"], answer: "Mexon combines Agentic AI, Autonomous Intelligence, enterprise integration expertise, and industry-specific solutions to deliver measurable business outcomes, not just AI prototypes." },
    { keywords: ["get started", "start", "consultation", "schedule", "roadmap"], answer: "Simply schedule a consultation with our team. We'll understand your goals, assess opportunities, and create a tailored AI transformation roadmap." },
    { keywords: ["transform", "cta", "ready", "growth", "strategy consultation"], answer: "Ready to transform your business with AI? Schedule a free AI strategy consultation and discover how Mexon Intelligence can help automate operations, reduce costs, and accelerate growth through Autonomous Intelligence." }
  ];

  const match = answers.find(({ keywords }) => keywords.some((keyword) => query.includes(keyword)));
  if (match) return match.answer;

  return "I can help you understand Mexon Intelligence, Agentic AI, AI automation, integrations, security, ROI, industries, custom AI agents, and how to get started with an AI strategy consultation.";
}

function AIAssistant() {
  const [open, setOpen] = React.useState(true);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    { role: "assistant", text: "Welcome to Mexon Intelligence\nI'm your AI Assistant. How can I help you today?" }
  ]);

  const sendMessage = (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;
    setMessages((current) => [...current, { role: "user", text: question }, { role: "assistant", text: createAssistantReply(question) }]);
    setInput("");
  };

  return (
    <aside className={open ? "aiAssistant open" : "aiAssistant"} aria-label="MEXON INTELLIGENCE AI Assistant">
      {open ? (
        <div className="assistantPanel">
          <div className="assistantHeader">
            <span><Bot size={18} /> Mexon AI Assistant</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close AI Assistant"><X size={18} /></button>
          </div>
          <div className="assistantMessages" aria-live="polite">
            {messages.map((message, index) => (
              <p className={message.role === "assistant" ? "assistantBubble" : "userBubble"} key={`${message.role}-${index}`}>{message.text}</p>
            ))}
          </div>
          <form className="assistantInput" onSubmit={sendMessage}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Mexon AI..." aria-label="Ask Mexon AI Assistant" />
            <button type="submit" aria-label="Send message"><Send size={17} /></button>
          </form>
        </div>
      ) : (
        <button className="assistantLauncher" type="button" onClick={() => setOpen(true)} aria-label="Open AI Assistant">
          <MessageCircle size={24} />
        </button>
      )}
    </aside>
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
          <div><strong>Company</strong><a href="#about">About</a><a href="#product">Products</a><a href="#contact">Contact</a></div>
          <div><strong>Platform</strong><a href="#product">Product</a><a href="#solutions">Solutions</a><a href="#industries">Industries</a></div>
          <div><strong>Services</strong>{serviceLinks.map((service) => <a href="#services" key={service}>{service}</a>)}</div>
          <div><strong>Solutions</strong>{solutionLinks.map((solution) => <a href="#solutions" key={solution}>{solution}</a>)}</div>
        </div>
      </div>
      <div className="footerBottom"><span>(c) 2026 <strong className="footerBrandName">MEXON INTELLIGENCE</strong>. All rights reserved.</span><span>Privacy - Security - Terms</span></div>
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
        <ProjectsSection />
        <ServicesSection />
        <FilmSection />
        <SolutionsSection />
        <IndustriesSection />
        <FrameworkSection />
        <AboutSection />
        <CTA />
      </main>
      <AIAssistant />
      <Footer />
    </div>
  );
}





























