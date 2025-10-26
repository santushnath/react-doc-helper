import { scroller } from "react-scroll";

interface ScrollConfig {
  duration?: number;
  delay?: number;
  smooth?: boolean | string;
  offset?: number;
}

/**
 * Creates a scroll handler function for smooth scrolling to a specific section.
 *
 * @param sectionName - The name of the element to scroll to (matches react-scroll's <Element name="">)
 * @param config - Optional scroll configuration
 * @returns A function that can be called directly or passed as an event handler
 */
const scrollTo = (sectionName: string, config: ScrollConfig = {}) => {
  return (e?: React.MouseEvent | Event) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    scroller.scrollTo(sectionName, {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
      ...config,
    });
  };
};

export default scrollTo;
export type { ScrollConfig };
