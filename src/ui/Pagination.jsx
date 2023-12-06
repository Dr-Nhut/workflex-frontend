import {
    UilAngleDoubleLeft,
    UilAngleDoubleRight,
} from '@iconscout/react-unicons'
function Pagination({ length, onClick, currentPage }) {
    const pageLength = Math.ceil(length / 10)
    return (
        <>
            <div className="mx-auto my-2 text-center text-stone-500">
                {(currentPage - 1) * 10 + 1}-
                {currentPage * 10 > length ? length : currentPage * 10}/{length}
            </div>
            <div className="flex items-center justify-center gap-4">
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
                {Array.apply(null, Array(pageLength)).map(function (y, i) {
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
                        currentPage === pageLength ? 'text-stone-500' : ''
                    }`}
                    onClick={() => {
                        if (currentPage !== pageLength) {
                            onClick((pre) => pre + 1)
                            window.scrollTo(0, 0)
                        }
                    }}
                />
            </div>
        </>
    )
}

export default Pagination
