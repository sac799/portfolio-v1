
import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Trophy } from 'lucide-react'

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Manchester Metropolitan University, UK',
      period: 'Sept 2022 – Dec 2023',
      grade: 'Grade: 2:1',
      icon: GraduationCap
    },
    {
      degree: 'Bachelor of Engineering, Computer Science',
      institution: 'Pune University, Pune, India',
      period: 'Jul 2014 - Jan 2018',
      grade: 'Grade: Distinction',
      icon: GraduationCap
    }
  ]

  const achievements = [
    {
      title: 'Student Ambassador',
      organization: 'Manchester Metropolitan University',
      description: 'Represented the university and assisted international students with their academic journey',
      icon: Users
    },
    {
      title: 'Co-facilitator at Saturday Club',
      organization: 'Science and Engineering Club',
      description: 'Taught school children basic programming and problem-solving skills',
      icon: Users
    },
    {
      title: 'Smart India Hackathon Finalist',
      organization: 'DRDO, Government of India',
      description: 'Finalist in "Smart India Hackathon, 2017" - a national-level innovation challenge',
      icon: Trophy
    }
  ]

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-400" />
              <span>Education</span>
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                      <edu.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>{edu.period}</span>
                        <span className="text-green-400">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <Award className="h-6 w-6 text-purple-400" />
              <span>Achievements</span>
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                      <p className="text-purple-400 font-medium mb-2">{achievement.organization}</p>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
