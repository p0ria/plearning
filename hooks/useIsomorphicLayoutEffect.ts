import { useLayoutEffect, useEffect } from "react";
import { inBrowser } from "../utils/dom-utils";

const useIsomorphicLayoutEffect = inBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;