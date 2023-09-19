import { UilBookmark, UilBill } from '@iconscout/react-unicons'
import UserLocation from '../../features/user/UserLocation'
import Button from '../../common/buttons/Button'
import DescriptionSection from './DescriptionSection'
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
                <UserLocation user={category.user} />
                <Button type="btn-text hover:text-primary">Xem thêm</Button>
            </div>
        </li>
    )
}

export default Category
