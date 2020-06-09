import styled from 'styled-components';

export const MarginRight = styled.div`
  margin-right: 1rem;
`;

enum margins {
  small = '1em',
  medium = '2em',
  large = '5em',
}

interface IMargin {
  size: string;
}

export const MarginTop = styled.div`
  margin-top: ${(props: IMargin) => margins[props.size]};
`;
