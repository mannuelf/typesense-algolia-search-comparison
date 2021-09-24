import Moment from 'react-moment';

type PublishedAtProps = {
  time: string;
}

export default function PublishedAt({ time }: PublishedAtProps) { // you can do inline default export like this.
  return (
    <div className="font-normal text-gray-500">
      <Moment format="ddd - MMM YYYY">
        {time}
      </Moment>
    </div>
  )
}

// Used a Type here instead of interface as the data type is quite simple.
// read more: https://blog.logrocket.com/types-vs-interfaces-in-typescript/
