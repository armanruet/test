import Contact from 'app/components/contact';
import Hero from 'app/components/hero/hero';
import { ScrollProvider } from 'app/components/providers/ScrollProvider';
import Works from 'app/components/work/works';

export default function Page() {
  return (
    <ScrollProvider>
      <Hero />
      <Works />
      <Contact />
    </ScrollProvider>
  );
}
