import GetIssues from "../query/GetIssues";
import { useQuery } from "@apollo/client";
import React from "react";
import { Node } from "../types/Issue";
import styles from "../styles/client.module.scss";
import Issue from "./Issue";

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
          <Issue issue={issue} />
        ))}
      </ul>
    </>
  );
};

export default Issues;
