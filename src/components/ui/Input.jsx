function Input({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  placeholder,
  value,
  onChange,
  name,
  id,
}) {
  return (
    <div className="relative">
      {LeftIcon && (
        <LeftIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 " />
      )}
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border border-gray-200 p-3 rounded-md focus:outline-red-500  ${
          LeftIcon ? "pl-10" : "pl-3"
        } ${RightIcon ? "pr-10" : "pr-3"} rounded-lg`}
      />
      {RightIcon && (
        <RightIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
      )}
    </div>
  );
}

export default Input;
