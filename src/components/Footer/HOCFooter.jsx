import Footer from "./Footer";

const HOCFooter = (WrappedComponent) => {
  const ComponentWithFooter = (props) => (
    <>
      <WrappedComponent {...props} />
      <Footer />
    </>
  );

  return ComponentWithFooter;
};
export default HOCFooter;
