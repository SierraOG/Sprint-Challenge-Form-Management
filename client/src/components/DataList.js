import React from 'react'

import DataCard from './DataCard'

const DataList = (props) => {
    return (
        <>
        {props.dataArray.map(dataItem => <DataCard dataItem={dataItem}/> )}
        </>
    )
}

export default DataList