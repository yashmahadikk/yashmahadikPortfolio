import { createClient } from "@/lib/supabase/server";

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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
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
        {!books || books.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No books added yet.</p>
          </div>
        )}
      </section>
    </main>
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
    <div className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-colors h-full flex flex-col">
      {/* Book Cover or Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
        {book.cover_url ? (
          <img
            src={book.cover_url}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="text-center">
            <p className="text-muted-foreground text-sm">No cover</p>
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground mb-2">
          {new Date(book.date_added).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </p>
        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 flex-1">{book.author}</p>
        <div className="flex justify-between items-center pt-3 border-t border-border">
          {getStatusBadge(book.status)}
        </div>
      </div>
    </div>
  );
}
