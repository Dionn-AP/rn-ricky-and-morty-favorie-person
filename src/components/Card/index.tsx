import {
    ContainerCard,
    CardImage,
    TextName,
    TextGender,
    CardText,
    ImageFavorite,
    ButtonViewMore,
    TextButtonViewMore,
    ContainerIntoModal,
    BtnCloseModal,
    ContainerModal,
    ImageModal,
    ContentTextsModal
} from './styles';

import { useState } from 'react';
import { Modal } from 'react-native';

import {
    MaterialIcons
} from '@expo/vector-icons';

import {
    AntDesign
} from '@expo/vector-icons';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    cardStateData,
    addFavorites,
    removeFavorites
} from '../../store/modules/favorites/reducer';

import {
    ICharacter
} from '../../types/character';

const CardCharacter = ({ card }: ICharacter) => {
    const [showCardModal, setShowCardModal] = useState(false);
    const [cardDetail, setCardDetail] = useState<ICharacter[] | any>();

    const cardFavorite = useSelector(cardStateData);

    const dispatch = useDispatch();

    const addCadFavorite = (id: any) => {
        cardFavorite.includes(id)
            ? dispatch(removeFavorites(id))
            : dispatch(addFavorites(id))
    }

    const cardDetailsCurrent = (detail: ICharacter) => {

        setShowCardModal(!showCardModal);
        setCardDetail(detail);
    }

    return (
        <ContainerCard>
            <Modal
                transparent={true}
                animationType='slide'
                visible={showCardModal}
                onRequestClose={
                    () => setShowCardModal(!showCardModal)
                }
            >
                <ContainerModal>
                    <ContainerIntoModal>
                        <BtnCloseModal
                            onPress={() => setShowCardModal(!showCardModal)}
                        >
                            <AntDesign
                                name="closecircleo"
                                size={38}
                                color="#EAEBED"
                            />
                        </BtnCloseModal>
                        <ImageModal
                            source={{ uri: cardDetail?.image }}
                        />
                        <ContentTextsModal>
                            <TextName>
                                {cardDetail?.name}
                            </TextName>
                            <TextGender>
                                {cardDetail?.gender}
                            </TextGender>
                            <TextGender>
                                {cardDetail?.type}
                            </TextGender>
                            <TextGender>
                                {cardDetail?.species}
                            </TextGender>
                        </ContentTextsModal>
                    </ContainerIntoModal>
                </ContainerModal>
            </Modal>
            <ImageFavorite
                onPress={() => addCadFavorite(card.id)}
            >
                <MaterialIcons
                    name={cardFavorite.includes(card.id)
                        ? "favorite"
                        : "favorite-outline"
                    }
                    size={28}
                    color="#FFF"
                />
            </ImageFavorite>

            <CardImage
                source={{ uri: card.image }}
            />
            <CardText>
                <TextName>
                    {card.name}
                </TextName>
                <TextGender>
                    {card.gender}
                </TextGender>
                <ButtonViewMore
                    onPress={() => cardDetailsCurrent(card)}
                >
                    <TextButtonViewMore>
                        Ver mais
                    </TextButtonViewMore>
                </ButtonViewMore>
            </CardText>
        </ContainerCard>
    )
};

export default CardCharacter;