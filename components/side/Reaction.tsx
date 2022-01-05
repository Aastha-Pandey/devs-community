const Reaction = ({ icon, iconColor, reactionCount }) => {
  return (
    <>
      <div className='flex md:flex-col lg:flex-col items-center'>
        <button
          className={`${iconColor} w-10 h-10  text-gray-100 flex justify-center items-center rounded-full hover:bg-opacity-10  hover:text-opacity-100`}
        >
          {icon}
        </button>
        {reactionCount}
      </div>
    </>
  );
};

export default Reaction;
