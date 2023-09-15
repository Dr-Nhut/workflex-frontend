import { UilBookmark, UilBill } from '@iconscout/react-unicons'
import UserLocation from '../../User/UserLocation'
import Button from '../../Button/Button'
import DescriptionSection from './DescriptionSection'
function Category({ category }) {
    return (
        <li className="w-[48%] cursor-pointer py-5 px-8 shadow-lg shadow-gray-400 bg-slate-50 rounded-xl ease-in-out transition-all hover:border-primary hover:border-2 hover:-translate-y-2">
            <span className="p-2 rounded-xl text-primary font-semibold bg-stone-300">
                Còn {category.remainJob} giờ
            </span>
            {/*Hover*/}
            <h2 className="mt-4 text-xl text-stone-900 font-bold">
                {category.name}
            </h2>

            <div className="flex justify-between text-blue-700 font-semibold">
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

            <div className="flex justify-between bg-stone-200 px-2 rounded-lg">
                <UserLocation user={category.user} />
                <Button type="btn-text hover:text-primary">Xem thêm</Button>
            </div>
        </li>
    )
}

export default Category
