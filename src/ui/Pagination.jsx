import {
    UilAngleDoubleLeft,
    UilAngleDoubleRight,
} from '@iconscout/react-unicons'
function Pagination({ length, onClick, currentPage }) {
    return (
        <div className="mt-10 flex items-center justify-center gap-4">
            <UilAngleDoubleLeft
                className={`cursor-pointer ${
                    currentPage === 1 ? 'text-stone-500' : ''
                }`}
                onClick={() => {
                    if (currentPage !== 1) {
                        onClick((pre) => pre - 1)
                        window.scrollTo(0, 0)
                    }
                }}
            />
            {Array.apply(null, Array(length)).map(function (y, i) {
                return (
                    <span
                        key={i}
                        onClick={() => {
                            onClick(i + 1)
                            window.scrollTo(0, 0)
                        }}
                        className={`h-12 w-12 cursor-pointer rounded-full border border-stone-200 py-2.5 text-center font-semibold ${
                            i + 1 === currentPage
                                ? 'bg-primary text-stone-50'
                                : ''
                        }`}
                    >
                        {i + 1}
                    </span>
                )
            })}
            <UilAngleDoubleRight
                className={`cursor-pointer ${
                    currentPage === length ? 'text-stone-500' : ''
                }`}
                onClick={() => {
                    if (currentPage !== length) {
                        onClick((pre) => pre + 1)
                        window.scrollTo(0, 0)
                    }
                }}
            />
        </div>
    )
}

export default Pagination
