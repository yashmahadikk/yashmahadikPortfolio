'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { ExternalLink } from 'lucide-react';

interface Journey {
  id: string;
  title: string;
  description: string;
  content: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  credential_url?: string;
}

interface Mentor {
  id: string;
  name: string;
  title: string;
  company?: string;
  what_taught: string;
}

interface Tool {
  id: string;
  name: string;
  category: string;
  description?: string;
}

interface BucketItem {
  id: string;
  title: string;
  description: string;
  category?: string;
}

interface CuratedLink {
  id: string;
  title: string;
  url: string;
  description?: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  status: string;
}

export function Footer() {
  const [journey, setJourney] = useState<Journey | null>(null);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [bucketList, setBucketList] = useState<BucketItem[]>([]);
  const [curatedLinks, setCuratedLinks] = useState<CuratedLink[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();

      try {
        const [journeyRes, certificatesRes, mentorsRes, toolsRes, bucketRes, linksRes, booksRes] = await Promise.all([
          supabase.from('my_journey').select('*').order('order_position'),
          supabase.from('certificates').select('*').order('order_position'),
          supabase.from('mentors').select('*').order('order_position'),
          supabase.from('tools_software').select('*').order('order_position'),
          supabase.from('bucket_list').select('*').order('order_position'),
          supabase.from('curated_links').select('*').order('order_position'),
          supabase.from('books').select('*').order('date_added', { ascending: false }),
        ]);

        if (journeyRes.data?.length) setJourney(journeyRes.data[0]);
        if (certificatesRes.data) setCertificates(certificatesRes.data);
        if (mentorsRes.data) setMentors(mentorsRes.data);
        if (toolsRes.data) setTools(toolsRes.data);
        if (bucketRes.data) setBucketList(bucketRes.data);
        if (linksRes.data) setCuratedLinks(linksRes.data);
        if (booksRes.data) setBooks(booksRes.data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          Loading...
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* My Journey */}
          {journey && (
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                {journey.title}
              </h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">
                {journey.description}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {journey.content}
              </p>
            </div>
          )}

          {/* Certificates & Achievements */}
          {certificates.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Certificates & Achievements
              </h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-6">
                A curated list of certificates and achievements
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    {cert.credential_url && (
                      <a
                        href={cert.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-2 inline-flex items-center gap-1"
                      >
                        View Credential <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mentors & People */}
          {mentors.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Mentors & People Who Have Impacted My Life
              </h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-6">
                The people who shaped my journey
              </p>
              <div className="space-y-4">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="border-l-2 border-primary pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{mentor.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {mentor.title}
                      {mentor.company && ` at ${mentor.company}`}
                    </p>
                    <p className="text-sm text-foreground italic">"{mentor.what_taught}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Software */}
          {tools.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Tools and Software I Use Daily
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div key={tool.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{tool.name}</h4>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {tool.category}
                      </span>
                    </div>
                    {tool.description && (
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Books */}
          {books.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                Books
              </h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-6">
                What I&apos;m reading and what shaped my thinking
              </p>
              <div className="flex gap-2 mb-4">
                <Link
                  href="/books"
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  View Full Collection →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {books.slice(0, 3).map((book) => (
                  <div key={book.id} className="p-3 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{book.title}</h4>
                    <p className="text-xs text-muted-foreground">{book.author}</p>
                    <span className="inline-block text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded mt-2">
                      {book.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bucket List */}
          {bucketList.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Bucket List
              </h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-6">
                Things I want to do, become, and build
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {bucketList.map((item) => (
                  <div key={item.id} className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.category && (
                      <span className="inline-block text-xs bg-primary/20 text-primary px-2 py-1 rounded mt-3">
                        {item.category}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curated Links */}
          {curatedLinks.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Curated Links & Interesting Things
              </h3>
              <div className="space-y-3">
                {curatedLinks.map((link) => (
                  <div key={link.id} className="flex items-start gap-3 p-3 hover:bg-muted rounded-lg transition-colors group">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        {link.title}
                        <ExternalLink size={14} />
                      </h4>
                      {link.description && (
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Thinking Partner CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Need a Thinking Partner?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s connect and explore ideas together. I&apos;m always open to interesting conversations about products, business, and building.
            </p>
            <a
              href="https://calendar.app.google/xw7tZWDx2HMdFNPc8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Schedule a Chat <span className="text-sm">(Free)</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yash Mahadik. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built by a PM who has shipped, pivoted, and shut down. That&apos;s the job.
          </p>
        </div>
      </div>
    </footer>
  );
}
