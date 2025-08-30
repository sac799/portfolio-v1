
import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, TestTube } from 'lucide-react'

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in C#/.NET Core, JavaScript/TypeScript, React, and modern web technologies'
    },
    {
      icon: Database,
      title: 'Database Expertise',
      description: 'SQL/NoSQL databases including SQL Server, PostgreSQL, Cassandra, and MongoDB'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Azure, Docker, Kubernetes, Terraform, CI/CD pipelines, and Infrastructure as Code'
    },
    {
      icon: TestTube,
      title: 'Testing & Quality',
      description: 'TDD practices with xUnit, SpecFlow, integration testing, and clean architecture'
    }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Full Stack .NET Engineer with 4+ years of experience designing and delivering 
                scalable, production-grade backend systems and user-focused web applications. 
                Skilled in collaborating with cross-functional teams, improving system architecture, 
                and writing clean, testable, and reliable code.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about building impactful digital health solutions that improve lives, 
                with expertise in payments workflows, financial analytics, and document workflow automation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
