import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import axios from "axios";
import styled from "styled-components";
import prevArrowImage from "../Images/prev-arrow.png"; 
import nextArrowImage from "../Images/next-arrow.png";

const ContainerCarousel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: black;
  padding: 0px 40px;
  
`;

const CarouselTitle = styled.h2`
  color: #f2f2f2;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 38px;
  margin-bottom: 20px;
  
  
`;

const MovieTitle = styled.h2`
  color: #f2f2f2;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 200;
`;

const ReleaseYear = styled.p`
  color: #f2f2f2;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 200;
`;

const CustomArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomPrevArrow = ({ onClick }) => (
  <CustomArrowContainer>
    <img
      src={prevArrowImage}
      alt="Previous Arrow"
      onClick={onClick}
      style={{ cursor: "pointer", width: "25px", height: "40px" }}
    />
  </CustomArrowContainer>
);

const CustomNextArrow = ({ onClick }) => (
  <CustomArrowContainer>
    <img
      src={nextArrowImage}
      alt="Next Arrow"
      onClick={onClick}
      style={{ cursor: "pointer", width: "25px", height: "40px" }}
    />
  </CustomArrowContainer>
);

export default function CarouselComponent() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilmes();
  }, []);

  const getFilmes = async () => {
    try {
      const resposta = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1"
      );
      const allApi = resposta.data.results.map((item) => ({
        ...item,
        image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      }));
      setFilmes(allApi);
    } catch (error) {
      console.error(`Desculpe, ocorreu um erro na requisição ${error}`);
    }
  };

  return (
    <ContainerCarousel>
      <CarouselTitle>Últimos lançamentos</CarouselTitle>
      <Carousel
        itemsToScroll={3}
        itemsToShow={5}
        pagination={false}
        renderArrow={({ type, onClick }) =>
          type === consts.PREV ? (
            <CustomPrevArrow onClick={onClick} />
          ) : (
            <CustomNextArrow onClick={onClick} />
          )
        }
        itemPadding={[10, 5]}
      >
        {filmes.map((item) => (
          <div key={item.id}>
            <img src={item.image} style={{ width: "90%" }} />
            <MovieTitle>{item.title}</MovieTitle>
            <ReleaseYear>{item.release_date.substring(0, 4)}</ReleaseYear>
          </div>
        ))}
      </Carousel>
    </ContainerCarousel>
  );
}
