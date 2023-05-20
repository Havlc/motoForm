export function TableAttributesHead() {
    return (
        <tr style={{ background: 'burlywood' }}>
        <th>Lp</th>
        <th>Nazwa</th>
        <th colSpan="2">Strona
        <div style={{display: "flex", justifyContent: "space-around" }}>
            <div>L</div>
            <div>R</div>
        </div>
        </th>
        <th colSpan="3">Poziom
        <div style={{display: "flex", justifyContent: "space-around" }}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>    
        </th>
        <th>Zdjęcie</th>
    </tr>
    )
}
