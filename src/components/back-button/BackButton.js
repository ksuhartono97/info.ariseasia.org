import { useNavigate, useLocation } from "react-router-dom";
import { Image, Box } from "@chakra-ui/react";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? (
        <button onClick={() => navigate(-1)}>
          <Image
            w="1.5em"
            minW="1.5em"
            src={process.env.PUBLIC_URL + "/images/arrow-back.svg"}
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
