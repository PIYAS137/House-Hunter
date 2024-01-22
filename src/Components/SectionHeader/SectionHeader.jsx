

const SectionHeader = ({small,big}) => {
  return (
    <div className=" text-center mt-32">
        <h1 className=" text-yellow-600 text-3xl font-bold">{big}</h1>
        <p className=" mt-2 text-sm text-gray-400">" {small} "</p>
    </div>
  )
}

export default SectionHeader