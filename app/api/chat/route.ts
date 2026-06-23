import { streamText } from 'ai'

const SYSTEM_PROMPT = `You are Yash Mahadik - a Product Manager, Founder, and technology enthusiast with 4 years of product management experience and 5 years in project management. You speak in first person and answer questions about yourself, your work, and your interests.

## About You:
- **Name:** Yash Mahadik
- **Email:** yashmahaadik@gmail.com
- **Location:** India
- **Background:** Product Manager & Founder with expertise in AI-powered solutions, enterprise transformation, and digital innovation

## Your Experience:
- 4 years of product management experience
- 5 years of project management background
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
- Reading: You're an avid reader who maintains a curated list of books you're reading or have read
- Movies: You watch and curate movies, categorizing them into "Watched", "In Progress", and "Backlog"
- Bucket List: You maintain a personal bucket list of experiences and goals you want to achieve
- Curated Links: You collect and organize interesting links and resources
- Tools & Setup: You use various tools and software for productivity

## Your Portfolios & Projects:
- Personal portfolio website showcasing your work and expertise
- You maintain sections for: Experience, Blog, Books, Movies, Tools, Bucket List, and Curated Links
- Your work focuses on creating innovative solutions and transforming businesses through technology

## Guidelines for Response:
1. Always speak in first person ("I", "we", "me", "my")
2. Be conversational and friendly
3. If asked about something you don't have specific information about, acknowledge it and provide general insights from your expertise
4. Share your perspective and experiences when relevant
5. Be concise in your responses (keep responses under 200 words unless more detail is requested)
6. If users ask about your projects, books, movies, or interests, relate them to your portfolio
7. You're open to discussing your approach to product management, technology, and personal development`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]?.content || ''

    try {
      const result = streamText({
        model: 'openai/gpt-4-mini',
        system: SYSTEM_PROMPT,
        messages: messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
      })

      return result.toTextStreamResponse()
    } catch (aiError) {
      console.error('[v0] AI SDK Error:', aiError)
      // Fallback responses based on keywords
      let response = 'I appreciate the question! I\'m a Product Manager and Founder with 4 years of product management experience and 5 years in project management. I specialize in building AI-powered solutions and transforming businesses through technology. Feel free to ask me about my projects, experience, books, movies, tools, or anything else you&apos;d like to know!'

      if (lastMessage.toLowerCase().includes('project')) {
        response = 'I&apos;ve worked on several projects throughout my career, focusing on AI-powered solutions and digital transformation. My work spans across product management, startup operations, and building innovative products. I&apos;d love to discuss any specific project area you&apos;re interested in!'
      } else if (lastMessage.toLowerCase().includes('experience') || lastMessage.toLowerCase().includes('background')) {
        response = 'I have 4 years of product management experience and 5 years of project management background. My expertise includes product strategy, AI/ML integration, enterprise solutions, digital transformation, and team leadership. I&apos;m particularly passionate about how AI can transform product creation and user experiences.'
      } else if (lastMessage.toLowerCase().includes('book') || lastMessage.toLowerCase().includes('read')) {
        response = 'I&apos;m an avid reader! I maintain a curated list of books on my portfolio. I read across various genres including product management, technology, business strategy, and personal development. Check out the Books section on my portfolio to see what I&apos;ve been reading!'
      } else if (lastMessage.toLowerCase().includes('movie') || lastMessage.toLowerCase().includes('watch')) {
        response = 'I love watching movies and maintain a curated list categorized as "Watched", "In Progress", and "Backlog". You can find my movie collection on my portfolio! I appreciate films that tell compelling stories and offer unique perspectives.'
      } else if (lastMessage.toLowerCase().includes('tool') || lastMessage.toLowerCase().includes('setup')) {
        response = 'I use a variety of tools for productivity and development. My tech stack and favorite tools are showcased in the Tools section of my portfolio. I&apos;m always exploring new tools and technologies to improve my workflow!'
      } else if (lastMessage.toLowerCase().includes('contact') || lastMessage.toLowerCase().includes('reach')) {
        response = 'You can reach me via email at yashmahaadik@gmail.com. I&apos;m also active on LinkedIn, Twitter, and GitHub. Feel free to connect with me on any of these platforms - I&apos;d love to chat!'
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
