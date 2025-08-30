
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Restore Digital',
      location: 'United Kingdom',
      period: 'Aug 2024 - Present',
      description: 'Building .NET 8 APIs and background services to support high-volume document workflows, processing millions of records daily.',
      achievements: [
        'Implemented async programming, caching, and performance optimisation to meet strict SLAs',
        'Deployed containerised solutions on Azure with Docker, orchestrated CI/CD pipelines via GitHub Actions and Azure DevOps',
        'Practised TDD and automated testing, ensuring reliability in production',
        'Participated in system design discussions and mentored team members in best practices'
      ],
      technologies: ['.NET 8', 'Azure', 'Docker', 'GitHub Actions', 'Azure DevOps', 'TDD']
    },
    {
      title: 'Software Developer',
      company: 'Birlasoft',
      location: 'Pune, India',
      period: 'Nov 2021 - Sept 2022',
      description: 'Developed secure financial dashboards and CI/CD pipelines while advocating for test-driven development.',
      achievements: [
        'Developed secure financial dashboards in React/TypeScript, integrated with REST APIs for transactional analytics',
        'Built CI/CD pipelines with GitHub Actions and Terraform, cutting deployment times by 40%',
        'Advocated for TDD, mentoring juniors in writing effective unit and integration tests',
        'Collaborated in Scrum teams, working closely with business stakeholders to deliver incremental value',
        'Mentored junior developers, reviewed code, and advocated for test-driven development'
      ],
      technologies: ['React', 'TypeScript', 'REST APIs', 'GitHub Actions', 'Terraform', 'TDD', 'Scrum']
    },
    {
      title: 'Software Developer',
      company: 'Total Synergy Concepts',
      location: 'Pune, India',
      period: 'Aug 2020 – Aug 2021',
      description: 'Delivered full-stack solutions and contributed to microservices architecture.',
      achievements: [
        'Delivered full-stack solutions in .NET 6 + React with JWT-secured APIs',
        'Contributed to Node.js microservices powering analytics and tracking features',
        'Partnered with UX designers to ensure user-centred, accessible web solutions',
        'Applied automated testing and CI/CD to improve system reliability'
      ],
      technologies: ['.NET 6', 'React', 'JWT', 'Node.js', 'Microservices', 'CI/CD']
    },
    {
      title: 'Software Engineer',
      company: 'Zensar Technologies',
      location: 'Pune, India',
      period: 'Oct 2019 – Feb 2020',
      description: 'Focused on front-end development and database optimization.',
      achievements: [
        'Utilised JavaScript, jQuery, and JSON for front-end development, improving user experience and functionality',
        'Optimised T-SQL stored procedures and indexed queries, reducing report generation latency by 20%',
        'Managed database operations with SQL Server and T-SQL, ensuring data integrity and optimised queries'
      ],
      technologies: ['JavaScript', 'jQuery', 'JSON', 'SQL Server', 'T-SQL']
    },
    {
      title: 'Software Engineer (Project Intern)',
      company: 'EXFO',
      location: 'Pune, India',
      period: 'Jul 2018 – Jun 2019',
      description: 'Built ASP.NET applications and enhanced system performance through database optimization.',
      achievements: [
        'Built ASP.NET + JavaScript features with SQL functions and triggers for high-traffic apps',
        'Enhanced system performance by redesigning schemas and optimising queries'
      ],
      technologies: ['ASP.NET', 'JavaScript', 'SQL', 'Database Design']
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="h-5 w-5 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    </div>
                    
                    <div className="text-lg font-semibold text-blue-400 mb-2">{exp.company}</div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-blue-300 text-xs rounded-full border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
