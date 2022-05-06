const PetsModel = {
    
    columns: [
        {
            label: 'Id',
            field: 'idpet',
            isSort: true,
            typeSort: 'FULL',
            width: 50
        },
        {
            label: 'Name',
            field: 'name',
            isSort: true,
            typeSort: 'FULL',
            width: 150
        },
        {
            label: 'Category',
            field: 'category',
            isSort: true,
            typeSort: 'FULL',
            width: 150
        },
        {
            label: 'Country',
            field: 'country',
            isSort: true,
            typeSort: 'FULL',
            width: 150
        },
        {
            label: 'Age',
            field: 'age',
            isSort: true,
            typeSort: 'FULL',
            width: 150
        }
        
    ]
}

export default PetsModel