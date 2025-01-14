'use client';

import { motion } from 'framer-motion';

interface Publication {
  authors: string[];
  title: string;
  journal: string;
  year: string;
  impactFactor?: string;
  location?: string;
}

const publications: Publication[] = [
  {
    authors: ['M. A. Hossen', 'Sang-Jo Yoo'],
    title: 'Q-Learning–Based Multi-Objective Clustering Algorithm for Cognitive Radio Ad-Hoc Networks',
    journal: 'IEEE access Journal',
    year: '2023',
    impactFactor: '4.098'
  },
  {
    authors: ['M. A. Hossen', 'T. X. Vu', 'S. Chatzinotas', 'V. D. Nguyen', 'B. Ottersten'],
    title: 'Joint Resource Allocation and Link Adaptation for Ultra-reliable and Low-latency Services',
    journal: 'IEEE Consumer Communications & Networking Conference (CCNC)',
    year: '2023',
  },
  {
    authors: ['M. A. Hossen', 'S. A. H. Chowdhury', 'M. S. Anower', 'S. Hossen', 'M. F. Pervej', 'M. M. Hasan'],
    title: 'Effect of Signal Length in Cross-correlation based Underwater Network Size Estimation',
    journal: '2nd International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)',
    year: '2015',
    location: 'Savar, Dhaka, Bangladesh, May 2015'
  }
];

export default function Publications() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Publications</h2>
      <div className="space-y-2">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="mb-2">
              <strong>• </strong>
              {pub.authors.map((author, i) => (
                <span key={i}>
                  {author === 'M. A. Hossen' ? <strong>{author}</strong> : author}
                  {i < pub.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
              , &quot;{pub.title},&quot; <em>{pub.journal}</em>
              {pub.impactFactor && <span> (Impact Factor: {pub.impactFactor})</span>}
              {pub.year && `, ${pub.year}`}
              {pub.location && `, ${pub.location}`}.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
