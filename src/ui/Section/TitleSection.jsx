function TitleSection({ children, color = "" }) {
  return <h1 className={`font-semibold text-3xl ${color} text-primary text-center capitalize`}>
    {children}
  </h1>
}

export default TitleSection;
