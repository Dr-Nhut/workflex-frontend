import FreelancerItem from './FreelancerItem'
import Pagination from '../../ui/Pagination'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getFreelancerRecommendation } from '../../services/apiRecommendation'
import Spinner from '../../ui/Spinner'

// const freelancerList = [
//     {
//         id: 1,
//         name: 'Jimmy',
//         avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026awsl',
//         address: 'Cần Thơ, Việt Nam',
//         categories: ['Thiết kế web', 'Lập trình web', 'Phát triển phần mềm'],
//         skill: ['.NET', 'C#', 'NodeJS', 'JavaScript'],
//         bio: 'Tôi hiện tại là sinh viên năm 2 trường đại học Khoa học Tự Nhiên - Đại học Quốc gia thành phố Hồ Chí Minh, chuyên ngành Công nghệ thông tin (hệ chất lượng cao). Tôi có 3 năm kinh nghiệm làm việc với Laravel Framework. Tôi đã tham gia các công việc viết Tool tự động hóa hành động (Macro) cho các cá nhân ứng dụng Tool Game (C#, Javascript). Ngoài ra tôi còn có kinh nghiệm trong lĩnh vực Hệ thống nhúng với một giải thưởng Khoa học Kĩ thuật cấp quốc gia.Ngoài ra tôi sẵn sàng tham gia các lĩnh vực không chuyên với kinh nghiệm dựa trên các nền tảng sẵn có.',
//         rating: '4.9',
//         numberReviews: '125',
//         jobSuccess: '99%',
//         numberJobs: '52',
//     },
//     {
//         id: 2,
//         name: 'Tommy',
//         avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026awsl',
//         address: 'Đà Nẵng, Việt Nam',
//         categories: ['Responsice Web', 'Phát triển Game', 'Thiết kế CSDL'],
//         skill: ['MySQL', 'C++', 'Java', 'JavaScript'],
//         bio: 'Tôi có kinh nghiệm lập trình ứng dụng winform, webform ngôn ngữ .NET, xây dựng website với wordpress.Kinh nghiệm làm việc dựa vào tình huống gặp trên thực tế, hy vọng được cộng tác để tích lũy thêm kinh nghiệm.',
//         rating: '5.0',
//         numberReviews: '62',
//         jobSuccess: '100%',
//         numberJobs: '25',
//     },
//     {
//         id: 3,
//         name: 'John',
//         avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026awsl',
//         address: 'An Giang, Việt Nam',
//         categories: ['QA & Testing'],
//         skill: ['Selenium', 'Unit Testing', 'Load Testing', 'Software Testing'],
//         bio: 'I am an application developer for the past 5 years. I am strong in mobile and web application and face recognition. I want to join vlance.vn in order to prove my experiences as well as earn extra money for my family.',
//         rating: '4.8',
//         numberReviews: '96',
//         jobSuccess: '100%',
//         numberJobs: '72',
//     },
// ]

function FreelancerList() {
    const searchParams = useSearchParams()[0]

    const { isLoading, data: freelancerList } = useQuery({
        queryKey: ['recommendation', searchParams.get('category')],
        queryFn: () =>
            getFreelancerRecommendation(searchParams.get('category')),
    })

    if (isLoading) return <Spinner />

    return (
        <div className="mr-8">
            <ul className="mt-8">
                {freelancerList.map((freelancer) => (
                    <FreelancerItem
                        key={freelancer.freelancerId}
                        freelancerId={freelancer.freelancerId}
                    />
                ))}
            </ul>
            <Pagination length={5} />
        </div>
    )
}

export default FreelancerList
