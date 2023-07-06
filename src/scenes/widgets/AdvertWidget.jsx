import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWraper from "components/WidgetWraper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWraper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Add</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        src="http://localhost:3001/assets/info4.jpeg"
        alt="advert"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MikazaCosmetics</Typography>
        <Typography color={medium}>mikazacosmetic.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light
      </Typography>
    </WidgetWraper>
  );
};

export default AdvertWidget;
