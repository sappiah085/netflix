import Image from 'next/image';
import Link from 'next/link';
export default function ProfileGateCard({ image, name }) {
  return (
    <Link href={'/browse'}>
      <div className="group flex flex-col items-center gap-2">
        {' '}
        <div className="w-[100px] md:w-[150px] border-zinc-900 hover:border-zinc-300 border-[.15rem] cursor-pointer rounded-md flex items-center justify-center aspect-square hover:bg-zinc-300">
          {image && (
            <Image className="w-full h-full" src={image} alt="user image" />
          )}
          {!image && (
            <svg
              className="md:h-[100px] md:w-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
              fill="grey"
            >
              <path d="M483 776q13 0 21.5-8.5T513 746V610h138q12 0 20.5-8.5T680 580q0-13-8.5-21.5T650 550H513V405q0-12-8.5-20.5T483 376q-13 0-21.5 8.5T453 406v144H309q-12 0-20.5 8.5T280 580q0 13 8.5 21.5T310 610h143v137q0 12 8.5 20.5T483 776Zm-3 200q-85 0-158-30.5T195 861q-54-54-84.5-127T80 576q0-84 30.5-157T195 292q54-54 127-85t158-31q84 0 157 31t127 85q54 54 85 127t31 157q0 85-31 158t-85 127q-54 54-127 84.5T480 976Z" />
            </svg>
          )}
        </div>
        <span className="group-hover:text-white font-bold md:text-2xl text-zinc-400">
          {name}
        </span>
      </div>
    </Link>
  );
}
