-- Create new movies table with all text fields (no varchar constraints)
CREATE TABLE movies_new (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT,
  rating TEXT,
  genre TEXT,
  photo_url TEXT,
  my_thoughts TEXT,
  status TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Copy data from old movies table to new one (if old table exists)
-- Uncomment and run this after creating the new table
-- INSERT INTO movies_new (id, title, url, rating, genre, photo_url, my_thoughts, status, created_at)
-- SELECT id, title, url, rating, array_to_string(genre, ','), photo_url, my_thoughts, status, created_at
-- FROM movies
-- WHERE id IS NOT NULL;

-- After verifying data, drop old table and rename new one
-- DROP TABLE IF EXISTS movies CASCADE;
-- ALTER TABLE movies_new RENAME TO movies;

-- Create index for faster queries
CREATE INDEX idx_movies_status ON movies_new(status);
CREATE INDEX idx_movies_created_at ON movies_new(created_at);
