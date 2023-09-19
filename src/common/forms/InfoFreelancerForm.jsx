import { useState } from 'react'
import Button from '../buttons/Button'
import Input from '../Input'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import Select from '../Select'

const categories = [
    {
        id: 1,
        name: 'Lập trình nhúng',
    },
    {
        id: 2,
        name: 'Lập trình phần mềm',
    },
    {
        id: 3,
        name: 'Lập trình web',
    },
    {
        id: 4,
        name: 'Lập trình ứng dụng di động',
    },
]

const skills = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'ReactJS',
    },
    {
        id: 3,
        name: 'Python',
    },
    {
        id: 4,
        name: 'Java',
    },
]

const expenriences = [
    { id: 1, name: 'Fresher' },
    { id: 2, name: 'Từ 1 đến 3 năm' },
    { id: 3, name: 'Từ 3 đến 6 năm' },
    { id: 4, name: 'Trên 6 năm' },
]

function InfoFreelancerForm() {
    const [address, setAddress] = useState('')
    const [dayOfBirth, setDayOfBirth] = useState(new Date('1-1-1990'))
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Địa chỉ"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <Select label="Lĩnh vực" options={categories} />
            <Select label="Kinh nghiệm" options={expenriences} />
            <Select label="Ngôn ngữ lập trình" options={skills} />
            <label className="mr-10">Ngày sinh</label>
            <DatePicker
                wrapperClassName="border-none"
                selected={dayOfBirth}
                onChange={(date) => setDayOfBirth(date)}
            />
            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Xác nhận
            </Button>
        </form>
    )
}

export default InfoFreelancerForm
