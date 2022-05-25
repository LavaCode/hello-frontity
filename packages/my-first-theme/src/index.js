import Root from "./components"
import link from '@frontity/html2react/processors/link';
import lightboxImage from './processors/lightboximage'

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
        isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible;
      } 
    },
  },
  libraries: {
    html2react: {
      processors: [link, lightboxImage]
    }
  },
}

export default myFirstTheme