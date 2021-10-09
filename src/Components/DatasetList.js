import React from 'react';
import DBCard from './DBCard';
import PropTypes from 'prop-types';



const DatasetList = (props) => {
    const dataList = props // .dataList //|| []
    if (!dataList)
        return <>null</>
    else
        return <>{JSON.stringify(props)}</>
        return <>
            {dataList.map((data, index) => {
                return <DBCard key={index} data={data} />
            })}
        </>
}

DatasetList.propTypes = {
    dataList: PropTypes.array
}

export default DatasetList
