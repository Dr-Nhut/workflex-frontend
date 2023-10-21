function JobDetailItem({ icon: Icon, title, content }) {
    return (
        <div className="w-1/5">
            <div className="flex items-center gap-x-2 font-semibold text-stone-900">
                <Icon size="20" />
                <span>{title}</span>
            </div>
            <span className="pl-7 text-lg text-stone-500">{content}</span>
        </div>
    )
}

export default JobDetailItem
