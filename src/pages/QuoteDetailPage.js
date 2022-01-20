import { Fragment } from "react"
import {  Route } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import Comments from  '../components/comments/Comments'
import HighlitedQuote from '../components/quotes/HighlightedQuote'
import NotFoundQuote from "./NotFoundQuote"
const DUMMY_DATA = [
    {
        id:'p1',
        author: 'Budi',
        text: 'Menantimu'
    },
    {
        id:'p2',
        author: 'Angga',
        text: 'Bujangan'
    }
]
const QuoteDetailPage = () =>{

    const params = useParams()


    const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId)

    if(!quote){
        return <NotFoundQuote />
    }
    return (
    <Fragment>
        <HighlitedQuote text={quote.text} author={quote.author}/>

        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
        </Route>
    </Fragment>)
}

export default QuoteDetailPage