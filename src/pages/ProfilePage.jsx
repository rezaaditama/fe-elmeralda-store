import ProfileIcon from '../assets/icons/ProfileIcon';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='flex py-2 min-h-screen justify-evenly'>
        <div className='shadow-xl w-1/4 h-[40vh] flex flex-col justify-center items-center rounded-xl bg-green-950'>
          <ProfileIcon size={120} color={'white'} />
          <p className='text-lg font-extrabold text-white'>Reza Aditama</p>
        </div>
        <div className='w-2/3 p-5 shadow-2xl border-2 border-green-900 rounded-xl'>
          <p className='text-center uppercase font-extrabold text-2xl'>
            data diri
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
