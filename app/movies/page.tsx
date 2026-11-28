import type { Metadata } from "next"
import { connection } from "next/server"
import { MoviesPageContent, type Movie } from "@/components/movies-page-content"
import { createClient } from "@/lib/supabase/server"

export const metadata: Metadata = {
  title: "Movies | Yash Mahadik",
  description:
    "A personal film diary of stories watched, films in progress, and titles waiting on the watchlist.",
}

async function getMovies() {
  const movies: Movie[] = []
  const batchSize = 500
  let offset = 0

  try {
    const supabase = await createClient()

    while (true) {
      const { data, error } = await supabase
        .from("movies")
        .select("id,title,url,rating,genre,photo_url,my_thoughts,status,created_at")
        .order("created_at", { ascending: false })
        .order("id", { ascending: true })
        .range(offset, offset + batchSize - 1)

      if (error) throw error

      const batch = (data ?? []) as Movie[]
      movies.push(...batch)

      if (batch.length < batchSize) break
      offset += batchSize
    }

    return { movies, error: null }
  } catch (error) {
    console.error("Error fetching movies:", error)
    return {
      movies: [],
      error: "The film collection couldn't be loaded right now.",
    }
  }
}

export default async function MoviesPage() {
  await connection()

  const { movies, error } = await getMovies()
  return <MoviesPageContent initialMovies={movies} initialError={error} />
}
