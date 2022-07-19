import { UserContext, ArticleContext } from '../App';

export default function SubContextChild(){
  return(
    <div>
      <h2>Child Component Using Context Consumer</h2>
      <UserContext.Consumer>
        {(user) =>(
          <fieldset>
            <legend>From UserContext</legend>
            <h3>Name - {user.name}</h3>
            <h3>Age - {user.age}</h3>
          </fieldset>
        )}
      </UserContext.Consumer>
      <ArticleContext.Consumer>
        {article =>(
          <fieldset>
            <legend>From ArticleContext</legend>
            <h3>{article.title}</h3>
            <h3>{article.author}</h3>
          </fieldset>
        )}
      </ArticleContext.Consumer>
    </div>
  )
}