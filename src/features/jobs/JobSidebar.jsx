import FilterContainer from '../../ui/FilterContainer'
import RangeSlider from '../../ui/RangeSlider'
import CheckboxList from './CheckboxList'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../../services/apiCategory'

function JobSidebar({ right }) {
    const { isLoading: loadingCategories, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories,
    })

    if (loadingCategories) return null

    return (
        <div className={`col-span-3 mt-3 ${right ? 'ml-8' : 'mr-8'}`}>
            <FilterContainer title="Ngân sách">
                <RangeSlider />
            </FilterContainer>

            <FilterContainer title="Lĩnh vực">
                <CheckboxList items={categories} />
            </FilterContainer>
        </div>
    )
}

export default JobSidebar
