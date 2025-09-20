import {RingLoader} from 'react-spinners';

export const Preloader = () => (
  <RingLoader
    color="#cc6633"
    cssOverride={{display: 'block', margin: '0 auto'}}
    size={30} />
);
