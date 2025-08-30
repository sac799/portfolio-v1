
import React from 'react'
import { Code2, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-blue-400" />
            <span className="text-white font-semibold">Sachin Patil</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Built with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>using React & TypeScript</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
          <p className="text-gray-400 text-sm">
            Full Stack .NET Engineer • Manchester, UK • Available for new opportunities
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
