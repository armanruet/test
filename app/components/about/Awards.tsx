'use client';

import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const awards = [
  {
    title: 'Jungseok International Scholarship for Graduate Study',
    organization: 'Inha University, Incheon, Rep of Korea',
    year: '2018 – 2020',
  },
  {
    title: 'Laboratory Assistant',
    organization: 'Department of ICE, Inha University, Incheon, Rep of Korea',
    year: '2018 – 2020',
  },
  {
    title: 'Technical Scholarship for Undergraduate Study',
    organization: 'Rajshahi University of Engineering & Technology',
    year: '2012 – 2014',
  },
  {
    title: 'Travel Scholarship',
    organization: 'The Bangladesh-Sweden Trust Fund (BSTF)',
    year: '2018',
  },
  {
    title: 'IELTS',
    organization: 'Overall Score: 6.5/9',
    year: '2016',
  },
  {
    title: 'GRE',
    organization:
      '306 (Quantitative Reasoning-165; Verbal Reasoning- 141; Analytical Writing Assessment (AWA)-3.00)',
    year: '2016',
  },
];

export default function Awards() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Awards and Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800/50 rounded-lg p-4 shadow-sm 
                     hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <FaAward className="text-blue-500 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-1">
                  {award.organization}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{award.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
