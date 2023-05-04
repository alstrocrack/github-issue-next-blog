import React from "react";
import { Node } from "../types/Issue";
import styles from "../styles/client.module.scss";

interface IssueProps {
  issue: Node;
}

const Issue: React.FC<IssueProps> = ({ issue }) => {
  return (
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
  );
};

export default Issue;
