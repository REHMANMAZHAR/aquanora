import Link from "next/link";

export type Course = {
  slug: string; title: string; category: string; description: string;
  duration: string; level: string; symbol: string; price: string;
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card course-card">
      <div className="course-top">
        <span className="pill">{course.category}</span>
        <span className="course-symbol" aria-hidden="true">{course.symbol}</span>
      </div>
      <div className="course-body">
        <h3>{course.title}</h3>
        <p className="muted">{course.description}</p>
        <div className="course-meta"><span>◷ {course.duration}</span><span>◈ {course.level}</span></div>
        <Link className="text-link" href={`/academy/${course.slug}`}>Explore course ↗</Link>
      </div>
    </article>
  );
}