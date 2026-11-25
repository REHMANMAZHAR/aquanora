import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/lib/courses";
export function generateStaticParams() { return courses.map(c => ({ slug: c.slug })); }
export default function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const course = courses.find(c => c.slug === slug);
  if (!course) notFound();
  return <><section className="page-hero"><div className="container"><span className="eyebrow" style={{color:"#c6a56b"}}>{course.category}</span><h1>{course.title}</h1><p>{course.description}</p><span className="pill">{course.duration} · {course.level}</span></div></section><section className="page-content"><div className="container prose"><h2>What you will explore</h2><p>This learning programme is being prepared. The final course outline will include clear learning objectives, lesson materials, practical examples and an assessment appropriate to the subject.</p><h2>Course details</h2><ul><li>Format: Online, self-paced learning (planned)</li><li>Duration: {course.duration}</li><li>Level: {course.level}</li><li>Enrolment: Opening soon</li></ul><p>Join the interest list to receive an update when this course becomes available.</p><Link href="/contact" className="btn btn-dark">Register your interest ↗</Link><p style={{fontSize:".82rem"}}>Any certificate offered will accurately state its issuer and status. This course is not represented as an externally accredited qualification.</p></div></section></>;
}