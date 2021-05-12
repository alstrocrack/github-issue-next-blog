import { GET_ISSUES } from './graphql'
import { useQuery } from '@apollo/client'
import React from 'react'

export const Issues = () => {
    const { loading, error, data } = useQuery(GET_ISSUES)
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>This is an error : {error.message}</p>
    
    const { issueCount, nodes } = data.search
    console.log({nodes})
    return (
        <React.Fragment>
            <h2>Num of issues: {issueCount}</h2>
            <ul>
                { nodes.map(issue => <li key={issue.number}>{issue.number} - {issue.title}</li>)}
            </ul>
        </React.Fragment>
    )
}