import { UilBookmark, UilBill, UilMapMarker } from '@iconscout/react-unicons'
import Button from '../../common/buttons/Button'
import DescriptionSection from './DescriptionSection'
import UserCard from '../../features/user/UserCard'
function Category({ category }) {
    return (
        <li className="w-[48%] cursor-pointer rounded-xl bg-slate-50 px-8 py-5 shadow-lg shadow-gray-400 transition-all ease-in-out hover:-translate-y-2 hover:border-2 hover:border-primary">
            <span className="rounded-xl bg-stone-300 p-2 font-semibold text-primary">
                Còn {category.remainJob} giờ
            </span>
            {/*Hover*/}
            <h2 className="mt-4 text-xl font-bold text-stone-900">
                {category.name}
            </h2>

            <div className="flex justify-between font-semibold text-blue-700">
                <span className="flex items-center py-2">
                    <UilBookmark />
                    {category.category}
                </span>
                <span className="flex items-center py-2">
                    <UilBill />
                    <b>{category.maxBudget}đ</b>
                </span>
            </div>

            <DescriptionSection>{category.description}</DescriptionSection>

            <div className="flex justify-between rounded-lg bg-stone-200 px-2">
                <UserCard
                    fullName={category.user.fullName}
                    avatarUrl={category.user.avatarUrl}
                >
                    <span className="flex p-px text-sm font-extralight italic">
                        <UilMapMarker size="18" className="text-red-500" />
                        {category.user.address}
                    </span>
                </UserCard>
                {/* <UserLocation
                    fullName={category.user.fullName}
                    avatarUrl={category.user.avatarUrl}
                    address={category.user.address}
                /> */}
                <Button type="btn-text hover:text-primary">Xem thêm</Button>
            </div>
        </li>
    )
}

export default Category
