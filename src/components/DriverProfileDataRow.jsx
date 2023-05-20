export function DriverProfileDataRow({lp, title, valueLeft, valueRight, levelOne, levelTwo,levelThree, url }) {
    return (
        <tr>
            <th>{lp}</th>
            <th>{title}:</th>
            <td>{valueLeft}
            <div style={{width: "100px", borderColor: "steelblue", borderWidth: "1px", borderStyle: "solid", height: "10px"}}>
                <div style={valueLeft >= 70 ? {
                width: `${valueLeft}px`,
                height: "8px",
                borderColor: 'lightgreen',
                borderWidth: "1px", 
                borderStyle: "solid",
                background: ' lightgreen'
            } : {
                width: `${valueLeft}px`,
                height: "8px",
                borderColor: 'red',
                borderWidth: "1px", 
                borderStyle: "solid",
                background: 'red'
            }}>
                </div>
                </div>
            </td>
            <td>{valueRight}<div style={{width: "100px", borderColor: "steelblue", borderWidth: "1px", borderStyle: "solid", height: "10px"}}>
                <div style={valueRight >= 70 ? {
                width: `${valueRight}px`,
                height: "8px",
                borderColor: 'lightgreen',
                borderWidth: "1px", 
                borderStyle: "solid",
                background: 'lightgreen'
            } : {
                width: `${valueRight}px`,
                height: "8px",
                borderColor: 'red',
                borderWidth: "1px", 
                borderStyle: "solid",
                background: 'red'
            }}>
                </div>
                </div>
                </td>
            <td style={levelOne ? {
                borderColor: 'green',
                color: 'green',
                background: ' lightgreen'
            } : {
                borderColor: 'red',
                color: 'red',
                background: 'darkred'
            }}>{levelOne?'':'O'}</td>
            <td style={levelTwo ? {
                borderColor: 'green',
                color: 'green',
                background: ' lightgreen'
            } : {
                borderColor: 'red',
                color: 'red',
                background: 'darkred'
            }}>{levelTwo?'':'O'}</td>
            <td style={levelThree ? {
                borderColor: 'green',
                color: 'green',
                background: ' lightgreen'
            } : {
                borderColor: 'red',
                color: 'red',
                background: 'darkred'
            }}>{levelThree?'':'O'}</td>
            <td>
                <img src={url} alt="image placeholder" style={{maxHeight: "100px", maxWidth: "150px"}}/>
            </td>
        </tr>
    )
}