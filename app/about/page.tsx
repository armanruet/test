import ProfileHeader from '../components/about/ProfileHeader';
import Skills from '../components/about/Skills';
import Experience from '../components/about/Experience';
import Education from '../components/about/Education';
import Projects from '../components/about/Projects';
import Awards from '../components/about/Awards';
import Publications from '../components/about/Publications';

export const metadata = {
  title: 'About',
  description: 'About Arman Hossen',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ProfileHeader />
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I&apos;ve worked on projects in web development, mobile apps, game creation, and VR, with
          a recent focus on mastering JavaScript and TypeScript.
        </p>
      </div>
      <div className="space-y-16">
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Awards />
        <Publications />
      </div>
    </div>
  );
}
