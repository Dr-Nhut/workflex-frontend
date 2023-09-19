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
        <li className="relative w-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 bg-slate-50 px-8 py-5 transition-all ease-in-out hover:-translate-y-2">
            <span className=" text-stone-400">
                <UilClockThree className="mr-2 inline-block" />
                {job.createdAt} giờ trước
            </span>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="mt-2 text-xl font-bold text-stone-900">
                        {job.name}
                    </h2>

                    <span className="mt-4 text-base font-semibold text-stone-700">
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

            <div className="flex items-center justify-between rounded-lg  px-2">
                <UserLocation user={job.employer} />
                <span className="font-semibold text-sky-600">
                    {job.numberBid} chào giá
                </span>
            </div>
        </li>
    )
}

export default JobItem
