import { useNavigate } from 'react-router-dom'

function SearchJobItem({ name, id, onClosePortal, onChange, focus }) {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/freelancer-bids/${id}`)
        onClosePortal()
        onChange('')
    }

    return (
        <li
            className={`my-2 cursor-pointer rounded-xl p-2  hover:bg-stone-200 ${
                focus ? 'bg-stone-200' : 'bg-stone-50'
            }`}
            onClick={handleOnClick}
        >
            {name}
        </li>
    )
}

export default SearchJobItem
