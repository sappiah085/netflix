import ManageProfileCard from '@/components/manageProfile/manageProfile';
import image from '../../public/static/stranger.jpg';
import Link from 'next/link';
import { useState } from 'react';
import Edit from '@/components/edit/edit';
export default function ManageProfiles() {
  const [edit, setEdit] = useState(false);
  function handleClick() {
    setEdit(true);
  }
  function handleClickFromEdit() {
    setEdit(false);
  }
  return !edit ? (
    <div className="w-full h-screen md:gap-14 gap-7 bg-black flex flex-col items-center justify-center">
      <h1 className="text-white md:text-7xl text-3xl">Manage profiles:</h1>
      <div className="flex px-3 items-center justify-center gap-7 w-full flex-wrap">
        <ManageProfileCard
          handleClick={handleClick}
          name={'Daniel'}
          image={image}
        />
        <ManageProfileCard
          handleClick={handleClick}
          name={'Samuel'}
          image={image}
        />
        <ManageProfileCard
          handleClick={handleClick}
          name={'Guest'}
          image={image}
        />
        <ManageProfileCard
          handleClick={handleClick}
          name={'Kids'}
          image={image}
        />
        <ManageProfileCard name={'Add Profile'} />
      </div>
      <Link
        className="hover:text-white bg-white text-black hover:bg-red-500  px-9 p-3 cursor-pointer"
        href={'/profilesGate'}
      >
        Done
      </Link>
    </div>
  ) : (
    <Edit handleClick={handleClickFromEdit} />
  );
}
