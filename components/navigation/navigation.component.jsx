import { PrismicLink } from "@prismicio/react";

const NavigationComponent = ({ navigation }) => {

  const menuItems = navigation.data.slices;

  return (
    <nav>
      <ul>
        { menuItems.map(( menuItem, i ) => (
          <li className='menuItem' key={`menuItem-${i}`}>
            <PrismicLink field={menuItem.primary.link}>{ menuItem.primary.label }</PrismicLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationComponent