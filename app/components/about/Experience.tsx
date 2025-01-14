export default function Experience() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">Experience</h2>
      <div className="space-y-10">
        {/* Dropslab Technologies */}
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Dropslab Technologies, Luxembourg
            </h3>
            <span className="text-pink-600 dark:text-pink-400">Feb 2024 - Present</span>
          </div>
          <h4 className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
            Software Engineer
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600 dark:text-gray-400">
              Led the design and implementation of intelligent workflow management solutions using
              low-code platform development, focusing on process automation and quality control
              systems.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Integration and customization of technologies to improve user interaction and
              experience in applications.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Research and implement new techniques and tools for improved product quality and
              efficiency.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Collaborate with UI/UX designers to create intuitive and user-friendly interfaces.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Participate in Agile development methodologies, including sprint planning, stand-ups,
              and retrospectives
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Perform validation and verification testing
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Ensure software is up-to-date with latest technologies
            </li>
          </ul>
        </div>

        {/* SnT, University of Luxembourg */}
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              SnT, University of Luxembourg
            </h3>
            <span className="text-pink-600 dark:text-pink-400">Sep 2020 - Jun 2023</span>
          </div>
          <h4 className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">R&D Specialist</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600 dark:text-gray-400">
              Boosted user engagement 25% by consolidating websites with WikiJS.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Proficiently managed extensive data repositories through PostgreSQL, optimizing data
              retrieval speed by 40%.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Leveraged Gitlab version control and Docker container leading to a 20% decrease in
              system downtime and server load.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Demonstrated expertise in Docker, Elastic-search, HTML5, CSS, WikiJS, Gitlab, Bash,
              and PostgreSQL, ensuring the successful integration of technologies and a 15%
              reduction in development time.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Showcased advanced SQL and Oracle expertise for optimizing database performance.
            </li>
          </ul>

          <h4 className="text-lg italic text-gray-700 dark:text-gray-300 mt-6 mb-4">
            Assistant Doctorant
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600 dark:text-gray-400">
              Awarded a prestigious 250,000 euros research grant by FnR for the project Design and
              Optimization of an Intelligent Tactile Internet System over 5G and Beyond Wireless
              Networks.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Developed an innovative joint resource allocation algorithm for latency-constrained
              wireless networks, resulting in a 35% improvement in network performance and a 40%
              reduction in latency.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Designed an efficient algorithm for optimizing URLLC network, significantly reduced
              decoding error probability, and enhanced reliability within stringent latency
              constraints.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Proposed a reinforcement learning algorithm for URLLC, enhancing channel quality
              estimation, reducing retransmissions, and outperforming conventional methods in
              spectral efficiency, ensuring compliance with stringent criteria.
            </li>
            <li className="text-gray-600 dark:text-gray-400">
              Mastered SQL optimization techniques, including query tuning and indexing, on Oracle
              databases over a network.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
