import { useQueries } from '@tanstack/react-query'
import { getCategoryByUser } from '../services/apiCategory'
import Label from './Label'
import Rectangle from './Rectangle'
import { getSkillByUser } from '../services/apiSkill'
import { UilAngleDown, UilAngleUp, UilEditAlt } from '@iconscout/react-unicons'
import { useState } from 'react'
import Modal from './Modal-v1'
import UpdateCategories from '../features/user/UpdateCategories'

function WorkSkill({ userId, role }) {
    const [isOpenCategories, setIsOpenCategories] = useState(false)
    const [isOpenSkills, setIsOpenSkills] = useState(false)
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
            <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => setIsOpenCategories((pre) => !pre)}
            >
                <Label>Lĩnh vực chuyên môn</Label>
                {isOpenCategories ? <UilAngleUp /> : <UilAngleDown />}
            </div>
            {isOpenCategories && (
                <div className='relative'>
                    <Modal>
                        <Modal.Open opens="update-categories">
                            <UilEditAlt
                                className="absolute right-0 top-0 cursor-pointer text-stone-600 hover:text-stone-500"
                            />
                        </Modal.Open> 
                        <Modal.Window title="Cập nhật lĩnh vực" name="update-categories">
                            <UpdateCategories />
                        </Modal.Window>
                    </Modal>
                    
                    <div className="my-4 flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <Rectangle key={category.id} primary>
                            {category.name}
                        </Rectangle>
                    ))}
                </div>
                </div>
            )}

            {role === 'fre' && (
                <>
                    <div
                        className="flex cursor-pointer items-center justify-between"
                        onClick={() => setIsOpenSkills((pre) => !pre)}
                    >
                        <Label>Kỹ năng</Label>
                        {isOpenSkills ? <UilAngleUp /> : <UilAngleDown />}
                    </div>
                    {isOpenSkills && (
                        <div className="my-4 flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <Rectangle key={skill.id}>
                                    {skill.name}
                                </Rectangle>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default WorkSkill
