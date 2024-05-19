type UserAgentDeviceType = string[];

type BreakPointType = "desktop" | "tablet" | "mobile";

interface ResponsiveDeviceStateType {
  hardware: BreakPointType;
  viewport: BreakPointType;
}

type ViewportOrientationStateType = "portrait" | "landscape";
