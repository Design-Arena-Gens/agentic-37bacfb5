import Link from "next/link";
import { getContent } from "@/lib/getContent";
import styles from "./page.module.css";

export default async function HomePage() {
  const content = await getContent();
  const featuredVideo = content.videos[0];
  const featuredLesson = content.textLessons[0];
  const featuredSong = content.songs[0];

  return (
    <section className={styles.hero}>
      <div className={styles.heroIntro}>
        <h1>Master the Guitar Step by Step</h1>
        <p>
          Explore curated lessons, playable song chords, and practical tips crafted for brand-new
          players. Switch between video guidance, chord charts, and in-depth text tutorials that
          evolve alongside you.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/video-lessons" className="btn primary">
            Start with Video Lessons
          </Link>
          <Link href="/song-chords" className="btn ghost">
            Browse Song Chords
          </Link>
        </div>
      </div>
      <div className={styles.quickHighlights}>
        <article>
          <h2>Featured Lesson</h2>
          <p>{featuredVideo.title}</p>
          <Link href="/video-lessons">Watch now →</Link>
        </article>
        <article>
          <h2>Practice Song</h2>
          <p>{featuredSong.title}</p>
          <Link href="/song-chords">View chords →</Link>
        </article>
        <article>
          <h2>Skill Boost</h2>
          <p>{featuredLesson.title}</p>
          <Link href="/text-lessons">Read tutorial →</Link>
        </article>
      </div>
    </section>
  );
}
