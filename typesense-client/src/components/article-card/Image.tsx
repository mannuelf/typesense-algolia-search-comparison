interface IImageProp {
  src: string;
  alt?: string;
}

function Image({ src }: IImageProp) {
  return (
    <div className="text-gray-900 h-60 my-2">
      <div className="h-full bg-cover" style={{backgroundImage: `url(${src})`}}></div>
    </div>
  )
}

// or you can export like this too
export default Image;
