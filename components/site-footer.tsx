import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">AQUANORA <span>SMART</span></Link>
            <p>Knowledge that empowers. Skills that advance. Practical learning and ideas for a changing world.</p>
          </div>
          <div><h4>Explore</h4><div className="footer-links"><Link href="/academy">Academy</Link><Link href="/knowledge">Knowledge</Link><Link href="/business">Business</Link><Link href="/media">Media</Link></div></div>
          <div><h4>Company</h4><div className="footer-links"><Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
          <div><h4>Stay connected</h4><p>Follow our learning and knowledge updates.</p><Link href="/contact" className="footer-action">Get in touch ↗</Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Aquanora Smart. All rights reserved.</span><span>Discover. Understand. Grow.</span></div>
      </div>
      <style jsx>{`
        .footer-brand { font:600 1.2rem Georgia,serif; letter-spacing:.08em; color:#fff; }
        .footer-brand span { color:#c6a56b; }
        .footer-action { color:#c6a56b; font-weight:700; font-size:.88rem; }
      `}</style>
    </footer>
  );
}