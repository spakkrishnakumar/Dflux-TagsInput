import React, { useState } from 'react';

import classes from './App.module.css'
import TagsInput from './components/TagsInput';

function App() {

  const [tags, setTags] = useState(["Apples", "Oranges", "Bananas"])

  return (
    <div className={classes.main}>
     <TagsInput 
       tags={tags}
       onChange={tags => setTags(tags)}
     />
    </div>
  );
}

export default App;
