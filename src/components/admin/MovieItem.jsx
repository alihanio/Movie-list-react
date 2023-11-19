import React from "react";
import Modal from "../../UI/Modal";
import { useState } from "react";
import styled from "styled-components";

const MovieItem = ({
  name,
  image,
  raiting,
  id,
  deleteMovie,
  toggleModalPut,
  openPutModal,
  updateMovie,
}) => {
  const [putName, setPutName] = useState("");
  const [putImage, setPutImage] = useState("");
  const [putRaiting, setPutRaiting] = useState("");
  const [putDescription, setPutDescription] = useState("");


  const deleteFunc = () => {
    deleteMovie(id);
  };

  const updateName = (e) => setPutName(e.target.value);
  const updateImage = (e) => setPutImage(e.target.value);
  const updateRaiting = (e) => setPutRaiting(e.target.value);
  const updateDescription = (e) => setPutDescription(e.target.value);


  const updateMovieFunc = () => {
    updateMovie(id, putName, putImage, putRaiting,putDescription);
  };

  return (
    <StyledConteiner key={id}>
      <StyledImage src={image} alt="movie-img" />
      <StyledHeading>{name}</StyledHeading>
      <StyledStar> star {raiting}/5</StyledStar>
      <StyledButtonContainer>
        <StyledDeleteButton onClick={deleteFunc}>DELETE</StyledDeleteButton>
        <StyledUpdateButton onClick={toggleModalPut}>UPDATE</StyledUpdateButton>
      </StyledButtonContainer>
      {openPutModal && (
        <Modal onClose={toggleModalPut}>
          <StyledModalConteiner>
            <StyledModalInput
              type="text"
              value={putName}
              onChange={updateName}
              placeholder="Enter new movie name..."
            />
            <StyledModalInput
              type="text"
              value={putImage}
              onChange={updateImage}
              placeholder="Enter new URL image..."
            />
            <StyledModalInput
              type="text"
              value={putDescription}
              onChange={updateDescription}
              placeholder="Enter new description..."
            />
            <StyledModalInput
              type="number"
              value={putRaiting}
              onChange={updateRaiting}
              placeholder="Enter new movie raiting..."
            />
          </StyledModalConteiner>
          <StyledModalAddButton onClick={updateMovieFunc}>
            UPDATE
          </StyledModalAddButton>
        </Modal>
      )}
    </StyledConteiner>
  );
};

export default MovieItem;

const StyledConteiner = styled.div`
  width: 20rem;
  height: 26rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
`;

const StyledImage = styled.img`
  width: 16rem;
  height: 18rem;
`;
const StyledHeading = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`;
const StyledStar = styled.p`
  font-size: 1rem;
  color: grey;
`;
const StyledButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;
const StyledDeleteButton = styled.button`
  padding: 0.4rem;
  border-radius: 0.5rem;
  border: none;
  background-color: red;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:active{
    background-color:orange;
  }
`;

const StyledUpdateButton = styled.button`
  padding: 0.4rem;
  border-radius: 0.5rem;
  border: none;
  background-color: green;
  color: white;
  cursor:pointer;
  font-weight: bold;
`;

const StyledModalConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledModalInput = styled.input`
  width: 24rem;
  height: 2rem;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

const StyledModalAddButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: green;
  margin-top: 1rem;
  margin-right: 1rem;
`;
