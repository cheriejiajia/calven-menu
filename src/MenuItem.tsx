import { menuItemPropsType } from './type';

const MenuItem = ({
  item,
  itemExpanded,
  handleButtonClick,
}: menuItemPropsType) => {
  const handleToggle = () => {
    if (itemExpanded === item.title) {
      handleButtonClick('');
    } else {
      handleButtonClick(item.title);
    }
  };

  const checkHasSubMenu = item.subMenu && item.subMenu.length > 0;
  const shouldExpand = checkHasSubMenu && itemExpanded === item.title;

  return (
    <div data-test-id={`first-level-${item.title.toLowerCase()}`}>
      {item.title}
      {checkHasSubMenu && (
        <button
          onClick={handleToggle}
          data-test-id={`button-${item.title.toLowerCase()}`}
        >
          {shouldExpand ? 'Hide' : 'Expand'}
        </button>
      )}
      {shouldExpand && (
        <ul data-test-id={`ul-${item.title.toLowerCase()}`}>
          {item.subMenu?.map((subItem: string) => (
            <li
              key={subItem}
              data-test-id={`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`}
            >
              {subItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
