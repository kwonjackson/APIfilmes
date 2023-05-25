import { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import playIcon from "../Images/play-icon.png";
import trailerIcon from "../Images/trailer-icon.png";
import star from "../Images/star.png";
import imdb from "../Images/imdb.png";



export const MainStyle = styled.main`
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1) 23%, transparent);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1) 23%, transparent),
    url(${props => props.poster});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-position: center;
  background-size: cover;
  height: 80vh;
  
  h3 {
    font-size: 1rem;
  }
`;

const ButtonDiv = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  margin-left: 60px;
  
`;

const ButtonAssistir = styled.button`
  &.custom-button {
    width: 15vw;
    height: 6vh;
    color: #f2f2f2;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    background-color: #d53a00;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .button-icon {
    width: 15px; 
    height: 15px;
    margin-right: 10px;
  }
`;

const ButtonTrailer = styled.button`
  &.custom-button {
    width: 15vw;
    height: 6vh;
    color: #f2f2f2;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 20px;
    background-color: #717171;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .button-icon {
    width: 20px; 
    height: 20px;
    margin-right: 15px;
  }
`;

const Conteudo = styled.div`
  display: flex;
  width: 90%;
  height: 30vh;
  margin-left: 100px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-family: 'Open Sans', regular;
  color: #f2f2f2;

  h1 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 0.9rem;
    font-weight: lighter;
  }

  p{
    width: 50%;
    font-weight: lighter;
    font-size: 0.9rem;
  }

  .star {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  .imdb {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }

  .nota {
    font-size: 1.5rem;
  }
`;

export default function Main() {
  const [filmesPopulares, setFilmesPopulares] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  useEffect(() => {
    getFilmesPopulares();
  }, []);

  const getFilmesPopulares = async () => {
    try {
      const resposta = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br');
      const totalPages = resposta.data.total_pages;
      const filmes = resposta.data.results.map(item => ({
        ...item,
        poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
      }));
      setFilmesPopulares(filmes);
      setFilmeAleatorio(filmes);
    } catch (error) {
      console.error(`Desculpe, ocorreu um erro na requisição ${error}`);
    }
  };

  const setFilmeAleatorio = (filmes) => {
    const filmeAleatorio = filmes[Math.floor(Math.random() * filmes.length)];
    setFilmeSelecionado(filmeAleatorio);
  };

  return (
    <MainStyle poster={filmeSelecionado && filmeSelecionado.poster} id="main">
      <Conteudo>
        {filmeSelecionado && (
          <div key={filmeSelecionado.id}>
            <h1>{filmeSelecionado.title}</h1>
            <h3 className="nota"> <img className="star" src={star} alt="" /> IMDB {filmeSelecionado.vote_average}
            <img className="imdb" src={imdb} alt="" /> </h3>
            <h3>Lançamento: {filmeSelecionado.release_date}</h3>
            <p>Sinopse: {filmeSelecionado.overview}</p>
          </div>
        )}
      </Conteudo>
        <ButtonDiv>
            <ButtonAssistir className="custom-button">
            <img className="button-icon" src={playIcon} alt="Play" />Assistir Agora </ButtonAssistir>

    <ButtonTrailer className="custom-button">
      <img className="button-icon" src={trailerIcon} alt="Trailer" />Trailer</ButtonTrailer>

        </ButtonDiv>
      
    </MainStyle>
  );
}
