export type TabValues = {
  label: string;
  value: string;
};

export type StyledTitleProps = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  paddingbottom?: string;
};

export interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface LeaderboardData {
  email: string;
  invitees: number;
  country: string;
}

export interface StatsData {
  icon?: string;
  name: string;
  count: number;
}

export interface Graphdata {
  signupCount: number;
  period: string;
}
