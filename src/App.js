import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotePage from "./pages/AllQuotePage";
import NewQuotePage from "./pages/NewQuotePage";
import NotFoundQuote from "./pages/NotFoundQuote";
import QuoteDetailPage from "./pages/QuoteDetailPage";

function App() {
  return (
    <div>
     <Layout>
      <Switch>
        <Route path='/' exact>
            <Redirect to='/quotes' />
        </Route>
      <Route path='/quotes' exact>
          <AllQuotePage />
      </Route>
      <Route path='/quotes/:quoteId'>
          <QuoteDetailPage />
      </Route>
      <Route path='/new-quote'>
          <NewQuotePage />
      </Route>
      <Route path='*'>
          <NotFoundQuote />
      </Route>
      </Switch>
     </Layout>
    </div>
  );
}

export default App;
