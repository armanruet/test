'use client';

import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  languages: {
    name: string;
    percentage: string;
    color?: string;
  }[];
  updatedAt: string;
  repoUrl: string;
  cloneUrl: string;
  stars?: number;
}

const projects: Project[] = [
  {
    title: 'HandTrack3D',
    description:
      'Real-time 3D hand tracking system with depth estimation and gesture recognition for intuitive human-computer interaction.',
    languages: [{ name: 'Python', percentage: '100%', color: '#3776AB' }],
    updatedAt: '2024',
    repoUrl: 'https://github.com/armanruet/HandTrack3D',
    cloneUrl: 'https://github.com/armanruet/HandTrack3D',
    stars: 0,
  },
  {
    title: 'Q-CRAHN',
    description:
      'Q-Learning based clustering algorithm for Cognitive Radio Networks, improving network lifetime by 30% through reinforcement learning.',
    languages: [{ name: 'Python', percentage: '100%', color: '#3776AB' }],
    updatedAt: '2024',
    repoUrl: 'https://github.com/armanruet/Q-CRAHN',
    cloneUrl: 'https://github.com/armanruet/Q-CRAHN',
    stars: 0,
  },
  {
    title: 'Pick-to-Light System',
    description:
      'Industrial automation system using IEC 61131-3 and MQTT for real-time control of 4 PTL stations with visual feedback.',
    languages: [{ name: 'Smalltalk', percentage: '100%', color: '#596706' }],
    updatedAt: '2024',
    repoUrl: 'https://github.com/armanruet/PLC_PTL_MQTT',
    cloneUrl: 'https://github.com/armanruet/PLC_PTL_MQTT',
    stars: 0,
  },
  {
    title: 'Banking System',
    description:
      'Secure banking simulation with Luhn algorithm validation, SQL integration, and comprehensive transaction handling.',
    languages: [{ name: 'Python', percentage: '100%', color: '#3776AB' }],
    updatedAt: '2024',
    repoUrl: 'https://github.com/armanruet/Simple-Banking-System',
    cloneUrl: 'https://github.com/armanruet/Simple-Banking-System',
    stars: 0,
  },
];

export default function Projects() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-pink-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  {project.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center gap-1"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      {lang.name}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.repoUrl}
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Repository"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.cloneUrl}
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Demo"
                  >
                    <HiOutlineExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
