const Title = ({ title = '', actionLabel = '', className }) => (
  <div className={`mb-1 mt-2 flex justify-between ${className}`}>
    <h2 className="text-lg font-bold">{title}</h2>
    {actionLabel
      && <span className="text-base text-blue-600">{actionLabel}</span>}
  </div>
)

export default Title
