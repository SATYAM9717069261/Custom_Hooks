import Test from '../hooks/test_hook'
import Translator from '../hooks/lan-translator/lanTranslator'
export default function Home() {
  return <Translator>
    <Test />
  </Translator>
}
