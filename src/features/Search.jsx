import Button from '../common/buttons/Button'
import { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { useQuery } from '@tanstack/react-query'
import { getBiddingJob } from '../services/apiJob'
import { PortalWithState } from 'react-portal'
import { Link, useNavigate } from 'react-router-dom'
import SearchItem from '../ui/SearchItem'

function Search() {
    const [isFreelancer, setIsFreelancer] = useState(true)
    const [resultJobs, setResultJobs] = useState([])
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const { isLoading: loadingJobs, data: jobs } = useQuery({
        queryKey: ['allJobs'],
        queryFn: getBiddingJob,
    })

    if (loadingJobs) return null

    return (
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, portal }) => (
                <>
                    <div className="relative w-96 text-stone-700">
                        <input
                            className="h-10 w-full rounded-3xl border-0 bg-stone-300 py-2.5 pl-12 pr-5 placeholder:text-stone-700 focus:bg-stone-100 focus:outline-none"
                            type="text"
                            value={query}
                            onChange={(e) => {
                                if (!e.target.value) {
                                    setResultJobs([])
                                    closePortal()
                                } else {
                                    openPortal()
                                    const data = jobs.filter((job) =>
                                        job.name.includes(e.target.value)
                                    )
                                    setResultJobs(data)
                                }

                                setQuery(e.target.value)
                            }}
                            placeholder="Tìm kiếm"
                        />
                        <Button
                            type="btn-text"
                            size="small"
                            className="absolute left-2 top-0 rounded-r-full"
                            onClick={() => {
                                closePortal()
                                navigate(`/freelancer-findwork?q=${query}`)
                                setQuery('')
                            }}
                        >
                            <UilSearch size="24" />
                        </Button>
                        <Button
                            type="btn-primary"
                            size="small"
                            className="absolute right-0 top-0 w-24 rounded-r-3xl py-2"
                            onClick={() => setIsFreelancer((pre) => !pre)}
                        >
                            {isFreelancer ? 'Việc làm' : 'Freelancer'}
                        </Button>
                    </div>
                    {portal(
                        <div className="fixed left-[500px] top-16 z-50 w-[480px] rounded-lg bg-stone-50 p-4 shadow-lg">
                            <h4 className="border-b-2 border-stone-500 pb-2 font-semibold text-stone-800">
                                Kết quả tìm kiếm
                            </h4>

                            <ul>
                                {[...resultJobs]?.slice(0, 5).map((item) => (
                                    <SearchItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        onClosePortal={closePortal}
                                        onChange={setQuery}
                                    />
                                ))}
                            </ul>
                            {resultJobs.length > 5 && (
                                <Link
                                    to={`/freelancer-findwork?q=${query}`}
                                    className="font-semibold text-blue-500"
                                    onClick={() => {
                                        closePortal()
                                        setQuery('')
                                    }}
                                >
                                    Xem thêm {resultJobs.length - 5} việc
                                </Link>
                            )}
                        </div>
                    )}
                </>
            )}
        </PortalWithState>
    )

    // return (
    //     <div className="relative w-96 text-stone-700">
    //         <input
    //             className="h-10 w-full rounded-3xl border-0 bg-stone-300 py-2.5 pl-12 pr-5 placeholder:text-stone-700 focus:bg-stone-100 focus:outline-none"
    //             type="text"
    //             onChange={handleOnChange}
    //             placeholder="Tìm kiếm"
    //         />
    //         <Button
    //             type="btn-text"
    //             size="small"
    //             className="absolute left-2 top-0 rounded-r-full"
    //         >
    //             <UilSearch size="24" />
    //         </Button>
    //         <Button
    //             type="btn-primary"
    //             size="small"
    //             className="absolute right-0 top-0 w-24 rounded-r-3xl py-2"
    //             onClick={() => setIsFreelancer((pre) => !pre)}
    //         >
    //             {isFreelancer ? 'Việc làm' : 'Freelancer'}
    //         </Button>
    //     </div>
    // )
}

export default Search
