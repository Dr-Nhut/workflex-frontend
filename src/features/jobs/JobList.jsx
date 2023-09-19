import Pagination from '../../ui/Pagination'
import JobItem from './JobItem'

const joblist = [
    {
        id: 1,
        employer: {
            fullName: 'John',
            avatarUrl: 'https://i.pravatar.cc/?u=a042581f4e29026704d',
            address: 'Cần Thơ, Việt Nam',
        },
        name: 'Cần thiết kế website bán hàng',
        description:
            'Mình cần tìm freelancer làm một website bán hàng từ A-Z. Giao diện web có sẵn',
        category: 'Lập trình web',
        skills: ['WordPress', 'PHP', 'JavaScript'],
        maxBudget: 15000000,
        position: 'Toàn quốc',
        experienceYear: '1',
        numberBid: '3',
        createdAt: '3',
    },
    {
        id: 2,
        employer: {
            fullName: 'John',
            avatarUrl: 'https://i.pravatar.cc/?u=a042581f4e29026704d',
            address: 'Cần Thơ, Việt Nam',
        },
        name: 'Cần thiết kế website bán hàng',
        description:
            'Mình cần tìm freelancer làm một website bán hàng từ A-Z. Giao diện web có sẵn',
        category: 'Lập trình web',
        skills: ['WordPress', 'PHP', 'JavaScript'],
        maxBudget: 15000000,
        position: 'Cần Thơ',
        numberBid: '3',
        experienceYear: '1',
        createdAt: '3',
    },
    {
        id: 3,
        employer: {
            fullName: 'John',
            avatarUrl: 'https://i.pravatar.cc/?u=a042581f4e29026704d',
            address: 'Cần Thơ, Việt Nam',
        },
        name: 'Cần thiết kế website bán hàng',
        description:
            'Mình cần tìm freelancer làm một website bán hàng từ A-Z. Giao diện web có sẵn',
        category: 'Lập trình web',
        skills: ['WordPress', 'PHP', 'JavaScript'],
        maxBudget: 15000000,
        position: 'Đà Nẵng',
        experienceYear: '1',
        numberBid: '3',
        createdAt: '3',
    },
]

function JobList() {
    return (
        <>
            <ul className="mt-8 flex list-none flex-wrap justify-between gap-8">
                {joblist.map((item) => (
                    <JobItem key={item.id} job={item} />
                ))}
            </ul>
            <Pagination length={10} />
        </>
    )
}

export default JobList
