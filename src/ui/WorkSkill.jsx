import { useQueries } from '@tanstack/react-query'
import { getCategoryByUser } from '../services/apiCategory'
import Label from './Label'
import Rectangle from './Rectangle'
import { getSkillByUser } from '../services/apiSkill'

function WorkSkill({ userId, role }) {
    const [
        { isLoading: loadingCategory, data: categories },
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
            <div className="my-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                    <Rectangle key={category.id} primary>
                        {category.name}
                    </Rectangle>
                ))}
            </div>

            {role === 'fre' && (
                <>
                    <Label>Kỹ năng</Label>
                    <div className="my-4 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Rectangle key={skill.id}>{skill.name}</Rectangle>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}

export default WorkSkill
