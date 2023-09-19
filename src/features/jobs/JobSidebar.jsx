import FilterContainer from '../../ui/FilterContainer'
import RangeSlider from '../../ui/RangeSlider'
import CheckboxList from './CheckboxList'

const categories = [
    {
        id: 1,
        name: 'AL - Trí tuệ nhân tạo',
    },
    {
        id: 2,
        name: 'Lập trình nhúng',
    },
    {
        id: 3,
        name: 'Lập trình web',
    },
    {
        id: 4,
        name: 'QA Tester',
    },
]

function JobSidebar() {
    return (
        <div className="mr-8">
            <FilterContainer title="Ngân sách">
                <RangeSlider />
            </FilterContainer>

            <FilterContainer title="Lĩnh vực">
                <CheckboxList items={categories} />
            </FilterContainer>

            <FilterContainer title="Ngôn ngữ lập trình">
                <CheckboxList items={categories} />
            </FilterContainer>
        </div>
    )
}

export default JobSidebar
