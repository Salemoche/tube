import MyComponent from '../../../../slices/ContactItem';

export default {
  title: 'slices/ContactItem'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"paragraph","text":"Eiusmod dolor fugiat sunt sit laborum. Labore do voluptate adipisicing enim pariatur ullamco.","spans":[]}]},"id":"_Default","slice_type":"contact_item"}} />
_Default.storyName = ''

export const _Newsletter = () => <MyComponent slice={{"variation":"newsletter","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"intro":[{"type":"paragraph","text":"Dolore eiusmod veniam adipisicing nulla pariatur enim ipsum. Cillum enim excepteur sit adipisicing minim.","spans":[]}],"email_placeholder":"evidence","subscribe_button":"creature"},"id":"_Newsletter","slice_type":"contact_item"}} />
_Newsletter.storyName = ''