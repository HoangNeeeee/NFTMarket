"use client";

import { isEmpty, isNumber, throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";
import parser from "ua-parser-js";

type BreakpointValue = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
type BreakpointValueMap = Record<BreakpointValue, number>;

export const breakpointValue: BreakpointValueMap = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

export const screenUp = (size: number) => `(min-width: ${size}px)`;

export const screenDown = (size: number) => `(max-width: ${size}px)`;

export const bpValue = breakpointValue;

const mediaQueryStrings = {
  xs: "(max-width: 576px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1440px)",
} as const;

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

const matchMedia = (breakpoint: Breakpoint | number, ua?: string) => {
  const userAgent = parser(
    typeof window !== "undefined" ? navigator.userAgent : ua ?? ""
  );
  if (typeof window === "undefined") {
    if (!isNumber(breakpoint)) {
      switch (breakpoint) {
        case "xs":
          return { matches: userAgent.device.type === "mobile" };
        case "sm":
        case "md":
        case "lg":
          return {
            matches:
              (userAgent.device.type !== "mobile" &&
                userAgent.device.type === "tablet") ||
              userAgent.device.type === "window" ||
              !userAgent.device.type,
          };
        default:
          return {
            matches:
              (userAgent.device.type !== "mobile" &&
                userAgent.device.type === "window") ||
              !userAgent.device.type,
          };
      }
    } else {
      if (breakpoint > bpValue.xl) {
        return {
          matches:
            (userAgent.device.type !== "mobile" &&
              userAgent.device.type === "window") ||
            !userAgent.device.type,
        };
      }
      if (breakpoint > bpValue.sm) {
        return {
          matches:
            (userAgent.device.type !== "mobile" &&
              userAgent.device.type === "tablet") ||
            userAgent.device.type === "window" ||
            !userAgent.device.type,
        };
      }
      return { matches: userAgent.device.type === "mobile" };
    }
  }
  return window.matchMedia(
    isNumber(breakpoint)
      ? (breakpoint > 576 ? screenUp : screenDown)(breakpoint)
      : mediaQueryStrings[breakpoint]
  );
};

export const useBreakpoint = (
  ua?: string
): Partial<Record<Breakpoint, boolean>> => {
  const [breakpoint, setBreakpoint] = useState<
    Partial<Record<Breakpoint, boolean>>
  >({});

  const updateBreakpoint = useCallback(() => {
    setBreakpoint({
      xs: matchMedia("xs", ua).matches,
      sm: matchMedia("sm", ua).matches,
      md: matchMedia("md", ua).matches,
      lg: matchMedia("lg", ua).matches,
      xl: matchMedia("xl", ua).matches,
      xxl: matchMedia("xxl", ua).matches,
    });
  }, [ua]);

  useEffect(() => {
    const observer = new ResizeObserver(throttle(updateBreakpoint, 1000));

    if (isEmpty(breakpoint)) {
      updateBreakpoint();
    }

    observer.observe(document.body);
    return () => {
      observer.unobserve(document.body);
    };
  }, [updateBreakpoint]);

  return breakpoint;
};

useBreakpoint.matchMedia = matchMedia;
