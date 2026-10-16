import fs from "node:fs";
import path from "node:path";
import { CopyEmail } from "@/components/copy-email";
import { RouteDiagram } from "@/components/route-diagram";
import { experience, stack } from "@/lib/content";
import { asset, isProd, person } from "@/lib/site";

// Drop a square photo at public/ethan-zhou.webp and it appears in the header.
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "ethan-zhou.webp"));

/** Visible marker for copy that still needs a real value. Fails production builds so none ship. */
function Fill({ children }: { children: React.ReactNode }) {
  if (isProd) throw new Error(`Unfilled <Fill> placeholder: ${children}`);
  return <span className="fill">{children}</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <div className="page" id="top">
        <header className="top">
          <div className="who">
            {hasPhoto && (
              <img className="avatar" src={asset("/ethan-zhou.webp")} alt="" width={56} height={56} />
            )}
            <div>
              <strong>{person.name}</strong>
              <span>
                {person.title}, {person.city}
              </span>
            </div>
          </div>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href={asset("/CV.pdf")}>CV (PDF)</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <div className="hero">
            <div className="hero-copy">
              <h1>I modernise the systems businesses can’t afford to break.</h1>
              <p className="lede">
                I replace legacy dependencies, migrate live data and connect platforms that were never designed to talk
                to each other. At <strong>Linfox</strong> my main project has been redesigning the customer portal,
                with React, TypeScript, Node.js, PostgreSQL and AWS.
              </p>
            </div>
            <RouteDiagram />
          </div>

          <section id="work" aria-labelledby="work-title">
            <h2 className="section-title" id="work-title">
              Selected work
            </h2>

            <article className="case">
              <div className="case-meta">
                <span className="org">Linfox</span>
                <span>2025–present</span>
                <span className="tag">Portal redesign, part 1</span>
              </div>
              <h3>Replacing Dataverse without losing anyone’s access</h3>
              <p>
                The first project I took on at Linfox was redesigning the customer portal, starting with a new
                authorisation model. I rebuilt authentication and authorisation around PostgreSQL on AWS RDS. Every
                existing user had to keep the same sign-in and the same access to customer records on the day we
                switched.
              </p>
              <ul className="results">
                <li>
                  <b>10,000+ records migrated</b> with zero data loss and no change to how users sign in.
                </li>
                <li>
                  <b>Sign-in over 50% faster</b> on average for 4,000+ users after removing the intermediate API layer.
                  Sign-in API calls dropped from about 7–8 seconds to 3–4.
                </li>
                <li>
                  <b>Users can be set up directly in the portal</b>, with no matching record needed in Dataverse.
                </li>
              </ul>
              <details>
                <summary>How the data model works</summary>
                <div className="notes">
                  <p>
                    I moved user, account and permission data into PostgreSQL with Prisma. A junction table links each
                    user to the accounts they can see and what they can do there, so internal staff can work across many
                    customers while external users stay scoped to one.
                  </p>
                  <p>
                    The authorisation rules themselves didn’t change. Only where the data lives did, which kept the
                    switch low-risk and easy to verify.
                  </p>
                </div>
              </details>
            </article>

            <article className="case">
              <div className="case-meta">
                <span className="org">Linfox</span>
                <span>2025–present</span>
                <span className="tag">Portal redesign, part 2</span>
              </div>
              <h3>Orders that go from the portal straight into the TMS</h3>
              <p>
                The other half of the redesign: customers create an order in the portal and it is created in Blue
                Yonder, the transport management system. I worked with the portal team on the ordering interface, the
                status that comes back once the order exists, and what customers see when it fails.
              </p>
              <ol className="flow" aria-label="Order flow and who owns each step">
                <li className="step">
                  <span className="n">1</span>
                  <p>Customer creates the order in the portal</p>
                </li>
                <li className="step">
                  <span className="n">2</span>
                  <p>Portal validates and submits it</p>
                </li>
                <li className="step external">
                  <span className="n">3</span>
                  <p>
                    Integration layer forwards it
                    <small>Built and run by another team.</small>
                  </p>
                </li>
                <li className="step">
                  <span className="n">4</span>
                  <p>
                    Order created in Blue Yonder
                    <small>Status and any errors shown back in the portal.</small>
                  </p>
                </li>
              </ol>
              <div className="flow-key" aria-hidden="true">
                <span>Solid line: portal team, my work</span>
                <span>Dashed line: another team</span>
              </div>
              <ul className="results">
                <li>
                  <b>Ordering interface.</b> Order creation in the portal, with request payloads validated by Zod before
                  they leave it.
                </li>
                <li>
                  <b>Status back in the portal.</b> Once Blue Yonder has the order, its status shows where the customer
                  created it.
                </li>
                <li>
                  <b>Failures explained.</b> When an order is rejected downstream, the portal shows why and what to change.
                </li>
              </ul>
            </article>

            <article className="case">
              <div className="case-meta">
                <span className="org">Linfox</span>
                <span>2026</span>
                <span className="tag">Prototype</span>
              </div>
              <h3>An order assistant that explains failures instead of guessing</h3>
              <p>
                I’m prototyping an assistant for the customer portal that drafts new orders from a user’s history and
                explains why an order failed and how to fix it.
              </p>
              <ul className="results">
                <li>
                  <b>Data on demand.</b> A Lambda function queries order data when it’s needed and passes it to a Snowflake
                  Cortex agent, avoiding the cost of syncing everything into Snowflake.
                </li>
                <li>
                  <b>Same access rules as the portal.</b> The assistant reuses the existing visibility logic, so it can
                  only see orders the user can already see.
                </li>
                <li>
                  <b>Predictable answers.</b> Known error types map to pre-written explanations and fixes, rather than
                  asking the model to interpret raw system errors.
                </li>
              </ul>
            </article>

            <article className="case">
              <div className="case-meta">
                <span className="org">Linfox</span>
                <span>2025–present</span>
              </div>
              <h3>An internal tool for master data changes</h3>
              <p>
                Updating service IDs and locations used to take a developer up to an hour per request. I built a
                role-restricted internal tool so the development team can make the change in under five minutes.
              </p>
              <div
                className="timechart"
                role="img"
                aria-label="Time per task: previous process 30 to 60 minutes; internal tool under 5 minutes."
              >
                <div className="row">
                  <div className="lbl">
                    Previous process<small>30–60 min</small>
                  </div>
                  <div className="track">
                    <div className="band old" />
                  </div>
                </div>
                <div className="row">
                  <div className="lbl">
                    Internal tool<small>under 5 min</small>
                  </div>
                  <div className="track">
                    <div className="band new" />
                  </div>
                </div>
                <div className="axis" aria-hidden="true">
                  <span>0</span>
                  <span>15</span>
                  <span>30</span>
                  <span>45</span>
                  <span>60 min</span>
                </div>
              </div>
              <details>
                <summary>Related work: faster data tables</summary>
                <div className="notes">
                  <p>
                    I also rebuilt the portal’s data-heavy tables, moving from Material UI Table to AG Grid with sorting
                    and column reordering. TanStack Query caching cut repeat requests when switching pages.
                  </p>
                </div>
              </details>
            </article>

            <article className="case">
              <div className="case-meta">
                <span className="org">Independent project</span>
                <span>E-commerce operations</span>
              </div>
              <h3>Automating order handoff to a shipping provider</h3>
              <p>
                I built and run a TypeScript service for a small cross-border e-commerce business. It turns Shopify
                orders into YunExpress shipments, with a dashboard for the people packing them. It processes 100+ orders
                a month.
              </p>
              <ol className="flow" aria-label="Order flow">
                <li className="step">
                  <span className="n">1</span>
                  <p>
                    Pick up new Shopify orders
                    <small>On a schedule, from a saved cursor.</small>
                  </p>
                </li>
                <li className="step">
                  <span className="n">2</span>
                  <p>
                    Choose the route and build customs data
                    <small>From validated rules, not code.</small>
                  </p>
                </li>
                <li className="step">
                  <span className="n">3</span>
                  <p>
                    Create the YunExpress waybill
                    <small>Signed API request.</small>
                  </p>
                </li>
                <li className="step manual">
                  <span className="n">4</span>
                  <p>
                    Operator reviews and marks it fulfilled
                    <small>Deliberately manual, so a person decides when a customer is told it shipped.</small>
                  </p>
                </li>
              </ol>
              <div className="flow-key" aria-hidden="true">
                <span>Solid line: automated</span>
                <span>Dashed line: done by a person</span>
              </div>
              <ul className="results">
                <li>
                  <b>No duplicate waybills.</b> Manual and scheduled runs once created two waybills for one order. Now
                  the Shopify order name is YunExpress’s customer order number, so YunExpress itself rejects a second
                  submission, on top of per-order state in SQLite.
                </li>
                <li>
                  <b>Failures wait for a fix, not endless retries.</b> After three attempts an order is parked until
                  someone edits it in Shopify, for example adding a missing phone number, which queues it again
                  automatically.
                </li>
                <li>
                  <b>Shipping rules as data.</b> Routes are picked by country, state and the checkout shipping method.
                  Customs lines are merged by product category, converted to USD, capped at what the customer paid, and
                  include IOSS for EU orders.
                </li>
              </ul>
              <details>
                <summary>How it runs</summary>
                <div className="notes">
                  <p>
                    Node.js and TypeScript, with SQLite for state and Express for the dashboard, which also prints
                    labels and packing slips, books pickups and syncs actual shipping costs back to Shopify. A daily
                    summary goes to WeChat. 90+ Vitest tests run with every network call mocked.
                  </p>
                  <p>It runs on a DigitalOcean VPS with PM2 and Caddy, deployed by GitHub Actions.</p>
                </div>
              </details>
            </article>

            <p className="disclosure">
              Company work is described without internal code, customer names or system screenshots. Diagrams are
              simplified.
            </p>
          </section>

          <section id="experience" aria-labelledby="exp-title">
            <h2 className="section-title" id="exp-title">
              Experience
            </h2>
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.company}>
                  <time dateTime={job.start}>{job.period}</time>
                  <div>
                    <h3>{job.company}</h3>
                    <div className="role">{job.role}</div>
                    <p>{job.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="about" aria-labelledby="about-title">
            <h2 className="section-title" id="about-title">
              About
            </h2>
            <div className="about">
              <p>
                I’m Tianhao, also known as Ethan. I’m based in Melbourne and have worked across logistics, healthcare
                and e-commerce.
              </p>
              <p>
                Before my Master of Science in Information Technology and Systems at the University of Tasmania, I
                studied Russian Language and Literature at Beijing International Studies University. I speak Mandarin
                natively and Russian fluently.
              </p>
              <p>
                I’m looking for a senior individual-contributor role on a product team, where I can own features end to end and help make
                systems simpler to change.
              </p>
            </div>
            <div className="stack">
              {stack.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <p>{s.items}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="contact" id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title">Have a role in mind?</h2>
            <p>Email me about the team, the work and what you’re looking for.</p>
            <CopyEmail email={person.email} />
            <p className="alt">
              Or find me on{" "}
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
              and{" "}
              <a href={person.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              , or download my <a href={asset("/CV.pdf")}>CV (PDF)</a>.
            </p>
          </section>
        </main>

        <footer>
          <span>© {new Date().getFullYear()} {person.name}</span>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </>
  );
}
