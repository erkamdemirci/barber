import React from 'react';
import styled from 'styled-components';

const StyledSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 30px 0;

  .section-title {
    font-weight: 600;
    letter-spacing: 2px;
  }

  .mustache {
    display: flex;
    letter-spacing: -2px;
    font-weight: 100;
    gap: 10px;
    color: white;
  }
`;

const SectionHeader = ({ title, color }) => {
  return (
    <StyledSectionHeader>
      <span className={'section-title'} style={{ color: color }}>
        {title}
      </span>
      <div className="mustache">
        <span style={{ color: color }}>----</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 1280 640" preserveAspectRatio="xMidYMid meet">
            <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
            <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill={'#cea46f'} stroke="none">
              <path
                d="M5065 4954 c-277 -32 -403 -60 -615 -136 -197 -71 -456 -222 -660
        -384 -176 -140 -451 -430 -770 -809 -395 -470 -612 -682 -853 -831 -222 -138
        -443 -221 -717 -271 -141 -25 -421 -23 -556 5 -258 52 -417 140 -480 264 -76
        150 -70 337 15 461 61 89 186 167 267 167 85 0 149 -79 180 -222 10 -43 22
        -78 27 -78 18 0 0 209 -24 285 -77 248 -256 300 -547 159 -157 -76 -253 -197
        -304 -381 -28 -101 -30 -338 -4 -451 112 -501 487 -885 1077 -1105 617 -231
        1395 -245 2479 -46 282 52 463 96 695 170 656 210 1291 540 1743 906 115 93
        283 261 337 336 22 31 43 56 46 57 3 0 22 -24 43 -54 48 -70 247 -266 366
        -361 527 -420 1357 -815 2065 -984 270 -64 747 -143 1055 -175 607 -63 1139
        -36 1552 80 709 198 1168 616 1294 1176 26 113 24 350 -4 451 -51 184 -147
        305 -304 381 -122 59 -203 80 -293 74 -79 -5 -116 -21 -164 -70 -70 -71 -109
        -184 -118 -340 -7 -129 6 -142 31 -30 42 195 136 261 276 196 230 -107 308
        -373 179 -615 -89 -167 -382 -272 -759 -273 -353 0 -675 94 -989 289 -221 137
        -468 376 -821 795 -536 636 -788 875 -1131 1072 -524 302 -1174 381 -1664 201
        -197 -73 -364 -183 -515 -340 l-100 -103 -100 103 c-282 293 -656 441 -1100
        435 -58 0 -118 -3 -135 -4z"
              />
            </g>
          </svg>
        </span>
        <span style={{ color: color }}>----</span>
      </div>
    </StyledSectionHeader>
  );
};

export default SectionHeader;
