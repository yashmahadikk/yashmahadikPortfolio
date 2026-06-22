# Books & Bucket List Features

## Overview
Your portfolio now includes interactive Books and Bucket List sections with full CRUD functionality, filtering, and admin management.

## 📚 Books Section

### Public Page (`/books`)
- **Search functionality** - Search by title, author, or description
- **Status filters** - Filter by Backlog, In Progress, or Done
- **Genre filtering** - Filter books by custom genres
- **Book cards** - Display cover image, author, description, genres, and 5-star rating
- **Design** - Inspired by Divy Sharma's books page with Figtree font

### Features
- View all books with rich metadata
- Star ratings (1-5) for each book
- Multiple genre tags per book
- Status badges with color coding
- Real-time search and filtering

### Admin Panel (`/admin/books`)
**Full CRUD management:**
- Add new books with all fields
- Edit existing book details
- Delete books
- Manage genres with 15+ predefined options:
  - Fiction, Non-Fiction, Science Fiction, Fantasy, Biography
  - Self-Help, Business, Technology, History, Mystery
  - Romance, Philosophy, Psychology, Art, Science
- Set status (Backlog, In Progress, Done)
- Add 1-5 star ratings
- Upload cover image URLs

**Admin Features:**
- Table view of all books
- Quick edit and delete actions
- Genre display with color badges
- Status and rating visibility

## 🎯 Bucket List Section

### Public Page (`/bucket-list`)
- **Add links button** - Directly add items from the public page
- **Inline editing** - Add, mark complete, and delete items
- **Categorized display** - Items grouped by category
- **Links** - External links with icon for each item
- **Checkboxes** - Mark items as completed with visual feedback
- **Design** - Clean interface with Figtree font

### Features
- Add curated links with title, description, and URL
- Organize by category (Travel, Learning, etc.)
- Mark items as completed
- Visual distinction for completed items
- Delete items easily

### Admin Panel (`/admin/bucket-list`)
**Full CRUD management:**
- Add new bucket list items
- Edit existing items
- Delete items
- Toggle completion status
- Organize by category
- View all links in table format

**Admin Features:**
- Categorized table view
- Edit and delete actions per item
- Completion checkbox for quick updates
- External link access from admin panel

## Database Schema

### Books Table (`books`)
```sql
- id (UUID, Primary Key)
- title (VARCHAR, Required)
- author (VARCHAR, Required)
- description (TEXT)
- cover_url (VARCHAR)
- genre (VARCHAR Array) - Multiple genres per book
- status (VARCHAR) - 'Backlog', 'In Progress', 'Done'
- rating (INTEGER) - 1-5 star rating
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Bucket List Table (`bucket_list`)
```sql
- id (UUID, Primary Key)
- title (VARCHAR, Required)
- description (TEXT)
- link (VARCHAR)
- category (VARCHAR)
- completed (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

## Navigation
- **Books** link in main navigation
- **Bucket List** link in main navigation
- Both responsive for mobile and desktop

## Styling
- **Font**: Figtree from Google Fonts (matches Divy Sharma's site)
- **Color scheme**: Follows your Doom 64 design system
- **Responsive**: Fully responsive on all screen sizes

## Usage

### Adding Books
1. Go to `/admin/books`
2. Click "Add Book"
3. Fill in title, author, description, cover URL
4. Select status and rating
5. Check relevant genres
6. Click "Add Book"

### Editing Books
1. Go to `/admin/books`
2. Click edit icon next to book
3. Modify any fields
4. Click "Update Book"

### Managing Bucket List
1. Go to `/admin/bucket-list`
2. Click "Add Item"
3. Fill in title, description, link, and category
4. Click "Add Item"
5. Use checkboxes to mark as complete
6. Use delete to remove items

### Public Views
- Visit `/books` to see all books with search and filters
- Visit `/bucket-list` to see curated links
- Click "Add Link" on bucket list page to add directly from public view

## Real-time Sync
All changes made in admin panels are reflected immediately on public pages via Supabase real-time updates.

## Notes
- Genres on books are predefined but you can edit the AVAILABLE_GENRES array in `/app/admin/books/page.tsx` to customize
- Book ratings are 1-5 stars displayed with star emojis
- Bucket list items can optionally have no link (for general goals)
- All data is stored in Supabase PostgreSQL database
