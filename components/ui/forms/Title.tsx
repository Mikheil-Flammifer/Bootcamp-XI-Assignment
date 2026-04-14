/*
Component to make input more dinamic to use in other files
*/
interface Props {
  title: string;
  titleNameClass: string;
  subtitle: string;
  subtitleNameClass: string;
}

export function Title({ title, titleNameClass, subtitle, subtitleNameClass }: Props) {
  return (
    <div className="flex flex-col w-[360px] h-[62px] gap-[6px]">
      <h2 className={titleNameClass}>
        {title}
      </h2>
       <p className={subtitleNameClass}>
        {subtitle}
      </p>
    </div>
  );
}