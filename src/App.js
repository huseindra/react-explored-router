import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotePage from "./pages/AllQuotePage";
import NewQuotePage from "./pages/NewQuotePage";
import NotFoundQuote from "./pages/NotFoundQuote";
import QuoteDetailPage from "./pages/QuoteDetailPage";

function App() {
  return (
    <div>
     <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/quotes' />} />
        <Route path='/quotes'  element={ <AllQuotePage />} />
        <Route path='/quotes/:quoteId' element={ <QuoteDetailPage />}/>
        <Route path='/new-quote' element={<NewQuotePage />} />
        <Route path='*' element={<NotFoundQuote />}/>
      </Routes>
     </Layout>
    </div>
  );
}

export default App;
