import Button from '../common/buttons/Button'
import { useEffect, useRef, useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { useQuery } from '@tanstack/react-query'
import { getBiddingJob } from '../services/apiJob'
import { PortalWithState } from 'react-portal'
import { Link, useNavigate } from 'react-router-dom'
import SearchJobItem from '../ui/SearchJobItem'
import { getAllFreelancers } from '../services/apiUser'
import SearchFreelancerItem from '../ui/SearchFreelancerItem'

function Search() {
    const [isFocus, setIsFocus] = useState(null)
    const [isFreelancer, setIsFreelancer] = useState(true)
    const [resultJobs, setResultJobs] = useState([])
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const inputRef = useRef()

    useEffect(() => {
        setQuery(resultJobs[isFocus]?.name || resultJobs[isFocus]?.email)
    }, [isFocus])

    const { isLoading: loadingJobs, data: jobs } = useQuery({
        queryKey: ['allJobs'],
        queryFn: getBiddingJob,
    })

    const { isLoading: loadingFreelancers, data: freelancers } = useQuery({
        queryKey: ['allFreelancers'],
        queryFn: getAllFreelancers,
    })

    const handleSubmit = (closePortal) => {
        if (query) {
            closePortal()
            navigate(
                isFreelancer
                    ? `/freelancer-findwork?q=${query}`
                    : `/result-freelancer?q=${query}`
            )
            setQuery('')
        } else {
            inputRef.current.focus()
        }
    }

    const handleFocus = (e, closeModal) => {
        if (isFocus === null && (e.keyCode === 38 || e.keyCode === 40)) {
            setIsFocus(0)
            return
        }

        if (e.keyCode === 38) {
            setIsFocus((pre) =>
                pre === 0
                    ? resultJobs.length > 5
                        ? 4
                        : resultJobs.length - 1
                    : pre - 1
            )
        }

        if (e.keyCode === 40) {
            setIsFocus((pre) =>
                pre === resultJobs.length || pre === 4 ? 0 : pre + 1
            )
        }

        if (e.keyCode === 13) {
            if (query) {
                handleSubmit(closeModal)
                setIsFocus(null)
            }
        }
    }

    if (loadingJobs || loadingFreelancers) return null

    return (
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, portal }) => (
                <>
                    <div className="relative w-96 text-stone-700">
                        <input
                            ref={inputRef}
                            className="h-10 w-full rounded-3xl border-0 bg-stone-300 py-2.5 pl-12 pr-5 placeholder:text-stone-700 focus:bg-stone-100 focus:outline-none"
                            type="text"
                            value={query}
                            onKeyUp={(e) => handleFocus(e, closePortal)}
                            onChange={(e) => {
                                if (!e.target.value) {
                                    setResultJobs([])
                                    closePortal()
                                } else {
                                    openPortal()
                                    // const data = jobs.filter((job) =>
                                    //     job.name.includes(e.target.value)
                                    // )
                                    // setResultJobs(data)
                                    if (isFreelancer) {
                                        const data = jobs.filter((job) =>
                                            job.name.includes(e.target.value)
                                        )
                                        setResultJobs(data)
                                    } else {
                                        const data = freelancers.filter(
                                            (freelancer) =>
                                                freelancer.email.includes(
                                                    e.target.value
                                                )
                                        )
                                        setResultJobs(data)
                                    }
                                }

                                setQuery(e.target.value)
                            }}
                            placeholder="Tìm kiếm"
                        />
                        <Button
                            type="btn-text"
                            size="small"
                            className="absolute left-2 top-0 rounded-r-full"
                            onClick={() => handleSubmit(closePortal)}
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
                                {isFreelancer
                                    ? [...resultJobs]
                                          ?.slice(0, 5)
                                          .map((item, index) => (
                                              <SearchJobItem
                                                  key={item.id}
                                                  id={item.id}
                                                  focus={isFocus === index}
                                                  name={item.name}
                                                  onClosePortal={closePortal}
                                                  onChange={setQuery}
                                              />
                                          ))
                                    : [...resultJobs]
                                          ?.slice(0, 5)
                                          .map((item, index) => (
                                              <SearchFreelancerItem
                                                  key={item.id}
                                                  id={item.id}
                                                  focus={isFocus === index}
                                                  fullname={item.fullname}
                                                  email={item.email}
                                                  avatar={item.avatar}
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
