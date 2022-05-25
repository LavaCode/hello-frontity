import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { connect } from "frontity";

const LightboxImage = (props) => (
  <div>
    <Lightbox images={
      [
        {
          src: props.src,
          title: props.alt,
          description: props.description
        }
      ]
    }/>
  </div>
);

export default connect(LightboxImage);