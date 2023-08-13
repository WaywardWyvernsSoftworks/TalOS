import UITheme from "@/classes/UITheme";

const defaultGreen = new UITheme();
defaultGreen.name = 'Default Green';
defaultGreen._id = "DefaultGreen";
defaultGreen.themeRoot = 'rgba(0, 0, 0, 0.5)';
defaultGreen.themeItalic = 'rgba(245, 245, 245, 1)';
defaultGreen.themeText = 'rgba(255, 253, 253, 1)';
defaultGreen.themeBox = 'rgba(14, 34, 19, 0.658)';
defaultGreen.themeAccent = 'rgba(12, 151, 31, 0.295)';
defaultGreen.themeBorder = 'rgba(0, 0, 0, 1)';
defaultGreen.themeHoverPos = 'var(--theme-accent)';
defaultGreen.themeHoverNeg = 'rgba(196, 0, 0, .75)';
defaultGreen.themeBlur = '15px';
defaultGreen.themeBorderWidth = '2px';
defaultGreen.themeBorderRadius = '8px';
defaultGreen.themeFont = "'DejaVuSansBold', sans-serif";
defaultGreen.themeBorderType = 'solid';
defaultGreen.themeTextHover = 'rgb(255, 255, 255)';
defaultGreen.themeBackground = "url('./backgrounds/greendefault.svg')";

export const defaultThemes: UITheme[] = [defaultGreen];
