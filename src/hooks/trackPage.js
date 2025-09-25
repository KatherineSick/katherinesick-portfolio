import { useEffect } from "react";
import { trackPage } from "../analytics";

export default function usePageView(path) {
  useEffect(() => {
    trackPage(path);
  }, [path]);
}
