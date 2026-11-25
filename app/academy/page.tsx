import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/lib/courses";
export const metadata: Metadata = { title: "Academy", description: "Explore practical learning programmes from Aquanora Smart." };
export default function AcademyPage() {
  return <><section className="page-hero"><div className="container"><span className="eyebrow" style={{color:"#c6a56b"}}>Aquanora Academy</span><h1>Learning for real-world progress.</h1><p>Focused courses to help you build useful skills, strengthen your confidence and keep moving forward. Our catalogue is growing.</p></div></section>
    <section className="page-content"><div className="container"><div className="section-head"><span className="eyebrow">Course catalogue</span><h2>Explore learning programmes</h2><p>Course availability and enrolment details will be announced as each programme is prepared.</p></div><div className="grid-3">{courses.map(c=><CourseCard key={c.slug} course={c}/>)}</div><p className="muted" style={{marginTop:28,fontSize:".85rem"}}>Aquanora Smart's initial courses are independently developed learning programmes. A certificate of completion, where offered, is not an accredited professional qualification unless explicitly stated.</p></div></section></>;
}