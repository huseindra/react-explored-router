import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import QuoteForm from "../components/quotes/QuoteForm"

const NewQuotePage = () =>{

    const history = useHistory()

    const newQuoteHandler = (quoteData) => {
        console.log(quoteData)

        history.push('/quotes')
    }

    return <QuoteForm onAddQuote={newQuoteHandler}/>
}

export default NewQuotePage