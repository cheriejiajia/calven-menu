import { useState } from 'react';
import MenuItem from './MenuItem';
import { configType, itemType } from './type';

const Menu = ({ config }: configType) => {
  const [itemExpanded, setItemExpanded] = useState('');
  const handleButtonClick = (title: string) => {
    setItemExpanded(title);
  };

  return (
    <div className="menu-wrapper">
      {config.map((item: itemType) => {
        return (
          <MenuItem
            item={item}
            itemExpanded={itemExpanded}
            handleButtonClick={handleButtonClick}
            key={item.title}
          />
        );
      })}
    </div>
  );
};

export default Menu;
