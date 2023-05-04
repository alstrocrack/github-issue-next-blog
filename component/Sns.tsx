import styles from "../styles/components/sns.module.scss";
import classNames from "classnames";

const SNSList = [
  { title: "github", link: "https://github.com/YutoUrushima" },
  { title: "twitter", link: "https://twitter.com/developer_japan" },
  { title: "line", link: "https://developers.line.biz/ja/" },
];

export const Sns = () => {
  return (
    <ul className={styles.sns}>
      {SNSList.map((sns, index) => {
        return (
          <li className={classNames(sns.title, styles.snsItem)} key={index}>
            <a href={sns.link} target="_blank" rel="noopener noreferrer">
              <img src={`./b-${sns.title}-icon.png`} alt={sns.title} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
