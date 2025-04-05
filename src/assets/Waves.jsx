import React from 'react';
import styled, { keyframes } from 'styled-components';

const Waves = () => {
  return (
    <Container>
      <svg viewBox="0 0 300 10000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3F0EAD" />
            <stop offset="100%" stopColor="#3F0EAD" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="#F0EAD6" />

        <WaveGroup1>
          <path d="M0,300 C150,200 350,400 500,300 C650,200 800,400 900,300 L800,600 L0,600 Z" fill="#DA00DA" opacity="0.7"/>
        </WaveGroup1>
        <WaveGroup2>
          <path d="M0,350 C200,250 400,450 600,350 C800,250 1000,450 1100,350 L800,600 L0,600 Z" fill="#F99A03" opacity="0.7"/>
        </WaveGroup2>
        <WaveGroup3>
          <path d="M0,400 C150,300 350,500 500,400 C650,300 800,500 900,400 L800,600 L0,600 Z" fill="#A4A400" opacity="0.7"/>
        </WaveGroup3>
        <WaveGroup4>
          <path d="M0,450 C200,350 400,550 600,450 C800,350 1000,550 1100,450 L800,600 L0,600 Z" fill="#FFDB58" opacity="0.7"/>
        </WaveGroup4>
      </svg>
    </Container>
  );
};

const waveMotion = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-50px); }
  100% { transform: translateX(0); }
`;

const AnimatedGroup = styled.g`
  animation: ${waveMotion} 20s linear infinite;
`;

const WaveGroup1 = styled(AnimatedGroup)`
  animation-duration: 18s;
`;
const WaveGroup2 = styled(AnimatedGroup)`
  animation-duration: 22s;
  animation-delay: -5s;
`;
const WaveGroup3 = styled(AnimatedGroup)`
  animation-duration: 26s;
  animation-delay: -10s;
`;
const WaveGroup4 = styled(AnimatedGroup)`
  animation-duration: 30s;
  animation-delay: -15s;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  transform: translate(-10px,-10px);
`;

export default Waves;
