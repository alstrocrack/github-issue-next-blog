import styles from '../styles/components/sns.module.scss'
import Link from 'next/link'
import classNames from 'classnames'

const SNSList = [
    {title: 'github', link: 'https://github.com/YutoUrushima'},
    {title: 'twitter', link: 'https://twitter.com/home'},
    {title: 'line', link: 'https://developers.line.biz/ja/'},
]

export const SNS = () => {
    return (
        <ul className={styles.sns}>
            {SNSList.map((sns, index) => {
                return (
                    <li className={classNames(sns.title, styles.snsItem)} key={index}>
                        <Link href={sns.link}>
                            <a target="_blank">
                                <img src={`./b-${sns.title}-icon.png`} alt={sns.title}/>
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}