type NodeProps = { x: number; y: number; w: number; label: string; className?: string };

function Node({ x, y, w, label, className = "node" }: NodeProps) {
  return (
    <g className={className}>
      <rect x={x} y={y} width={w} height={40} rx={4} />
      <text x={x + w / 2} y={y + 25} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

/** Before/after sign-in architecture. The amber "after" route draws in once on load. */
export function RouteDiagram() {
  return (
    <figure className="route" aria-labelledby="route-cap">
      <svg
        viewBox="0 0 720 210"
        role="img"
        aria-label="Before: customer portal calls an intermediate API, which calls Dataverse. After: customer portal calls AWS Lambda, which reads PostgreSQL on RDS directly."
      >
        <g className="legacy">
          <text className="row-label" x={0} y={48}>
            Before
          </text>
          <Node x={70} y={24} w={150} label="Customer portal" />
          <line className="legacy-line" x1={220} y1={44} x2={290} y2={44} />
          <polygon className="arrow-legacy" points="290,39 298,44 290,49" />
          <Node x={300} y={24} w={160} label="Intermediate API" />
          <line className="legacy-line" x1={460} y1={44} x2={530} y2={44} />
          <polygon className="arrow-legacy" points="530,39 538,44 530,49" />
          <Node x={540} y={24} w={150} label="Dataverse" />
        </g>
        <g>
          <text className="row-label" x={0} y={138}>
            After
          </text>
          <Node x={70} y={114} w={150} label="Customer portal" className="node live n1" />
          <line className="live-line l1" x1={222} y1={134} x2={290} y2={134} />
          <polygon className="arrow" points="290,128 299,134 290,140" />
          <Node x={300} y={114} w={160} label="AWS Lambda" className="node live n2" />
          <line className="live-line l2" x1={462} y1={134} x2={530} y2={134} />
          <polygon className="arrow" points="530,128 539,134 530,140" />
          <Node x={540} y={114} w={150} label="PostgreSQL on RDS" className="node live n3" />
          <text className="metric" x={70} y={190}>
            Intermediate API removed. Sign-in over 50% faster. 10,000+ records moved, none lost.
          </text>
        </g>
      </svg>
      <figcaption id="route-cap">Simplified sign-in architecture from my Linfox work, drawn for this portfolio.</figcaption>
    </figure>
  );
}
