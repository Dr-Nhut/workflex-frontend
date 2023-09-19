import UserLocation from '../user/UserLocation'
import Button from '../../common/buttons/Button'
import {
    UilBookmark,
    UilClockThree,
    UilFavorite,
} from '@iconscout/react-unicons'
import Rectangle from '../../ui/Rectangle'

function JobItem({ job }) {
    return (
        <li className="relative w-full cursor-pointer overflow-hidden rounded-xl border-2 border-gray-400 bg-slate-50 px-8 py-5 transition-all ease-in-out before:absolute before:-right-8 before:-top-12 before:block before:h-24 before:w-24 before:rounded-full before:bg-sky-600 before:content-[''] hover:-translate-y-2 hover:border-primary">
            <span className=" text-stone-400">
                <UilClockThree className="mr-2 inline-block" />
                {job.createdAt} giờ trước
            </span>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="mt-2 text-xl font-bold text-sky-800">
                        {job.name}
                    </h2>

                    <span className="mt-4 text-base font-semibold text-stone-900">
                        {job.position} | {job.maxBudget}đ | Kinh nghiệm :{' '}
                        {job.experienceYear} năm
                    </span>
                </div>

                <div className="flex justify-between text-stone-500">
                    <Button type="btn-text">
                        <UilFavorite />
                    </Button>

                    <Button type="btn-primary" className="rounded-xl">
                        Gửi báo giá
                    </Button>
                </div>
            </div>

            <p className="py-2 text-stone-500">{job.description}</p>

            <div className="my-2 flex items-center gap-4">
                <Rectangle primary>
                    <UilBookmark className="mr-2 inline-block" />
                    {job.category}
                </Rectangle>
                {job.skills.map((skill) => (
                    <Rectangle key={skill}>{skill}</Rectangle>
                ))}
            </div>

            <div className="flex items-center justify-between rounded-lg bg-stone-200 px-2">
                <UserLocation user={job.employer} />
                <span className="font-semibold text-sky-600">
                    {job.numberBid} chào giá
                </span>
            </div>
        </li>
    )
}

export default JobItem
