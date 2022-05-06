import React from 'react'
import { DataTableHelper } from '../../helpers/DataTableHelper'
import usersList from '../../helpers/users.json'
import petList from '../../helpers/pets.json'

const config = [
    { col: 0 },
    { col: 1 },
    { col: 2 }
]

const CustomDataTable = () => {

    return (
        <div>
            <DataTableHelper.selectInfoRepresentation strategy={'PETS'} data={petList} isDT={true} configSorting={config}/>
        </div>
    )
}

export default CustomDataTable