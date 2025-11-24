import { getContent } from "@/lib/getContent";
import styles from "./page.module.css";

export default async function TextLessonsPage() {
  const { textLessons, lastUpdated } = await getContent();

  return (
    <section className={styles.section}>
      <header className="section-title">
        <div>
          <h1>Text Lessons</h1>
          <p>Dive into technique breakdowns and practice guides. Update content through the JSON.</p>
        </div>
        <span className="tag">Last update {new Date(lastUpdated).toLocaleDateString()}</span>
      </header>

      <div className={styles.grid}>
        {textLessons.map((lesson) => (
          <article key={lesson.id} className={styles.card}>
            <header>
              <h2>{lesson.title}</h2>
              <span>{lesson.readTime}</span>
            </header>
            <ul>
              {lesson.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p>{lesson.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
