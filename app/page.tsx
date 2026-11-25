import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/lib/courses";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow" style={{color:"#c6a56b"}}>A world of ideas and opportunity</span>
            <h1>Discover.<br/><span>Understand.</span><br/>Grow.</h1>
            <p className="hero-copy">Knowledge that empowers. Skills that advance. Explore practical learning, fresh perspectives and ideas designed to help you move forward.</p>
            <div className="hero-actions">
              <Link href="/academy" className="btn btn-primary">Explore the Academy <span>↗</span></Link>
              <Link href="/knowledge" className="btn btn-outline">Discover Knowledge</Link>
            </div>
          </div>
          <div className="hero-art" aria-label="Aquanora Smart visual identity">
            <div className="art-orbit"/><div className="art-core"/>
            <div className="art-label"><strong>Ideas into capability.</strong><span>Learning for work, life and a changing world.</span></div>
          </div>
        </div>
      </section>

      <section className="value-band"><div className="container value-row">
        <div className="value-item"><b>✦</b> Practical, accessible learning</div>
        <div className="value-item"><b>✦</b> Knowledge for a changing world</div>
        <div className="value-item"><b>✦</b> Skills you can put to work</div>
      </div></section>

      <section className="section">
        <div className="container">
          <div className="section-head"><span className="eyebrow">Learn with purpose</span><h2>Build skills that move you forward.</h2><p>Explore focused learning experiences designed around useful knowledge, practical application and continuous development.</p></div>
          <div className="grid-3">{courses.map(course => <CourseCard key={course.slug} course={course}/>)}</div>
          <div style={{marginTop:30}}><Link href="/academy" className="text-link">View all learning programmes ↗</Link></div>
        </div>
      </section>

      <section className="section" style={{background:"var(--ivory)"}}>
        <div className="container feature-split">
          <div className="feature-visual"><span className="eyebrow" style={{color:"#c6a56b"}}>Aquanora Academy</span><div><div className="big-number">01</div><h3 className="serif" style={{fontSize:"2rem",margin:"0 0 8px"}}>Learn something useful.</h3><p style={{color:"#c7d0dc",lineHeight:1.7,maxWidth:330}}>Short, focused learning built to connect knowledge with everyday practice.</p></div></div>
          <div><span className="eyebrow">Professional learning</span><h2 className="serif" style={{fontSize:"clamp(2rem,4vw,3rem)",lineHeight:1.12,color:"var(--navy)"}}>Small steps. Meaningful progress.</h2><p className="muted">The Academy will bring together practical courses, guided learning resources and assessments. Start with a subject that matters to you and build confidence one skill at a time.</p>
            <div className="feature-list">
              <div className="feature-line"><span className="check">✓</span><div><strong>Focused courses</strong><div className="muted">Clear learning outcomes and manageable lessons.</div></div></div>
              <div className="feature-line"><span className="check">✓</span><div><strong>Practical application</strong><div className="muted">Examples, exercises and useful takeaways.</div></div></div>
              <div className="feature-line"><span className="check">✓</span><div><strong>Progress you can track</strong><div className="muted">A future learner dashboard for courses and assessments.</div></div></div>
            </div>
            <Link href="/academy" className="btn btn-dark">Explore the Academy ↗</Link>
          </div>
        </div>
      </section>

      <section className="section"><div className="container">
        <div className="section-head"><span className="eyebrow">Explore Aquanora</span><h2>More than courses.</h2><p>A connected home for professional learning, useful knowledge, business development and educational media.</p></div>
        <div className="grid-4">
          <Link href="/academy" className="card topic-card"><div className="icon-box">⌂</div><h3>Academy</h3><p className="muted">Practical courses and learning pathways.</p><span className="text-link">Start learning ↗</span></Link>
          <Link href="/knowledge" className="card topic-card"><div className="icon-box">✧</div><h3>Knowledge</h3><p className="muted">Articles, explainers and resources worth exploring.</p><span className="text-link">Explore ideas ↗</span></Link>
          <Link href="/business" className="card topic-card"><div className="icon-box">▤</div><h3>Business</h3><p className="muted">Workplace skills and learning for organisations.</p><span className="text-link">For business ↗</span></Link>
          <Link href="/media" className="card topic-card"><div className="icon-box">▷</div><h3>Media</h3><p className="muted">Documentaries and stories that broaden perspective.</p><span className="text-link">Watch and discover ↗</span></Link>
        </div>
      </div></section>

      <section className="section" style={{paddingTop:0}}><div className="container"><div className="cta"><div><span className="eyebrow" style={{color:"#c6a56b"}}>Keep discovering</span><h2>Make room for your next idea.</h2><p>Explore the learning and knowledge resources taking shape at Aquanora Smart.</p></div><Link href="/contact" className="btn btn-primary">Connect with us ↗</Link></div></div></section>
    </>
  );
}