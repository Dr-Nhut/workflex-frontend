import TextDescriptionEditor from '../../ui/TextDescriptionEditor'

function PlanProject({ plan }) {
    return (
        <div className="p-4">
            <TextDescriptionEditor>{plan}</TextDescriptionEditor>
        </div>
    )
}

export default PlanProject
