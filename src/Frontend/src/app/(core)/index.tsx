import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const CoreLayout:React.FC = () => {
  
  return (
    <SafeAreaView>
      <Link href="/prueba"> Prueba1 </Link>     
      <Link href='/prueba2'> Prueba2 </Link>
    </SafeAreaView>
  )
}


export default CoreLayout;
