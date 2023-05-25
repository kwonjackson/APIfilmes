import { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from 'axios'
import Lupa from '../Images/lupa.png'

export const FilmesStyle = styled.section`
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px 80px;
`;


export const BoxFilms = styled.section`
    width:20%;

    img{
        width:70%;
    }

    
`

export const BoxTitle = styled.section`
    width:100%;
    h2{
        font-weight: 500;
        font-size: 1.5rem;
        color: white;
    }

`

const Caixa = styled.input`
    display:${props => props.show};

`

export default function Filmes() {
    const [filmes, setFilmes] = useState([])
    const [input, setInput] = useState('')
    const [filtrados, setFiltrados] = useState([])
    const [mode, setMode] = useState(false)

    useEffect(() => {
        getFilmes()
        filtar()
    }, [input, filmes, filtrados])

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)

        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
    }

    const filtar = () => {
        const filtros = filmes.filter((item) => {
            if(item.title.toLowerCase().includes(input.toLocaleLowerCase())){
                return true
            }else{
                return false
            }
        })
        setFiltrados(filtros)
    }

    return (
        <FilmesStyle id="filmes">
            <BoxTitle>
                <h2>Em Alta</h2>
            </BoxTitle>
            {filtrados.slice(0,10).map((item) => (
                <BoxFilms>
                    <img src={item.image} alt={item.title}/>
                    <h2>Name: {item.title}</h2>
                </BoxFilms>
            ))}
        </FilmesStyle>
    )
}