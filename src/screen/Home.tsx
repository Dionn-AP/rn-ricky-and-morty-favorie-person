import {
    SafeAreaView,
    Text,
    FlatList,
    Image
} from 'react-native';

import {
    ContainerMain,
    ContainerImageHeader,
    ImageHeader
} from './styles';

import { useQuery } from '@apollo/client';
import INFO_PERSON from '../queries';
import CardCharacter from '../components/Card';

const Home = () => {
    const { loading, error, data } = useQuery(INFO_PERSON);

    return (
        <ContainerMain>
            <ContainerImageHeader>
                <ImageHeader
                    source={
                        {
                            uri: 'https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png'

                        }
                    }
                />
            </ContainerImageHeader>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error...</Text>}
            {data &&
                <FlatList
                    data={data.characters.results}
                    renderItem={({ item }) => <CardCharacter card={item} />}
                />
            }
        </ContainerMain>
    )
};

export default Home;