import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.MainMenuSlice} MainMenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainMenuSlice>} MainMenuProps
 * @param { MainMenuProps }
 */
const MainMenu = ({ slice }) => (
  <header>
    <nav>
      <ul>
        { slice.items.map( item => (
          <li>{ item.menu_item }</li>
        ))}
      </ul>
    </nav>
  </header>
)

export default MainMenu