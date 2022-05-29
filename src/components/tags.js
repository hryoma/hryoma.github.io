import styled from "styled-components";

export const TagsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 7px 7px;
  font-size: 0.85rem;
`

export const Tag = styled.small`
  color: ${props => (props.color ? props.color : 'var(--c-text)')};
  background-color: var(--c-bg-elevated);
  border-radius: 10px;
  padding: 0px 8px;
`
