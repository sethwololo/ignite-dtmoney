import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody {
      tr {
        box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1) , 0px 2px 4px -1px rgba(0,0,0,0.06);
        td {
          padding: 1rem 2rem;
          border-radius: 0.25rem;
          border: 0;
          background: var(--shape);
          color: var(--text-body);

          &:last-child{
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
          }

          &:first-child{
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            color: var(--text-title);
          }

          &.deposit {
            color: var(--green);
          }

          &.withdrawal {
            color: var(--red);
          }
        }
      }
    }
  }

`;