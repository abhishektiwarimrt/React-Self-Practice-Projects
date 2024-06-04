export default function Tabs({ children, buttons, ButtonsContainer }) {
  //const Container = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
