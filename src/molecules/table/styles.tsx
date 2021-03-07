import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

const { normal, light, info } = colors;
const { bold } = fontWeigth;

export const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
  white-space: nowrap;

  th,
  td {
    height: ${rem('50px')};
    padding: 0 ${rem('15px')};

    &.center {
      text-align: center;

      > div {
        justify-content: center;
      }
    }

    &.right {
      text-align: right;

      > div {
        justify-content: flex-end;
      }
    }

    &.thin {
      @media ${device.s} {
        max-width: min-content;
      }
    }

    &.kai {
      text-align: right;

      > div {
        justify-content: flex-end;
      }
    }

    &.avatar > div {
      display: flex;
      align-items: center;

      img {
        margin-right: ${rem('15px')};
      }
    }
  }

  th {
    font-size: 0.85rem;
    background-color: ${light};

    &:first-child {
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
    }
  }

  tr {
    border: 1px solid ${info};
    border-radius: 6px;
    position: relative;

    &:not(:last-child) {
      margin-bottom: ${rem('15px')};
    }

    @media ${device.s} {
      border: 0;
    }
  }

  thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    @media ${device.s} {
      display: contents;
      font-weight: ${bold};
      color: ${info};
      text-transform: uppercase;
      text-align: left;
    }
  }

  tbody {
    tr {
      display: block;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${lighten(0.4, info)};

        td.menu {
          button {
            opacity: 1;
          }
        }
      }

      @media ${device.s} {
        display: table-row;
      }
    }

    td {
      border-top: 1px solid ${lighten(0.4, info)};
      height: inherit;
      min-height: ${rem('50px')};
      padding: ${rem('15px')};
      display: flex;
      justify-content: flex-end;

      > div {
        margin-left: 100px;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        text-align: right;

        > span {
          display: none;

          &:first-child,
          &:last-child {
            display: inherit;
          }
        }
      }

      img {
        min-width: ${rem('30px')};
        min-height: ${rem('30px')};
      }

      a {
        display: flex;
        align-items: center;
        color: ${normal};
        text-decoration-color: ${info};
      }

      &:first-child {
        border: 0;
      }

      &:before {
        position: absolute;
        left: ${rem('15px')};
        content: attr(data-label);
        font-weight: ${bold};
        text-transform: capitalize;
      }

      &.kai {
        svg {
          float: right;
          width: auto;
          min-width: ${rem('20px')};
          max-height: ${rem('20px')};
        }
      }

      img {
        display: none;
      }

      .tag {
        margin: 0;

        &:not(:first-child) {
          display: none;
        }
      }

      &.menu {
        padding: 0 ${rem('10px')} 0 0;

        button {
          margin-top: ${rem('5px')};
          transition: 0.3s;
        }

        ul {
          top: ${rem('36px')};
          margin-left: ${rem('-170px')};
        }
      }

      @media ${device.s} {
        display: table-cell;
        height: ${rem('50px')};
        padding: 0 ${rem('15px')};
        align-items: center;

        > div {
          position: relative;
          margin-left: 0;
          display: flex-start;
          justify-content: flex-start;
          text-align: left;

          > span {
            display: inherit;
          }
        }

        &:first-child {
          border-top: 1px solid ${lighten(0.4, info)};
        }

        &:before {
          content: '';
        }

        &.kai {
          max-width: ${rem('100px')};
        }

        img {
          display: inherit;
        }

        .tag {
          &:not(:first-child) {
            display: inherit;
          }

          &:not(:last-child) {
            margin-right: 5px;
          }
        }

        &.menu {
          width: ${rem('40px')};

          button {
            opacity: 0;
          }
        }
      }
    }
  }
`;
