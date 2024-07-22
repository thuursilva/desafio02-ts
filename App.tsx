import { 
  ChakraProvider,
  Center,
  Box
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import {Button} from './components/Button/Button';
import { Card } from './components/Card/Card';

function App() {
  return (
    <>
    <Header />
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
          <Card />
          <Center>
          <Button onClick={login} />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
    </>
  );
}

export default App;
