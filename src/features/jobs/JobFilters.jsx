import Select from '../../common/Select'
import {
    UilLocationPoint,
    UilClipboardAlt,
    UilLaptop,
    UilClockThree,
} from '@iconscout/react-unicons'
const locations = [
    {
        id: 1,
        name: 'Toàn quốc',
    },
    {
        id: 2,
        name: 'An Giang',
    },
    {
        id: 3,
        name: 'Cần Thơ',
    },
    {
        id: 4,
        name: 'Bạc Liêu',
    },
]
const expenrences = [
    {
        id: 1,
        name: 'Dưới 1 năm',
    },
    {
        id: 2,
        name: 'Trên 1 năm',
    },
]
const typeJob = [
    {
        id: 1,
        name: 'Online',
    },
    {
        id: 2,
        name: 'Offline',
    },
]
const timers = [
    {
        id: 1,
        name: 'Mới nhất',
    },
    {
        id: 2,
        name: '1 ngày trước',
    },
    {
        id: 3,
        name: '3 ngày trước',
    },
    {
        id: 4,
        name: '7 ngày trước',
    },
]

function JobFilters() {
    return (
        <div className="grid grid-cols-4 gap-16">
            <Select icon={<UilClockThree />} options={timers} />
            <Select icon={<UilLocationPoint />} options={locations} />
            <Select icon={<UilClipboardAlt />} options={expenrences} />
            <Select icon={<UilLaptop />} options={typeJob} />
        </div>
    )
}

export default JobFilters
