import { useContext } from "react";
import { LoaderContext } from "../../Utils/contexts/LoadingProvider";
export const useLoader = () => useContext(LoaderContext);
