import { useState } from 'react';
import { InputColorProps } from 'react-input-color';

interface Color {
    hex: string;
    rgba: string;
  }

export const useColorSettings = () => {

    const inputColorStyle = {
        width: '100%',
        maxWidth: '900px',
        height: '30px',
        padding: '8px',
        border: '1px solid hsl(0, 0%, 100%)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'white',
    };
      
    const  [colorMainBackground, setColorMainBackground] = useState<Color>({ hex: '#191A1C', rgba: 'rgba(25, 26, 28, 1)' });
    const  [colorBackground, setColorBackground] = useState<Color>({ hex: '#29445C', rgba: 'rgba(41, 68, 92, 1)' });
    const  [colorBottomBackground, setColorBottomBackground] = useState<Color>({ hex: '#846045', rgba: 'rgba(132,96, 69, 1)' });

    const  [colorInComponent, setColorInComponent] = useState<Color>({ hex: '#FFFFFF', rgba: 'rgba(255, 255, 255, 1)' });
    const  [colorTextOnMainBackground, setColorTextOnMainBackground] = useState<Color>({ hex: '#74FBFE', rgba: 'rgba(116, 251, 254, 1)' });
    const  [colorTextOnBackground, setColorTextOnBackground] = useState<Color>({ hex: '#FDF052', rgba: 'rgba(253, 240, 82, 1)' });

    const  [colorThemeColorEnd, setColorThemeColorEnd] = useState<Color>({ hex: '#3205AB', rgba: 'rgba(50, 5, 171, 1)' });
    const  [colorThemeColorStart, setColorThemeColorStart] = useState<Color>({ hex: '#F4B664', rgba: 'rgba(244, 182, 100, 1)' });
    const  [colorTextButton, setColorTextButton] = useState<Color>({ hex: '#FFFFFF', rgba: 'rgba(255, 255, 255, 1)' });

    const  [colorIdleColorEnd, setColorIdleColorEnd] = useState<Color>({ hex: '#808080', rgba: 'rgba(128, 128, 128, 1)' });
    const  [colorIdleColorStart, setColorIdleColorStart] = useState<Color>({ hex: '#808080', rgba: 'rgba(128, 128, 128, 1)' });
    const  [colorInUseColorStart, setColorInUseColorStart] = useState<Color>({ hex: '#63A445', rgba: 'rgba(99, 164, 69, 1)' });
    const  [colorInUseColorEnd, setColorInUseColorEnd] = useState<Color>({ hex: '#74F7CD', rgba: 'rgba(116, 247, 205, 1)' });
    const  [colorTextInLangBtInUse, setColorTextInLangBtInUse] = useState<Color>({ hex: '#FFFFFF', rgba: 'rgba(255, 255, 255, 1)' });
    const  [colorTextInLangBtIdle, setColorTextInLangBtIdle] = useState<Color>({ hex: '#99999B', rgba: 'rgba(153, 153, 153, 1)' });

    const  [colorSpinnerColor, setColorSpinnerColor] = useState<Color>({ hex: '#FFCCCC', rgba: 'rgba(255, 204, 204, 1)' });
    const  [colorSpinnerPopupColor, setColorSpinnerPopupColor] = useState<Color>({ hex: '#999DDD', rgba: 'rgba(153, 157, 221, 1)' });

    const  [colorBtPinColorEnd, setColorBtPinColorEnd] = useState<Color>({ hex: '#404040', rgba: 'rgba(64, 64, 64, 1)' });
    const  [colorBtPinColorStart, setColorBtPinColorStart] = useState<Color>({ hex: '#0D0D0D', rgba: 'rgba(13, 13, 13, 1)' });
    const  [colorPinInputColor, setColorPinInputColor] = useState<Color>({ hex: '#1D1E20', rgba: 'rgba(29, 30, 32, 1)' });

    const  [colorIcLockerTint, setColorIcLockerTint] = useState<Color>({ hex: '#3C3C44', rgba: 'rgba(60, 60, 68, 1)' });
  // ... (สีอื่น ๆ)

    const inputColorPropsMainBackground: InputColorProps = {
        initialValue: colorMainBackground.hex,
        onChange: (newColor) => setColorMainBackground(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
    };

    const inputColorPropsBackground: InputColorProps = {
        initialValue: colorBackground.hex,
        onChange: (newColor) => setColorBackground(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const inputColorPropsColorBottomBackground: InputColorProps = {
        initialValue: colorBottomBackground.hex,
        onChange: (newColor) => setColorBottomBackground(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const inputColorPropsInComponent: InputColorProps = {
        initialValue: colorInComponent.hex,
        onChange: (newColor) => setColorInComponent(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsTextOnMainBackground: InputColorProps = {
        initialValue: colorTextOnMainBackground.hex,
        onChange: (newColor) => setColorTextOnMainBackground(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsTextOnBackground: InputColorProps = {
        initialValue: colorTextOnBackground.hex,
        onChange: (newColor) => setColorTextOnBackground(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsThemeColorEnd: InputColorProps = {
        initialValue: colorThemeColorEnd.hex,
        onChange: (newColor) => setColorThemeColorEnd(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsThemeColorStart: InputColorProps = {
        initialValue: colorThemeColorStart.hex,
        onChange: (newColor) => setColorThemeColorStart(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsTextButton: InputColorProps = {
        initialValue: colorTextButton.hex,
        onChange: (newColor) => setColorTextButton(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsIdleColorEnd: InputColorProps = {
        initialValue: colorIdleColorEnd.hex,
        onChange: (newColor) => setColorIdleColorEnd(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsIdleColorStart: InputColorProps = {
        initialValue: colorIdleColorStart.hex,
        onChange: (newColor) => setColorIdleColorStart(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsInUseColorStart: InputColorProps = {
        initialValue: colorInUseColorStart.hex,
        onChange: (newColor) => setColorInUseColorStart(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsInUseColortEnd: InputColorProps = {
        initialValue: colorInUseColorEnd.hex,
        onChange: (newColor) => setColorInUseColorEnd(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsTextInLangBtInUse: InputColorProps = {
        initialValue: colorTextInLangBtInUse.hex,
        onChange: (newColor) => setColorTextInLangBtInUse(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsTextInLangBtIdle: InputColorProps = {
        initialValue: colorTextInLangBtIdle.hex,
        onChange: (newColor) => setColorTextInLangBtIdle(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
      
      const InputColorPropsSpinnerColor: InputColorProps = {
        initialValue: colorSpinnerColor.hex,
        onChange: (newColor) => setColorSpinnerColor(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsSpinnerPopupColor: InputColorProps = {
        initialValue: colorSpinnerPopupColor.hex,
        onChange: (newColor) => setColorSpinnerPopupColor(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsBtPinColorEnd: InputColorProps = {
        initialValue: colorBtPinColorEnd.hex,
        onChange: (newColor) => setColorBtPinColorEnd(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsBtPinColorStart: InputColorProps = {
        initialValue: colorBtPinColorStart.hex,
        onChange: (newColor) => setColorBtPinColorStart(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsPinInputColor: InputColorProps = {
        initialValue: colorPinInputColor.hex,
        onChange: (newColor) => setColorPinInputColor(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };
    
      const InputColorPropsIcLockerTint: InputColorProps = {
        initialValue: colorIcLockerTint.hex,
        onChange: (newColor) => setColorIcLockerTint(newColor),
        ...(inputColorStyle && { style: inputColorStyle }),
      };

  return {
    colorMainBackground,
    colorBackground,
    colorBottomBackground,
    colorInComponent,
    colorTextOnMainBackground,
    colorTextOnBackground,
    colorThemeColorEnd,
    colorThemeColorStart,
    colorTextButton,
    colorIdleColorEnd,
    colorIdleColorStart,
    colorInUseColorStart,
    colorInUseColorEnd,
    colorTextInLangBtInUse,
    colorTextInLangBtIdle,
    colorSpinnerColor,
    colorSpinnerPopupColor,
    colorBtPinColorEnd,
    colorBtPinColorStart,
    colorPinInputColor,
    colorIcLockerTint,
    // ... (สีอื่น ๆ)
    inputColorPropsMainBackground,
    inputColorPropsBackground,
    inputColorPropsColorBottomBackground,
    inputColorPropsInComponent,
    InputColorPropsTextOnMainBackground,
    InputColorPropsTextOnBackground,
    InputColorPropsThemeColorEnd,
    InputColorPropsThemeColorStart,
    InputColorPropsTextButton,
    InputColorPropsIdleColorEnd,
    InputColorPropsIdleColorStart,
    InputColorPropsInUseColorStart,
    InputColorPropsInUseColortEnd,
    InputColorPropsTextInLangBtInUse,
    InputColorPropsTextInLangBtIdle,
    InputColorPropsSpinnerColor,
    InputColorPropsSpinnerPopupColor,
    InputColorPropsBtPinColorEnd,
    InputColorPropsBtPinColorStart,
    InputColorPropsPinInputColor,
    InputColorPropsIcLockerTint,
    // ... (InputColorProps อื่น ๆ)
  };
};
