import { Fragment, useEffect } from "react"
import { useMatch, useParams } from "react-router-dom"
import {  Link, Route } from "react-router-dom"
import Comments from  '../components/comments/Comments'
import HighlitedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"
import NotFoundQuote from "./NotFoundQuote"

const QuoteDetailPage = () =>{
    const match = useMatch()
    const params = useParams()

    const {quoteId} = params

    const {sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(quoteId)
    },[sendRequest, quoteId])


    if(status === 'pending'){
        return <LoadingSpinner /> 
    }

    if(error){
        return <p className="centered">{error}</p>
    }

    if(!loadedQuote.text){
        return <NotFoundQuote />
    }
    return (
    <Fragment>
        <HighlitedQuote text={loadedQuote.text} author={loadedQuote.author}/>
        <Route path={match.path} exact>
            <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comments`}> Load Comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </Fragment>)
}

export default QuoteDetailPage