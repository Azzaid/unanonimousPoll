import React from 'react';
import styled from "styled-components"

const StyledSingleLineSelector = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  table {
    border-spacing: 0px 10px;
    
    td {
      padding: 0px;
    }
  }
  
  .tableCell {
    color: ${props => props.theme.appBaseFontColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
    &.headerCell {
      padding-bottom: 5px;
    }
    
    &.bodyCell {
      background-color: ${props => props.theme.backgroundTint};
    }
  }
`

const TabledSelector = (props) => {
    return (
        <StyledSingleLineSelector>
            <table>
                <tr>
                    <td></td>
                    {props.options.options.map((option, optionIndex) => (
                            <td key={optionIndex}>
                                <div className={"tableCell headerCell"}>
                                    {option.name}
                                </div>

                            </td>
                        )
                    )}
                </tr>
                {props.options.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>
                            <div className={"tableCell bodyCell"}>
                            {row.name}
                            </div>
                        </td>
                        {props.options.options.map((option, optionIndex) => (
                                <td key={optionIndex}>
                                    <div className={"tableCell bodyCell"}>
                                    <input type="radio" id={`${row.fieldName}_${optionIndex}`} name={row.fieldName} value={option.value}/>
                                    </div>
                                </td>
                            )
                        )}
                    </tr>
                ))}
            </table>

        </StyledSingleLineSelector>
    );
}

export default TabledSelector;