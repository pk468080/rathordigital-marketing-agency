
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  MousePointer2,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Hero3D from "@/components/marketing/Hero3D";

const services = [
  {
    number: "01",
    title: "Performance marketing",
    description:
      "Paid campaigns built around clear goals, stronger creative, and smarter optimization.",
    tags: "META ADS · GOOGLE ADS",
    Icon: BarChart3,
  },
  {
    number: "02",
    title: "Search and visibility",
    description:
      "Help the right people find you through useful content and a stronger search presence.",
    tags: "SEO · LOCAL SEARCH",
    Icon: MousePointer2,
  },
  {
    number: "03",
    title: "Digital experiences",
    description:
      "Fast, responsive websites designed to turn attention into meaningful action.",
    tags: "WEB · LANDING PAGES",
    Icon: Code2,
  },
  {
    number: "04",
    title: "Commerce and content",
    description:
      "Online stores and compelling video content that give your brand room to grow.",
    tags: "E-COMMERCE · VIDEO",
    Icon: ShoppingBag,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your offer, audience, goals, and what is holding growth back.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Build a focused plan with priorities, deliverables, and measurable outcomes.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Bring the strategy to life through thoughtful creative and practical execution.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Learn from performance, share clear reporting, and keep improving.",
  },
];

export default function Home() {
  return (
    <>
      <Hero3D />

      <section className="ticker" aria-label="Our capabilities">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <span className="ticker-group" key={index}>
              <span>STRATEGY</span>
              <b>✳</b>
              <span>CREATIVE</span>
              <b>✳</b>
              <span>PERFORMANCE</span>
              <b>✳</b>
              <span>TECHNOLOGY</span>
              <b>✳</b>
            </span>
          ))}
        </div>
      </section>

      <section className="section-wrap intro-section">
        <div className="section-kicker">
          <span>01 / THE STUDIO</span>
          <span>CLARITY OVER NOISE</span>
        </div>

        <div className="intro-grid">
          <h2>
            Good work should
            <br />
            move your business <em>forward.</em>
          </h2>

          <div className="intro-copy">
            <p>
              Rathore Digital brings strategy, marketing, and digital
              experiences together under one roof. We focus on the work that
              matters to your customers and the outcomes that matter to your
              business.
            </p>
            <Link className="text-link" href="/about">
              Get to know us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-wrap">
          <div className="section-kicker">
            <span>02 / WHAT WE DO</span>
            <span>CONNECTED CAPABILITIES</span>
          </div>

          <div className="section-heading-row">
            <h2>
              Everything working
              <br />
              toward <em>one goal.</em>
            </h2>
            <p>
              Useful strategy. Distinctive creative. Digital systems built to
              perform.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ number, title, description, tags, Icon }) => (
              <article className="service-card" key={number}>
                <div className="service-card-top">
                  <span>{number}</span>
                  <Icon size={23} strokeWidth={1.5} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-tags">{tags}</span>
              </article>
            ))}
          </div>

          <div className="section-footer">
            <span>ONE TEAM. CONNECTED THINKING.</span>
            <Link className="text-link" href="/services">
              Explore all services <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap process-section">
        <div className="section-kicker">
          <span>03 / HOW WE WORK</span>
          <span>NO MYSTERY. NO GUESSWORK.</span>
        </div>

        <div className="section-heading-row">
          <h2>
            A clear path from
            <br />
            idea to <em>impact.</em>
          </h2>
          <p>
            Good partnerships start with listening, stay grounded in evidence,
            and get better with every iteration.
          </p>
        </div>

        <div className="process-grid">
          {process.map((step) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-orb" aria-hidden="true">
          <Sparkles size={44} strokeWidth={1} />
        </div>

        <div className="cta-content">
          <p className="eyebrow">HAVE A GOOD CHALLENGE?</p>
          <h2>
            Let&apos;s make
            <br />
            <em>something happen.</em>
          </h2>
          <p>
            Tell us where you want to go. We&apos;ll help you figure out the
            next move.
          </p>
          <Link href="/contact" className="button-primary">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>

        <span className="cta-index">RD / LET&apos;S BUILD</span>
      </section>
    </>
  );
}
