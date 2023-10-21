function TextDescriptionEditor({ children }) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: children }}
            className="p-2 text-stone-500"
        />
    )
}

export default TextDescriptionEditor
