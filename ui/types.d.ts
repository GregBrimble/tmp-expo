declare module "tailwindcss/defaultTheme" {
  const theme: {
    colors: Record<string, string | Record<string, string>>;
    fontSize: Record<string, [string, Record<string, string>]>;
    fontWeight: Record<string, string>;
    spacing: Record<string, string>;
    letterSpacing: Record<string, string>;
    borderWidth: Record<string, string>;
    borderRadius: Record<string, string>;
    height: (theme: typeof theme) => Record<string, string>;
    width: (theme: typeof theme) => Record<string, string>;
    maxWidth: (theme: typeof theme, { breakpoints }) => Record<string, string>;
    zIndex: Record<string, string>;
  };
  export = theme;
}
