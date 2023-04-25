import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationStyles } from './navigation.styles';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from '../../data/state';
import { useState } from "react";
import BackgroundComponent from '../background/background.component';

const NavigationComponent = ({ navigation }) => {

  const menuItems = navigation.data.slices;

  const router = useRouter();
  const pathName = router.pathname.split("/")[1];
  const store = proxy(baseState);
  const snap = useSnapshot(store);

  const [menuOpen, setMenuOpen] = useState(true)

  const isPath = ( menuItem ) => {
    if (
      pathName === menuItem.primary.label.toLowerCase() ||
      pathName == "" && menuItem.primary.label.toLowerCase() == 'exhibitions'
    ) return true
  }

  return (
    <NavigationStyles mode={snap.deviceMode} menuOpen={menuOpen}>
      { snap.deviceMode == 'desktop' ?
        <Link className="logo" href="/">
          Tube <br/>
          Gallery
        </Link>
      :
        <div 
          className="logo mobile"
          onClick={() => setMenuOpen( prev => !prev)}
        >
          Tube <br/>
          Gallery
        </div>
      }
      <ul className="menu">
        { snap.deviceMode == 'mobile' && <BackgroundComponent/> }
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