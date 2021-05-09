import React from 'react';
import styled from 'styled-components';
import Counter from './counter';

export default function Timer(props) {
  const {
    rootColor,
    headerText,
    headerTextColor,
    headerTextFontWeight,
    headerTextFontSize,
    descTextFontSize,
    descMsgColor,
    descMessage,
    icon,
    iconWidth,
    iconHeight,
  } = props;

  const defaultTextStyles = {
    color: rootColor ? rootColor : '#38393a',
    fontWeight: '700',
  };

  const RctContainer = styled.div`
    padding: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => (props.color != null ? props.color : defaultTextStyles.color)};
  `;

  const RctHeaderText = styled.div`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
  `;

  const RctImage = styled.img`
    width: ${props => (props.iconWidth != null ? props.iconWidth : '500px')};
    height: ${props => (props.iconHeight != null ? props.iconHeight : 'auto')};
  `;

  const RctDescription = styled.div`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    text-align: center;
    margin-top: 10px;
  `;

  return (
    <RctContainer color={rootColor || null}>
      {headerText && (
        <RctHeaderText
          color={headerTextColor || defaultTextStyles.color}
          fontWeight={headerTextFontWeight || defaultTextStyles.fontWeight}
          fontSize={headerTextFontSize || '3em'}>
          {headerText}
        </RctHeaderText>
      )}
      {!!descMessage && (
        <RctDescription color={descMsgColor || defaultTextStyles.color} fontSize={descTextFontSize || '0.5em'}>
          {descMessage}
        </RctDescription>
      )}
      <Counter {...props} />
      {!!icon && <RctImage src={icon} iconWidth={iconWidth || null} iconHeight={iconHeight || null} />}
      {props.children}
    </RctContainer>
  );
}
