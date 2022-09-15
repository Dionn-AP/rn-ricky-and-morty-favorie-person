import {
    ContainerCard,
    CardImage,
    TextName,
    TextGender,
    CardText,
    ImageFavorite,
    ButtonViewMore,
    TextButtonViewMore
} from './styles';

import {
    MaterialIcons
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
    ICharacter,
    IFavorites
} from '../../types/character';

const CardCharacter = ({ card }: ICharacter) => {
    let contain: boolean = false;
    const cardFavorite = useSelector(cardStateData);

    const dispatch = useDispatch();

    const addCadFavorite = (card: any) => {
        
        if (cardFavorite.includes(card)) {
            contain = false;
            dispatch(removeFavorites(card))
        } else {
            contain = true;
            dispatch(addFavorites(card))
        }
    }

return (
    <ContainerCard>
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
            <ButtonViewMore>
                <TextButtonViewMore>
                    Ver mais
                </TextButtonViewMore>
            </ButtonViewMore>
        </CardText>
    </ContainerCard>
)
};

export default CardCharacter;