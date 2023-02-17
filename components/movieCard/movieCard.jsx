import Link from 'next/link';
import stranger from '../../public/static/proto.jpeg';
import Image from 'next/image';
export default function MovieCard() {
  return (
    <Link className="w-[180px] shrink-0 block h-[100px]" href={'/'}>
      <Image src={stranger} className="w-full h-full " alt="movie image" />
    </Link>
  );
}
