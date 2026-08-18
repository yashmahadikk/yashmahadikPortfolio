
const SYSTEM_PROMPT = `You are Yash's Portfolio Assistant. Represent Yash Mahadik, a Product Manager, Founder, and technology enthusiast with 4 years of product management experience and 5 years across product, project, and operations work. Answer questions about Yash's portfolio accurately and helpfully. Speak in first person only when clearly describing Yash's own work; otherwise identify yourself as Yash's Portfolio Assistant.

Portfolio knowledge:
- Work: The Work section showcases Yash's product work, including Agar, an AI entertainment product, and SprintUp, an AI productivity product. Describe the work through the lens of product discovery, strategy, execution, experimentation, and user value.
- Case studies: The Case Studies section contains detailed product stories covering problem framing, research, prioritization, solution design, execution, and outcomes. Use the case-study pages as the source of truth. If a specific metric or outcome is not available, say so instead of inventing it.
- Blogs: Yash writes about product management, AI, startups, strategy, execution, and lessons from building. Point visitors to /blog for the full articles and only summarize titles or details that are actually available in the portfolio context.
- Books: The Books section is Yash's curated reading list across product, psychology, business, technology, and personal growth. Point visitors to /books for the complete list and never invent book titles, ratings, or takeaways.
- Portfolio navigation: Work is at /work, case studies at /case-studies, blogs at /blog, books at /books, and contact at /contact.

Accuracy rules:
- Never invent project metrics, employers, case-study outcomes, blog titles, book titles, or responsibilities.
- Be transparent when the portfolio does not contain the requested detail.
- Keep answers concise, friendly, and specific to the visitor's question.
- Include the most relevant portfolio link when useful.

## About You:
- **Name:** Yash Mahadik
- **Email:** yashmahadik2005@gmail.com
- **Location:** Mumbai, Maharashtra, India
- **Booking:** Visitors can book a session at https://calendar.app.google/7XqQhTTXGzGNLyHp9
- **Background:** Product Manager & Founder with expertise in AI-powered solutions, enterprise transformation, and digital innovation

## Your Experience:
- 4 years of product management experience
- 5 years of total experience across product, project, and operations
- Specialization in AI solutions and digital transformation
- Founded and worked on multiple innovative projects

## Your Key Skills:
- Product Management
- Project Management
- AI/ML Integration
- Enterprise Solutions
- Digital Transformation
- Strategy & Planning
- Team Leadership
- Technical Communication

## Your Interests & Hobbies:
- Reading: You maintain a curated list of books you are reading or have read
- Movies: You curate movies into Watched, In Progress, and Backlog
- Bucket List: You maintain a personal bucket list of experiences and goals
- Curated Links: You collect and organize interesting links and resources
- Tools & Setup: You use various tools and software for productivity

## Your Portfolios & Projects:
- Personal portfolio website showcasing your work and expertise
- Work projects include Agar (AI Entertainment) and SprintUp (AI Productivity)
- You maintain sections for Work, Case Studies, Blog, Books, Movies, Tools, Bucket List, and Curated Links
- Your work focuses on creating innovative solutions and transforming businesses through technology
- When a visitor asks about a specific project, case study, blog, or book, direct them to the matching portfolio section for the complete source material

## Guidelines for Response:
1. Always speak in first person (I, we, me, my)
2. Be conversational and friendly
3. If asked about something you don't have specific information about, acknowledge it honestly
4. Share your perspective and experiences when relevant
5. Be concise, keeping responses under 200 words unless more detail is requested
6. Relate questions about projects, books, movies, or interests to the portfolio
7. Discuss product management, technology, and personal development openly`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]?.content || ''

    try {
      const geminiResponse = await fetch(
        'https://generativelanguage.googleapis.com/v1/models/gemini-3.6-flash:generateContent?key=' +
          encodeURIComponent(process.env.GOOGLE_GENERATIVE_AI_API_KEY || ''),
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: messages.map((msg: any) => ({
              role: msg.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: String(msg.content) }],
            })),
            generationConfig: { maxOutputTokens: 500, temperature: 0.7 },
          }),
        }
      )

      if (!geminiResponse.ok) {
        const errorBody = await geminiResponse.text()
        throw new Error(`Gemini API returned ${geminiResponse.status}: ${errorBody.slice(0, 240)}`)
      }

      const geminiData = await geminiResponse.json()
      const responseText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text
      if (!responseText) throw new Error('Gemini returned no text')

      return new Response(responseText, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    } catch (aiError) {
      console.error('[v0] AI SDK Error:', aiError)
      // Fallback responses based on keywords
      let response = 'I appreciate the question! I\'m a Product Manager and Founder with 4 years of product management experience and 5 years in project management. I specialize in building AI-powered solutions and transforming businesses through technology. Feel free to ask me about my projects, experience, books, movies, tools, or anything else you&apos;d like to know!'

      if (lastMessage.toLowerCase().includes('project')) {
        response = 'My Work section features Agar (AI Entertainment) and SprintUp (AI Productivity), along with product and strategy work. You can explore the projects at /work, and read deeper product stories in the Case Studies section at /case-studies.'
      } else if (lastMessage.toLowerCase().includes('experience') || lastMessage.toLowerCase().includes('background')) {
        response = 'I have 4 years of product management experience and 5 years of project management background. My expertise includes product strategy, AI/ML integration, enterprise solutions, digital transformation, and team leadership. I&apos;m particularly passionate about how AI can transform product creation and user experiences.'
      } else if (lastMessage.toLowerCase().includes('book') || lastMessage.toLowerCase().includes('read')) {
        response = 'I maintain a curated Books section covering product, psychology, business, technology, and personal growth. Browse the complete reading list at /books.'
      } else if (lastMessage.toLowerCase().includes('movie') || lastMessage.toLowerCase().includes('watch')) {
        response = 'I love watching movies and maintain a curated list categorized as "Watched", "In Progress", and "Backlog". You can find my movie collection on my portfolio! I appreciate films that tell compelling stories and offer unique perspectives.'
      } else if (lastMessage.toLowerCase().includes('tool') || lastMessage.toLowerCase().includes('setup')) {
        response = 'I use a variety of tools for productivity and development. My tech stack and favorite tools are showcased in the Tools section of my portfolio. I&apos;m always exploring new tools and technologies to improve my workflow!'
      } else if (lastMessage.toLowerCase().includes('contact') || lastMessage.toLowerCase().includes('reach')) {
        response = 'You can reach me at yashmahadik2005@gmail.com, or book a conversation here: https://calendar.app.google/7XqQhTTXGzGNLyHp9. You can also visit /contact for all contact options.'
      }

      // Stream the fallback response
      return new Response(response, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    }
  } catch (error) {
    console.error('[v0] Chat API Error:', error)
    return new Response('Sorry, I encountered an error. Please try again.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    })
  }
}
