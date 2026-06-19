import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Books | Yash Mahadik",
  description: "Books I'm reading and have read.",
};

export default async function BooksPage() {
  const supabase = await createClient();
  
  const { data: books, error } = await supabase
    .from("books")
    .select("*")
    .order("date_added", { ascending: false });

  if (error) {
    console.error("Error fetching books:", error);
  }

  // Group books by status
  const reading = books?.filter((b) => b.status === "reading") || [];
  const completed = books?.filter((b) => b.status === "completed") || [];
  const wantToRead = books?.filter((b) => b.status === "want-to-read") || [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Link>
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif italic text-foreground mb-4">
            Books
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of books I'm reading, have read, and want to read. I believe in learning continuously and these books shape how I think about product, technology, and life.
          </p>
        </div>

        {/* Currently Reading */}
        {reading.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-8">Currently Reading</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reading.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* Completed */}
        {completed.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-8">Completed</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completed.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* Want to Read */}
        {wantToRead.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-serif text-foreground mb-8">Want to Read</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wantToRead.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* No Books */}
        {reading.length === 0 && completed.length === 0 && wantToRead.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No books yet.</p>
          </div>
        )}
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}

function BookCard({ book }: { book: any }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "reading":
        return (
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full font-medium">
            Reading
          </span>
        );
      case "completed":
        return (
          <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full font-medium">
            Completed
          </span>
        );
      case "want-to-read":
        return (
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full font-medium">
            Want to Read
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="group flex flex-col h-full">
      {/* Book Cover - Full Display with proper aspect ratio */}
      <div className="w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden rounded-lg mb-4 aspect-[9/13]">
        {book.cover_url ? (
          <img
            src={book.cover_url}
            alt={book.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="text-center p-4">
            <p className="text-muted-foreground text-sm">No cover</p>
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
        
        {/* Book Type/Tags */}
        {book.book_type && (
          <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
            {book.book_type}
          </p>
        )}

        {/* Rating */}
        {book.rating && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-foreground">Rating:</span>
            <span className="text-sm font-semibold text-primary">{book.rating}/5 ⭐</span>
          </div>
        )}

        {/* My Review */}
        {book.my_review && (
          <p className="text-sm text-muted-foreground italic mb-3 line-clamp-3">
            "{book.my_review}"
          </p>
        )}

        {/* Status Badge */}
        <div className="pt-3 border-t border-border mt-auto">
          {getStatusBadge(book.status)}
        </div>
      </div>
    </div>
  );
}
