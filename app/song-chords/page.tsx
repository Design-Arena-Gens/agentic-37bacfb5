import { getContent } from "@/lib/getContent";
import styles from "./page.module.css";

export default async function SongChordsPage() {
  const { songs, lastUpdated } = await getContent();

  return (
    <section className={styles.section}>
      <header className="section-title">
        <div>
          <h1>Song Chords</h1>
          <p>Practice-ready chord charts with tips. Update the JSON source to add new songs.</p>
        </div>
        <span className="tag">Last update {new Date(lastUpdated).toLocaleDateString()}</span>
      </header>

      <div className={styles.grid}>
        {songs.map((song) => (
          <article key={song.id} className={styles.card}>
            <header className={styles.cardHeader}>
              <div>
                <h2>{song.title}</h2>
                <p>{song.description}</p>
              </div>
              <span className={styles.badge}>{song.difficulty}</span>
            </header>
            <div className={styles.chordList}>
              {song.chords.map((chord) => (
                <div key={chord} className={styles.chord}>
                  <span>{chord}</span>
                  <div className={styles.chordDiagram} aria-hidden="true">
                    {Array.from({ length: 6 }).map((_, stringIndex) => (
                      <div key={stringIndex} className={styles.string} />
                    ))}
                    {Array.from({ length: 4 }).map((_, fretIndex) => (
                      <div key={fretIndex} className={styles.fret} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.tip}>{song.tips}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
