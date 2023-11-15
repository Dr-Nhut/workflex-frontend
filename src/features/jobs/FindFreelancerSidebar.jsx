import FilterContainer from '../../ui/FilterContainer'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../../services/apiCategory'
import RadioList from './RadioList'

function FindFreelancerSidebar({ right }) {
    const { isLoading: loadingCategories, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories,
    })

    if (loadingCategories) return null

    return (
        <div className={`col-span-3 mt-3 ${right ? 'ml-8' : 'mr-8'}`}>
            <FilterContainer title="Lĩnh vực">
                <RadioList items={categories} />
            </FilterContainer>
        </div>
    )
}

export default FindFreelancerSidebar
