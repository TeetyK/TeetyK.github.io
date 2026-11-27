import Test from './test';
import  Button  from './component/Button';
import { Pencil, Pill } from 'lucide-react';
import SearchBar from './component/SearchBar';
import ProgressBar from './component/ProgressBar';
import PillNav from './component/PillNav';
import Header from './header';
import Content from './content';
import SakuraBackground from './sakurabg';
export default function Home() {
  return (
    <div>
      <SakuraBackground petalsCount={50} introDuration={16} />
      <Header />
      <main className='w-full pt-16 bg-background min-h-screen'>
        <Content />
      </main>
      {/* <footer>
        <Test />
        <Button variant="primary">Primary</Button>
        <Button variant="primary" icon={Pencil}>Label</Button>
        <SearchBar />
        <ProgressBar color="red" percent={90} />
        <PillNav />
      </footer> */}
    </div>
  );
}
