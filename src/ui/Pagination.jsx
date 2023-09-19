import {
    UilAngleDoubleLeft,
    UilAngleDoubleRight,
} from '@iconscout/react-unicons'
function Pagination({ length }) {
    return (
        <div className="mt-10 flex items-center justify-center gap-4">
            <UilAngleDoubleLeft className="cursor-pointer" />
            {Array.apply(null, Array(length)).map(function (y, i) {
                return (
                    <span
                        key={i}
                        className={`h-12 w-12 cursor-pointer rounded-full border border-stone-200 py-2.5 text-center font-semibold ${
                            i === 0 ? 'bg-primary text-stone-50' : ''
                        }`}
                    >
                        {i + 1}
                    </span>
                )
            })}
            <UilAngleDoubleRight className="cursor-pointer" />
        </div>
    )
}

export default Pagination
