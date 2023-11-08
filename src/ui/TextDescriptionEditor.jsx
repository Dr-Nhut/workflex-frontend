function TextDescriptionEditor({ children, lineClamp }) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: children }}
            className={`${lineClamp ? 'line-clamp-6' : ''} px-2 text-stone-500`}
        />
    )
}

export default TextDescriptionEditor
