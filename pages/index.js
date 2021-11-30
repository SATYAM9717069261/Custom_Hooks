import Test from '../customHooks/test_hook'
import Translator from '../customHooks/lan-translator/lanTranslator'
export default function Home() {
  return <Translator>
    <Test />
  </Translator>
}
