import { useContext } from 'react';
import { UserContext, ArticleContext } from '../App';


export default function SubContextHook(){
  const userContextValue = useContext(UserContext);
  const articleContextValue = useContext(ArticleContext);
  return(
    <>
      <h2>Child Component Using Context Hook</h2>
      {
        <fieldset>
          <legend>From UserContext</legend>
          <h3>Name - {userContextValue.name}</h3>
          <h3>Age - {userContextValue.age}</h3>
        </fieldset>
      }
      {
        <fieldset>
          <legend>From ArticleContext</legend>
          <h3>{articleContextValue.title}</h3>
          <h3>{articleContextValue.author}</h3>
        </fieldset>
      }
    </>
  )
}