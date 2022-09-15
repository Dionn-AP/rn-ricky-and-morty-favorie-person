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
    bottom: 8px;
    left: 38%;
`

export const TextButtonViewMore = styled.Text`
    color: #F5FFFA;
    font-size: 12px;
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

export const ContainerModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
`

export const ContainerIntoModal = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 375px;
    background-color: #0F3460;
    border-radius: 15px;
`

export const BtnCloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 18px;
    right: 18px;
    height: auto;
    width: auto;
`

export const ImageModal = styled.Image`
    height: 210px;
    width: 210px;
    border: 2px solid #FFF;
    border-radius: 120px;
    margin-bottom: 20px;
`

export const ContentTextsModal = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`