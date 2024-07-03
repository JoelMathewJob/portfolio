import React from 'react'
import styles from './games.module.css'
// import images from '../../images/images'
import { GiTicTacToe } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa6";
import { CgGames } from "react-icons/cg";
import { RiGameLine } from "react-icons/ri";


export default function Gamessection() {

    const dataset = [
        {
            img: <GiTicTacToe size={55} />,
            name: 'Tic Tac Toe',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link: 'https://chatgpt.com/c/24ac1396-9af8-4b38-bded-bf98d91a1f73'
        },
        {
            img: <CgGames size={55} />,
            name: 'Rock Paper Scissor',
            link:'#'
        },
        {
            img: <RiGameLine size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <FaBitcoin size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        },
        {
            img: <CgGames size={55} />,
            name: 'PUBG',
            link:'#'
        }
    ]
    return (
        <div>
            <p className={styles.title}>Games</p>
            <div className={styles.gamesection}>
                {dataset.map(item => {
                    return (
                        <a href={item.link} >
                            <span className={styles.gamespan}>{item.img}
                                <span className={styles.gamename}>{item.name}</span>
                            </span>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
