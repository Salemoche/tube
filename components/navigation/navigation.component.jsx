import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationStyles } from './navigation.styles';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from '../../data/state';
import { useState } from "react";
import BackgroundComponent from '../background/background.component';
import { motion } from 'framer-motion';
import { defaultTheme } from '@/styles/theme';

const NavigationComponent = ({ navigation }) => {

  const menuItems = navigation.data.slices;

  const router = useRouter();
  const pathName = router.pathname.split("/")[1];
  const store = proxy(baseState);
  const snap = useSnapshot(store);

  const [menuOpen, setMenuOpen] = useState(false)

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
          className="logo-mobile"
          onClick={() => setMenuOpen( prev => !prev)}
        >
          <img src="/images/tube-logo.svg" alt="" />
        </div>
      }
      <div className="menu">
      <ul>
        {/* { snap.deviceMode == 'mobile' && <BackgroundComponent/> } */}
        {/* { snap.deviceMode == 'mobile' && <div className="circle"></div> } */}
        { menuItems.map(( menuItem, i ) => (
          <li 
            className={`menu-item ${ isPath(menuItem) && 'menu-item-current'}`} 
            key={`menu-item-${i}`}
            style={{ color: isPath(menuItem) ? 'black' : defaultTheme.colors.gray }}
          >
            <PrismicLink field={menuItem.primary.link}>{ menuItem.primary.label }</PrismicLink>
          </li>
        ))}
      </ul>
      { snap.deviceMode == 'mobile' && <div className="menu-footer">
        <p>Tube Gallery</p>
        <p>Carrer Nicolau de Pacs</p>
        <p>25 Palma De Mallorca</p>
        <p>Spain</p>
        </div>
      }
      </div>
    </NavigationStyles>
  )
}

export default NavigationComponent