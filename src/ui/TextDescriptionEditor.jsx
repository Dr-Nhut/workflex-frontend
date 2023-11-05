function TextDescriptionEditor({ children }) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: children }}
            className="line-clamp-6 px-2 text-stone-500"
        />
    )
}

export default TextDescriptionEditor
