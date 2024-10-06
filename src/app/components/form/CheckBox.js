import cn from "../lib/cn";
export default function CheckBox({
  className = "",
  labelClassName = "",
  label = "",
  ...props
}) {
  return (
    <label className="flex items-center group/check">
      <span
        className={cn(
          "shrink-0 all-check cursor-pointer group-has-[input:checked]/check:bg-primary group-has-[input:checked]/check:border-primary flex justify-center items-center size-[18px] 2xl:size-5 border border-gray-light",
          className
        )}
      >
        <svg
          className="w-3 text-white group-has-[input:checked]/check:block hidden"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        <input
          className="contact border-[1.5px] border-gray-dark hidden"
          id=""
          name=""
          type="checkbox"
          {...props}
        />
      </span>
      {label && (
        <span
          className={cn(
            "font-18 text-para mb-0 px-3 2xl:px-4 cursor-pointer",
            labelClassName
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}
