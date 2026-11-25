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
      <style jsx>{`
        .site-header { background: #fffefa; border-bottom: 1px solid #e7e2d8; position: sticky; top: 0; z-index: 20; }
        .nav-wrap { min-height: 82px; display:flex; align-items:center; justify-content:space-between; gap:24px; }
        .brand { display:flex; align-items:center; gap:11px; color:#101827; letter-spacing:.09em; }
        .brand-mark { width:38px; height:38px; border:1px solid #c6a56b; color:#a78046; display:grid; place-items:center; border-radius:50%; font:600 1.4rem Georgia,serif; }
        .brand strong { display:block; font-size:.91rem; }
        .brand small { display:block; font-size:.62rem; letter-spacing:.34em; color:#4f8a89; margin-top:3px; }
        .desktop-nav { display:flex; gap:27px; align-items:center; }
        .desktop-nav a { font-size:.84rem; font-weight:600; color:#536071; }
        .desktop-nav a:hover { color:#4f8a89; }
        .nav-cta { border-radius:999px; padding:12px 18px; background:#101827; color:white; font-size:.82rem; font-weight:700; white-space:nowrap; }
        .nav-cta span { color:#c6a56b; margin-left:6px; }
        @media(max-width:850px) { .desktop-nav { display:none; } .nav-wrap { min-height:72px; } }
        @media(max-width:420px) { .nav-cta { padding:10px 13px; font-size:.75rem; } .brand strong { font-size:.78rem; } }
      `}</style>
    </header>
  );
}