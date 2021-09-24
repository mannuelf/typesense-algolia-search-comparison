interface IAuthor {
  content?: (string | undefined | null);
}

export default function Author({ content }: IAuthor) {
  return (
    <div className="font-light text-gray-500">
      {content}
    </div>
  )
}
