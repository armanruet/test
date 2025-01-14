export default function Skills() {
  const skills = [
    // First Column
    {
      name: 'Python',
      level: 90,
      column: 1,
    },
    {
      name: 'R',
      level: 75,
      column: 1,
    },
    {
      name: 'TypeScript',
      level: 85,
      column: 1,
    },
    {
      name: 'Kubernetes',
      level: 85,
      column: 1,
    },
    {
      name: 'Machine Learning',
      level: 80,
      column: 1,
    },
    // Second Column
    {
      name: 'Java',
      level: 85,
      column: 2,
    },
    {
      name: 'HTML',
      level: 90,
      column: 2,
    },
    {
      name: 'Linux',
      level: 85,
      column: 2,
    },
    {
      name: 'bash',
      level: 90,
      column: 2,
    },
    {
      name: 'Microservices',
      level: 70,
      column: 2,
    },
    // Third Column
    {
      name: 'MATLAB',
      level: 90,
      column: 3,
    },
    {
      name: 'CSS',
      level: 85,
      column: 3,
    },
    {
      name: 'Git & Gitlab',
      level: 90,
      column: 3,
    },
    {
      name: 'Node.js',
      level: 75,
      column: 3,
    },
    {
      name: 'AWS',
      level: 70,
      column: 3,
    },
    // Fourth Column
    {
      name: 'SQL',
      level: 85,
      column: 4,
    },
    {
      name: 'JavaScript(React)',
      level: 90,
      column: 4,
    },
    {
      name: 'Docker',
      level: 85,
      column: 4,
    },
    {
      name: 'Django',
      level: 75,
      column: 4,
    },
    {
      name: 'Azure',
      level: 70,
      column: 4,
    },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((columnNum) => (
          <div key={columnNum} className="space-y-4">
            {skills
              .filter((skill) => skill.column === columnNum)
              .map((skill) => (
                <div key={skill.name} className="space-y-4">
                  <div className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-pink-600 dark:bg-pink-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
