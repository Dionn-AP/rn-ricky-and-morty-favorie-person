import styled from "styled-components/native";

export const ContainerCard = styled.View`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 180px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #FFF;
    margin-bottom: 20px;
    padding: 5px;
    background-color: #4682B4;
`

export const ImageFavorite = styled.TouchableOpacity`
    z-index: 3;
    position: absolute;
    top: 10px;
    right: 10px;
    height: auto;
    width: 28px;
`

export const ButtonViewMore = styled.TouchableOpacity`
    padding: 1.5px 7px;
    background-color: #48D1CC;
    border-radius: 4px;
    position: absolute;
    bottom: 6px;
    left: 38%;
`

export const TextButtonViewMore = styled.Text`
    color: #F5FFFA;
    font-size: 10px;
`

export const CardImage = styled.Image`
    border-radius: 8px;
    height: 100%;
    width: 48%;
`
;
export const CardText = styled.View`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 50%;
    border-radius: 5px;
    border: 1px solid #FFF;
    padding: 5px 10px;
`

export const TextName = styled.Text`
    font-size: 18px;
    letter-spacing: 1.1px;
    color: #FFF;
    margin-bottom: 10px;
`

export const TextGender = styled.Text`
font-size: 16px;
    color: #F5FFFA;
`