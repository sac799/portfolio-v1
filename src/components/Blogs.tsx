
import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar } from 'lucide-react'

const Blogs: React.FC = () => {
  const blogs = [
    {
      title: 'Creating a New Angular App',
      description: 'n this blog, we will walk you through the process of creating a new Angular app.',
      link: 'https://medium.com/@sacpatil799/creating-a-new-angular-app-ae4c034fb075',
      category: 'Software Engineering',
      readTime: '3 min read',
      publishedDate: '2023'
    },
    {
      title: 'Deploying Your Angular App on GitHub Pages for Free',
      description: 'A comprehensive guide on how to deploy your Angular applications to GitHub Pages without any cost. Learn the step-by-step process, common pitfalls to avoid, and best practices for continuous deployment.',
      link: 'https://medium.com/@sacpatil799/deploying-your-angular-app-on-github-pages-for-free-df3368b282b8',
      category: 'DevOps',
      readTime: '3 min read',
      publishedDate: '2023'
    },
    {
      title: "The Code Whisperer's Guide: Best Practices for Code that Endures",
      description: 'Explore essential coding practices that make your code maintainable, readable, and scalable. From clean architecture principles to effective testing strategies, discover how to write code that stands the test of time.',
      link: 'https://medium.com/@sacpatil799/the-code-whisperers-guide-best-practices-for-code-that-endures-83417095fd30',
      category: 'Software Engineering',
      readTime: '3 min read',
      publishedDate: '2023'
    }
  ]

  return (
    <section id="blogs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sharing knowledge and insights about software engineering, DevOps, and best practices in modern development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-blue-400 text-sm font-medium">{blog.category}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {blog.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {blog.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.publishedDate}</span>
                  </div>
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                <span>Read Article</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            More articles and technical insights coming soon!
          </p>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Follow me on LinkedIn for the latest articles and technical discussions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blogs
