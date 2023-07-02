

import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWraper = styled(Box)(({ theme }) => ({
    padding:"1.5rem 1.5rem 0.75 1.5",
    backgroundColor: theme.palette.background.alt,
    borderRadius:"0.75rem"
        
}))

export default WidgetWraper;