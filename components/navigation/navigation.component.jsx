import { PrismicLink } from "@prismicio/react";
import { useRouter } from "next/router";
import { NavigationStyles } from './navigation.styles';

const NavigationComponent = ({ navigation }) => {

  const menuItems = navigation.data.slices;

  const router = useRouter();
  const pathName = router.pathname.split("/")[1];

  const isPath = ( menuItem ) => {
    if (
      pathName === menuItem.primary.label.toLowerCase() ||
      pathName == "" && menuItem.primary.label.toLowerCase() == 'exhibitions'
    ) return true
  }

  return (
    <NavigationStyles>
      <div className="logo">
        Tube <br/>
        Gallery
      </div>
      <ul className="menu">
        { menuItems.map(( menuItem, i ) => (
          <li className={`menu-item ${ isPath(menuItem) && 'menu-item-current'}`} key={`menu-item-${i}`}>
            <PrismicLink field={menuItem.primary.link}>{ menuItem.primary.label }</PrismicLink>
          </li>
        ))}
      </ul>
    </NavigationStyles>
  )
}

export default NavigationComponent