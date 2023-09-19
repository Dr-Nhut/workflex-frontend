import Job from './Job'

const jobListFake = [
    {
        id: 1,
        name: 'Thiết kế website tư vấn luật',
        description:
            'Một công ty tư vấn luật muốn tạo một trang web đơn giản. Nếu bạn quan tâm đến vị trí này, hãy gửi kế hoạch nhanh nhất có thể.',
        maxBudget: 3000000,
        category: 'Thiết kế website',
        remainJob: 4,
        numberBid: 10,
        user: {
            fullName: 'John',
            avatarUrl: 'https://i.pravatar.cc/?u=a042581f4e29026704d',
            address: 'Cần Thơ, Việt Nam',
        },
    },
    {
        id: 2,
        name: 'Thiết kế website tư vấn luật',
        description:
            'Một công ty tư vấn luật muốn tạo một trang web đơn giản. Nếu bạn quan tâm đến vị trí này, hãy gửi kế hoạch nhanh nhất có thể.',
        maxBudget: 3000000,
        category: 'Thiết kế website',
        remainJob: 4,
        numberBid: 10,
        user: {
            fullName: 'John',
            avatarUrl: 'https://i.pravatar.cc/?u=a042581f4e29026704d',
            address: 'Cần Thơ, Việt Nam',
        },
    },
    {
        id: 3,
        name: 'Thiết kế website tư vấn luật',
        description:
            'Một công ty tư vấn luật muốn tạo một trang web đơn giản. Nếu bạn quan tâm đến vị trí này, hãy gửi kế hoạch nhanh nhất có thể.',
        maxBudget: 3000000,
        category: 'Thiết kế website',
        remainJob: 4,
        numberBid: 10,
        user: {
            fullName: 'John',
            address: 'Cần Thơ, Việt Nam',
            avatarUrl: 'https://i.pravatar.cc/?u=a042581f4e29026704d',
        },
    },
    {
        id: 4,
        name: 'Thiết kế website tư vấn luật',
        description:
            'Một công ty tư vấn luật muốn tạo một trang web đơn giản. Nếu bạn quan tâm đến vị trí này, hãy gửi kế hoạch nhanh nhất có thể.',
        maxBudget: 3000000,
        category: 'Thiết kế website',
        remainJob: 4,
        numberBid: 10,
        user: {
            fullName: 'John',
            avatarUrl: 'https://i.pravatar.cc/?u=a042581f4e29026704d',
            address: 'Cần Thơ, Việt Nam',
        },
    },
]

function JobList({ limit }) {
    return (
        <ul className="mt-8 flex list-none flex-wrap justify-between gap-8">
            {jobListFake.map((item) => (
                <Job key={item.id} category={item} />
            ))}
        </ul>
    )
}

export default JobList
