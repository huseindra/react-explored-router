import { Fragment, useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import HighlitedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"
import NotFoundQuote from "./NotFoundQuote"

const QuoteDetailPage = () =>{
    const params = useParams()

    const {quoteId} = params

    const {sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(quoteId)
    },[sendRequest, quoteId])


    if(status === 'pending'){
        return <div className="centered"><LoadingSpinner /> </div>
    }

    if(error){
        return <div className="centered">{error}</div>
    }

    if(!loadedQuote.text){
        return <NotFoundQuote />
    }
    return (
    <Fragment>
        <HighlitedQuote text={loadedQuote.text} author={loadedQuote.author}/>
        <Outlet />
    </Fragment>)
}

export default QuoteDetailPage