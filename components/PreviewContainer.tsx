// React & dependencies
import { FC } from "react";

// Material Components
import { Box } from "@mui/material";

// My components

// Queries & Mutations

// Typescript
interface Props {
  id: string;
}
const PreviewContainer: FC<Props> = ({ id }) => {
  return <Box id={id}></Box>;
};
export default PreviewContainer;
