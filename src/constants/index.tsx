import UITheme from "@/classes/UITheme";

const defaultGreen = new UITheme();
defaultGreen.name = 'Default Green';
defaultGreen._id = "DefaultGreen";
defaultGreen.themeRoot = 'rgba(0, 0, 0, 0.5)';
defaultGreen.themeItalic = 'rgb(197, 196, 196)';
defaultGreen.themeText = 'rgba(255, 253, 253, 1)';
defaultGreen.themeBox = '#0A3400';
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
defaultGreen.themeButton = 'rgba(14, 34, 19, 0.658)';
defaultGreen.ThemeBrightColor = 'rgba(0, 255, 26, 0.25)'
defaultGreen.themeFlavorText = 'rgba(0, 255, 13, 0.5)';

const defaultBlue = new UITheme();
defaultBlue.name = 'Default Blue';
defaultBlue._id = 'DefaultBlue';
defaultBlue.themeRoot = 'rgba(0, 0, 0, 0.5)';
defaultBlue.themeItalic = 'rgb(197, 196, 196)';
defaultBlue.themeText = 'rgba(255, 253, 253, 1)';
defaultBlue.themeBox = 'rgba(8, 57, 131, 0.767)';
defaultBlue.themeAccent = 'rgba(12, 78, 150, 0.295)';
defaultBlue.themeBorder = 'rgba(0, 0, 0, 1)';
defaultBlue.themeHoverPos = 'var(--theme-accent)';
defaultBlue.themeHoverNeg = 'rgba(196, 0, 0, .75)';
defaultBlue.themeBlur = '15px';
defaultBlue.themeBorderWidth = '2px';
defaultBlue.themeBorderRadius = '8px';
defaultBlue.themeFont = "'DejaVuSansBold', sans-serif";
defaultBlue.themeBorderType = 'solid';
defaultBlue.themeTextHover = 'rgb(255, 255, 255)';
defaultBlue.themeBackground = "url('./backgrounds/bluedefault.svg";
defaultBlue.themeButton = 'rgba(14, 18, 33, 0.658)';
defaultBlue.ThemeBrightColor = 'rgba(0, 30, 52)';
defaultBlue.themeFlavorText = 'rgba(0, 162, 255, 0.5)';

export const defaultThemes: UITheme[] = [defaultGreen, defaultBlue];
