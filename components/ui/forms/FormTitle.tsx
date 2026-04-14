/*
Component to make input more dinamic to use in other files
*/
interface Props {
  title: string;
  subtitle: string;
}

export function FormTitle({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col w-[360px] h-[62px] gap-[6px]">
      <h2 className="font-semibold text-[32px] leading-none text-center text-gray-900 font-inter">
        {title}
      </h2>
       <p className="font-medium font-inter text-[14px] leading-none tracking-normal text-center text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}