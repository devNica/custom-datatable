const UserModel = {
    
    columns: [
        {
            label: 'Id',
            field: 'idPerson',
            isSort: true,
            typeSort: 'FULL',
            width: 50
        },
        {
            label: 'Firstname',
            field: 'firstname',
            isSort: true,
            typeSort: 'FULL',
            width: 150
        },
        {
            label: 'Lastname',
            field: 'lastname',
            isSort: true,
            typeSort: 'FULL',
            width: 150
        },
        
    ]
}

export default UserModel