import { useNavigate } from 'react-router-dom'

function SearchItem({ name, id, onClosePortal, onChange }) {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/freelancer-bids/${id}`)
        onClosePortal()
        onChange('')
    }

    return (
        <li
            className="my-2 cursor-pointer rounded-xl bg-stone-50 p-2 hover:bg-stone-200"
            onClick={handleOnClick}
        >
            {name}
        </li>
    )
}

export default SearchItem
