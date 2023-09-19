import TitleSection from './TitleSection'
import DescriptionSection from './DescriptionSection'
import { UilStepForward } from '@iconscout/react-unicons'

function StepWork({ elementIcon, title, description, nextIcon = false }) {
    const ElementIcon = elementIcon || 'span'
    return (
        <div className="relative p-4 pt-12 w-1/4 rounded-md bg-slate-50 border-2 border-stone-400 hover:shadow-lg hover:shadow-stone-500">
            <div>
                <ElementIcon
                    size="64"
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-50 border border-stone-200 rounded-full p-4 text-slate-700 shadow-lg"
                />
                <TitleSection>{title}</TitleSection>
                <DescriptionSection>{description}</DescriptionSection>
            </div>
            {nextIcon && (
                <UilStepForward
                    size="48"
                    className="absolute -right-11 top-1/2 -translate-y-1/2 text-stone-600"
                />
            )}
        </div>
    )
}

export default StepWork
