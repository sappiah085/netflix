import ManageProfileCard from '@/components/manageProfile/manageProfile';
import image from '../../public/static/stranger.jpg';
import Link from 'next/link';
import { useState } from 'react';
import Edit from '@/components/edit/edit';
export default function ManageProfiles() {
  const [edit, setEdit] = useState({
    bol: false,
    name: '',
  });
  function handleClick(name) {
    setEdit({ bol: true, name });
  }
  function handleClickFromEdit() {
    setEdit(false);
  }
  return (
    <>
      <div className="w-full min-h-screen md:gap-14 gap-7 bg-black flex flex-col items-center justify-start md:justify-center">
        <h1 className="text-white md:text-7xl text-3xl">Manage profiles:</h1>
        <div className="flex px-3 items-center justify-center gap-7 w-full flex-wrap">
          <ManageProfileCard
            handleClick={() => handleClick('Daniel')}
            name={'Daniel'}
            image={image}
          />
          <ManageProfileCard
            handleClick={() => handleClick('Samuel')}
            name={'Samuel'}
            image={image}
          />
          <ManageProfileCard
            handleClick={() => handleClick('Guest')}
            name={'Guest'}
            image={image}
          />
          <ManageProfileCard
            handleClick={() => handleClick('Kids')}
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
        <Edit edit={edit} handleClick={handleClickFromEdit} />
      </div>
    </>
  );
}
