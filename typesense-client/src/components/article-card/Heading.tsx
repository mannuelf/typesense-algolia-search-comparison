interface IHeadingProps {
  content: string;
}

function Heading({ content }: IHeadingProps) {
  return (
    <h1 className="text-lg font-bold text-gray-800">{content}</h1>
  )
}

export default Heading;
