import { useState } from 'react';

import Navbar from './components/common/Navbar';
import Section from './components/core/index';

function App() {
  const [tab,setTab] = useState(1);
  const [month,setMonth] = useState(3);
  const [search,setSearch] = useState("");
  const [data,setData] = useState({});
  return (
    <div className='App'>
      <Navbar tab={tab} setTab={setTab}/>
      <Section tab={tab} month={month} setMonth={setMonth}
      search={search} setSearch={setSearch} data={data} setData={setData}/>
    </div>
  );
}

export default App;