CREATE TABLE IF NOT EXISTS videos (
    id SERIAL PRIMARY KEY,
    video_id TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    published_at TIMESTAMP NOT NULL,
    thumbnail_url TEXT NOT NULL
);
