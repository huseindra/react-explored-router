import React, { Suspense } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotePage = React.lazy(() => import('./pages/AllQuotePage'))
const NewQuotePage = React.lazy(() => import('./pages/NewQuotePage'))
const NotFoundQuote = React.lazy(() => import('./pages/NotFoundQuote'))
const QuoteDetailPage = React.lazy(() => import('./pages/QuoteDetailPage'))
const CommentsPage = React.lazy(() => import('./components/comments/Comments'))

function App() {
  return (
     <Layout>
      <Suspense
      fallback={<div className="centered"><LoadingSpinner /></div>}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/quotes' />} />
          <Route path='/quotes'  element={ <AllQuotePage />} />
          <Route path='/quotes/:quoteId' element={ <QuoteDetailPage />}>
            <Route path='' element={
                <div className="centered">
                    <Link className="btn--flat" to={`comments`}> Load Comments</Link>
                </div>
            } />
            <Route path={`comments`} element={<CommentsPage />} />
          </Route>
          <Route path='/new-quote' element={<NewQuotePage />} />
          <Route path='*' element={<NotFoundQuote />}/>
        </Routes>
      </Suspense>
     </Layout>
  );
}

export default App;
