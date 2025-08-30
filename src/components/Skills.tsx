
import React from 'react'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'C#', level: 95 },
        { name: '.NET Core', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'Entity Framework', level: 92 }
      ]
    },
    {
      title: 'APIs & Architecture',
      skills: [
        { name: 'RESTful APIs', level: 95 },
        { name: 'Microservices', level: 88 },
        { name: 'Event-driven Systems', level: 85 },
        { name: 'Clean Architecture', level: 90 }
      ]
    },
    {
      title: 'Testing & Quality',
      skills: [
        { name: 'xUnit', level: 92 },
        { name: 'NUnit', level: 88 },
        { name: 'SpecFlow', level: 85 },
        { name: 'TDD', level: 90 },
        { name: 'Integration Testing', level: 88 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'SQL Server', level: 95 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'Cassandra', level: 75 },
        { name: 'T-SQL Optimization', level: 90 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 90 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 82 },
        { name: 'Terraform', level: 85 },
        { name: 'GitHub Actions', level: 90 },
        { name: 'Azure DevOps', level: 88 }
      ]
    },
    {
      title: 'Practices & Methodologies',
      skills: [
        { name: 'Agile (Scrum/Kanban)', level: 95 },
        { name: 'Pair Programming', level: 88 },
        { name: 'CI/CD', level: 92 },
        { name: 'Infrastructure as Code', level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
