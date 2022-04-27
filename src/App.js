import React from "react";
import history from "./Helpers/history";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import UsersWrapper from "./Components/UsersWrapper";
import RepositoriesWrapper from "./Components/RepositoriesWrapper";


const App = () => {

  // const dispatch = useDispatch();


  // useEffect( () => {
  //   dispatch(usersActions.willSetUsers());
  // }, []);


  return (

    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />

        {["/users", "/users/:name"].map( path => {
          if(path === "/users") {
            return <Route key={path} exact path={path} render={() => <UsersWrapper isSearch={false} />} />
          }
          return <Route key={path} exact path={path} render={() => <UsersWrapper isSearch={true} />} />
        })}
        
        <Route exact path="/repositories" component={RepositoriesWrapper} />
        <Route exact path="/repositories/:name"><RepositoriesWrapper isSearch={true}/></Route>
      </Switch>
    </Router>

  );
}

export default App;
