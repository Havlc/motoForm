import { DriverProfileRow } from "./DriverProfileRow"
import { DriverProfileDataRow } from "./DriverProfileDataRow"
import { DriverProfileTotalRow } from "./DriverProfileTotalRow"
import { TableAttributesHead } from "./TableAttributesHead"

export function DriverProfile() {
    return (
        <>
        <table>
            <thead>
                <tr style={{ background: 'lightblue' }}>
                    <th colSpan="8" >Profil motocyklisty</th>
                </tr>
                <DriverProfileRow title='Imię' value='Jan' />
                <DriverProfileRow title='Kontakt' value='123456789' />
                <DriverProfileRow title='Zdjęcie' value='miejsce na Twoje zdjęcie'/>
                <TableAttributesHead/>                
            </thead>
            <tbody>
                <DriverProfileDataRow lp={1} title='Wzrok' valueLeft={20} valueRight={70} levelOne={false} url="https://images.unsplash.com/photo-1535579386897-af3bfc73d110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1238&q=80"/>
                <DriverProfileDataRow lp={2} title='Linia przejazdu' valueLeft={80} valueRight={30} levelOne={true} url="https://images.unsplash.com/photo-1530925486883-d9da662d497c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1086&q=80"/>
                <DriverProfileDataRow lp={3} title='Praca gazem' valueLeft={30} valueRight={20} levelOne={true} levelTwo={true} url="https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXIlMjBvbiUyMHJvYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"/>
                <DriverProfileDataRow lp={4} title='Przeciwskręt' valueLeft={70} valueRight={70} levelOne={true} levelTwo={true} levelThree={true} url="https://images.unsplash.com/photo-1533709742020-cfb4bcbed4a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJpa2VyJTIwb24lMjByb2FkfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"/>
                <DriverProfileDataRow lp={5} title='Hamowanie' valueLeft={75} valueRight={70} levelOne={true} levelTwo={true} levelThree={true} url="https://images.unsplash.com/photo-1634833811092-39d8c72d7726?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                <DriverProfileDataRow lp={6} title='Pozycja' valueLeft={35} valueRight={70} levelOne={false} url="https://images.unsplash.com/photo-1598548841213-9cdbcdf8ec47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJpa2VyJTIwb24lMjByb2FkfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"/>
                <DriverProfileTotalRow title='Total' valueLeft={46} valueRight={57} />
            </tbody>
        </table>
                <table>
                <thead>
                    <TableAttributesHead/>                
                </thead>
                <tbody>
                    <DriverProfileDataRow lp={1} title='Pozycja' valueLeft={70} valueRight={40} levelOne={false} /> 
                    <DriverProfileDataRow lp={2} title='Głowa' valueLeft={70} valueRight={35} levelOne={false} />
                    <DriverProfileDataRow lp={3} title='Barki' valueLeft={30} valueRight={20} levelOne={true} />
                    <DriverProfileDataRow lp={4} title='Biodra' valueLeft={70} valueRight={70} levelOne={true} levelTwo={true} />
                    <DriverProfileDataRow lp={5} title='Ręce, Łokieć, Dłoń' valueLeft={70} valueRight={70} levelOne={true} levelTwo={true} levelThree={true} />
                    <DriverProfileDataRow lp={6} title='Nogi, Kolano, Stopa' valueLeft={75} valueRight={70} levelOne={true} levelTwo={true} levelThree={true} />
                    <DriverProfileTotalRow title='Total' valueLeft={46} valueRight={57} />
                </tbody>
            </table>
        </>
    )
}

/*<tr>
                    <th></th>
                    <th></th>
                    <th colSpan="2" style={{ display: "flex" }}>
                        <td style={{ flexDirection: "row-reverse" }}>L</td>
                        <td>P</td>
                    </th>
                    <th colSpan="3">
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </th>
                    <th></th>
                </tr>*/
