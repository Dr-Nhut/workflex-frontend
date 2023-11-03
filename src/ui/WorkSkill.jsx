import { useQueries } from '@tanstack/react-query'
import { getCategoryByUser } from '../services/apiCategory'
import Label from './Label'
import Rectangle from './Rectangle'
import { getSkillByUser } from '../services/apiSkill'

function WorkSkill({ userId }) {
    const [
        { isLoading: loadingCategory, data: category },
        { isLoading: loadingSkills, data: skills },
    ] = useQueries({
        queries: [
            {
                queryKey: ['category', userId],
                queryFn: () => getCategoryByUser(userId),
            },
            {
                queryKey: ['skill', userId],
                queryFn: () => getSkillByUser(userId),
            },
        ],
    })

    if (loadingCategory || loadingSkills) return null

    return (
        <>
            <Label>Lĩnh vực chuyên môn</Label>
            <div className="my-4">
                <Rectangle primary>{category.name}</Rectangle>
            </div>

            <Label>Kỹ năng</Label>
            {/* <Rectangle>JavaScript</Rectangle>
            <Rectangle>ReactJS</Rectangle>
            <Rectangle>NextJs</Rectangle> */}
            <div className="my-4 flex gap-x-2">
                {skills.map((skill) => (
                    <Rectangle key={skill.id}>{skill.name}</Rectangle>
                ))}
            </div>
        </>
    )
}

export default WorkSkill
