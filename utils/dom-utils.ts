export const removeMuiDuplicateStyle = () => {
  const jssStyles = document.querySelector("#jss-server-side");
  jssStyles?.remove();
};
