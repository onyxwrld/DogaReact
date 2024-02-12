import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {cloneDeep} from './lodash';
import { Comment } from './Comment';
import CommentBox from './Components/CommentComponent';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  const [errorMess,setErrorMess] = useState('');
  const [comment,setComment] = useState([] as Comment[]);
  async function load()
  {
    try{
      const resopnse = await fetch('http://localhost:3000/api/comments');
      if(!resopnse.ok)
      {
        return setErrorMess('Hiba');
      }
      const j = await resopnse.json() as Comment[];
      setComment(j);
    }
    catch{
      setErrorMess('Hiba a letöltéskor');
    }
  }

  useEffect(() => {
    load();
  }, []);
  return (
    <>
    <div className='container'>
    <Footer/>
    <Main/>
    <div className='row'>
      <h2>
        Comments
      </h2>
    </div>
    {comment.map(a => <CommentBox key={a.id} review={a}/>)}
    </div>
    </>
  )
}

export default App
