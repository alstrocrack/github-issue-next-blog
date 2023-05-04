import GetIssues from "../query/GetIssues";
import { useQuery } from "@apollo/client";
import React from "react";
import { Node } from "../types/Issue";
import styles from "../styles/client.module.scss";

const Issues = () => {
  const { loading, error, data } = useQuery(GetIssues);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>This is an error : {error.message}</p>;

  const { issueCount, nodes }: { issueCount: number; nodes: Node[] } = data.search;

  return (
    <>
      <h2 className={styles.totalCount}>ALL ARTICLES : {issueCount}</h2>
      <ul className={styles.list}>
        {nodes.map((issue) => (
          <li key={issue.number} className={styles.item}>
            <div className={styles.left}>
              <h2 className={styles.title}>{issue.title}</h2>
              <div className={styles.info}>
                <p className={styles.author}>{issue.author.login}</p>
                <p>{issue.createdAt.slice(0, 10).replace(/-/g, "/")}</p>
              </div>
              <div className={styles.labels}>
                {issue.labels.nodes.map((label) => {
                  return (
                    <div className={styles.label} key={label.id} style={{ backgroundColor: `#${label.color}` }}>
                      <span>{label.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.right}>
              <div className={styles.content} dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Issues;
