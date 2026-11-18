import Test from './test';
import  Button  from './component/Button';
import { Pencil, Pill } from 'lucide-react';
import SearchBar from './component/SearchBar';
import ProgressBar from './component/ProgressBar';
import PillNav from './component/PillNav';
export default function Home() {
  return (
    <div>
      <nav>
        Home
        
      </nav>
      <footer>
        <Test />
        <Button variant="primary">Primary</Button>
        <Button variant="primary" icon={Pencil}>Label</Button>
        <SearchBar />
        <ProgressBar color="red" percent="90"/>
        <PillNav />
      </footer>
    </div>
  );
}
