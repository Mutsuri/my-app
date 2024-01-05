import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, FormControl, MenuItem, } from '@mui/material';
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import InputColor from 'react-input-color';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Date from './Date';
import KeyNumber from './KeyNumber';
import { useColorSettings } from './ColorSettings';
import stylesL from './LeftDisplayDataStyles.module.css';
import stylesR from './RightDisplayDataStyles.module.css';

interface deleteFunctionTab {
  onDeleteTab: () => void;
}

interface Color {
  hex: string;
  rgba: string;
}

export default function ColorSilderKey({ onDeleteTab }: deleteFunctionTab): JSX.Element {
  const { colorMainBackground,inputColorPropsMainBackground,
        colorBackground,inputColorPropsBackground,
        colorBottomBackground,inputColorPropsColorBottomBackground,
        colorInComponent,inputColorPropsInComponent,
        colorTextOnMainBackground,InputColorPropsTextOnMainBackground,
        colorTextOnBackground,InputColorPropsTextOnBackground,
        colorThemeColorEnd,InputColorPropsThemeColorEnd,
        colorThemeColorStart,InputColorPropsThemeColorStart,
        colorTextButton,InputColorPropsTextButton,
        colorIdleColorEnd,InputColorPropsIdleColorEnd,
        colorIdleColorStart,InputColorPropsIdleColorStart,
        colorInUseColorStart,InputColorPropsInUseColorStart,
        colorInUseColorEnd,InputColorPropsInUseColortEnd,
        colorTextInLangBtInUse,InputColorPropsTextInLangBtInUse,
        colorTextInLangBtIdle,InputColorPropsTextInLangBtIdle,
        colorSpinnerColor,InputColorPropsSpinnerColor,
        colorSpinnerPopupColor,InputColorPropsSpinnerPopupColor,
        colorBtPinColorEnd,InputColorPropsBtPinColorEnd,
        colorBtPinColorStart,InputColorPropsBtPinColorStart,
        colorPinInputColor,InputColorPropsPinInputColor, colorIcLockerTint,InputColorPropsIcLockerTint, } = useColorSettings();

  const inputBoxStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
  };

  const changeLangugeTHButtonOff = {
    backgroundColor: colorIdleColorStart.hex,
    color: colorTextInLangBtIdle.hex,
  };

  const changeLangugeTHButtonOn: React.CSSProperties = {
    backgroundColor: colorInUseColorStart.hex,
    color: colorTextInLangBtInUse.hex,
  };

  const changeLangugeENButtonOn: React.CSSProperties = {
    backgroundColor: colorInUseColorStart.hex,
    color: colorTextInLangBtInUse.hex,
  };

  const changeLangugeENButtonOff: React.CSSProperties = {
    backgroundColor: colorIdleColorEnd.hex,
    color: colorTextInLangBtIdle.hex,
  };

  const [language, setLanguage] = useState<string>('EN');

  const switchToThai = () => {
    if (language !== 'TH') {
      setLanguage('TH');
      setIsThButtonClicked(true);
      setIsEnButtonClicked(false);
    }
  };

  const switchToEnglish = () => {
    if (language !== 'EN') {
      setLanguage('EN');
      setIsEnButtonClicked(true);
      setIsThButtonClicked(false);
    }
  };

  const [isThButtonClicked, setIsThButtonClicked] = useState<boolean>(false);
  const [isEnButtonClicked, setIsEnButtonClicked] = useState<boolean>(true);

  const handleThButtonClick = () => {
    if (!isThButtonClicked) {
      setIsThButtonClicked(true);
      setIsEnButtonClicked(false);
    }
  };

  const handleEnButtonClick = () => {
    if (!isEnButtonClicked) {
      setIsEnButtonClicked(true);
      setIsThButtonClicked(false);
    }
  };

  const [selectedFloor, setSelectedFloor] = useState<string>('');
  const handleFloorChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedFloor(value);
  };

  const [selectedResidence, setSelectedResidence] = useState<string>('');
  const handleResidenceChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedResidence(value);
  };

  const [selectedUser, setSelectedUser] = useState<string>('');
  const handleUserChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedUser(value);
  };

  return(
    <>
      <Grid container spacing={2}>
        {/* ข้อมูลหน้าส่วนซ้าย */}
        <Grid item xs={5} className={stylesL.GridDisplayLeft} >
          <Paper className={stylesL.PaperDisplayLeft} >
              <Box style={inputBoxStyle}>
                <label style={labelStyle}>main_background</label>
                <InputColor {...inputColorPropsMainBackground}/>
                <br />
              </Box>
              <Box style={inputBoxStyle}>
                <label style={labelStyle}>background</label>
                <InputColor {...inputColorPropsBackground}  />
                <br />
              </Box>
              <Box style={inputBoxStyle}>
                <label style={labelStyle}>bottom_background</label>
                <InputColor {...inputColorPropsColorBottomBackground}  />
                <br />
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>in_component</label>
                <InputColor {...inputColorPropsInComponent} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>text_onmain_background</label>
                <InputColor {...InputColorPropsTextOnMainBackground} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>text_on_background</label>
                <InputColor {...InputColorPropsTextOnBackground} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>theme_color_end</label>
                <InputColor {...InputColorPropsThemeColorEnd} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>theme_color_start</label>
                <InputColor {...InputColorPropsThemeColorStart} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>text_button</label>
                <InputColor {...InputColorPropsTextButton} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>idle_color_end</label>
                <InputColor {...InputColorPropsIdleColorEnd} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>idle_color_start</label>
                <InputColor {...InputColorPropsIdleColorStart} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>in_use_color_start</label>
                <InputColor {...InputColorPropsInUseColorStart} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>in_use_color_end</label>
                <InputColor {...InputColorPropsInUseColortEnd} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>text_in_lang_bt_in_use</label>
                <InputColor {...InputColorPropsTextInLangBtInUse} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>text_in_lang_bt_idle</label>
                <InputColor {...InputColorPropsTextInLangBtIdle} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>spinner_color</label>
                <InputColor {...InputColorPropsSpinnerColor} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>spinner_popup_color</label>
                <InputColor {...InputColorPropsSpinnerPopupColor} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>bt_pin_color_end</label>
                <InputColor {...InputColorPropsBtPinColorEnd} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>bt_pin_color_start</label>
                <InputColor {...InputColorPropsBtPinColorStart} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>pin_input_color</label>
                <InputColor {...InputColorPropsPinInputColor} />
                <br/>
              </Box>
              <Box style={ inputBoxStyle }>
                <label style={ labelStyle }>ic_lockere_tint</label>
                <InputColor {...InputColorPropsIcLockerTint} />
                <br/>
              </Box>
          </Paper>
        </Grid>

        {/* ข้อมูลหน้าส่วนขวา */}
        <Grid item xs={6.96}>
          <Paper className={stylesR.PaperDisplayDataRight}>
            {/* Preview และปุ่ม Delete & Save */}
            <div>
                <label className={stylesR.TextPreview}>Preview</label>
                <Button variant="contained" style={{ backgroundColor: '#1C2060', borderRadius: '5px', marginRight: '15px' }} startIcon={<DeleteIcon />} onClick={onDeleteTab}>
                  DELETE
                </Button>
                <Button variant="contained" style={{ backgroundColor: '#1C2060', borderRadius: '5px' }} startIcon={<SaveIcon />}>
                  SAVE
                </Button>
            </div>
            
            {/* หน้าแสดงผลการเปลี่ยนสี */}
            <div className={stylesR.LeftAndRightDisplay}>
              {/* หน้าแสดงผลด้านซ้าย */}
                <Grid className={stylesR.GridLeftDisplay} style={{ backgroundColor: colorBackground.hex }} >
                    {/* ส่วนบน */}
                    <div className={stylesR.BoxDateAndSwitchLanguage} style={{ backgroundColor: colorMainBackground.rgba }}>
                      {/* แสดงเวลา และ วันที่ */}
                      <div className={stylesR.DateBox}>
                        <div className={stylesR.Date}>
                          <Date/>
                        </div>
                      </div>

                      {/* ปุ่มSwitchLanguage */}
                      <div className={stylesR.SwitchLanguage}>
                        <Button className={stylesL.changeLangugeTHButtonOff} style={isThButtonClicked ? changeLangugeTHButtonOn : changeLangugeTHButtonOff}
                                variant="contained" onClick={() => { switchToThai(); handleThButtonClick();}}>
                          TH
                        </Button>
                        <Button className={stylesL.changeLangugeENButtonOn} style={isEnButtonClicked ? changeLangugeENButtonOn : changeLangugeENButtonOff}
                                variant="contained" onClick={() => { switchToEnglish(); handleEnButtonClick();}}>
                          EN
                        </Button>
                      </div>                         
                    </div>

                    {/* ส่วนกลาง */}
                    <div style={{width: '460px', height: '550px'}} >  
                      {/* Text Please Select */}
                      <div className={stylesR.BoxTextinMiddle}>
                        <Typography className={stylesR.TypographyTextinMiddle} style={{ color: colorTextOnBackground.hex }}>{language === 'EN' ? 'Please Select' : 'กรุณากดเลือก'}</Typography>
                      </div>
                      {/* ปุ่มใหญ่อันกลาง */}
                      <div className={stylesR.BoxButtonLargeSize}>
                        <button className={stylesR.ButtonLargeSizeLeft}/>
                        <button className={stylesR.ButtonLargeSizeRight}/>
                      </div>
                      {/* ปุ่มเล็กอันล่าง */}
                      <div className={stylesR.BoxButtonSmallSize}>
                        <button className={stylesR.ButtonSmallSizeLeft}/>
                        <button className={stylesR.ButtonSmallSizeRight}/>
                      </div>
                    </div>

                    {/* ส่วนล่าง */}
                    <div className={stylesR.BackgroundBottom} style={{ backgroundColor: colorBottomBackground.hex }} />
                </Grid>
              
              {/* หน้าแสดงผลด้านขวา */}
                <Grid className={stylesR.GridRightDisplay} style={{ backgroundColor: colorBackground.hex }} >
                    {/* ส่วนบน */}
                    <div className={stylesR.BoxDateAndSwitchLanguage} style={{ backgroundColor: colorMainBackground.rgba }}>
                      {/* แสดงเวลา และ วันที่ */}
                      <div className={stylesR.DateBox}>
                        <div className={stylesR.Date}>
                          <Date/>
                        </div>
                      </div>

                      {/* ปุ่มSwitchLanguage */}
                      <div className={stylesR.SwitchLanguage}>
                        <Button className={stylesL.changeLangugeTHButtonOff} style={isThButtonClicked ? changeLangugeTHButtonOn : changeLangugeTHButtonOff}
                                variant="contained" onClick={() => { switchToThai(); handleThButtonClick();}}>
                          TH
                        </Button>
                        <Button className={stylesL.changeLangugeENButtonOn} style={isEnButtonClicked ? changeLangugeENButtonOn : changeLangugeENButtonOff}
                                variant="contained" onClick={() => { switchToEnglish(); handleEnButtonClick();}}>
                          EN
                        </Button>
                      </div>                         
                    </div>

                    {/* ส่วนกลางอันบน */}
                    <div className={stylesR.BoxTextVerifyPasscode}>
                      <text style={{ color: colorTextOnBackground.hex, fontSize: '24px', marginTop: '10px'}} >{language === 'EN' ? 'Verify passcode' : 'ยืนยันรหัสผ่าน'}</text><br/>
                    </div>

                    {/* ส่วนกลางอันกลาง */}
                    <div className={stylesR.BoxFormControlSelectFloorAndResidence}>
                      <text style={{ color: colorTextOnBackground.hex, fontSize: '18px' }}>{language === 'EN' ? 'Select Floor' : 'เลือกชั้น'}</text>
                      <FormControl fullWidth>
                        <Select value={selectedFloor}
                            onChange={handleFloorChange}
                            className={stylesR.FCSelectFloor}
                            style={{  backgroundColor: selectedFloor ? colorSpinnerPopupColor.hex : colorSpinnerColor.hex, color: colorInComponent.hex, borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                            renderValue={(selected) => (
                              <div className={stylesR.RenderValue1}>
                                {selected}
                              </div>
                            )} >
                            <MenuItem value={'1'}>1</MenuItem>
                            <MenuItem value={'2'}>2</MenuItem>
                            <MenuItem value={'3'}>3</MenuItem>
                          </Select>
                      </FormControl>
                    </div>

                    <div className={stylesR.BoxFormControlSelectFloorAndResidence}>
                        <text style={{ color: colorTextOnBackground.hex, fontSize: '18px' }}>{language === 'EN' ? 'Select Residence' : 'เลือกที่อยู่อาศัย'}</text>
                          <FormControl fullWidth>
                            <Select
                            value={selectedResidence}
                            onChange={handleResidenceChange}
                            style={{ backgroundColor: selectedResidence ? colorSpinnerPopupColor.hex : colorSpinnerColor.hex, color: colorInComponent.hex }} 
                            className={stylesR.FCSelectResidence}
                            renderValue={(selected) => (
                              <div className={stylesR.RenderValue1}>
                                {selected}
                              </div>
                            )} >
                            <MenuItem value={'101'}>101</MenuItem>
                            <MenuItem value={'102'}>102</MenuItem>
                            <MenuItem value={'103'}>103</MenuItem>
                            </Select>
                          </FormControl>
                    </div>

                    <div className={stylesR.BoxFormControlSelectUser}>
                          <text style={{ color: colorTextOnBackground.hex, fontSize: '18px' }}>{language === 'EN' ? 'Select User' : 'เลือกผู้ใช้'}</text>
                          <FormControl fullWidth>
                            <Select className={stylesR.FCSelectUser}
                            value={selectedUser}
                            onChange={handleUserChange}
                            style={{ backgroundColor: selectedUser ? colorSpinnerPopupColor.hex : colorSpinnerColor.hex, color: colorInComponent.hex, borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
                            renderValue={(selected) => (
                              <div className={stylesR.RenderValue2}>
                                <div>{selected}</div>
                                <div>member</div>
                              </div>
                            )} >
                              <MenuItem value={'RESIDENT'}>RESIDENT</MenuItem>
                              <MenuItem value={'member2'}>member2</MenuItem>
                              <MenuItem value={'member3'}>member3</MenuItem>
                            </Select>
                            <br />
                          </FormControl>
                    </div>

                    {/* ส่วนกลางอันล่าง */}
                    <KeyNumber/>

                    {/* ส่วนล่าง */}
                    <div className={stylesR.BoxForgetButtonAndHomeIconAndChangePasscodeButton}>
                      {/* ปุ่มForget */}
                      <div className={stylesR.BoxForgetButton}>
                        <Button className={stylesR.ForgetButton} variant="contained" style={{ color: colorTextButton.hex, borderRadius: '40px' }} >
                          Forget?
                        </Button>
                      </div>
                      {/* HomeIcon */}
                      <div className={stylesR.BoxHomeIcon}>
                        <HomeIcon className={stylesR.HomeIcon} />
                      </div>
                      {/* ปุ่มChange Passcode */}
                      <div className={stylesR.BoxChangePasscodeButton}>
                        <Button className={stylesR.ChangePasscodeButton} variant="contained" style={{ color: colorTextButton.hex, borderRadius: '40px'}} >
                            Change passcode
                        </Button>
                      </div>
                    </div>

                </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
