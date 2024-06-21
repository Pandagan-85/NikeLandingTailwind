const Button = ({
  label,
  iconURL,
  textColor,
  borderColor,
  backgroundColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
        ${backgroundColor} ? '${backgroundColor} ${textColor} ${borderColor} : 'border-coral-red text-white bg-coral-red '

        ${fullWidth && "w-full"}
      `}
    >
      {label}
      {iconURL && (
        <img
          className='ml-2 rounded-full w-5 h-5'
          src={iconURL}
          alt='arrow-icon'
        />
      )}
    </button>
  );
};

export default Button;
