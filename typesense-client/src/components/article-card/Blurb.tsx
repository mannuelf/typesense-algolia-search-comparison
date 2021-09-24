interface IBlurb {
  content: string;
}

export default function Blurb({ content }: IBlurb) {
  return (
    <div className="text-gray-800">
      {content}
    </div>
  )
}
