import TitleSection from '../../ui/TitleSection'
import UserCard from '../user/UserCard'
import Rectangle from '../../ui/Rectangle'
import { URL_SERVER_SIMPLE } from '../../constants'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import TextDescriptionEditor from '../../ui/TextDescriptionEditor'
function ContractSidebar({ job, offer }) {
    const { user } = useContext(UserContext)

    return (
        <div className="col-span-3 ml-8">
            <section className="mb-8">
                <TitleSection>Đối tác</TitleSection>

                <div className="flex items-center justify-between overflow-hidden rounded-xl bg-stone-100 px-1">
                    <UserCard
                        fullName={
                            user.role === 'emp' ? offer.fullname : job.fullname
                        }
                        avatarUrl={`${URL_SERVER_SIMPLE}${
                            user.role === 'emp' ? offer.avatar : job.avatar
                        }`}
                    >
                        <span className="int italic text-stone-400">
                            {user.role === 'emp' ? offer.email : job.email}
                        </span>
                    </UserCard>
                </div>
            </section>

            <section>
                <TitleSection>Chi tiết dự án</TitleSection>
                <TextDescriptionEditor>{job.description}</TextDescriptionEditor>
            </section>

            <section>
                <TitleSection>Yêu cầu kỹ thuật</TitleSection>
                <div className="flex flex-wrap gap-x-2">
                    {job.skills.map((skill) => (
                        <Rectangle key={skill}>{skill}</Rectangle>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ContractSidebar
