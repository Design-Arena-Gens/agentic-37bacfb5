import { getContent } from "@/lib/getContent";
import styles from "./page.module.css";

export default async function VideoLessonsPage() {
  const { videos, lastUpdated } = await getContent();

  return (
    <section className={styles.section}>
      <header className="section-title">
        <div>
          <h1>Video Lessons</h1>
          <p>Watch guided sessions and add new lessons by extending the JSON content source.</p>
        </div>
        <span className="tag">Last update {new Date(lastUpdated).toLocaleDateString()}</span>
      </header>

      <div className={styles.grid}>
        {videos.map((video) => (
          <article key={video.id} className={styles.card}>
            <div className={styles.videoWrapper}>
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.content}>
              <h2>{video.title}</h2>
              <p>{video.description}</p>
              <div className={styles.meta}>
                <span>{video.duration}</span>
                {video.focus && <span>{video.focus}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
