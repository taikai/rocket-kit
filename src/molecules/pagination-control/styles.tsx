import styled from 'styled-components';
import { rem } from 'polished';
import { colors, fontWeight } from '../../ions/variables';

const { normal, light, purple, grey } = colors;
const { bold } = fontWeight;

export const PaginationWrapper = styled.div`
  ul.pagination {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style: none;

    li {
      width: ${rem('50px')};
      height: ${rem('50px')};
      background-color: ${light};
      cursor: pointer;

      &.previous,
      &.next {
        margin: 0 ${rem('15px')};
        background-color: ${light};
        border-radius: ${rem('25px')};
        transition-duration: 0.3s;

        a svg {
          transition-duration: 0.3s;
        }
      }

      &.page:nth-child(2) {
        border-radius: ${rem('25px')} 0 0 ${rem('25px')};
      }

      &.page:nth-last-child(2) {
        border-radius: 0 ${rem('25px')} ${rem('25px')} 0;
      }

      a,
      .break {
        width: ${rem('50px')};
        height: ${rem('50px')};
        border-radius: 999px;
        z-index: 1;
        transition-duration: 0.3s;

        &:hover {
          -moz-box-shadow: 0 0 ${rem('15px')} 0 rgba(40, 40, 40, 0.1);
          -webkit-box-shadow: 0 0 ${rem('15px')} 0 rgba(40, 40, 40, 0.1);
          box-shadow: 0 0 ${rem('15px')} 0 rgba(40, 40, 40, 0.1);
          filter: drop-shadow(0 0 ${rem('5px')} transparent);
          z-index: 2;
        }
      }

      a {
        width: ${rem('50px')};
        height: ${rem('50px')};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${normal};
        text-decoration: none;

        svg {
          width: ${rem('30px')};
          height: auto;
          fill: ${grey};
        }
      }

      &.active {
        border-radius: 0;
        pointer-events: none;

        a {
          --shadow: drop-shadow(0 0 ${rem('5px')} rgba(40, 40, 40, 0.4));

          border-radius: ${rem('25px')};
          background-color: ${purple};
          font-weight: ${bold};
          color: ${light};
          filter: var(--shadow);
        }
      }
    }
  }
`;
