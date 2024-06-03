import { FC,ReactNode } from 'react';
import Link from 'next/link';
import { headingFont } from '../../fonts';

interface ButtonComponentProps {
  href?: string;
  small?: boolean;
  className?: string;
  tagType?: string;
  children: ReactNode;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  href = "#",
  small = false,
  className = "",
  tagType,
  children,
  ...rest
}) => {
  const smClasses = small ? 'py-3' : 'py-4';
  return (
    <div className={`${className} ${headingFont.className} inline-block font-bold overflow-hidden relative group text-gray-900 border border-green-900 p-1 uppercase text-xl`}>
      {
        tagType == "a" ?
          <Link {...rest} href={href} className={`${smClasses} px-8 bg-green-900 inline-block overflow-hidden w-full h-full align-middle`}>
            <span className='relative z-[1] pointer-events-none w-full h-full'>
              {children}
            </span>
            <span className="bg-orange-900 h-[calc(100%-8px)] w-[calc(100%-8px)] absolute top-1 z-0 left-1 transform skew-x-0 skew-y-0 scale-100 group-hover:skew-x-2 group-hover:skew-y-2 group-hover:scale-125 transition-transform duration-300 ease-out-quint origin-center pointer-events-none" />
          </Link> :
          <button {...rest} className={`${smClasses} px-8 bg-green-900 overflow-hidden inline-block w-full h-full align-middle`}>
            <span className='relative z-[1] pointer-events-none w-full h-full'>
              {children}
            </span>
            <span className="bg-orange-900 h-[calc(100%-8px)] w-[calc(100%-8px)] absolute top-1 z-0 left-1 transform skew-x-0 skew-y-0 scale-100 group-hover:skew-x-2 group-hover:skew-y-2 group-hover:scale-125 transition-transform duration-300 ease-out-quint origin-center pointer-events-none" />
          </button>
      }
    </div>
  );
}

export default ButtonComponent;