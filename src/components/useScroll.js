import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({threshold: 0.5});
  view ? controls.start('show') : controls.start('hidden');
  
  return [element, controls];
}
 
export default useScroll;