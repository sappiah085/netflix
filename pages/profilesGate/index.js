import ProfileGateCard from '@/components/profileGateCard/profileGateCard';
import image from '../../public/static/stranger.jpg';
import Link from 'next/link';
export default function ProfilesGate() {
  return (
    <div className="w-full h-screen md:gap-14 gap-7 bg-black flex flex-col items-center justify-center">
      <h1 className="text-white md:text-7xl text-3xl">Who{"'"}s watching?</h1>
      <div className="flex px-3 items-center justify-center gap-7 w-full flex-wrap">
        <ProfileGateCard name={'Daniel'} image={image} />
        <ProfileGateCard name={'Samuel'} image={image} />
        <ProfileGateCard name={'Guest'} image={image} />
        <ProfileGateCard name={'Kids'} image={image} />
        <ProfileGateCard name={'Add Profile'} />
      </div>
      <Link
        className="hover:text-white text-zinc-400 hover:border-white border-zinc-400 border-2 px-9 p-3 cursor-pointer"
        href={'/manageProfiles'}
      >
        Manage Profiles
      </Link>
    </div>
  );
}
