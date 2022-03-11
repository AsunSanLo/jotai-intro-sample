import React from "react";
import styled from "styled-components";
export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const SpinnerStyles = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;

  div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 4rem 4rem;

    &:after {
      content: " ";
      display: block;
      position: absolute;
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background: #61dafb;
      margin: -0.4rem 0 0 -0.4rem;
    }

    &:nth-child(1) {
      animation-delay: -0.036s;
    }
    &:nth-child(1):after {
      top: 63px;
      left: 63px;
    }
    &:nth-child(2) {
      animation-delay: -0.072s;
    }
    &:nth-child(2):after {
      top: 68px;
      left: 56px;
    }
    &:nth-child(3) {
      animation-delay: -0.108s;
    }
    &:nth-child(3):after {
      top: 71px;
      left: 48px;
    }
    &:nth-child(4) {
      animation-delay: -0.144s;
    }
    &:nth-child(4):after {
      top: 72px;
      left: 40px;
    }
    &:nth-child(5) {
      animation-delay: -0.18s;
    }
    &:nth-child(5):after {
      top: 71px;
      left: 32px;
    }
    &:nth-child(6) {
      animation-delay: -0.216s;
    }
    &:nth-child(6):after {
      top: 68px;
      left: 24px;
    }
    &:nth-child(7) {
      animation-delay: -0.252s;
    }
    &:nth-child(7):after {
      top: 63px;
      left: 17px;
    }
    &:nth-child(8) {
      animation-delay: -0.288s;
    }
    &:nth-child(8):after {
      top: 56px;
      left: 12px;
    }
  }

  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerCircleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

export const SpinnerCircleItem = styled.span<SpinnerCircleItemProps>`
  ${({ size = 0.7, spacing = 0.4, speed = 1, translation = 0.2 }) => `
        animation: spinnerAnimation ${speed}s ease-in-out infinite;
        background-color: #61DAFB;
        display: block;
        border-radius: 50%;
        height: ${size}rem;
        width: ${size}rem;
        margin-bottom: ${translation * 2}rem;

        &:not(:last-child) {
            margin-right: ${spacing}rem;
        }

        &:first-of-type {
            animation-delay: calc(${speed} * 1.15s);
        }

        &:nth-of-type(2) {
            animation-delay: calc(${speed} * 1.30s);
        }

        &:last-child {
            animation-delay: calc(${speed} * 1.45s);
        }

        @keyframes spinnerAnimation {
            0%, 100% {
                opacity: 1;
                transform: translateY(${translation}rem);
            }
            30% {
                opacity: 0.3;
                transform: translateY(-${translation}rem);
            }
            60% {
                opacity: 1;
                transform: translateY(${translation}rem);
            }
        }
    `}
`;

export type SpinnerCircleItemProps = {
  size?: number;
  color?: string;
  spacing?: number;
  speed?: number;
  translation?: number;
};

const SpinnerFlat = ({
  color,
  size,
  spacing,
  speed,
  translation,
}: SpinnerCircleItemProps) => {
  return (
    <SpinnerCircleContainer>
      <SpinnerCircleItem
        size={size}
        color={color}
        spacing={spacing}
        speed={speed}
        translation={translation}
      />
      <SpinnerCircleItem
        size={size}
        color={color}
        spacing={spacing}
        speed={speed}
        translation={translation}
      />
      <SpinnerCircleItem
        size={size}
        color={color}
        spacing={spacing}
        speed={speed}
        translation={translation}
      />
    </SpinnerCircleContainer>
  );
};

export { SpinnerFlat };
