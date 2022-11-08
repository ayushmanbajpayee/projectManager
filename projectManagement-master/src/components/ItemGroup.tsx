import { ArrowDropDown, ArrowRight } from '@material-ui/icons';
import * as React from 'react';
import { useState } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}
export const ItemGroup = ({ title, children }: Props) => {
  const [showItems, setshowItems] = useState(true);

  let Icon = showItems ? ArrowDropDown : ArrowRight;
  return (
    <div className='flex flex-col w-full text-sm'>
      <div
        className='px-2 relative w-full mt-0.5 h-7 flex items-center rounded hover:bg-gray-100 cursor-pointer'
        onClick={() => setshowItems(!showItems)}
      >
        <Icon className='w-3 h-3 mr-2 -ml-1' />
        {title}
      </div>
      {showItems && children}
    </div>
  );

};

export default ItemGroup;
