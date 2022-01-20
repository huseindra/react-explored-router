import QuoteList from "../components/quotes/QuoteList"

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
const AllQuotePage = () =>{
    return (
        <QuoteList quotes={DUMMY_DATA}/>
    )
}

export default AllQuotePage