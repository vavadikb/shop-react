import Footer from "./Footer";
import Shop from "../Shop/Shop";

const HOCFooter = (WrappedComponent) => {
  const ComponentWithFooter = (props) => (
    <>
      <WrappedComponent {...props} />
      <Footer />
    </>
  );

  return ComponentWithFooter;
};
const ShopWithFooter = HOCFooter(Shop);
export default ShopWithFooter;
