import { GET_ISSUES } from './graphql'
import { useQuery } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import React from 'react'
import Link from 'next/link'
import styles from "../styles/client.module.scss";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN

export const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {authorization: `Bearer ${GITHUB_TOKEN}`},
  cache: new InMemoryCache()
})

export const Issues = () => {
    const { loading, error, data } = useQuery(GET_ISSUES)
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>This is an error : {error.message}</p>
    
    const { issueCount, nodes } = data.search
    console.log({data});
    return (
        <>
            {/* <h2>Num of issues: {issueCount}</h2> */}
            <ul className={styles.list}>
                { nodes.map(issue => 
                    <li key={issue.number} className={styles.item}>
                        <div className={styles.left}>
                            <h2 className={styles.title}>{issue.title}</h2>
                            <div className={styles.info}>
                                <p className={styles.author}>{issue.author.login}</p>
                                <p>{issue.createdAt.slice(0, 10).replace(/-/g, '/')}</p>
                            </div>
                            <div className={styles.labels}>
                                {issue.labels.nodes.map(label => {
                                    return (
                                        <div className={styles.label} key={label.id} style={{backgroundColor: `#${label.color}`}}>
                                            <span>{label.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.content} dangerouslySetInnerHTML={{__html:issue.bodyHTML}}/>
                        </div>
                    </li>
                )}
            </ul>
        </>
    )
}