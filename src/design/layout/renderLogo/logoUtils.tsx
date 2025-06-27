import { StyledContentImg, StyledLogo } from "@pages/home/styles";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

export { renderLogo };
