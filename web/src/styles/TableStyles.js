import styled from 'styled-components';

export default styled.table`
  margin: 1rem;
  tr {
    margin-block: 1rem;
    th {
      padding: .7rem;
      font-size: 1.7rem;
      font-weight: 600;
    }
    td {
      padding: .7rem;
      font-size: 1.4rem;
    }
    .data__first {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
    .data__last {
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
  tr:hover {
    margin-block: 1rem;
    background-color: #4A46EB;
  }
  .tr__special:hover {
    background-color: #64718A;
  }
`