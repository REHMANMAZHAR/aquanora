import Link from "next/link";

const links = [
  ["Academy", "/academy"],
  ["Knowledge", "/knowledge"],
  ["Business", "/business"],
  ["Media", "/media"],
  ["About", "/about"]
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Aquanora Smart home">
          <span className="brand-mark">A</span>
          <span><strong>AQUANORA</strong><small>SMART</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="nav-cta" href="/academy">Explore learning <span>↗</span></Link>
      </div>
    </header>
  );
}