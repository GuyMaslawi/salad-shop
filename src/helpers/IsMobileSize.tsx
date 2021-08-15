import { useMediaQuery, useTheme } from "@material-ui/core";

export function IsMobileSize() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("xs"));
}
