export const removeMuiDuplicateStyle = () => {
  const jssStyles = document.querySelector("#jss-server-side");
  jssStyles?.remove();
};

export const inBrowser = typeof window !== 'undefined';