import { GET_ISSUES } from './graphql'
import { useQuery } from '@apollo/client'
import React from 'react'
import Link from 'next/link'

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
                { nodes.map(issue => 
                <li key={issue.number}>
                    <Link href={`/post/${issue.number}`}>
                        <a>
                            <p>Title: {issue.title}</p>
                            <p>Author: {issue.author.login}</p>
                            <p>Time: {issue.createdAt}</p>
                            <p>labels: {issue.labels.nodes.map(label => (
                                <span key={label.id}><span>{label.name}</span></span>
                            ))}</p>
                            <p>Content: {issue.body}</p>
                        </a>
                    </Link>
                </li>)}
            </ul>
        </React.Fragment>
    )
}