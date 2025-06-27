import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PositionsUI } from "./interface";

const Positions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/positions" ||
      location.pathname === "/positions/"
    ) {
      navigate("/positions/options");
    }
  }, [location, navigate]);

  return <PositionsUI />;
};

export { Positions };
