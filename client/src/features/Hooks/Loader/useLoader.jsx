import { useContext } from "react";
import { LoaderContext } from "../../Shared/Utils/contexts/LoadingProvider";
export const useLoader = () => useContext(LoaderContext);
