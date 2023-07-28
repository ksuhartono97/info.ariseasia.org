import { Box, Image } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname !== "/" ? (
        <button onClick={() => navigate(-1)}>
          <Image
            w="1.1em"
            minW="1.1em"
            src="/images/arrow-back.svg"
            alt="Back Button"
          />
        </button>
      ) : (
        <Box w="1.5em" />
      )}
    </>
  );
};

export default BackButton;
